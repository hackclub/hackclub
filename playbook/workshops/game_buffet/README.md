# The Game Buffet
You're probably a gamer. But do you know how games really work? In this workshop we are going to learn to build games.

## Goals
* Build an original game
* Show it to all your friends!

## Setting up the workspace
While creating our game we are going to be writing code in [JS Bin](http://jsbin.com). Think of JS Bin as TextEdit or Notepad for programming. 

Remember to close the popup!
![Click the X](imgs/close_jsbin_popup.gif)


Currently JS Bin will not save your work if you leave. This is incredibly annoying, especially if you have been working on your game for a large amount of time. We can fix this by logging in.
![Click login](imgs/authorize_github.gif)
*Logging in with GitHub is a great way to avoid remembering another password*


In order to create our game quickly we are going to use a `library` called [p5js](http://p5js.org). A library is a useful piece of code someone else has written and published for other people to use and benefit from. [p5js](http://p5js.org)'s goal is to simplify the creation of interactive experiences (read: games).

Because we want to use p5js we are going to have to include it in our project. This is done with a `<script>` tag and its respective `src` setting which links to the library.

![](imgs/add_p5js.gif)
*The URL we are hosting p5.play at is [http://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.12/p5.js](http://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.12/p5.js)*

[p5js](http://p5js.org) is fine by itself, however we are going to use another `library` to improve [p5js](http://p5js.org)'s game features called [p5.play](http://p5play.molleindustria.org/).

Again, we are going to want to include this within our project. We do this in the same way we included [p5js](http://p5js.org).

![](imgs/add_p5_play.gif)


*The URL we are hosting [p5.play](http://p5play.molleindustria.org/) at is [https://rawgit.com/jonleung/79234327a76b2eb4953e/raw/62bbd37c23950be576afac9d8f78112ec46445a2/p5.play.js](https://rawgit.com/jonleung/79234327a76b2eb4953e/raw/62bbd37c23950be576afac9d8f78112ec46445a2/p5.play.js)*