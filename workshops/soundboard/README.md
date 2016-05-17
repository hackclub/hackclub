# Soundboard Workshop

Short link to this workshop: [https://workshops.hackclub.com/soundboard](https://workshops.hackclub.com/soundboard)

---

Today we're going to create our very own soundboard. You may have seen musicians such as Little Dragon, [Shawn Wasabi](https://www.youtube.com/watch?v=qAeybdD5UoQ), and many other musicians, using such things to improvise fresh beats at live performances. We can simulate this very easily with basic HTML and JavaScript.

Much like in Personal Website workshop, we'll be using HTML to create stuff visible on the browser. We'll also be using JavaScript, a programming language commonly used in web development, to include interactivity in our project. In addition, we will be making use of jQuery, which is a library that will make using JavaScript in the browser much simpler. This may seem like an exorbitant number of new tools, but we'll be biting off manageable pieces.

**Table of Contents**

- [Part I: Set-up](#part-i-set-up)
- [Part II: User Interface](#part-ii-user-interface) 
- [Part III: The JavaScript File](#part-iii-the-javascript-file)
- [Part IV: Repetition](#part-iv-repetition)
- [Part V: Rejoicing](#part-v-rejoicing)
- [Part VI: Upgrading](#part-vi-upgrading)
- [Part VII: Publishing and Sharing](#part-vii-publishing-and-sharing)
- [Part VIII: Hacking](#part-viii-hacking)

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

### Creating the Grid Structure

First, we'll make a box to contain our soundboard, by creating a [`div`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) in our **body**, right above the script tags:

```html
<body>
  <div>

  </div>

  <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
  <script src="main.js"></script>
</body>
```

Next, let's build the structure of our soundboard, by adding in rows to make a 2x8 grid. We'll do this by adding two `div` elements inside the `div` we just created:

```html
<div>
  <div>
  </div>
  <div>
  </div>
</div>
```

Let's give each of these an attribute called "class".

HTML elements can have many attributes. One example we've seen is the `src` attribute that the `<script>` tag has. Many attributes are optional, but can be helpful in adding more differentiation to the elements.

The "class" attribute helps categorize similar elements. Since each of these will be rows in our soundboard, we'll give them each a class of "row":

```html
<div>
  <div class="row">
  </div>
  <div class="row">
  </div>
</div>
```

Now we're ready to add in our buttons.

### Adding Buttons

We can create buttons that imitate the buttons on a soundboard, by using [the button tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) (`<button>`).

We use the button tag by typing the text we want on the button between the start (`<button>`) and close (`</button>`) tags. Create a button inside the second `<div class="row">`, like so:

```html
<div>
  <div class="row">
  </div>
  <div class="row">
    <button>C</button>
  </div>
</div>
```

This button will say "C" on it. Save and refresh live preview to see it.

You can have any text on your buttons that you desire, so long as you can still tell what sound they're going to make when you press them.

Now `index.html` looks like this:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Soundboard</title>
</head>
<body>
  <div>
    <div class="row">
    </div>
    <div class="row">
      <button>C</button>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
  <script src="main.js"></script>
</body>
</html>
```

As a user, we can tell the difference between each of the buttons, by what text is displayed on the buttons. But how can we differentiate them in code? One easy way is to supply each with an attribute known as an "`id`."

### Adding IDs to Buttons

An `id` is a unique-valued attribute we can add to HTML elements. We'll give our button its own `id` by modifying the previously added line, which will help us assign the corresponding sound to it.

```html
<button id="cNote">C</button>
```

Our HTML now looks like this:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Soundboard</title>
</head>
<body>
  <div>
    <div class="row">
    </div>
    <div class="row">
      <button id="cNote">C</button>
    </div>
  </div>

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
var cNote;
```

Next, we'll make a new Audio object with the `c1.mp3`, and assign it to our variable, by modifying the line we just added:

```js
v̶a̶r̶ ̶c̶N̶o̶t̶e̶;̶
var cNote = new Audio("c1.mp3");
```

Here, we've created a new `Audio` object that will have the sound `c1.mp3`, and assigned the Audio object to a variable named `cNote` which we declared in the same line.

And we'll play the sound by using a built-in method (`.play()`) included in the Audio object. We'll add this line beneath the creation of `cNote`, like so:

```js
var cNote = new Audio("c1.mp3");
cNote.play();
```

`.play()` is a function that is a part of the Audio object, that will play the sound.

Now, if you save your `main.js` file, you'll note that upon auto-reloading, the `index.html` page now plays a C note.

Yay! We've added audio to our webpage.

### Creating Functions

If we save our file and let `index.html` reload, we hear a C note. But we don't want this. We want the sound to play, but only at our command.

To have a little more control over the sound, let's create a function that will play it only when we call the function. A function in JavaScript stores a set of instructions in a variable. We can call the function to execute these instructions whenever we want.

We can create functions for the C note by **enclosing the code we've already written in the following way**:

```js
function makeANote() {
  var cNote = new Audio("c1.mp3");
  cNote.play();
}
```

Now, if we run our project, we'll find that there is no sound at all. Even when we press the button, there is no sound.

It's time to connect the button to our sound function.

### Detecting the Click

In order to connect the button and the function, we must first identify the button in `main.js`. Conveniently, we've given the button an `id` attribute in our `index.html`, making it easy to refer to in `main.js`.

We can [use jQuery to find the button](https://learn.jquery.com/using-jquery-core/selecting-elements/), by using special syntax. We'll type this below our function, in `main.js`:

```js
$("#cNote");
```

Now that we have selected our button in the JavaScript by its `id`, we can access the methods attached to the button.

One of the methods is `.on()`. This method sets the button to execute some instructions when something happens. Things that happen on the page by way of the user doing something are referred to as ["events."](https://learn.jquery.com/events/introduction-to-events/) When we use the [`.on()`](https://learn.jquery.com/events/handling-events/) method, we pair an event with a function that we want to occur when the event happens.

Here, we will use the method to detect the "click" event, so we'll provide `"click"` as the first argument to `.on()`:

```js
$̶(̶"̶#̶c̶N̶o̶t̶e̶"̶)̶;̶
$("#cNote").on("click");
```

`.on()` takes two arguments, the second of which is what you want to happen when the event has occurred. In our case, we want the C note to play when the button is clicked, so we add the function `makeANote` which we have already written, as an argument.

```js
$̶(̶"̶#̶c̶N̶o̶t̶e̶"̶)̶.̶o̶n̶(̶"̶c̶l̶i̶c̶k̶"̶)̶;̶
$("#cNote").on("click", makeANote);
```

To elaborate, we are:

1. Selecting the C note button, using jQuery and its syntax (i.e., notation) for recognizing IDs, and specifying the `cNote` id.
2. Calling the method associated with the button called `.on()`, which is able to bind certain actions with certain events, and thus dictate that the action be called when the event occurs.
3. Choosing to detect the "click" event.
4. Passing as an argument the function `makeANote()`, to tell `.on()` that upon noticing a click, it should execute the function (which in turn plays a sound).

Now, save your `main.js` file and try clicking on the C note button! Congratulations! Your browser now makes A note sounds.

## Part IV: Repetition

Let's do this for the other sounds, in a similar fashion. We'll add more buttons into the `index.html` and end up with the following:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Soundboard</title>
  </head>
  <body>

    <div>
      <div class="row">
        <button id="snare3">Snare</button>
        <button id="csNote">C#</button>
        <button id="dsNote">D#</button>
        <button id="fill1">fill1</button>
        <button id="fsNote">F#</button>
        <button id="gsNote">G#</button>
        <button id="asNote">A#</button>
        <button id="kick4">Kick4</button>
      </div>

      <div class="row">
        <button id="cNote">C</button>
        <button id="dNote">D</button>
        <button id="eNote">E</button>
        <button id="fNote">F</button>
        <button id="gNote">G</button>
        <button id="aNote">A</button>
        <button id="bNote">B</button>
        <button id="snare4">Snare</button>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
    <script src="main.js"></script>
  </body>
</html>
```

Add the corresponding functions and event handlers for the other sounds in `main.js`. The final version of your `main.js` should look like this:

```js
function makeCNote() {
  var cNote = new Audio("c1.mp3");
  cNote.play();
}

function makeDNote() {
  var dNote = new Audio("d1.mp3");
  dNote.play();
}

function makeENote() {
  var eNote = new Audio("e1.mp3");
  eNote.play();
}

function makeFNote() {
  var fNote = new Audio("f1.mp3");
  fNote.play();
}

function makeGNote() {
  var gNote = new Audio("g1.mp3");
  gNote.play();
}

function makeANote() {
  var cNote = new Audio("a1.mp3");
  cNote.play();
}

function makeBNote() {
  var bNote = new Audio("b1.mp3");
  bNote.play();
}

function makeCSharpNote() {
  var cSharpNote = new Audio("c1s.mp3");
  cSharpNote.play();
}

function makeDSharpNote() {
  var dSharpNote = new Audio("d1s.mp3");
  dSharpNote.play();
}

function makeFSharpNote() {
  var fSharpNote = new Audio("f1s.mp3");
  fSharpNote.play();
}

function makeGSharpNote() {
  var gSharpNote = new Audio("g1s.mp3");
  gSharpNote.play();
}

function makeASharpNote() {
  var aSharpNote = new Audio("a1s.mp3");
  aSharpNote.play();
}

function makeKick4Sound() {
  var kick4Sound = new Audio("kick4.mp3");
  kick4Sound.play();
}

function makeFill1Sound() {
  var fill1Sound = new Audio("fill1.mp3");
  fill1Sound.play();
}

function makeSnare3Sound() {
  var snare3Sound = new Audio("snare3.mp3");
  snare3Sound.play();
}

function makeSnare4Sound() {
  var snare4Sound = new Audio("snare4.mp3");
  snare4Sound.play();
}

$("#cNote").on("click", makeCNote);
$("#dNote").on("click", makeDNote);
$("#eNote").on("click", makeENote);
$("#fNote").on("click", makeFNote);
$("#gNote").on("click", makeGNote);
$("#aNote").on("click", makeANote);
$("#bNote").on("click", makeBNote);
$("#csNote").on("click", makeCSharpNote);
$("#dsNote").on("click", makeDSharpNote);
$("#fsNote").on("click", makeFSharpNote);
$("#gsNote").on("click", makeGSharpNote);
$("#asNote").on("click", makeASharpNote);
$("#kick4").on("click", makeKick4Sound);
$("#fill1").on("click", makeFill1Sound);
$("#snare3").on("click", makeSnare3Sound);
$("#snare4").on("click", makeSnare4Sound);
```

Upon saving and refreshing, you should be able to play each sound by clicking the corresponding button.

## Part V: Rejoicing

Yay! It works! Sounds are happening! See if you can create some fresh beats of your own. Add more buttons, play music together with a friend's soundboard, change the sounds, do it up!

## Part VI: Upgrading

Do you find it a bit difficult to have sounds overlay each other, because clicking from button to button is a bit difficult? We can solve this in a number of ways, all of which I encourage you to experiment with to see which works best for you. We could:

- Change the arrangement of buttons
- Make the buttons larger
- Instead of clicking, use keystrokes to make sounds

We'll be going over the last option: how to attach keys on the keyboard to the sounds.

### Detecting Keyboard Inputs on the Page

First, we must set up our JavaScript so that the page can detect that we have pressed a key. Thanks to jQuery, we can add this feature easily, with the following line of code, which we will type at the bottom of our `main.js`:

```js
$(document).keypress();
```

jQuery has a method called `.keypress()`, which takes as an argument a function that you want executed in the event that a key is pressed. Much like `.on()`, `.keypress()` listens for an event; specifically, it listens for the key pressed event. Here, we are specifying that we want to listen for a key press on the entire document, hence `$(document)`. `$(document)` is how jQuery refers to the whole page.

Now that we have set up the page to react when a key is pressed, we just need to tell it how to react. And we will do this by writing a function that gives instructions on what to do in the event that a key is pressed.

We will declare this function and name it `delegateKeypress` and pass it as an argument to the method `.keypress()` like so:

```js
$̶(̶d̶o̶c̶u̶m̶e̶n̶t̶)̶.̶k̶e̶y̶p̶r̶e̶s̶s̶(̶)̶;̶
$(document).keypress(delegateKeypress);

function delegateKeypress(event) {

}
```

`delegateKeypress()` takes an event as an argument, since that is where the information about the event is contained. Information that we need, such as which key was pressed.

### Attaching Keyboard Inputs to Sounds

Speaking of that, we need to assign keys to our sounds, so let's:

1. For our 2x8 grid, we'll be using the keys `q`, `w`, `e`, `r`, `a`, `s`, `d`, `f`, `u`, `i`, `o`, `p`, `j`, `k`, `l`, and `;`.
2. Find the key codes for your keys. We'll need this in order to write JavaScript to match up the keys with the sounds. You can find key codes by putting the line `console.log(event.keyCode);` in your `delegateKeypress` function and looking at the console in the Inspector.

Now that we've gotten the information for the keys, we'll pair each with a sound by writing a conditional that checks if the key pressed has a `keyCode` that corresponds to a sound. We'll add this in our `delegateKeypress()` function:

```js
if (event.keyCode == 97) {

}
```

Here we are saying, if the event's `keyCode` is equal to 97 (that's the key code for the `a` key), then do something (we haven't yet specified what). `event.keyCode` is an attribute of the event, and it contains the value of the key code of the key that was pressed.

So, if the key code is indeed 97, I would like a C note to be played. Fortunately, we already know how to play sounds:

```js
function delegateKeypress(event) {
  if (event.keyCode == 97) {
    var cNote = new Audio("c1.mp3");
    cNote.play();
  }
}
```

Simple enough, we just reuse our code from earlier.

But wait, we already have preexisting code to play the C note. It's in `playSound()`, and the C note will be played when the C note button is clicked (à la `$("button").on("click",playSound);`)! If only we could somehow use that for the C note button.

Well, we can. Everything is set up for the C note button to play a sound once it gets clicked, so why don't we just click it...with code?

What? We can click things using code? Of course. A click is just an event. We can trigger events with JavaScript by doing just that. jQuery offers a method called `.trigger()` which takes, you guessed it, a type of event.

That said, we can now replace our repetitive code like so:

```js
function delegateKeypress(event) {
  if (event.keyCode == 97) {
    v̶a̶r̶ ̶c̶N̶o̶t̶e̶ ̶=̶ ̶n̶e̶w̶ ̶A̶u̶d̶i̶o̶(̶"̶c̶1̶.̶m̶p̶3̶"̶)̶;̶
    c̶N̶o̶t̶e̶.̶p̶l̶a̶y̶(̶)̶;̶
    $("#cNote").trigger("click");
  }
}
```

And just like that, we have leveraged jQuery to select the C note button (`$("#cNote")`) and trigger a click event on it (`.trigger("click")`).

What do you think happens next? Once the click event is triggered on the button, the button detects the click and responds by calling `playSound()`, thanks to the previously added line `$("button").on("click",playSound);`.

We can complete our function by creating similar conditionals for the other keys and sounds:

```js
$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    console.log(event.keyCode);
    if (event.keyCode == 113) {
        $("#snare3").trigger("click");
    }
    
    if (event.keyCode == 119) {
        $("#csNote").trigger("click");
    }
    
    if (event.keyCode == 101) {
        $("#dsNote").trigger("click");
    }
    
    if (event.keyCode == 114) {
        $("#fill1").trigger("click");
    }
    
    if (event.keyCode == 117) {
        $("#fsNote").trigger("click");
    }
    
    if (event.keyCode == 105) {
        $("#gsNote").trigger("click");
    }
    
    if (event.keyCode == 111) {
        $("#asNote").trigger("click");
    }
    
    if (event.keyCode == 112) {
        $("#kick4").trigger("click");
    }
    
    if (event.keyCode == 97) {
        $("#cNote").trigger("click");
    }
    
    if (event.keyCode == 115) {
        $("#dNote").trigger("click");
    }
    
    if (event.keyCode == 100) {
        $("#eNote").trigger("click");
    }

    if (event.keyCode == 102) {
        $("#fNote").trigger("click");
    }
    
    if (event.keyCode == 106) {
        $("#gNote").trigger("click");
    }
    
    if (event.keyCode == 107) {
        $("#aNote").trigger("click");
    }
    
    if (event.keyCode == 108) {
        $("#bNote").trigger("click");
    }
        
    if (event.keyCode == 59) {
        $("#snare4").trigger("click");
    }
}
```

And that's it! Save your `main.js` and test out your improved soundboard!

## Part VII: Publishing and Sharing

Now it's time to save your work with git and publish your code to GitHub and your personal website. Make sure you've saved all of your files on Cloud9!

Open up the console in Cloud9 if you don't see it already, by going to `View > Console`. Then, making sure you are on the tab that has a prompt with your username and workspace, type the following git commands:

1. `git add --all`
2. `git commit -m "Add soundboard workshop"`
3. `git push`

Enter your username and password, and you should be all set. This should update your personal website so that your soundboard can be found at `https://USERNAME.github.io/soundboard/`.

Post on [`#shipit`](https://starthackclub.slack.com/messages/shipit) with the URL, so everyone can see your amazing creation and create their own music!

## Part VIII: Hacking

- add colors to buttons so you know when they are being used
- customize with more sounds (just add more buttons and sounds)
  - use sounds of someone speaking and construct silly sentences
- `setInterval` for looping
- set up a way to record the song (Notes: consider adding this as the final step, just as in dodge we added the dope graphics, because this might require guidance and add a compelling factor for user to customize in various ways)
- make it look more like a soundboard using CSS
- give your beats a music video (using canvas)
