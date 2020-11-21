use serenity::async_trait;
use serenity::framework::standard::{
    macros::{command, group},
    Args, CommandResult, StandardFramework,
};
use serenity::model::{
    channel::{Message, Reaction, ReactionType},
    gateway::Ready,
    id::{ChannelId, MessageId},
};
use serenity::prelude::*;
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::Mutex;

enum ReactionEvent<'a> {
    Reaction(&'a Reaction),
    RemoveAll(ChannelId, MessageId),
}

macro_rules! perform_reaction {
    (($ctx:expr, $reaction_event:expr) $body:expr) => {
        use ReactionEvent::*;
        // Discard if it's our own reaction.
        if let Reaction(r) = $reaction_event {
            if r.user_id == Some($ctx.cache.current_user_id().await) {
                println!("Reaction added by self, ignoring");
                return;
            }
        }

        let key = match $reaction_event {
            Reaction(r) => (r.channel_id, r.message_id),
            RemoveAll(c, m) => (c, m),
        };
        // Try to get poll for the given message otherwise return
        {
            let poll_data = $ctx.data.read().await;
            let poll_map = poll_data
                .get::<PollsKey>()
                .expect("Failed to retrieve polls map!")
                .lock()
                .await;
            if !poll_map.contains_key(&key) {
                println!("Message not in polls map, ignoring");
                return;
            }
        }

        // reretrieve the map as writable
        let mut poll_data = $ctx.data.write().await;
        let mut poll_map = poll_data
            .get_mut::<PollsKey>()
            .expect("Failed to retrieve polls map!")
            .lock()
            .await;
        let poll = match poll_map.get_mut(&key) {
            None => {
                println!("Failed to get poll for {:?}", key);
                return;
            }
            Some(poll) => poll,
        };

        fn get_f<F: FnOnce(&mut Poll, Option<usize>)>(f: F) -> F {
            f
        }
        let f = get_f($body);

        match $reaction_event {
            Reaction(r) => match r.emoji {
                ReactionType::Unicode(ref s) => {
                    let c = s.chars().nth(0).unwrap();
                    if c < '🇦' || c > '🇿' {
                        println!("Emoji is not regional indicator, ignoring");
                        return;
                    }
                    let number = (c as u32 - '🇦' as u32) as usize;

                    f(poll, Some(number));
                    // poll.answerers[number as usize] += 1;
                }
                _ => {
                    println!("Unknown emoji in reaction, ignoring");
                    return;
                }
            },
            RemoveAll(..) => f(poll, None),
        }

        let content = render_message(&poll);
        key.0
            .edit_message(&$ctx.http, key.1, |edit| edit.content(&content))
            .await
            .expect("Failed to edit message");

        println!("Rerendered message");
    };
}

struct Handler;

#[async_trait]
impl EventHandler for Handler {
    async fn ready(&self, _: Context, ready: Ready) {
        println!("Bot ready with username {}", ready.user.name);
    }

    async fn reaction_remove_all(
        &self,
        ctx: Context,
        channel_id: ChannelId,
        removed_from_message_id: MessageId,
    ) {
        println!("All reactions removed");

        perform_reaction! { (ctx, ReactionEvent::RemoveAll(channel_id, removed_from_message_id)) |poll, _| {
            for answers in poll.answerers.iter_mut() {
                *answers = 0;
            }
        }}
    }

    async fn reaction_remove(&self, ctx: Context, removed_reaction: Reaction) {
        println!("Single reaction remove");

        perform_reaction! { (ctx, ReactionEvent::Reaction(&removed_reaction)) |poll, number| {
            poll.answerers[number.unwrap()] -= 1;
        }}
    }

    async fn reaction_add(&self, ctx: Context, add_reaction: Reaction) {
        println!("Reaction add");

        perform_reaction! { (ctx, ReactionEvent::Reaction(&add_reaction)) |poll, number| {
            poll.answerers[number.unwrap()] += 1;
        }}
    }
}

fn render_message(poll: &Poll) -> String {
    // Build the message contents
    let mut message_text = format!("**Poll:** {}\n", poll.question);
    let total_answerers = poll.answerers.iter().sum::<usize>();

    for (i, (answer, &num)) in poll.answers.iter().zip(poll.answerers.iter()).enumerate() {
        let emoji = format!(
            ":regional_indicator_{}:",
            std::char::from_u32('a' as u32 + i as u32).expect("Failed to format emoji"),
        );
        // add answerers and percent
        message_text.push_str(&emoji);
        if total_answerers > 0 {
            let percent = num as f64 / total_answerers as f64 * 100.;
            message_text.push_str(&format!(" ({:.0}%)", percent));
        }
        message_text.push(' ');
        message_text.push_str(answer);
        message_text.push_str(&format!(" ({} votes)", num));
        message_text.push('\n');
    }

    message_text
}

struct PollsKey;

impl TypeMapKey for PollsKey {
    type Value = Arc<Mutex<PollsMap>>;
}

type PollsMap = HashMap<(ChannelId, MessageId), Poll>;

struct Poll {
    pub question: String,
    pub answers: Vec<String>,
    pub answerers: Vec<usize>,
}

#[group]
#[commands(poll)]
struct General;

#[command]
async fn poll(ctx: &Context, msg: &Message, mut args: Args) -> CommandResult {
    let question = args.single_quoted::<String>()?;
    args.quoted();
    let answers = args
        .iter::<String>()
        .filter_map(|x| x.ok())
        .collect::<Vec<_>>();

    let answers_len = answers.len();
    let poll = Poll {
        question: question,
        // no responses yet
        answerers: vec![0; answers.len()],
        answers: answers,
    };

    // Build the message contents
    let message_text = render_message(&poll);
    let emojis = (0..answers_len)
        .map(|i| std::char::from_u32('🇦' as u32 + i as u32).expect("Failed to format emoji"))
        .collect::<Vec<_>>();

    let poll_msg = msg.channel_id.say(&ctx.http, &message_text).await?;

    for &emoji in &emojis {
        poll_msg
            .react(&ctx.http, ReactionType::Unicode(emoji.to_string()))
            .await?;
    }

    let mut poll_data = ctx.data.write().await;

    let poll_map = poll_data
        .get_mut::<PollsKey>()
        .expect("Failed to retrieve polls map!");

    poll_map
        .lock()
        .await
        .insert((msg.channel_id, poll_msg.id), poll);

    Ok(())
}

#[tokio::main]
async fn main() {
    let token = std::env::var("DISCORD_TOKEN").expect("Expected DISCORD_TOKEN to be set!");

    let framework = StandardFramework::new()
        .configure(|c| c.case_insensitivity(true))
        .group(&GENERAL_GROUP);

    let mut client = Client::builder(&token)
        .event_handler(Handler)
        .framework(framework)
        .type_map_insert::<PollsKey>(Arc::new(Mutex::new(PollsMap::new())))
        .await
        .expect("Failed to build client");

    if let Err(why) = client.start().await {
        println!("Client error: {:?}", why);
    }
}
