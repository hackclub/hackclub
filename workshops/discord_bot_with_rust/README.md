---
name: 'Discord poll bot in Rust'
description: 'Make a Discord polling bot in Rust using the Serenity library'
author: '@anirudhb'
img: 'https://cloud-kfuekwrsa.vercel.app/0poll-bot-example.gif'
---

# Make a Discord bot in Rust!

Discord bots are cool, right? Haven't you ever wanted to make your own?

Well, today we're going to do exactly that, but this time we're using Rust! We're going to build a Discord bot that allows you to setup polls, and updates counts in real-time!

Depending on how well you know Rust from an intermediate to advanced level, this workshop could take anywhere from 40 minutes to an hour to complete. Don't let that scare you, though! You'll learn a lot of new concepts about how to structure complex applications in Rust along the way :)

## Prerequisites

For this workshop, I do recommend an intermediate understanding of low-level concepts such as memory management, and some experience with Rust as well. Here are the concepts in particular that I recommend you have a good understanding of:
* Lifetimes, borrowing and move semantics
* How Rust structures code (i.e. Cargo projects)
* The general idea behind macros (not the exact syntax but a good idea of their general purpose)
* Basic Rust knowledge (I recommend the [Rust book](https://doc.rust-lang.org/book/) for this!)

## Demo

Here's a demo of the polling bot in action:

![Polling bot demo](https://cloud-kfuekwrsa.vercel.app/0poll-bot-example.gif)

The full code can be viewed [here](https://repl.it/@anirudhb/Rust-discord-bot-finished). Alternatively, you can open the below section for a full listing.

<details>
<summary>Full code</summary>

`main.rs`:
```rust
fn main() { std::process::Command::new("cargo").arg("run").status().unwrap(); }
```

`Cargo.toml`:
```toml
[package]
name = "polling-bot"
version = "0.1.0"
authors = ["runner"]
edition = "2018"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
serenity = "0.9.1"
tokio = { version = "^0.2.23", features = ["macros"] }

[[bin]]
name = "polling-bot"
path = "real_main.rs"
```

`real_main.rs`:
```rust
use serenity::async_trait;
use serenity::framework::standard::{
  macros::{command, group},
  Args, CommandResult, StandardFramework,
};
use serenity::model::{
  channel::{Message, Reaction},
  gateway::Ready,
};
use serenity::prelude::*;
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::Mutex;
use serenity::model::channel::ReactionType;
use serenity::model::id::{MessageId, ChannelId};

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

    // nudges Rust towards the right type :)
    fn get_f<F: FnOnce(&mut Poll, Option<usize>)>(f: F) -> F {
      f
    }
    let f = get_f($body);

    match $reaction_event {
      Reaction(r) => match r.emoji {
        ReactionType::Unicode(ref s) => {
          let c = s.chars().nth(0).unwrap();
          let end_char = std::char::from_u32('🇦' as u32 + poll.answers.len() as u32 - 1)
            .expect("Failed to format emoji");
          if c < '🇦' || c > end_char {
            println!("Emoji is not regional indicator or is not in range, ignoring");
            return;
          }
          let number = (c as u32 - '🇦' as u32) as usize;

          f(poll, Some(number));
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

  async fn reaction_add(&self, ctx: Context, add_reaction: Reaction) {
    println!("Reaction add");

    perform_reaction! { (ctx, ReactionEvent::Reaction(&add_reaction)) |poll, number| {
      poll.answerers[number.unwrap()] += 1;
    }}
  }

  async fn reaction_remove(&self, ctx: Context, removed_reaction: Reaction) {
    println!("Single reaction remove");

    perform_reaction! { (ctx, ReactionEvent::Reaction(&removed_reaction)) |poll, number| {
      poll.answerers[number.unwrap()] -= 1;
    }}
  }

  async fn reaction_remove_all(&self, ctx: Context, channel_id: ChannelId, removed_from_message_id: MessageId) {
    println!("All reactions removed");

    perform_reaction! { (ctx, ReactionEvent::RemoveAll(channel_id, removed_from_message_id)) |poll, _| {
      for answers in poll.answerers.iter_mut() {
        *answers = 0;
      }
    }}
  }
}

fn render_message(poll: &Poll) -> String {
  let mut message_text = format!("**Poll:** {}\n", poll.question);
  let total_answerers = poll.answerers.iter().sum::<usize>();

  for (i, (answer, &num)) in poll.answers.iter().zip(poll.answerers.iter()).enumerate() {
    let emoji = std::char::from_u32('🇦' as u32 + i as u32).expect("Failed to format emoji");
    message_text.push(emoji);
    if total_answerers > 0 {
      let percent = num as f64 / total_answerers as f64 * 100.;
      message_text.push_str(&format!(" {:.0}%", percent));
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
  let answers = args
    .quoted()
    .iter::<String>()
    .filter_map(|x| x.ok())
    .collect::<Vec<_>>();
  
  let answers_len = answers.len();
  let poll = Poll {
    question: question,
    answerers: vec![0; answers_len],
    answers: answers,
  };

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
```

</details>

## Getting started

We're going to host our Discord bot on [repl.it](https://repl.it).

To get started, [create an account](https://repl.it/signup). I personally recommend you sign in with your GitHub account if you have one, but email is fine too.

Now let's create a new Rust project by going to https://repl.it/languages/rust:

![Initial Rust project](https://cloud-gjndvi3vx.vercel.app/0image.png)

## Adding the library and setting up a basic bot

Right now, our Rust program isn't a Cargo project. Cargo is Rust's package manager. Without it, we wouldn't be able to easily depend on libraries. So since our program isn't a Cargo project, it won't be able to use the `serenity` library!

Let's fix that by running `cargo init --name polling-bot` in the terminal. This command initializes a new Cargo project for us. You can replace `polling-bot` with whatever you want your program to be named. This should create two new files on the side: `.gitignore` and `Cargo.toml`, which we'll be using to add the Serenity library:

![New files created by cargo init](https://cloud-bxfulgo22.vercel.app/0image.png)

P.S. Here's a hint when working with Repl.it: If you ever get a `disk quota exceeded` error just delete the `target` directory and try again. Additionally, delete the `target` directory when you're done playing around with your bot or else it'll take up a bunch of space!

Next, create a new file called `real_main.rs` and put this code in it:
```rust
fn main() {
  // todo
}
```

Replace the contents of `main.rs` with this:
```rust
fn main() { std::process::Command::new("cargo").arg("run").status().unwrap(); }
```

<details>
<summary>Magic?!?!?!?</summary>

This line seems kinda magic but it's just running `cargo run` from a Rust program. Repl.it is kind of weird in this way since it doesn't _natively_ support Cargo projects but it mostly works if we do this. If you're running this code locally, you can skip this and the `real_main.rs` and just write all your code in `main.rs`.

</details>

This is kind of a hack but it's necessary to make sure that the environment variables are passed through correctly. You'll be doing all your coding in `real_main.rs`.

One last thing: Update the path to the source file in `Cargo.toml`, changing `main.rs` to `real_main.rs`. Your Cargo.toml should look like this:

![Cargo.toml after fixing source filename](https://cloud-fvk4e7lkf.vercel.app/0image.png)

### What is Serenity?

Serenity is a Rust _crate_ (or library) that helps you write Discord bots in Rust. If you've heard of Discord.py for Python, or Discord.js for JavaScript, you can kind of think of Serenity like that, except for Rust.

### Adding the bot token

Now, we need to create a new bot in the [Discord Developer Portal](https://discord.com/developers/applications). Click "New Application" in the top right corner, highlighted in red here:

![Discord Developer Portal- New Application](https://cloud-4fax6pert.vercel.app/0inkedscreenshot_2020-11-19_discord_developer_portal_____api_docs_for_bots_and_developers_li.jpg)

Give your bot a nice name (I'm using "Polling Bot" for this tutorial), then hit the create button!

Now, go to the "Bot" section of your application, highlighted in red here:

![Polling Bot- Bot section](https://cloud-jufkijale.vercel.app/0inkedscreenshot_2020-11-19_discord_developer_portal_____api_docs_for_bots_and_developers_1__li.jpg)

Click the "Add Bot" button to enable the bot for this application, highlighted in red here:

![Polling Bot, bot section- Add Bot button](https://cloud-jdkfymmpt.vercel.app/0inkedscreenshot_2020-11-19_discord_developer_portal_____api_docs_for_bots_and_developers_2__li.jpg)

If you want to, feel free to rename the bot's username or give it an avatar. I'm skipping that here since it's up to you to add your own creative touch ✨

Alright, now that we've setup our bot, copy the bot's token by clicking the "Copy" button next to the token field, highlighted in light cyan here:

![Polling Bot, bot section- Copy button next to Token field](https://cloud-7f7l7crt1.vercel.app/0inkedscreenshot_2020-11-19_discord_developer_portal_____api_docs_for_bots_and_developers_3__li.jpg)

Great, you've copied your token!

Let's put it into Repl.it. Create a new `.env` file in Repl.it. The `.env` file is a special file that allows you to store secrets, such as your Discord bot's token, for example.

Inside the `.env` file, add a new line that looks like `DISCORD_TOKEN=<token>`. Replace `<token>` with the token that you previously copied. It should look like this (I've redacted my token):

![.env file with DISCORD_TOKEN variable set to your token](https://cloud-nn0n8t195.vercel.app/0inkedscreenshot_2020-11-19_fluffyprevailingmarketing_li.jpg)

Now, let's add the Serenity library! In Rust, projects manage their dependencies using `Cargo.toml`, so that's where we need to add Serenity. Head over to `Cargo.toml` and add this line under your `[dependencies]` section: `serenity = "0.9.1"`. At the time of writing, the latest version of Serenity is 0.9.1, but you can replace it with the latest version which can be found [here](https://crates.io/crates/serenity).

We'll also need another helper library, `tokio`. Add `tokio = { version = "^0.2.23", features = ["macros"] }` to your `Cargo.toml` as well. This library just helps us out with some async stuff, but you don't need to worry too much about it for now. Don't use the latest version of Tokio (0.3 or later) as this will cause incompatibilities with Serenity!

Your `Cargo.toml` should now look like this:

![Cargo.toml with Serenity dependency](https://cloud-epv4dnmyn.vercel.app/0image.png)

### Inviting your bot to a server

To invite your bot to a server, you'll need to go to the OAuth2 tab in your application (highlighted in green here):

![Polling Bot- OAuth2 section](https://cloud-oe7fro27r.vercel.app/0inkedscreenshot_2020-11-24_discord_developer_portal_____api_docs_for_bots_and_developers_li.jpg)

Next, select the "bot" scope for OAuth2, highlighted in pink here:

![Polling Bot- OAuth2 section, "bot" scope](https://cloud-677psdnfr.vercel.app/0inkedscreenshot_2020-11-24_discord_developer_portal_____api_docs_for_bots_and_developers_1__li.jpg)

Then, scroll down and check these permissions we'll need (highlighted in orange in the picture):
* View Channels (under General Permissions)
* Send Messages (under Text Permissions)
* Read Message History (under Text Permissions)
* Add Reactions (under Text Permissions)

![Polling Bot- OAuth2 section, permissions selected: View Channels, Send Messages, Read Message History, Add Reactions](https://cloud-ga2iol69b.vercel.app/0inkedscreenshot_2020-11-24_discord_developer_portal_____api_docs_for_bots_and_developers_2__li.jpg)

Finally, copy the OAuth2 link, highlighted in brown here:

![Polling Bot- OAuth2 section, "copy" button and OAuth2 URL highlighted](https://cloud-11kxy9z13.vercel.app/0inkedscreenshot_2020-11-24_discord_developer_portal_____api_docs_for_bots_and_developers_3__li.jpg)

Paste it into your browser and invite your bot to a server for testing! (Preferably with other people to test the polling.) You'll need the "Manage Server" permission in order to invite the bot to a server.

### A basic template

Now, let's add a basic Discord bot template. At this point, you should have invited your bot to a server for testing.

Delete the contents of `real_main.rs` and replace it with this:
```rust
use serenity::async_trait;
use serenity::framework::standard::{
  macros::{command, group},
  Args, CommandResult, StandardFramework,
};
use serenity::model::{
  channel::{Message, Reaction},
  gateway::Ready,
};
use serenity::prelude::*;

struct Handler;

#[async_trait]
impl EventHandler for Handler {
  async fn ready(&self, _: Context, ready: Ready) {
    println!("Bot ready with username {}", ready.user.name);
  }
}

#[group]
#[commands(ping)]
struct General;

#[command]
async fn ping(ctx: &Context, msg: &Message, mut _args: Args) -> CommandResult {
  msg.channel_id.say(&ctx.http, "Pong!").await?;

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
      .await
      .expect("Failed to build client");

    if let Err(why) = client.start().await {
      println!("Client error: {:?}", why);
    }
}
```

This is just a super simple template that has a `~ping` command which makes the bot respond with `Pong!`.

By the way, I highly recommend having the [Serenity](https://docs.rs/serenity) docs open on the side while going through this workshop! You can search for all of the functions and structs we use in there, with very detailed explanations.

<details>
<summary>Technical details</summary>

```rust
use serenity::async_trait;
use serenity::framework::standard::{
  macros::{command, group},
  Args, CommandResult, StandardFramework,
};
use serenity::model::{
  channel::{Message, Reaction},
  gateway::Ready,
};
use serenity::prelude::*;
```
These are just some imports that we need.

```rust
struct Handler;
```
This creates a new type called `Handler` which has no data. We're going to be implementing the `EventHandler` trait on it so that we can handle ready events.

```rust
#[async_trait]
impl EventHandler for Handler {
  async fn ready(&self, _: Context, ready: Ready) {
    println!("Bot ready with username {}", ready.user.name);
  }
}
```
This implements the `EventHandler` trait for `Handler`. By default all of the event handlers don't do anything, but here we override the `ready` method, so that we can print our bot's username once it's ready.

Since we're defining an `async fn` in the implementation, we have to use the `#[async_trait]` attribute (imported above) to allow it, because [currently Rust does not natively support async traits](https://github.com/rust-lang/rfcs/issues/2739).

```rust
#[group]
#[commands(ping)]
struct General;
```
This sets up a command group. In Serenity, commands can only be added through command groups, so we just setup a `General` command group with the `ping` command.

```rust
#[command]
async fn ping(ctx: &Context, msg: &Message, mut _args: Args) -> CommandResult {
  msg.channel_id.say(&ctx.http, "Pong!").await?;

  Ok(())
}
```
This is the `ping` command. We just take the command's message, get the channel it was sent in, and send `Pong!` in that channel. (So, we just reply with `Pong!`.)

```rust
#[tokio::main]
async fn main() {
  let token = std::env::var("DISCORD_TOKEN").expect("Expected DISCORD_TOKEN to be set!");
```
This is the start of the main function. We mark it with the `#[tokio::main]` annotation to make it into an `async fn` which it is not by default.

Then, we retrieve the token from the `DISCORD_TOKEN` environment variable and panic if it's not set.

```rust

  let framework = StandardFramework::new()
    .configure(|c| c.case_insensitivity(true))
    .group(&GENERAL_GROUP);
```
Here we setup the Serenity standard command framework. We configure it to allow case insensitivity, so that commands can be typed like `~poll`, `~pOlL`, `~poLL` or any other combination. Then we also add the `General` group of commands which includes the `ping` command we defined above.

```rust

  let mut client = Client::builder(&token)
    .event_handler(Handler)
    .framework(framework)
    .await
    .expect("Failed to build client");

  if let Err(why) = client.start().await {
    println!("Client error: {:?}", why);
  }
}
```
Now we setup our Discord bot client with the token we got earlier, our event handler (which prints the bot's username once the ready event is received), and our command framework.

Then, we start the bot, and if there's an error after running it, we print the error.

---
That's all of the details!

</details>

Run the bot to make sure that everything works. It may take a while to build at first but subsequent builds will be faster.

Now it's time to actually add polling to the bot!

## Representing polls in code

Before we add the `poll` command, we'll need to define some types to represent polls.

Add these lines to your imports:
```rust
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::Mutex;
```

This just imports some things we'll be using soon.

Now let's start adding the types for polls. Add this code before `struct General` in `real_main.rs`:
```rust
struct PollsKey;

impl TypeMapKey for PollsKey {
  type Value = Arc<Mutex<PollsMap>>;
}
```

Here, we create a new type `PollsKey` which we'll use to retrieve the current polls. We also implement the `TypeMapKey` trait for `PollsKey`, which lets us use it as a key in a type map. Serenity uses type maps for data storage so that's why we have to make this type. We set the type of the key's value to be `Arc<Mutex<PollsMap>>`. `Arc` is atomic reference-counting, which lets us share an object across threads (this is necessary for async). `Mutex` is used for exclusive access to the map, when we are changing it. `Arc<Mutex<...>>` is a common pattern used to share mutable data across threads.

Next, let's define the `PollsMap` type:
```rust
type PollsMap = HashMap<(ChannelId, MessageId), Poll>;
```

`PollsMap` is just a type alias to a `HashMap` with key type `(ChannelId, MessageId)` (a tuple) and value type `Poll`.

Finally, let's define the `Poll` type:
```rust
struct Poll {
  pub question: String,
  pub answers: Vec<String>,
  pub answerers: Vec<usize>,
}
```

The `Poll` type just has a question, list of answers and how many people answered for each response.

Now that we've defined our type key and the type value, let's actually add that to our global data map that Serenity provides. Add this in your `main` function:
```rust
#[tokio::main]
async fn main() {
  // -- snip --

  let mut client = Client::builder(&token)
    .event_handler(Handler)
    .framework(framework)
    .type_map_insert::<PollsKey>(Arc::new(Mutex::new(PollsMap::new()))) // new!
    .await
    .expect("Failed to build client");

  // -- snip --
}
```
This just inserts an empty polls map with the type key `PollsKey` we defined earlier.

Now, let's finally create the `poll` command!

## Creating the `poll` command

Let's define the `poll` command.

Before we do anything else, we'll need to add two new imports:
```rust
use serenity::model::channel::ReactionType;
use serenity::model::id::{MessageId, ChannelId};
```
We'll use this a little later.

Next, remove the `ping` function and change the `ping` in group `General` to be our new `poll` command. Removing it should look something like this:
```diff
 #[group]
-#[commands(ping)]
+#[commands(poll)]
 struct General;

-#[command]
-async fn ping(ctx: &Context, msg: &Message, mut _args: Args) -> CommandResult {
-  msg.channel_id.say(&ctx.http, "Pong!").await?;
-
-  Ok(())
-}
```

Now, let's create the `poll` command. Right under group `General`, let's add this:
```rust
#[command]
async fn poll(ctx: &Context, msg: &Message, mut args: Args) -> CommandResult {
```
This is basic scaffolding used for all commands in Serenity. We take a context (which we can use to send messages, etc.), the message containing the command and an `Args` object allowing us to easily retrieve arguments to our command. Then we return a `CommandResult` which lets us handle errors in our command easily.

<details>
<summary>What is Result&lt;T, E&gt;?</summary>

Rust doesn't do error handling like most other languages, where you would `throw` or `raise` an Exception and then catch it later. In general it doesn't work that well as a error handling model, so Rust uses `Result<T, E>` instead. It's very simply defined like this:
```rust
pub enum Result<T, E> {
  Ok(T),
  Err(E),
}
```
We have a success type `T` and an error type `E`. It's just an enum that contains an `Ok` variant and an `Err` variant. This makes it really easy to handle since we can use things like `match` on it and such.

But `Result<T, E>` has one more superpower: the `?` operator. The `?` operator, when used in a function that returns `Result`, makes it _super_ easy to handle errors and propagate them. As an example:
```rust
fn error1() -> std::io::Result<()> {
  // returns the error if the function fails
  do_some_fallible_io_operation()?;

  Ok(()) // default case, everything ok
}

// is equivalent to:

fn error2() -> std::io::Result<()> {
  match do_some_fallible_io_operation() {
    Ok(_) => Ok(()) // ok, then ok
    Err(e) => Err(e), // error? propagate the error
  }
}
```
This makes it much easier to work with errors in Rust especially with `Result<T, E>`.

*Note:* The `?` operator works with any `Result<T, E2>` where `E2: Into<E>` and `E` is the error type of the outer function's `Result`. Also see [`std::ops::Try`](https://doc.rust-lang.org/std/ops/trait.Try.html#impl-Try-2).
</details>

Next, we're going to get the question, which will be the first argument:
```rust
  let question = args.single_quoted::<String>()?;
```
The [`single_quoted`](https://docs.rs/serenity/0.9.1/serenity/framework/standard/struct.Args.html#method.single_quoted) function returns one argument (delimited by quotes, if there are spaces in it) of the given type. Since we give it type `String`, this accepts anything. For what the `?` operator means, you can read the above section.

Now let's get all the answers that the user provided:
```rust
  let answers = args
    .quoted()               // 1) Enable quoting for answers with spaces
    .iter::<String>()       // 2) Iterate over the rest of the arguments (as Strings)
    .filter_map(|x| x.ok()) // 3) Filter out any arguments that failed to parse
    .collect::<Vec<_>>();   // 4) Collect all the arguments into a Vec<String>
```

Let's count the total number of answers (we'll need this later):
```rust

  let answers_len = answers.len();
```

Now we can create our `Poll` struct with the data that we got:
```rust
  let poll = Poll {
    question: question,
    // no responses yet
    answerers: vec![0; answers_len],
    answers: answers,
  };
```
The `vec![0; answers_len]` is a shorthand way to create a Vec with length `answers_len` and fill it with zeros. Since we don't have any responses yet, they should all be zero.

Now we'll have to create a fancy message for the users to respond on:
```rust

  // Build the message contents
  let message_text = render_message(&poll);
```
We'll define this function later, but for now just know that it takes a `Poll` reference and returns a `String` of the message contents.

We have to accumulate all the emojis to react with, so that the user can easily click to respond. We're using the "regional indicator" section of Unicode, which looks like this in Discord:

![What regional indicator characters look like in Discord](https://cloud-d9pv3tesy.vercel.app/0image.png)

This code creates a list of all the regional indicator characters we need. For example if we have 5 total answers, we'll need regional indicators A, B, C, D and E.
```rust
  let emojis = (0..answers_len)
    .map(|i| std::char::from_u32('🇦' as u32 + i as u32).expect("Failed to format emoji"))
    .collect::<Vec<_>>();
```
We take a range of `0..answers_len` (which is an Iterator), and then we transform it using the `map` function. We add the regional indicator `🇦` to it, which is like an offset. Then once we have all the characters, we collect them into a `Vec` to be iterated over a little later.

<details>
<summary>Why answers_len and not answers.len()?</summary>

If you tried to use `answers.len()` instead of `answers_len` above, you'd get an error that looks something like this:
```
error[E0382]: borrow of moved value: `answers`
   --> src\main.rs:203:22
    |
187 |     let answers = args
    |         ------- move occurs because `answers` has type `Vec<String>`, which does not implement the `Copy` trait
...
198 |         answers: answers,
    |                  ------- value moved here
...
203 |     let emojis = (0..answers.len())
    |                      ^^^^^^^ value borrowed here after move
```

What this means is that we're moving the data of `answers` into the `Poll`, so we can't use `answers` anymore since its data is invalid. Therefore, we just get the length of `answers` before moving it into the `Poll` so we can use it later.
</details>

Now let's actually create the message with the contents we got before:
```rust

  let poll_msg = msg.channel_id.say(&ctx.http, &message_text).await?;
```
So we're taking the channel ID of the command's message, and sending our own message in that same channel.

Now let's add reactions for each of the answers:
```rust

  for &emoji in &emojis {
    poll_msg
      .react(&ctx.http, ReactionType::Unicode(emoji.to_string()))
      .await?;
  }
```
So for each emoji character we're going to convert it to a string so we can add that reaction (as a Unicode emoji, since we aren't using custom emojis) to our message.

Now that we've setup the message, we need to add our new poll to the polls map. First we need to retrieve the global `data` as writable:
```rust

  let mut poll_data = ctx.data.write().await;
```

Next, we need to get the polls map by retrieving key `PollsKey`:
```rust

  let poll_map = poll_data
    .get_mut::<PollsKey>()
    .expect("Failed to retrieve polls map!");
```

Now, we can finally insert our poll, which is keyed by the channel & message ID (that's all we need to be unique):
```rust

  poll_map
    .lock()
    .await
    .insert((msg.channel_id, poll_msg.id), poll);
```

We succeeded! Let's return with a successful value:
```rust

  Ok(())
}
```

And that's the end of the `poll` command!

But... do you remember the `render_message` function which we were going to define later? Let's do that.

## The `render_message` function

The `render_message` function is pretty simple: it just takes a `Poll` reference and formats it to look nice in a message. Let's start defining that right above `struct PollsKey`:
```rust
fn render_message(poll: &Poll) -> String {
```
We're taking a `Poll` reference as input (we don't need to take ownership since we are just reading it) and returning a `String` of the formatted message contents.

```rust
  // Build the message contents
  let mut message_text = format!("**Poll:** {}\n", poll.question);
  let total_answerers = poll.answerers.iter().sum::<usize>();
```
We start the message with a bolded **Poll:** then we put the question after it. We mark it as `mut` since we'll add to it. Also, we create a total_answerers variable which contains the total number of responses (used for percentage calculation.)

```rust

  for (i, (answer, &num)) in poll.answers.iter().zip(poll.answerers.iter()).enumerate() {
```
We're iterating over each answer string, how many votes it got and the number of the answer we are iterating over (used for creating emoji).

We create the emoji similarly to the way we did in the `poll` command, and then add it to the message:
```rust
    let emoji = std::char::from_u32('🇦' as u32 + i as u32).expect("Failed to format emoji");
    // add answerers and percent
    message_text.push(emoji);
```

If we got at least one response in total we add a percentage (if we have zero responses, we get NaN therefore we don't show it in that case):
```rust
    if total_answerers > 0 {
      let percent = num as f64 / total_answerers as f64 * 100.;
      message_text.push_str(&format!(" ({:.0}%)", percent));
    }
```

Lastly, we add the answer string and how many votes it got (as well as a newline):
```rust
    message_text.push(' ');
    message_text.push_str(answer);
    message_text.push_str(&format!(" ({} votes)", num));
    message_text.push('\n');
  }
```

Now we just return the message that we've built up!
```rust

  message_text
}
```

That's the end of the `render_message` function!

Give yourself a pat on the back, we're halfway done!!

![Halfway done GIF](https://media.giphy.com/media/l0HlRey3XbrNJGRzi/giphy.gif)

If you want to, feel free to run your program now and try out the `poll` command (prefix is `~`). It won't work yet but the message should be printed.

The full code at this point can be viewed [here](https://repl.it/@anirudhb/Rust-discord-bot-checkpoint-1). Alternatively, you can open the below section for a full listing.

<details>
<summary>Full code at this point</summary>

`main.rs`:
```rust
fn main() { std::process::Command::new("cargo").arg("run").status().unwrap(); }
```

`Cargo.toml`:
```toml
[package]
name = "polling-bot"
version = "0.1.0"
authors = ["runner"]
edition = "2018"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
serenity = "0.9.1"
tokio = { version = "^0.2.23", features = ["macros"] }

[[bin]]
name = "polling-bot"
path = "real_main.rs"
```

`real_main.rs`:
```rust
use serenity::async_trait;
use serenity::framework::standard::{
  macros::{command, group},
  Args, CommandResult, StandardFramework,
};
use serenity::model::{
  channel::{Message, Reaction},
  gateway::Ready,
};
use serenity::prelude::*;
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::Mutex;
use serenity::model::channel::ReactionType;
use serenity::model::id::{MessageId, ChannelId};


struct Handler;

#[async_trait]
impl EventHandler for Handler {
  async fn ready(&self, _: Context, ready: Ready) {
    println!("Bot ready with username {}", ready.user.name);
  }
}

fn render_message(poll: &Poll) -> String {
  let mut message_text = format!("**Poll:** {}\n", poll.question);
  let total_answerers = poll.answerers.iter().sum::<usize>();

  for (i, (answer, &num)) in poll.answers.iter().zip(poll.answerers.iter()).enumerate() {
    let emoji = std::char::from_u32('🇦' as u32 + i as u32).expect("Failed to format emoji");
    message_text.push(emoji);
    if total_answerers > 0 {
      let percent = num as f64 / total_answerers as f64 * 100.;
      message_text.push_str(&format!(" {:.0}%", percent));
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
  let answers = args
    .quoted()
    .iter::<String>()
    .filter_map(|x| x.ok())
    .collect::<Vec<_>>();
  
  let answers_len = answers.len();
  let poll = Poll {
    question: question,
    answerers: vec![0; answers_len],
    answers: answers,
  };

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
```

</details>

Alright, take a quick break and relax a little before we jump into coding the rest of our bot!

---

## Reacting to reactions

Now that we have our bot sending properly-formatted messages, the next step is to make it actually react when someone adds a reaction.

Discord sends us 3 reaction related events which we will need to handle:
1. [reaction_add](https://docs.rs/serenity/0.9.1/serenity/prelude/trait.EventHandler.html#method.reaction_add), which gives us a [`Reaction`](https://docs.rs/serenity/0.9.1/serenity/model/channel/struct.Reaction.html) struct containing the channel and message ID of the reaction, as well as the emoji,
2. [reaction_remove](https://docs.rs/serenity/0.9.1/serenity/prelude/trait.EventHandler.html#method.reaction_remove), with similar parameters to reaction_add and
3. [reaction_remove_all](https://docs.rs/serenity/0.9.1/serenity/prelude/trait.EventHandler.html#method.reaction_remove_all), which doesn't give us an emoji but gives us the channel and message ID. (Emoji doesn't make sense here since every reaction is removed.)

Note that there will probably be a lot of common code shared between these events: for each one we will have to (1) validate the message it is referring to, (2) retrieve the corresponding poll object and (3) perform the action indicated by the event. Therefore, we are going to implement this using macros to reduce code duplication!

Given either a reaction or a (channel id, message id) pair we will need to extract the channel and message ID from it. Let's create an enum representing these two states, and put it right below your imports:
```rust
enum ReactionEvent<'a> {
  Reaction(&'a Reaction),
  RemoveAll(ChannelId, MessageId),
}
```
The first variant represents some kind of single-reaction event (such as add/remove), and the second variant represents the remove all event which only has channel and message ID.

Now, let's start writing our macro to handle most of the shared code:
```rust
macro_rules! perform_reaction {
```
This starts a macro declaration. We're using one type of macro known as declarative macros, which are created using [`macro_rules!`](https://doc.rust-lang.org/rust-by-example/macros.html). The other type (procedural macros) is out of scope for this tutorial.

```rust
  (($ctx:expr, $reaction_event:expr) $body:expr) => {
```
This is a match rule. One invocation of the macro that would match this rule looks something like this:
```rust
// you can open a invocation with either { (curly bracket), [ (bracket), or ( (parenthesis)
perform_reaction! {
  /*opening parenthesis*/(
    /*$ctx:expr*/ &ctx,
    /*$reaction_event:expr*/ ReactionEvent::Reaction(&reaction),
  /*closing parenthesis*/)
  /*$body:expr*/ |poll, i| {
    // stuff
  }
}
```

In fact, that's what most of our invocations will look like. Now, let's move on to what we're going to do with the parameters, now that we have them:
```rust
    use ReactionEvent::*;
```
We use the variants of this enum a lot so bring it into top-level scope temporarily.

```rust
    // Discard if it's our own reaction.
    if let Reaction(r) = $reaction_event {
      if r.user_id == Some($ctx.cache.current_user_id().await) {
        println!("Reaction added by self, ignoring");
        return;
      }
    }
```
Due to the `if let`, we are only evaluating this if the `ReactionEvent` provided is a reaction (and not a remove all). If we added the reaction, then we ignore it and return.

```rust

    let key = match $reaction_event {
      Reaction(r) => (r.channel_id, r.message_id),
      RemoveAll(c, m) => (c, m),
    };
```
We are turning our `ReactionEvent` into the key we can lookup in our polls map. In Rust, `match` is an expression so it works fine here.

```rust
    // Try to get poll for the given message otherwise return
    {
```
Here, we're starting a new scope. This is very important because otherwise we would get a deadlock.

<details>
<summary>Deadlock? Why?</summary>

~~Consider that in order to check if a key is present in a map, we only need read access to the map. However, to modify the map, we need write access. But we can only tell if we need to modify the map if we read the map first. Therefore, this scope will be the scope that holds read access to the map. If we don't need to write to it, we will early return from here. Otherwise, we will drop our read access so that later, we can take write access without deadlocking.~~

Sound confusing? Let me try to illustrate with an example:
```rust
// How RwLocks work:
// * multiple readers allowed concurrently
// * writers require exclusive access (no readers or other writers)

let read_access = get_read_access();     // \- read access begins here
if need_write_access(read_access) {      //  |
  let write_access = get_write_access(); //  | \- write access begins here
                                         //  |  ? DEADLOCK! Already have read access,
                                         //  |  ? so this will never complete!
  modify(write_access);                  //  |  ?
} else {                                 //  |
  return;                                // /- read access ends due to return
}
```

To fix this, we add a scope:
```rust
{
  let read_access = get_read_access(); // \- read access begins here
  // By inverting the condition we         |
  // prevent the two accesses from         |
  // overlapping.                          |
  if !need_write_access(read_access) { //  |
    return;                            //  |- read access possibly ends due to return
  }                                    //  |
}                                      // /- read access ends due to scope

let write_access = get_write_access(); // \- write access begins here
                                       //  | OK! No other references!
                                       //  | No deadlock!
modify(write_access);                  //  |
```

This makes Rust happy and we don't get any deadlock!

</details>

Now, we check if the key is present in the polls map (if it is not, the message is not a poll):
```rust
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
```
First we acquire read access to the data map (from the provided `$ctx`). Next, we try to get the polls map by looking up the `PollsKey`. Then we check if the polls map contains our message's key. If not, we return since it is not a poll. (This is similar to what we did in the `poll` command.)

```rust
    }
```
Now that we're done reading the map we relenquish read access by closing the scope.

Now we re-retrieve the polls map again but this time with write access:
```rust

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
```
If we were not able to find the poll in the map (even though we checked above), we just return.

Now we need to do something a little wacky. The `$body:expr` we declared in our rule above? That's going to actually be a function that takes an `&mut Poll` (to modify the poll) and an `Option<usize>` indicating which answer was reacted to (if it is not a remove all event.) Since Rust can't infer the type of the function for some reason, we need to nudge it:
```rust

    // nudges Rust towards the right type :)
    fn get_f<F: FnOnce(&mut Poll, Option<usize>)>(f: F) -> F {
      f
    }
    let f = get_f($body);
```

Next, if the event was a reaction, we need to validate it to ensure that we should actually process the reaction:
```rust

    match $reaction_event {
      Reaction(r) => match r.emoji {
        ReactionType::Unicode(ref s) => {
          let c = s.chars().nth(0).unwrap();
          let end_char = std::char::from_u32('🇦' as u32 + poll.answers.len() as u32 - 1)
            .expect("Failed to format emoji");
          if c < '🇦' || c > end_char {
            println!("Emoji is not regional indicator or is not in range, ignoring");
            return;
          }
          let number = (c as u32 - '🇦' as u32) as usize;
```
First we ensure that the reaction's emoji is a Unicode emoji, since all regional indicators (the emojis we are using) are Unicode. Then we check that the emoji is actually a regional indicator, and is in range. Next, we figure out which answer it would be (where 0 is the first answer.)

Now, we can call the body and it can modify the poll:
```rust

          f(poll, Some(number));   
        }
```

We also have to handle non-Unicode emojis, which we simply ignore:
```rust
        _ => {
          println!("Unknown emoji in reaction, ignoring");
          return;
        }
      },
```

And if the event was a remove all, we just call the function, this time without an answer number:
```rust
      RemoveAll(..) => f(poll, None),
    }
```

Now that we've let the body update the poll appropriately, we need to update the message with the new value of the poll:
```rust

    let content = render_message(&poll);
    key.0
      .edit_message(&$ctx.http, key.1, |edit| edit.content(&content))
      .await
      .expect("Failed to edit message");

    println!("Rerendered message");
  };
}
```
We're using that `render_message` function we defined earlier (this is why we made it a function 😉) to get the new contents of our message. Then we edit the message's contents.

And that's it! We're done writing our macro! The rest is gonna be pretty easy from here since it's just a few more lines!

## Handling reaction events

Now we just need to write the event handlers for the reaction events which will be super easy.

Inside the `impl` block where you defined the `ready` method on `Handler`, let's add the `reaction_add` handler as well:
```rust
  async fn reaction_add(&self, ctx: Context, add_reaction: Reaction) {
    println!("Reaction add");

    perform_reaction! { (ctx, ReactionEvent::Reaction(&add_reaction)) |poll, number| {
      poll.answerers[number.unwrap()] += 1;
    }}
  }
```
We're calling our `perform_reaction` macro defined above with the context, an event with reaction (the reaction we got) and a body which just increments the vote count for the given answer by one.

We do pretty much the same thing for `reaction_remove`, but we are decrementing this time:
```rust
  async fn reaction_remove(&self, ctx: Context, removed_reaction: Reaction) {
    println!("Single reaction remove");

    perform_reaction! { (ctx, ReactionEvent::Reaction(&removed_reaction)) |poll, number| {
      poll.answerers[number.unwrap()] -= 1;
    }}
  }
```

And for `reaction_remove_all`, we just iterate through each vote count and set it to zero:
```rust
  async fn reaction_remove_all(&self, ctx: Context, channel_id: ChannelId, removed_from_message_id: MessageId) {
    println!("All reactions removed");

    perform_reaction! { (ctx, ReactionEvent::RemoveAll(channel_id, removed_from_message_id)) |poll, _| {
      for answers in poll.answerers.iter_mut() {
        *answers = 0;
      }
    }}
  }
```

## Wrap-up

**YAY!! We did it!! You're finally done with your bot!**

Let's go ahead and try out all of this new stuff by hitting the run button. You should be able to add and remove reactions, having the message update as you do so. Additionally, if you try removing all reactions, it should update properly as well.

![You did it! Congratulations! GIF](https://media.giphy.com/media/J5Xr9k7qK5KGRi45vp/giphy.gif)

The full code is in the [Demo](#demo) section.

## Going further

There are many ways to improve and hack on this project further. Here are 3 examples of possible hacks you could do:
* Showing who voted for what ([code](https://repl.it/@anirudhb/Rust-discord-bot-hack-1))
* Reaction roulette - your vote only has a 20% chance of counting! (This is kind of annoying, and on purpose :-) ([code](https://repl.it/@anirudhb/Rust-discord-bot-hack-2))
* Modifying polls after they are created ([code](https://repl.it/@anirudhb/Rust-discord-bot-hack-3))

Here are some links if you'd like to learn more about writing Discord bots with Serenity:
* [Serenity docs](https://docs.rs/serenity)
* [Tokio docs](https://docs.rs/tokio/0.2.23/tokio/index.html)
* [Discord developer docs](https://discord.com/developers/docs/intro)
* [Rust Book chapter 4, ownership](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html)
