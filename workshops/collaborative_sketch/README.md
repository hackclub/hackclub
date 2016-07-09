# Collaborative Sketch

Short link to this workshop: https://workshops.hackclub.com/collaborative_sketch

Demo: [here](https://prophetorpheus.github.io/collaborative_sketch/)

---

Draw with one or more friends! In this project we'll be combining HTML, p5.js, Firebase, and jQuery to create a collaborative sketchpad. We'll use p5.js to manipulate the drawing space, Firebase to keep track of our drawing in terms of points that we've marked in our drawing, and jQuery to easily manipulate HTML elements.

**Table of Contents**

- [Part I: Set-up](#part-i-set-up)
- [Part II: The JS File](#part-ii-the-js-file)
- [Part III: Odds and Ends](#part-iii-odds-and-ends)
- [Part IV: Publishing and Sharing](#part-iv-publishing-and-sharing)
- [Part V: Hacking](#part-v-hacking)

## Part I: Set-up

### Setting up the Files

As always, we'll open up our Cloud9 workspace, and make a new folder in `projects`. We'll name it `collaborative_sketch`.

Then, we'll make two files, `index.html` and `main.js`.

Next, we'll set up the `index.html` by typing the base template:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Collaborative Sketch!</title>
  </head>
  <body>
  </body>
</html>
```

And we'll add script tags for Firebase, p5.js, jQuery, and our own `main.js` file within our **body**.

```html
<script src="https://www.gstatic.com/firebasejs/live/3.0/firebase.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.23/p5.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="main.js"></script>
```

### Setting up the Firebase App

Much like we did in the last workshop, we'll need to create an app within Firebase. In this project, we'll be using Firebase to store the points of what we're drawing on our canvas.

Let's head over to our [Firebase dashboard](https://console.firebase.google.com/) and create a new project, which we will name `collaborative-sketch`.

We'll also:

- copy and paste the configuration info into our `main.js`
- add this line after the configuration info also into `main.js`:

  ```js
  var pointsData = firebase.database().ref();
  ```

- add `preview.c9users.io` to the list of Authorized Domains, within `Auth` > `Sign-in Methods`
- set database permissions to `true` for both reading and writing, within `Database` > `Rules`

And once we've done that, we're all set. Let's return to `main.js`.

## Part II: The JS File

At this point, `main.js` looks something like this:

```js
var config = {
  apiKey: "AIxaSyGsAkHke9lXEU_97a8rYpMn7gOH3eWDxrM",
  authDomain: "collaborative-draw.firebaseapp.com",
  databaseURL: "https://collaborative-draw.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);
  
var pointsData = firebase.database().ref();
```

Let's quickly walk through what a part of this code does.

```js
var config = {
  (...) // stuff hidden here for simplicity
}
```

This section of code creates a new `object` in JavaScript named `config`.  You can think of `object`s like containers for things like text or numbers which we call `properties`. 

`properties` are values that we store by name in the `object` and then retrieve at a later time.

```js
var config = {
  apiKey: "AIxaSyGsAkHke9lXEU_97a8rYpMn7gOH3eWDxrM",
  (...)
}
```

The first thing we've added to the object is a `property` named `apiKey`, which we assigned a jumbled value of text to.  To access this value, we can write:

```js
config.apiKey
```

The `.` is a special character that allows us to look inside of an `object`.  This can be used as a shortcut to replacing code, so writing `config.apiKey` is many times equivalent to writing the full jumbled text `"AIxaSyGsAkHke9lXEU_97a8rYpMn7gOH3eWDxrM"`.

In the same manner, `config.authDomain` would look inside to the `object` for the value of `authDomain` and become "replaced" by `"collab-draw.firebaseapp.com"`.

Can anybody guess what this line replaces?

```js
config.databaseURL
```

### Keeping Track of the Points

Beneath that, we'll add our p5.js functions, `setup()` and `draw()`:

```js
function setup() {
}

function draw() {
}
```

Then, within the `setup()` function, we'll create a canvas and paint the background. Here, we're creating a 400 by 400 canvas and coloring the background white:

```js
function setup() {
  createCanvas(400, 400);
  background(255);
}
```

We'll also set the fill to black, so that the ellipses we draw will be filled in black:

```js
function setup() {
  createCanvas(400, 400);
  background(255);
  fill(0);
}
```

### Syncing to Firebase

Next, we'll create an array to store the points that have been drawn on the canvas so far. Let's put this line above the `setup()` function:

```js
var points = [];
```

We'll need some way to get data from Firebase and into our `points` array, so let's add a call to Firebase at the end of `setup()`:

```js
pointsData.on("child_added", function (point) {
  points.push(point.val());
});
```

You'll notice that we've created a function at the same time that we're passing it as an argument. This function does not have a name, and is not stored anywhere. It exists only to be passed as an argument to `.on()`. This is called an anonymous function.

It would be equivalent if we had declared a function, perhaps named `addPointToPointsArray`, and then passed that in as our argument to `.on()`.

Now our `main.js` should look like this:

```js
var config = {
  apiKey: "AIxaSyGsAkHke9lXEU_97a8rYpMn7gOH3eWDxrM",
  authDomain: "collaborative-draw.firebaseapp.com",
  databaseURL: "https://collaborative-draw.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);
  
var pointsData = firebase.database().ref();

var points = [];

function setup() {
  createCanvas(400, 400);
  background(255);
  fill(0);
  pointsData.on("child_added", function (point) {
    points.push(point.val());
  });
}

function draw() {
}
```

### Displaying the Points

Next, we'll want to display the points that we've requested from Firebase, by moving through the `points` array and drawing an ellipse at each point:

```js
function draw() {
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    ellipse(point.x, point.y, 5, 5);
  }
}
```

We'll also want to repaint the background at each `draw()` function call, so let's call `background()` before drawing the points:

```js
function draw() {
  background(255);

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    ellipse(point.x, point.y, 5, 5);
  }
}
```

### Drawing Points

Now let's add functionality to be able to click and draw, and have the points that we've drawn be updated in Firebase.

We'll first create a function that takes the mouse x and y position and pushes that information to Firebase:

```js
function drawPoint() {
  pointsData.push({x: mouseX, y: mouseY});
}
```

[`mouseX`](https://p5js.org/reference/#p5/mouseX) and [`mouseY`](https://p5js.org/reference/#p5/mouseY) are provided by p5.js.

We don't even have to draw ellipses directly in these functions, because that'll be taken care of by the `.on()` handler that we have in `setup()`, which will get our newly created points from Firebase and add them to the `points` array, which will then be drawn by `draw()`.

Next, we'll set up our functions to detect clicking and dragging. Normally we would use `mousePressed()` and `mouseDragged()`, but we want to restrict the event handling to the canvas. We don't want to send mouse data to Firebase if the clicking isn't happening within the canvas.

So instead, we'll be detecting mouse activity with one of the canvas's methods. In order to call a method of canvas, we must store our canvas in a variable. Alter the `createCanvas()` line in `setup()`:

```js
c̶r̶e̶a̶t̶e̶C̶a̶n̶v̶a̶s̶(̶4̶0̶0̶,̶ ̶4̶0̶0̶)̶;̶
var canvas = createCanvas(400, 400);
```

And then we can use the `.mousePressed()` method, and pass in our previously created `drawPoint()` function as an argument. This means that `drawPoint()` will be executed when there is a mouse pressed on the canvas.

Type the following at the end of the `setup()` function:

```js
canvas.mousePressed(drawPoint);
```

We also want `drawPoint()` to be called when we drag our mouse, but there is no `.mouseDragged()` method. So we'll make our own, out of the `mouseIsPressed` p5.js property, and the canvas method `.mouseMoved()`. If `mouseIsPressed` is true during `.mouseMoved()`, that means our mouse is being dragged!

We can start by adding this beneath `canvas.mousePressed(drawPoint);`:

```js
canvas.mouseMoved(drawPoint);
```

That's not _quite_ right, because we want to execute `drawPoint()`, but only if `mouseIsPressed` is true.

We could write a separate function:

```js
function drawPointIfMousePressed() {
  if (mouseIsPressed) {
    drawPoint();
  }
}
```

And then use it:

```js
canvas.mouseMoved(drawPointIfMousePressed);
```

**OR**

We can use an anonymous function:

```js
canvas.mouseMoved(function () {
  if (mouseIsPressed) {
    drawPoint();
  }
});
```

Notice that the body of the function is the same! The only difference is that our anonymous function has no name, and is created right inside `.mouseMoved()`.

Now, if we save and refresh live preview, we'll be able to draw stuff. Then, if we link the URL of our external live preview to a friend, we'll be able to see what they're drawing as well! Awesome!

## Part III: Odds and Ends

The last part of this workshop is including some nice features. We'll add two buttons: one to save the drawing that's been made, and one to delete the drawing.

In our `index.html`, we'll create a sort of control panel, with a `div` containing our two buttons:

```html
<div id="controls">
 <button id="saveDrawing">Save to Computer</button>
 <button id="clearDrawing">DELETE DRAWING</button>
</div>
```

In our `main.js`, we'll create the functionality behind these two buttons, and then attach it to the HTML elements using jQuery.

```js
$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
}

$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
}
```

How do we define these functions? Well, we've already seen how to save our canvas -- using the `saveCanvas()` function offered by p5.js! Let's fill in our `saveDrawing()` function:

```js
function saveDrawing() {
  saveCanvas();
}
```

And what of our `clearDrawing()` function? Well, first, we should remove everything currently stored in our Firebase app, and then we should wipe our `points` array:

```js
function clearDrawing() {
  pointsData.remove();
  points = [];
}
```

To make other screens clear when the drawing is removed from Firebase:

```js
pointsData.on("child_removed", function () {
  points = [];
});
```

Congratulations! Your collaborative drawing app is now complete.

## Part IV: Publishing and Sharing

Make sure your files are all saved, and then run the familiar git commands.

Then, remember to add `USERNAME.github.io` to the list of Authorized Domains on your Firebase app. After that, your project should be live on `USERNAME.github.io/collaborative_sketch/`!

Share your URL to the [`#shipit`](https://starthackclub.slack.com/messages/shipit/) channel on Slack, so that everyone can collaborate together!

## Part V: Hacking

You can create other collaboration-driven projects using Firebase, such as a story game! Or use Firebase to organize an internet scavenger hunt!

**Examples:**

- [Change drawing settings](http://sohuang.github.io/collaborative_sketch/)
- [Draw continuous lines](http://maxwofford.com/collaborative_sketch/)
