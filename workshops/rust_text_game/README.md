---
name: "Text Adventure Game in Rust"
description: "Make a text adventure game while writing your first Rust program!"
author: "@panos, @cfanoulis"
img: "https://hackropolis.is-ne.at/0oMCQ5.png"
locales: 'pt-br'
---

# Make a text-based adventure game in Rust!

Does programming and/or Rust intrigue you, yet you have no idea how to get started? Do you want to treat the nostalgia for a period that you most likely didn't get to live in?

Welp, in that case, this workshop is just for you! It doesn't matter if you're a beginner or already familiar with Rust - The entire process is being written with as much detail as possible, and I've made sure to include a lot of additional resources throughout the workshop, just in case!

**Note:** This workshop was authored with all sorts of different skill levels in mind and may take 30 minutes up to an hour and a half, depending on the level of familiarity.

- If you're familiar with programming, feel free to just glimpse over the first part of _Part 3_.
- If you're also familiar with the basics of Rust and creating a new project in Rust, skip to _Part 4_.
- If you're going to work with others on this workshop, please make sure that you are familiar with their skill level. This workshop explains everything that's being done with detail to accommodate everyone, but that shouldn't be a setback

## Demo

You can view a demonstration of an example we prepared on [asciinema.org](https://asciinema.org/a/8ZB2tvI4NlNkCpKdkY7Wrn8KC).

The full code can be viewed [on GitHub](https://github.com/hackropolis/stickerquest) and [repl.it](https://repl.it/@hackropolis/stickerquest).

## Part 1: Setup 🔰

In order to get ourselves running quicker, we'll be using [repl.it](https://repl.it).

### Setting up your project

Using repl.it is advantageous in the sense that you don't need anything apart from a web browser to use it. You can create an account [here](https://repl.it/signup) and create a new Rust project by going to https://repl.it/languages/rust:

After doing so, run `cargo init --name rust-text-app` in the Shell tab

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

The `cargo.toml` file is your project's manifest, which describes your project & its dependencies. Here's how an example `Cargo.toml` file would look like:

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
- `edition` describes the version of Rust you want this project to use. You want to keep this as `2018` to make sure you use the latest features.

If you wish to add more than one author, you should separate each author with a comma and use quotation marks:

```toml
authors = ["John Doe <john.doe@example.com>", "Jane Doe <jane.doe@example.com>"]
```

There are also a couple of additional _tables_ and _keys_ that you should look into, such as `license` or `[[bin]]`. You can read up more about the manifest here: https://doc.rust-lang.org/cargo/reference/manifest.html

## Part 3: Getting started with Rust 💫

Hurray! Now that the bureaucracy is out of the way, we can finally get to the fun part: Writing code!

For starters, let's start with something simple to get cozy by writing a ["Hello, World!"](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) program.

If you're familiar with the essentials of programming and Rust, feel free to skip this section.

- Open the `src/main.rs` file. You'll see the following (or something similar):

```rust
fn main() {
  println!("Hello, World!");
}
```

Let's have a quick rundown as to what's going on here:

- `fn main()` defines a new "function" called **_main()_**.

This is quite an important function! When programs are executed, they generally do whatever the main() tells them to do.

- `println!()` is a different function that's meant to "print" information on the player's screen.

It's called "print" because running a program didn't always involve screens— Instead, actual printers were involved!

- _Semicolons_ mean the instruction ends there. They are there to give a sense of order and coherence to our code.

In order to understand the importance of semicolons, I'll have the computer print two different things in one line:

`src/main.rs`:

```rust
fn main() {
  println!("Hello, World");
  println!("It's a wonderful day outside!");
}
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

### Part 4.1: Output some text

So right now, our code looks like this.

```rust
fn main() {
  println!("Hello, World!");
}
```

But `Hello, World!` doesn't feel like something you'd see in a game, right?. So, let's change that. Change the text inside the quotes to something else. We'll change it to `Hello brave explorer! Want to embark on an adventure?`.

Now run your program again. Instead of `Hello, World`, you should see what you wrote above

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

  Importing libraries allows us to use code either installed by cargo, or bundled with Rust (standard library). By importing `std::io` (where `std` means standard library aka included with Rust), we gain access to more functions that allow us to perform "input/output" operations (like `println!()`, but more advanced!).

- `fn prompt() -> bool {`

  All functions are meant to return some output, which is either visible to the player, to other programs or parts of the same program. In this case, we define a new function called `prompt()`, which will return a value known as a `bool`, which stands for "boolean". Boolean data types can only accept two values, which are denoted with the words `true` or `false` in the Rust programming language. They're named after the mathematician George Boole and are possibly the simplest instance of [Boolean algebra](https://en.wikipedia.org/wiki/Boolean_algebra) in the field of computer science.

- `let mut input = String::new();`

  Here, we create a _mutable_ `String`. _Mutability_ defines whether you can change the value of a variable. Since we're _initializing_ a new string (which means that we declare that the variable `input` exists and is a `String`, but there haven't been any values that have been _declared_ to it yet.)

- `io::stdin().read_line(&mut input).unwrap();`

  Here, using the std's `io` module again, we capture whatever the player is typing until they hit `Enter` inside the `input` variable. The `&mut input` you see is Rust's syntax for creating a mutable _reference_ to a variable. In this case, that's how the `read_line` method is able to read from your standard input buffer; it places the bytes into the memory referenced by the mutable reference that it is passed. In this case, you're passing a mutable reference to `input`, so the resulting line will be placed _directly_ in that `String` without any new `String`s being created. Note that we explicitly had to add the `mut` specifier to our reference; Rust references and variables are instantiated as immutable unless we specify otherwise. In our case, we are specifying it as mutable so that it can be, well, mutated by the `read_line` method

- `return input.to_ascii_lowercase().starts_with("y");`

  And finally, we check if an all-lowercase counterpart of the input's value starts with `y`. If it does, it means the input was yes (or similar), and returns `true`. If it doesn't, it's safe to assume that the player replied negatively. Therefore, we return the value `false`.

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

### Part 4.4: Rust modules

Wow... that's a lot of lines written already. If we were to add even 1 more prompt, this would get messy very fast! Since we're about to write a lot of different prompts that will all appear depending on the choices that the player makes anyway, it may be worth to split our game across different files, instead of just putting everything in `src/main.rs`!

So, let's create a new file in the `src/` folder called `prompts.rs`! Our directory's structure should now look like this:

```
Cargo.toml
src
 ├── main.rs
 └── prompts.rs
```

In order to import the functions that we're going to write in `prompts.rs`, we should add `mod prompts;` under our first line, to inform the compiler about the existence of our new file. Your code should now look like this:

`src/main.rs`:

```rust
use std::io;
mod prompts;

fn prompt() -> bool {
  let mut input = String::new();
  io::stdin().read_line(&mut input).unwrap();

  return input.to_ascii_lowercase().starts_with("y");
}

fn main() {
  let answer = prompt();
  // If the player's answer was yes, print a message
  if answer == true {
    println!("Yay! Your aspirations will give you some very good karma later in your life.");
  // else, if the answer is no (or anything else!)
  // print a different, less friendly message
  } else {
    println!("Boo, you're such a buzzkill!");
  }
}

```

You can read more about Rust modules here: https://doc.rust-lang.org/rust-by-example/mod.html

Rust is instructed to execute the function named `intro`, which is exported from the `prompts` crate. This is an **associated** function. But, it currently doesn't exist. Let's implement it now, shall we?

Open the `src/prompts.rs` file, and paste the following:

`src/prompts.rs`:

```rust
use std::io;

fn prompt() -> bool {
  let mut input = String::new();
  io::stdin().read_line(&mut input).unwrap();

  return input.to_ascii_lowercase().starts_with("y");
}

pub fn intro() {
  let answer = prompt();
  // If the player's answer was yes, print a message
  if answer == true {
    println!("Yay! Your aspirations will give you some very good karma later in your life.");
  // else, if the answer is no (or anything else!)
  // print a different, less friendly message
  } else {
    println!("Boo, you're such a buzzkill!");
  }
}

```

You'll notice that the code is similar, but it does have some minor changes:

- First of all, we removed `mod prompts;`. We don't want to use the file we're working with.
- We renamed the `main` function to `intro`. As `main` functions have a special naming for Rust, we had to change its name.
- We also added the `pub` modifier to our function, which allows us to call that function from other files (that import `prompt.rs`)

Let's now use the function we wrote in `main.rs`. Replace all the code in `main.rs`'s `main` function with just a call to the intro function, like below:

`src/main.rs`:

```rust
mod prompts;

fn main() {
  prompts::intro();
}
```

### Part 4.4: Writing a full game

In order to make the game more satisfying, fun and captivating, there needs to be more dialogue!

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

// first prompt
pub fn intro() -> () {
  println!("Someone's calling you, do you answer?");

  // if prompt() returns true, that's enough for rust to carry on!
  // a few other expressions that also amount to true are 2 == 2,
  // 1 > 0, or just the word true.
  if prompt() {
    phone_answered();
  } else {
    println!("You hung up the phone. You didn't find out what was all that about. Maybe you will. One day...");
  }
}

// second prompt
pub fn phone_answered() -> () {
  println!("You hear the caller say: 'Hey, I know it's been a long time, you down to meet up?'");
  println!("Her voice seems vaguely familiar, and she sounds a bit distressed. Do you accept?");

  if prompt() {
    challenge_accepted();
  }
  else {
    println!("You hung up the phone. You didn't find out what was all that about. Maybe you will. One day...");
    println!("YOU WON! To be continued...");
  }
}

// third prompt
pub fn challenge_accepted() -> () {
  println!("You meet up with the old friend, and she hands you a bag full of cash.");
  println!("Your friend says: 'Here, don't ask questions, thanks.'");
  println!("Congratulations! You are now rich and have sufficiently covered your material necessities, but does that amount to true happiness? You may have won the game, but you haven't won at life.");
  println!("GAME OVER!");
}
```

What's happening here is fairly straightforward: If the player answers their phone (`phone_answered()`), they proceed. If they don't, they lose. After listening to what the caller has to say, they will lose if they accept the caller's proposition (`challenge_accepted()`), but they will win if they don't.

Not only do we trick the player by making them make the most obvious decisions, and then dropping them this moral nuclear bomb right on their faces, but we also get to set the ground for a sequel, should they decide that being given a lot of cash for free is _too good to be true!_

Apart from the comments in the code itself, there are a few important details to note:

- In this example, we have two possible answers, so the story takes two entirely different courses every time. Most videogames end up giving the player the illusion of choice by having them go through short-term consequences and then twisting the story in such a way so that it all works out the same way or in a slightly different way, and they ultimately end up giving you a different ending. Critically acclaimed titles, such as the **The Last of Us** and the **The Witcher** series, as well as **Night in the Woods**, **Mass Effect** or **Assassin's Creed** games do this.
- Nevertheless, we still end up giving the player a different dialogue every time. In our case, it's just that nearly all of the wrong decisions throw the player out of the game.
- You may want to handle all of the `if... else` clauses and the game logic in one function, instead of dealing with the logic all over the place. However, we believed that the way we wrote the example leaves room for more flexibility.
- We also moved all the correct answers to their own function. to keep our code clearer

Congrats! You've just written your first game in Rust. 🎉

![GIF of a movie character saying "Welcome to the club!" inside of a club, from the movie "Scott Pilgrim vs. The World"](https://hack.af/welcome)

### Part 5: Ideas! 💡

Here's a bunch of ideas that will help you go a step further:

- Can you make a dice game where the player can roll a dice if they enter the word "roll"?
- Can you include more options in your game for the player to pick from? (**Tip**: Booleans only take two values. Could return another sort of value that will allow you to enter more answers, then evaluate the answer in the prompt itself?)
- Can you make a game where your program comes up with a random number, has the player try to guess it, and congratulates them if they guess correctly? (**Tip:** Instead of a boolean, the function `prompt()` should return a number instead)
- Can you make a luck-based game, where you pick dice sizes and have to roll a higher number than the computer?
- What if you could build entire games **_with graphics_** instead?

Here are a few pointers:

- [The Rust Programming Language - Data Types](https://doc.rust-lang.org/book/ch03-02-data-types.html)
- [The Rust Programming Language - Patterns and Matching](https://doc.rust-lang.org/book/ch18-00-patterns.html)
- [Are we game yet?](https://arewegameyet.rs)

You can also check out [this remix](https://repl.it/@cfanoulis/stickerquest-params#main.rs) of this workshop's source code in case you get stuck, which implements some of the ideas:

### Part 6: Further Reading 📖

- [The Rust Programming Language - an in-depth guide to Rust. This workshop has been inspired by Chapter 2 of the book](https://doc.rust-lang.org/book)
- [Rust By Example - For those that prefer code examples rather than pages of documentation](https://doc.rust-lang.org/stable/rust-by-example/)
- [Rust's learning resources page - including guides to advanced courses on other topics](https://www.rust-lang.org/learn)
