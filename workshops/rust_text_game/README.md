---
name: "Text Adventure Game in Rust"
description: "Make a text adventure game while writing your first Rust program!"
author: "@panos, @fanoulis"
img: "https://hackropolis.is-ne.at/0oMCQ5.png"
---

# Make a text-based adventure game in Rust!

Does programming and/or Rust intrigue you, yet you have no idea how to get started? Do you want to treat the nostalgia for a period that you most likely didn't get to live in?

Welp, in that case, this workshop is just for you! It doesn't matter if you're a beginner or already familiar with Rust - The entire process is being written with as much detail as possible, and I've made sure to include a lot of additional resources throughout the workshop, just in case!

**Note:** This workshop was authored with all sorts of different skill levels in mind and may take 20 minutes up to an hour and a half, depending on the level of familiarity.

- If you're familiar with programming, feel free to just glimpse over the first part of _Part 3_.
- If you're also familiar with the basics of Rust and creating a new project in Rust, skip to _Part 4_.
- If you're going to work with others on this workshop, please make sure that you are familiar with their skill level. This workshop explains everything that's being done with detail to accommodate everyone, but that shouldn't be a setback

## Demo

You can view a demonstration of an example we prepared on [asciinema.org](https://asciinema.org/a/8ZB2tvI4NlNkCpKdkY7Wrn8KC).

The full code can be viewed [on GitHub](https://github.com/hackropolis/stickerquest) and [repl.it](https://repl.it/@hackropolis/stickerquest).

## Part 1: Setup 🔰

In order to initialize your project, you'll either need to [install Rust and its tools on your computer](https://www.rust-lang.org/tools/install) or [repl.it](https://repl.it).

### Setting up your project on repl.it

Using repl.it is advantageous in the sense that you don't need anything apart from a web browser to use it.

You can create an account [here](https://repl.it/signup) and create a new Rust project by going tohttps://repl.it/languages/rust:

After doing so, run `cargo init --name rust-text-app`

You can also fork our example, should you wish to do so.

## Part 2: File structure and the Cargo package manager 🏗

Your Rust project, at the bare minimum, should look at least like this:

```
Cargo.toml
src
 └── main.rs
```

[**Cargo**](https://doc.rust-lang.org/cargo/) is the [package manager](https://en.wikipedia.org/wiki/Package_manager) that's used among the vast majority of Rust developers (also known as "Rustaceans"). It's a convenient tool that handles a lot of things, including, but not limited to the following:

- **Building**: The process we use to describe the process where the [compiler](https://en.wikipedia.org/wiki/Compiler) (in this case, **cargo**) translates the code that you can write and read to a format that your computer can understand.

- **Installing software libraries ("crates") and dependencies**: Software depends on other software libraries. Cargo allows you to download software libraries that you've found on the internet for your projects. For example, fellow Hack Clubber [@anirudhb](https://github.com/anirudhb) used the [Serenity](https://crates.io/crates/serenity) library to interact with Discord in a much easier manner.

- **Distributing your programs**: Sharing is caring! **Cargo** can also help you publish your code on [crates.io](https://crates.io) alongside a couple of additional details that I'll get into in a bit. It's particularly useful in situations where you wish to be credited for your work or if you want to use [versions](https://en.wikipedia.org/wiki/Software_versioning). All of these details are included in the `Cargo.toml` file, which I'll get into in a bit.

### Part 2.1: The Manifest (Cargo.toml)

Here's an example of a simple `Cargo.toml` file:

`Cargo.toml`:
```toml
[package]
name = "rust-text-app"
version = "0.1.0"
authors = ["John Doe <john.doe@example.com>"]
edition = "2018"
```

- `name` defines how your program is called.
- `version` defines the version of your program. It's particularly useful if you want to issue updates to the people who are using your program!
- `authors` is where you put in the names of the people who wrote the program.

If you wish to add more than one author, you should separate each author with a comma and use quotation marks:

```
authors = ["John Doe <john.doe@example.com>", "Jane Doe <jane.doe@example.com>"]
```

There are also a couple of additional _tables_ and _keys_ that you should look into, such as `license` or `[[bin]]`.

You can read up more about the manifest here: https://doc.rust-lang.org/cargo/reference/manifest.html

## Part 3: Getting started with Rust 💫

Hurray! Now that the bureaucracy is out of the way, we can finally get to the fun part: Writing code!

For starters, let's start with something simple to get cozy by writing a ["Hello, World!"](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) program.

If you're familiar with the essentials of programming and Rust, feel free to skip this section.

- Open the `src/main.rs` file. You'll see the following (or something similar):

```
fn main() {
  println!("Hello, World!");
}
```

Let's have a quick rundown as to what's going on here:

- `fn main()` defines a new "function" called **_main()_**.

This is quite an important function! When programs are executed, they generally do whatever the main() tells them to do.

- `println!()` is a different function that's meant to "print" information on the player's screen.

It's called "print" because running a program didn't always involve screens— Instead, actual printers were involved!

- _Semicolons_ give something like a sense of order and coherence to the program.

In order to understand the importance of semicolons, I'll have the computer print two different things in one line:

`src/main.rs`:
```
fn main() { println!("Hello, World"); println!("It's a wonderful day outside!"); }
```

There are two things to gain from here;

- Spaces don't matter. (But they make the whole thing look much nicer though, don't they?)

- Using semicolons is like splitting the instructions that you're giving to the computer.

---

Now, let's run the code you wrote. Open a terminal in the folder your project resides in and run the following commands:

```bash
cargo build
./target/debug/rust-text-app
```

If you're lucky enough, you should now see a gleeful piece of text reading `Hello, world!` on your screen!

**Reminder:** If you're using repl.it, you can also just click on the "Run" button!

## Part 4: Writing the game ✍

Alright, our goal is to write a program that will essentially narrate a story to the player, by giving them specific prompts. The player will be able to affect the course of the story with their decisions that they will enter into the program.

Let's get started!

### Part 4.1: Rust modules

Since we're about to write a lot of different prompts that will all appear depending on the choices that the player makes, it may be worth to split our game across different files, instead of just putting everything in `src/main.rs`!

So, let's create a new file in the `src/` folder called `prompts.rs`! Our directory's structure should now look like this:

```
Cargo.toml
src
 ├── main.rs
 └── prompts.rs
```

In order to import the functions that we're going to write in `prompts.rs`, we should use `mod prompts;`, to inform the compiler about the existence of our new file.

`src/main.rs`:
```rust
mod prompts;
fn main() {
    prompts::intro();
}

```

You can read more about Rust modules here: https://doc.rust-lang.org/rust-by-example/mod.html

Rust is instructed to execute the function named `intro`, which is exported from the `prompts` crate. This is an **associated** function. But, it currently doesn't exist. Let's implement it now, shall we?

Open the `src/prompts.rs` file, and paste the following in:

`src/prompts.rs`:
```rust
// pub stands for "public", not pubs!
// "public" allows functions to be
// seen by other project files.

pub fn intro() -> () {
        println!("Hello brave explorer! Want to embark on an adventure?");
}
```

Now, you should build and run the program again. The message this time around should differ a little bit!

### Part 4.2: User input

A game needs to give the ability the option to interact with it and affect its course.

... After all, [it's what makes a Subaru a Subaru!](https://www.youtube.com/watch?v=aYVoAioo8Ww)

So, we'll write a new function that will accept read the player's answer and react accordingly.

For purposes of simplicity, the player will only be supposed to answer with a word starting with "Y", which includes words such as 'Yes', 'Yep', 'Yeah', or 'Yellow' (as a funny unintended consequence), or, likewise, "N".

`src/prompts.rs`:
```rust
use std::io;

fn prompt() -> bool {
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();

    return input.to_ascii_lowercase().starts_with("y");
}
```

Now, I know that this is a lot to take in, but don't fret! Let's just go through what's happening here once more, line-by-line:

    - `use std::io;`
    
    Importing libraries gives us the opportunity to expand our programs however you can imagine. By importing `std::io`, we gain access to more functions that allow us to perform "input/output" operations (like `println!()`, but more advanced!).

    - `fn prompt() -> bool {`

    All functions are meant to return some output, which is either visible to the player, to other programs or parts of the same program.

    In this case, we define a new function called `prompt()`, which will return a value known as a `bool`, which stands for "boolean". Boolean data types can only accept two values, which are denoted with the words `true` or `false` in the Rust programming language. They're named after the mathematician George Boole and are possibly the simplest instance of [Boolean algebra](https://en.wikipedia.org/wiki/Boolean_algebra) in the field of computer science.

    - `let mut input = String::new();`

    Here, we create a *mutable* `String`. *Mutability* defines whether you can change the value of a variable. Since we're *initializing* a new string (which means that we declare that the variable `input` exists and is a `String`, but there haven't been any values that have been *declared* to it yet.)

    - `io::stdin().read_line(&mut input).unwrap();`

    Here, using the `io` library again, we capture whatever the player is typing until they hit `Enter` inside the `input` variable.

    - `return input.to_ascii_lowercase().starts_with("y");`

    And finally, we check if an all-lowercase counterpart of the input's value starts with `y`. If it does, it means the input was yes (or similar), and returns `true`. If it doesn't, it's safe to assume that the player replied negatively. Therefore, we return the value`false`.

### Part 4.3: Checking the answer!

In order to write a story, we'll have our program react based on the answers that the player gives. In other words, this is the part where you write your own game's logic! Inside the `intro` function, and under the `println!` macro (= a function whose name ends with `!`), add the following:

```rust
let answer = prompt();
```

You now have an (immutable) variable called `answer`, whose type is a `bool`ean (either `true` or `false`). We can now check the player's answer and take a different course of action accordingly:

Let's evaluate the answer that the player gave us!

```rust
// If the player's answer was yes, print a message
if answer == true {
    println!("Yay! Your aspirations will give you some very good karma later in your life.");
// else, if the answer is no (or anything else!)
// print a different, less friendly message
} else {
    println!("Boo, you're such a buzzkill!");
}
```

You can now create a game by similarly adding more prompts, then using them in the `if... else` blocks of the previous prompt to connect them.

### Part 4.4: Writing a full game

Here's a summary of how the code should look like:

`src/main.rs`:
```rust
mod prompts;

fn main() {
    prompts::intro();
}
```

`src/prompts.rs`:
```rust
use std::io;

// returns a boolean, accepts text input
fn prompt() -> bool {
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();
    return input.to_ascii_lowercase().starts_with("y");
}

// returns nothing, shows the prompt, asks for input with prompt()

pub fn intro() -> () {
    println!("Someone's calling you, do you answer?");
    
    // if prompt() returns true, that's enough for rust to carry on!
    // a few other expressions that also amount to true are 2 == 2,
    // 1 > 0, or just the word true.
    if prompt() {
     
    }
    else {
    }
}

pub fn phone_declined() -> () {
    println!("You hang up the phone.");
}

pub fn phone_answered() -> () {
    println!("You hear the caller say: 'Hey, I know it's been a long time, you down to meet up?'");
    println!("Her voice seems vaguely familiar, and she sounds a bit distressed. Do you accept?"); 
    
    if prompt() {
    }
    else {
    }
}
```
### Part 5: Ideas! 💡

Congrats! You've managed to write your first game in Rust. 🎉

![GIF of a movie character saying "Welcome to the club!" inside of a club, from the movie "Scott Pilgrim vs. The World"](https://hack.af/welcome)

Here's a bunch of ideas that will help you go a step further:

- Can you make a dice game where the player can roll a dice if they enter the word "roll"?
- Can you include more options in your game for the player to pick from? (**Tip**: Booleans only take two values. Could return another sort of value that will allow you to enter more answers, then evaluate the answer in the prompt itself?)
- Can you make a game where your program comes up with a random number, has the player try to guess it, and congratulates them if they guess correctly? (**Tip:** Instead of a boolean, the function `prompt()` should return a number instead)
- Can you make a luck-based game, where you pick dice sizes and have to roll a higher number than the computer?

Here are a few pointers:

- [The Rust Programming Language - Data Types](https://doc.rust-lang.org/book/ch03-02-data-types.html)
- [The Rust Programming Language - Patterns and Matching](https://doc.rust-lang.org/book/ch18-00-patterns.html)

You can also check out [this remix](https://repl.it/@cfanoulis/stickerquest-params#main.rs) of this workshop's source code in case you get stuck, which implements some of the ideas:

### Part 6: Further Reading 📖

- [The Rust Programming Language - an in-depth guide to Rust. This workshop has been inspired by Chapter 2 of the book](https://doc.rust-lang.org/book)
- [Rust By Example - For those that prefer code examples rather than pages of documentation](https://doc.rust-lang.org/stable/rust-by-example/)
- [Rust's learning resources page - including guides to advanced courses on other topics](https://www.rust-lang.org/learn)

You may also be interested in listening to [Charalampos's mixtape](https://hackropolis.club/mixtape). Shameless plug, I know.
