---
name: 'Discord poll bot in Rust'
description: 'Make a Discord polling bot in Rust using the Serenity library'
author: '@anirudhb'
---

# Make a Discord bot in Rust!

Discord bots are cool, right? Haven't you ever wanted to make your own?

Well, today we're going to do exactly that, but this time we're using Rust! We're going to build a Discord bot that allows you to setup polls, and updates counts in real-time!

## Why Rust?!?!?!??!!?

> Isn't rust a super hard language or something? I heard you're always fighting with this "borrow checker" thing...

Fear not, Rust is really easy! You won't be fighting with the borrow checker at all, in fact it'll be helping you :)

However for this tutorial, I do recommend a basic understanding of low-level concepts such as memory management, but it's not required.

## Getting started

We're going to host our Discord bot on [repl.it](https://repl.it).

To get started, [create an account](https://repl.it/signup). I personally recommend you sign in with your GitHub account if you have one, but email is fine too.

Now let's create a new Rust project by clicking [this link](https://repl.it/languages/rust):

![Initial Rust project](https://cloud-gjndvi3vx.vercel.app/0image.png)

## Adding the library and setting up a basic bot

Right now, our Rust program isn't a Cargo project. That means it won't be able to import any libraries.

Let's fix that by running `cargo init --name polling-bot` in the terminal. You can replace `polling-bot` with whatever you want your program to be named. This should create two new files on the side: `.gitignore` and `Cargo.toml`, which we'll be using to add the Serenity library:

![New files created by cargo init](https://cloud-bxfulgo22.vercel.app/0image.png)

### What is Serenity?

Serenity is a Rust _crate_ (or library) that helps you write Discord bots in Rust. If you've heard of Discord.py for Python, or Discord.js for JavaScript, you can kind of think of Serenity like that, except for Rust.

### Adding the bot token

Now, we need to create a new bot on the [Discord Developer Portal](https://discord.com/developers/applications). Click "New Application" in the top right corner, highlighted in red here:

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

Now, let's add the Serenity library! Head over to `Cargo.toml` and add this line under your `[dependencies]` section: `serenity = "0.9.1"`. At the time of writing, the latest version of Serenity is 0.9.1, but you can replace it with the latest version which can be found [here](https://crates.io/crates/serenity).

We'll also need another helper library, `tokio`. Add `tokio = { version = "^0.2.23", features = ["macros"] }` to your `Cargo.toml` as well. This library just helps us out with some async stuff, but you don't need to worry too much about it for now. Don't use the latest version of Tokio (0.3 or later) as this will cause incompatibilities with Serenity!

Your `Cargo.toml` should now look like this:

![Cargo.toml with Serenity dependency](https://cloud-epv4dnmyn.vercel.app/0image.png)

Now, let's add a basic Discord bot template. At this point, you should have invited your bot to a server for testing.

Delete the contents of `main.rs` and replace it with this:
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