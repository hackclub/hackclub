# Soundboard Workshop

Short link to this workshop: [https://workshops.hackclub.com/soundboard](https://workshops.hackclub.com/soundboard)

---

Today we're going to create our very own soundboard. You may have seen musicians such as Little Dragon, [Shawn Wasabi](https://www.youtube.com/watch?v=qAeybdD5UoQ), and many other musicians, using such things to improvise fresh beats at live performances. We can simulate this very easily with basic HTML and JavaScript.

Much like in Personal Website workshop, we'll be using HTML to create stuff visible on the browser. We'll also be using JavaScript, a programming language commonly used in web development, to include interactivity in our project. In addition, we will be making use of jQuery, which is a library that will make using JavaScript in the browser much simpler. This may seem like an exorbitant number of new tools, but we'll be biting off manageable pieces.

Table of Contents

- [Part I: Set-up](#part-i-set-up)
- [Part II: User Interface](#part-ii-user-interface) 
- [Part III: The JavaScript File](#part-iii-the-javascript-file)
- [Part IV: Repetition](#part-iv-repetition)
- [Part V: Rejoicing](#part-v-rejoicing)
- [Part VI: Refactoring](#part-vi-refactoring)
- [Part VII: Upgrading](#part-vii-upgrading)
- [Part VIII: Publishing and Sharing](#part-viii-publishing-and-sharing)
- [Part IX: Hacking](#part-ix-hacking)

## Part I: Set-up

### Setting up Folders and Files

1. We'll begin by creating a new folder in our Cloud 9 workspace. Right-click your `projects` folder, select "New Folder," and name it `soundboard`.
2. In this folder, right-click again, select "New File," and name the new file `index.html`. This is where we will be writing our HTML to create a user interface for the soundboard.
3. Create another file in the soundboard folder, and name this one `main.js`. This is where we will be writing our JavaScript to make the soundboard play sounds.
4. We've provided a set of sounds, which can be found [here](sounds/). Save these to your computer by right-clicking the filename of each one and choose `Save Link As`. Then, drag all the files into the `soundboard` directory in the Cloud 9 sidebar.
5. Now, open up `index.html` and type the following:

  ```html
    <!DOCTYPE html>
    <html>
      <head>
        <title>Soundboard</title>
      </head>
      <body>
      </body>
    </html>
  ```

  Similar to our HTML file in the Personal Website workshop, we've created a bare template upon which we will build interactions for the user. As you can see, we've named this page "Soundboard" using the title (`<title>`) tag.
6. Save your `index.html` and open up the Live Preview by selecting `Preview > Live Preview File` in the menu bar. You should see a blank page.

### Adding JavaScript to the HTML File

Now we must connect the two files. Since HTML file depends on JavaScript file to make our soundboard work, we must include a reference to the JavaScript file within the HTML file. We can do this by using an HTML tag called the script tag (`<script>`), which is how JavaScript files are included in HTML files.

The script tag has an attribute called source (`src`), which is where we will fill in the URL to the JavaScript file we want to include.

Let's write this line of code inside the **body** of the HTML file, to include our `main.js` file:

```html
<script src="main.js"></script>
```

There! Now our HTML file knows that it should grab the `main.js` file.

For this workshop, we'll be using the handy library called jQuery inside our `main.js`. jQuery is a collection of functions and JavaScript code written to make writing JavaScript for the browser much easier. It provides a cleaner and simpler way to make things happen, almost like shortcuts.

We'll let the browser know that we'll be using jQuery by once again using a `<script>` tag. jQuery can be found at [this URL](https://code.jquery.com/jquery-2.2.3.min.js), so that's what we will put as the value for `src`.

Since we will be using jQuery in `main.js`, `main.js` will be reliant on jQuery. Thus, we will put the script tag containing jQuery above the one containing `main.js` in the **body** of `index.html` in order to load jQuery before loading `main.js`.

```html
<body>
  <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
  <script src="main.js"></script>
</body>
```

Now we have successfully hooked up the JavaScript to the HTML. Our `index.html` now looks like this:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Soundboard</title>
</head>
<body>
  <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
  <script src="main.js"></script>
</body>
</html>
```

## Part II: User Interface

Now that we've set up our HTML file, let's add some elements to the **body** to form the user interface of our soundboard.

How should we design our user interface? This is what the user (you, or others) will be interacting with when trying to make sweet music. Since this soundboard will be on a webpage, we'll probably be clicking on things. One can click on many things, but the most intuitive is a button, which is what we will use.

### Adding Buttons

We can create buttons that imitate the buttons on a soundboard, by using [the button tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) (`<button>`).

We use the button tag by typing the text we want on the button between the start (`<button>`) and close (`</button>`) tags. Type the following above your script tags in the **body**:

```html
<button>Chop3</button>
```

This button will say "Chop3" on it.

You can have any text on your buttons that you desire, so long as you can still tell what sound they're going to make when you press them.

Now `index.html` looks like this:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Soundboard</title>
</head>
<body>
  <button>Chop3</button>

  <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
  <script src="main.js"></script>
</body>
</html>
```

As a user, we can tell the difference between each of the buttons, by what text is displayed on the buttons. But how can we differentiate them in code? One easy way is to supply each with an attribute known as an "`id`."

### Adding IDs to Buttons

HTML elements can have many attributes. One example we've seen is the `src` attribute that the `<script>` tag has. Many attributes are optional, but can be helpful in adding more differentiation to the elements.

An `id` is a unique-valued attribute we can add to HTML elements. We'll give our button its own `id`, which will help us assign the corresponding sound to it.

```html
<button id="chop3">Chop3</button>
```

Our HTML now looks like this:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Soundboard</title>
</head>
<body>
  <button id="chop3">Chop3</button>

  <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
  <script src="main.js"></script>
</body>
</html>
```

## Part III: The JavaScript File

Now it's time to write the functionality behind our soundboard. What we want to do in JavaScript is play the corresponding sound when a button is clicked. We can separate this into several steps:

- playing a sound
- attaching this action to the button
- detecting the click, and executing the action upon detection

Let's open up `main.js` and start writing JavaScript!

### Playing the Sound

JavaScript makes using audio easy with the Audio object. We are going to create sounds in our code by creating an Audio object for each of our mp3 files.

We'll be storing each Audio object in a variable. A variable in JavaScript is something that stores a value. First, let's declare the existence of our variable by typing the following into `main.js`:

```js
var chop3Sound;
```

Next, we'll make a new Audio object with the `chop3.mp3`, and assign it to our variable, by modifying the line we just added:

```js
var chop3Sound = new Audio("chop3.mp3");
```

Here, we've created a new `Audio` object that will have the sound `chop3.mp3`, and assigned the Audio object to a variable named `chop3Sound` which we declared in the same line.

And we'll play the sound by using a built-in method (`.play()`) included in the Audio object. We'll add this line beneath the creation of `chop3Sound`, like so:

```js
var chop3Sound = new Audio("chop3.mp3");
chop3Sound.play();
```

`.play()` is a function that is a part of the Audio object, that will play the sound.

Now, if you save your `main.js` file, you'll note that upon auto-reloading, the `index.html` page now plays the chop3 sound.

Yay! We've added audio to our webpage.

### Creating Functions

If we save our file and let `index.html` reload, we hear the chop3 sound. But we don't want this. We want the sound to play, but only at our command.

To have a little more control over the sound, let's create a function that will play it only when we call the function. A function in JavaScript stores a set of instructions in a variable. We can call the function to execute these instructions whenever we want.

We can create functions for the chop3 sound by wrapping the code we've already written in the following way:

```js
function makeChop3Sound() {
  var chop3Sound = new Audio("chop3.mp3");
  chop3Sound.play();
}
```

Now, if we run our project, we'll find that there is no sound at all. Even when we press the button, there is no sound.

It's time to connect the button to our sound function.

### Detecting the Click

In order to connect the button and the function, we must first identify the button in `main.js`. Conveniently, we've given the button an `id` attribute in our `index.html`, making it easy to refer to in `main.js`.

We can [use jQuery to find the button](https://learn.jquery.com/using-jquery-core/selecting-elements/), by using special syntax. We'll type this below our function, in `main.js`:

```js
$("#chop3");
```

Now that we have selected our button in the JavaScript by its `id`, we can access the methods attached to the button.

One of the methods is `.on()`. This method sets the button to execute some instructions when something happens. Things that happen on the page by way of the user doing something are referred to as ["events."](https://learn.jquery.com/events/introduction-to-events/) When we use the [`.on()`](https://learn.jquery.com/events/handling-events/) method, we pair an event with a function that we want to occur when the event happens.

Here, we will use the method to detect the "click" event, so we'll provide `"click"` as the first argument to `.on()`:

```js
$("#chop3").on("click");
```

`.on()` takes two arguments, the second of which is what you want to happen when the event has occurred. In our case, we want the chop3 sound to play when the button is clicked, so we add the function `makeChop3Sound` which we have already written, as an argument.

```js
$("#chop3").on("click", makeChop3Sound);
```

To elaborate, we are:

1. Selecting the chop3 button, using jQuery and its syntax (i.e., notation) for recognizing IDs, and specifying the `chop3` id.
2. Calling the method associated with the button called `.on()`, which is able to bind certain actions with certain events, and thus dictate that the action be called when the event occurs.
3. Choosing to detect the "click" event.
4. Passing as an argument the function `makeChop3Sound()`, to tell `.on()` that upon noticing a click, it should execute the function (which in turn plays a sound).

Now, save your `main.js` file and try clicking on the chop3 sound button! Congratulations! Your browser now makes chop3 sounds.

## Part IV: Repetition

Let's do this for the other sounds, in a similar fashion. We'll add more buttons into the `index.html` and end up with the following. **For brevity I've only added four more sounds, but you should add all of them.**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Soundboard</title>
  </head>
  <body>
    <button id="chop3">Chop3</button>
    <button id="kick4">Kick4</button>
    <button id="perc1">Perc1</button>
    <button id="vox9">Vox9</button>

    <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
    <script src="main.js"></script>
  </body>
</html>
```

Add the corresponding functions and event handlers for the other sounds in `main.js`. The final version of your `main.js` should look like this:

```js
function makeChop3Sound() {
  var chop3Sound = new Audio("chop3.mp3");
  chop3Sound.play();
}

function makeKick4Sound() {
  var kick4Sound = new Audio("kick4.mp3");
  kick4Sound.play();
}

function makePerc1Sound() {
  var perc1Sound = new Audio("perc1.mp3");
  perc1Sound.play();
}

function makeVox9Sound() {
  var vox9Sound = new Audio("vox9.mp3");
  vox9Sound.play();
}

$("#chop3").on("click", makeChop3Sound);
$("#kick4").on("click", makeKick4Sound);
$("#perc1").on("click", makePerc1Sound);
$("#vox9").on("click", makeVox9Sound);
```

Upon saving and refreshing, you should be able to play each sound by clicking the corresponding button.

## Part V: Rejoicing

Yay! It works! Sounds are happening! See if you can create some fresh beats of your own. Add more buttons, play music together with a friend's soundboard, change the sounds.

## Part VI: Refactoring

So it looks like we've written a lot of code that looks the same. If we wanted, we could trim it down to be more concise.

If I told you that the following code does the same thing as what you currently have in `main.js`, would you believe me?

```js
function playSound(event) {
  var id = $(event.target).attr("id");
  var sound = new Audio(id+".mp3");
  sound.play();
}

$("button").on("click",playSound);
```

We can identify the similarities and differences in our current functions, and separate the similarities, and pass the differences as arguments. In doing this, we simplify the functions we've written into one function.

I've created a new function, `playSound()` that takes an argument `event`, which in our case will be the click event, and uses the event to figure out which sound it should play. It can do this by examining which HTML element felt the event, and getting the ID of that element. IDs can be pretty handy.

In more detail, `event.target` refers to the HTML element that the event happened on, and `.attr()` requests an attribute on this element. Passing in the string `"id"` allows us to request the ID attribute. We then store this in a variable we declared with `var id`.

Then, contingent on the fact that you named your IDs after the names of the mp3 files, we can pick the appropriate mp3 file to play, based on what ID the clicked element had.

And we play the sound as usual.

Give this a test by saving your `main.js`. Your Live Preview should reload, and you'll be able to verify that the refactoring worked.

Remember, simplify only after everything works.

## Part VII: Upgrading

Do you find it a bit difficult to have sounds overlay each other, because clicking from button to button is a bit difficult? We can solve this in a number of ways, all of which I encourage you to experiment with to see which works best for you. We could:

- Change the arrangement of buttons
- Make the buttons larger
- Instead of clicking, use keystrokes to make sounds

We'll be going over how to attach keys on the keyboard to the sounds.

### Detecting Keyboard Inputs on the Page

First, we must set up our JavaScript so that the page can detect that we have pressed a key. Thanks to jQuery, we can add this feature easily, with the following line of code, which we will type at the bottom of our `main.js`:

```js
$(document).keypress();
```

jQuery has a method called `.keypress()`, which takes as an argument a function that you want executed in the event that a key is pressed. Much like `.on()`, `.keypress()` listens for an event; specifically, it listens for the key pressed event. Here, we are specifying that we want to listen for a key press on the entire document, hence `$(document)`. `$(document)` is how jQuery refers to the whole page.

Now that we have set up the page to react when a key is pressed, we just need to tell it how to react. And we will do this by writing a function that gives instructions on what to do in the event that a key is pressed.

We will declare this function and name it `delegateKeypress` and pass it as an argument to the method `.keypress()` like so:

```js
--$(document).keypress();--
$(document).keypress(delegateKeypress);

function delegateKeypress(event) {

}
```

Much like our refactored function `playSound()`, which takes an event as an argument, `delegateKeypress()` also must take an event as an argument. After all, that is where the information about the event is contained. Information that we need, such as which key was pressed.

### Attaching Keyboard Inputs to Sounds

Speaking of that, we need to assign keys to our sounds, so let's:

1. Choose which keys we would like to use. Perhaps you will choose based on the letter and the name of the sound. I will just use keys on the home row: `d`, `f`, `j`, and `k`.
2. Find the `keyCode`s for your keys. We'll need this in order to write JavaScript to match up the keys with the sounds. You can find `keyCode`s using [this handy chart](). My `keyCode`s are `100`, `102`, `106`, and `107`, respectively.

Now that we've gotten the information for the keys, we'll pair each with a sound by writing a conditional that checks if the key pressed has a `keyCode` that corresponds to a sound. We'll add this in our `delegateKeypress()` function:

```js
if (event.keyCode == 100) {

}
```

Here we are saying, if the event's `keyCode` is equal to 100, then do something (we haven't yet specified what). `event.keyCode` is an attribute of the event, and it contains the value of the `keyCode` of the key that was pressed.

So, if the `keyCode` is indeed 100, I would like the chop3 sound to be played. Fortunately, we already know how to play sounds:

```js
function delegateKeypress(event) {
  if (event.keyCode == 100) {
    var chop3Sound = new Audio("chop3.mp3");
    chop3Sound.play();
  }
}
```

Simple enough, we just reuse our code from earlier.

But wait, we already have preexisting code to play the chop3 sound. It's in `playSound()`, and chop3 will be played when the chop3 button is clicked (à la `$("button").on("click",playSound);`)! If only we could somehow use that for the chop3 button.

Well, we can. Everything is set up for chop3 button to play a sound once it gets clicked, so why don't we just click it...with code?

What? We can click things using code? Of course. A click is just an event. We can trigger events with JavaScript by doing just that. jQuery offers a method called `.trigger()` which takes, you guessed it, a type of event.

That said, we can now replace our repetitive code like so:

```js
function delegateKeypress(event) {
  if (event.keyCode == 100) {
    --var chop3Sound = new Audio("chop3.mp3");--
    --chop3Sound.play();--
    $("#chop3").trigger("click");
  }
}
```

And just like that, we have leveraged jQuery to select the chop3 button (`$("#chop3")`) and trigger a click event on it (`.trigger("click")`).

What do you think happens next? Once the click event is triggered on the button, the button detects the click and responds by calling `playSound()`, thanks to the previously added line `$("button").on("click",playSound);`.

We can complete our function by creating similar conditionals for the other keys and sounds:

```js
function delegateKeypress(event) {
  if (event.keyCode == 100) {
    $("#chop3").trigger("click");
  }
  if (event.keyCode == 102) {
    $("#kick4").trigger("click");
  }
  if (event.keyCode == 106) {
    $("#perc1").trigger("click");
  }
  if (event.keyCode == 107) {
    $("#vox9").trigger("click");
  }
}
```

And that's it! Save your `main.js` and test out your improved soundboard!

## Part VIII: Publishing and Sharing

Now it's time to save your work with git and publish your code to GitHub and your personal website. Make sure you've saved all of your files on Cloud9!

Open up the console in Cloud9 if you don't see it already, by going to `View > Console`. Then, making sure you are on the tab that has a prompt with your username and workspace, type the following git commands:

1. `git add --all`
2. `git commit -m "Add soundboard workshop"`
3. `git push`

Enter your username and password, and you should be all set. This should update your personal website so that your soundboard can be found at `https://USERNAME.github.io/soundboard/`.

Post on [`#shipit`](https://starthackclub.slack.com/messages/shipit) with the URL, so everyone can see your amazing creation and create their own music!

## Part IX: Hacking

- add colors to buttons so you know when they are being used
- customize with more sounds (just add more buttons and sounds)
  - use sounds of someone speaking and construct silly sentences
- `setInterval` for looping
- set up a way to record the song (Notes: consider adding this as the final step, just as in dodge we added the dope graphics, because this might require guidance and add a compelling factor for user to customize in various ways)
- make it look more like a soundboard using CSS
- give your beats a music video (using canvas)
