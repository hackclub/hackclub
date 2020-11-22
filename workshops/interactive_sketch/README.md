---
name: Interactive Sketch
description: Doodle pineapples with the help of machine learning
author: '@MatthewStanciu'
---

![Gif of a human drawing part of a pineapple and a machine learning model filling in the rest](https://cloud-qvus77map.vercel.app/screen_recording_2020-09-17_at_5.49.18_pm.gif)

Have you ever wanted to sketch something, but you're bad at drawing and don't know how to finish it? Well now, thanks to the fact that our robot overlords are becoming increasingly sentient, we can use machine learning to help us draw!

[Link to Demo](https://InteractiveSketch.techbug2012.repl.co)

[Link to Code](https://repl.it/@TechBug2012/InteractiveSketch)

# Getting started

This workshop will use two libraries:

- [Magenta.js](https://magenta.tensorflow.org), a library built on top of Google's [TensorFlow](https://www.tensorflow.org) that allows you to easily use pre-trained machine learning models
- [p5.js](https://p5js.org), a fantastic library that makes creative coding in the browser easy. We'll use p5 to give ourselves a canvas to draw on

This project requires a lot of complicated setup that is outside the scope of this workshop, so we're going to skip it for now by starting from a starter repl that already has this setup complete for us.

Get started by [clicking here](https://repl.it/@TechBug2012/interactive-sketch-starter#script.js).

![Screenshot of the starter project](https://cloud-pl3k1n9v7.vercel.app/screen_shot_2020-09-18_at_4.56.12_pm.png)

You should see a pretty filled in `script.js` file with a comment that says `// Your code here!` on line 3. If you click the green button at the top that says "Run", you should see a basic HTML website that contains the skeleton of your project. Of course, this website doesn't do anything yet—that's what we're doing next!

# About all this extra code...

As mentioned above, the project that we're making actually requires a lot of complicated setup steps. If this workshop had to explain all of them, it would be way too long and complicated given what we're trying to make. So there will be some "magic"—or, prewritten code that we don't cover and that you don't need to understand—throughout.

But here's the secret about modern software development: everything is "magic". Repl.it, the online code editor we're using in this workshop, magically parses the code you're about to write and hosts it on the web. The Magenta.js library magically provides pre-trained machine learning models for you to easily use. The browser you're using to read this workshop magically reads HTML and CSS and renders it all into something that looks great. Your computer's operating system calculates billions of 0s and 1s a second and magically turns them into a tool you can use with ease.

All this is to say, as you're going through this workshop, don't worry if you feel like you're just plugging code into a mysterious function that magically spits out exactly what you need. **You're not supposed to understand everything that's going on.** Much of coding is just building something cool on top of layers upon layers of tools that others have spent years, sometimes decades, making feel like magic. Plus, this workshop will explain some of the magic to you along the way.

# Initializing

Let's start by creating a canvas that will allow us (and our model) to draw.

Delete the comment on line 3 in `script.js` and replace it with

```js
p.setup = function () {}
```

_(FYI, the first time you type, it'll be a little glitchy because it's forking my starter project over to your account)_

Then, in between those two lines of code, add:

```js
p.setup = function () {
  p.createCanvas(p.windowWidth, p.windowHeight)
}
```

This will create a canvas on the website that's the size of your window.

Next, we're going to call our first three ✨magical helper functions✨ to prepare the canvas for drawing, initialize the machine learning model, and make the buttons work. Under the line you just typed in the `setup()` function, add:

```js
p.setup = function () {
  p.createCanvas(p.windowWidth, p.windowHeight)
  restart()
  initModel(0)
  initDOMElements()
}
```

To understand what these functions to, let's take a peek at the code inside these helper functions.

![Picture of the restart function](https://cloud-kcenb4nrj.vercel.app/screen_shot_2020-09-21_at_1.27.35_pm_1.png)

We need to constantly be keeping track of the state of our sketch—the coordinates of the pen, whether or not we're currently drawing, whether or not the model should be drawing, etc. The `restart()` function resets all of these to their default values.

![Picture of the initModel() function](https://cloud-oirptf5ub.vercel.app/screen_shot_2020-09-21_at_1.40.20_pm.png)

The `initModel()` function loads the machine learning model from Magenta.js. The "0" argument is just telling it that we want to load the first model in the list. You can see the full list of models on line 3 in `lib/utils.js` if you're interested.

_Protip: this "list" is known as an array. [Learn more about arrays here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array_

![Picture of initDomElements](https://cloud-1a31v0vcv.vercel.app/screen_shot_2020-09-21_at_2.22.46_pm.png)

Finally, the `initDOMElements()` function adds the list of models to the dropdown and makes the "Clear Drawing" and "Random" buttons work.

![Picture of dropdown filled in](https://cloud-hl3ksrdip.vercel.app/screen_shot_2020-09-21_at_2.26.35_pm.png)

If you click the green "Run" button at the top of your repl, you should see that the dropdown is now filled with the list of all the models! If you click the "Random" button, you should see it load a random model. "Clear Drawing" works too, but you can't see the effects of it yet.

# Mouse actions 🖱

Now that we've set up our canvas, we're ready to start drawing on it.

![Gif of a human carefully drawing a stroke, then releasing it, then the machine learning model kicks in](https://cloud-2b7kt6m2v.vercel.app/screen_recording_2020-09-21_at_2.46.36_pm.gif)

This project is a little weird because we have to account for two different users drawing: the human using the website, and the machine learning model. Here's what needs to be done:

1. When the mouse is pressed, register that the mouse has been pressed, and start tracking of the coordinates of the mouse
2. As the mouse is being dragged across the canvas to form a stroke, continually record the state of the human stroke
3. When the mouse is released, feed the stroke to the active machine learning model and tell it to take over

This process is actually super easy. p5.js automatically listens for when the mouse is pressed, dragged, and released, and our helper functions are prewritten to do everything we just described.

## Listening for mouse click

Let's start by listening for when the user clicks their mouse on the canvas. Under the `p.setup()` function, add:

```js
p.mousePressed = function () {}
```

Everything between these two curly braces will be run automatically when the user presses their mouse.

Inside this function, let's add another helper function, `initStrokes()`.

```js
p.mousePressed = function () {
  initStrokes()
}
```

Finally, let's set the stroke color to red when a human is drawing.

```js
p.mousePressed = function () {
  initStrokes()
  p.stroke(p.color(255, 0, 0))
}
```

## Listening for mouse drag

Listening for when the mouse is dragged is just as easy with p5.js. Under your `p.mousePressed()` function, add:

```js
p.mouseDragged = function () {}
```

And again, we have a handy helper function that updates our stroke as we drag the mouse:

```js
p.mouseDragged = function () {
  updateStrokes()
}
```

## Processing our stroke

Finally, let's listen for when the user releases the mouse. Under the `p.mouseDragged()` function, add:

```js
p.mouseReleased = function () {}
```

And let's add our handy helper function that feeds our stroke into the machine learning model.

```js
p.mouseReleased = function () {
  processStroke()
}
```

## Viewing our current progress

![When you run your repl now, the mouse stroke is red! But nothing happens yet](https://cloud-fu8ago15r.vercel.app/screen_recording_2020-09-21_at_4.10.40_pm.gif)

If you click the green "Run" button at the top and draw on the screen, you should now see that you're drawing in red! But...why is nothing happening after you draw? Didn't we just feed the human strokes into the machine learning model?

# Letting the machine model draw

The human stroke is indeed being initialized, but nothing is actually being drawn yet. That's where p5's `draw()` function comes in.

Under the `p.mouseReleased()` function, add:

```js
p.draw = function () {}
```

This code will run continuously as long as your repl is running. Because it's running continuously, we can use it to constantly track whether or not the model is supposed to be drawing.

We only want the program to draw when the machine learning model is active, so let's start by filtering for that:

```js
p.draw = function () {
  if (!modelLoaded || !modelIsActive) {
    return
  }
}
```

This code means the function will not run if our machine learning model isn't active.

In addition to only when the machine learning model is active, we also want to draw only after the user has finished drawing a stroke. Let's add some code that tests for that. Under the previous `if` statement you just wrote, add:

```js
p.draw = function () {
  if (!modelLoaded || !modelIsActive) {
    return
  }

  if (pen[PEN.END] === 1) {
    initRNNStateFromStrokes(strokes)
  }
}
```

`pen[PEN.END] === 1` checks if the user has previously drawn but has lifted the mouse at one point.

![Screenshot of the initRNNStateFromStrokes function](https://cloud-lom2sp5bq.vercel.app/screen_shot_2020-09-21_at_5.11.37_pm.png)

the `initRNNStateFromStrokes()` helper function feeds human strokes into the machine learning model and tells the machine learning model to start drawing on the canvas. This produces the looping effect, where the machine learning model continues drawing multiple times, that you can see in the demo at the beginning of this workshop.

We've written code that runs when the machine learning model is running, but we haven't yet written code for what happens when the human is drawing. Let's add that.

```js
if (pen[PEN.END] === 1) {
  initRNNStateFromStrokes(strokes)
} else {
  updateHumanStroke()
}
```

One more thing: we want the model to constantly be aware of what's going on and know when it's supposed to start drawing. So just before the end of your `draw()` function, add:

```js
updateModelState()
```

![Final demo, drawing a bird](https://cloud-gt7uspr78.vercel.app/screen_recording_2020-09-21_at_6.50.24_pm.gif)

That's it! Now, if you run your repl and draw a circle, you should see the machine learning model fill in with endless predictions of what a bird looks like! If you choose another item on the dropdown and then click "Clear Drawing", the model should start drawing something else.
