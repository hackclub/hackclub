---
name: Speak Colors
description: Color your screen with your voice via speech recognition.
author: '@lachlanjc'
---

# Speak Colors

_Note: this workshop requires Google Chrome or another browser [supporting the Web Speech API](https://caniuse.com/#feat=speech-recognition)._

We’ll be using [p5.js](https://p5js.org) & the p5.speech library to make something fun with web speech recognition! Say a color name out loud, & the screen will fill with that color.

[**Live demo**](https://speak-colors.glitch.me)

## Setup

First, let’s make a new HTML project on [repl.it](https://repl.it): [start one right here](https://repl.it/languages/html).

Next, we need to import the p5 & p5.speech libraries. Because these are long URLs, just replace the file with this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Speak a Color</title>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.min.js"></script>
    <script src="https://rawcdn.githack.com/IDMNYU/p5.js-speech/e7ae007d61f048fc2379971b0de7d5db8abb7eee/lib/p5.speech.js"></script>
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

But never copy & paste code without reading it 🙂

- We’re initializing an HTML page
- We’re giving it a `<title>`, which appears as the tab name in your browser
- We’re linking the two external libraries we need
- Finally, a link to the `script.js` file we’ll write our own JavaScript code in

The rest of the code samples in this workshop will all be for `script.js`, where we write the p5 code.

## Displaying instructions

First, we need to set up a canvas with p5.

- We want the canvas to fill the screen, so p5's `windowWidth` & `windowHeight` come in handy.
- Let’s go ahead & fill the background with white, and make the text color dark grey.

```js
function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)
  fill(25)
}
```

The page still looks empty, oops! Let’s add some initial instructions, even though they won’t do anything yet.

(You only need the `text()` line here—you can omit the `textSize`, `textAlign` etc—but these other lines make the text more fun-looking. Feel free to change the size or font!)

```js
function setup() {
  createCanvas(windowWidth, windowWidth)
  background(255)
  fill(25)

  textSize(48)
  textAlign(CENTER)
  textStyle(BOLDITALIC)
  textFont('"Avenir Next", system-ui, sans-serif')
  text('SAY A COLOR', width / 2, height / 2)
}
```

Fantastic! Up next: the speech recognition we came here for.

## Running speech recognition

The p5.speech library has [an example](https://github.com/IDMNYU/p5.js-speech/blob/master/examples/05continuousrecognition.html) of "continuous" speech recognition—that is, the mic stays active after you’ve said your first phrase, instead of being one-time.

Let’s set up continuous speech recognition, and display an alert when new speech is transcribed:

```js
const speech = new p5.SpeechRec('en-US', parseResult)
speech.continuous = true
speech.interimResults = false

function setup() {
  // …
  text('SAY A COLOR', width / 2, height / 2)
  speech.start()
}

function draw() {
  // Where we’re going we don’t need drawing
}

function parseResult() {
  if (speech.resultValue) {
    alert(speech.resultString)
  }
}
```

We’re getting there…

## Changing the color

Because HTML/CSS support a wide array of [named colors](https://html-color-codes.info/color-names/), we’re going to use those for this project. (You can read more about [where the color names come from](https://www.chenhuijing.com/blog/where-did-css-named-colours-come-from/), or if you want to extend this project, figure out how to use [JavaScript objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) to support your own colors!)

For the first iteration, we’re just supporting single-word colors, because it’s simplest.

- We’re starting with the `speech.resultString`, which we used before.
- To get the last word:
  - We’ll do [`.split(' ')`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split), which converts the text into a [JavaScript array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of words: `'hello there friend'.split(' ')` is `['hello', 'there', 'friend']`
  - `.pop()` then gets the last item from the array, which is the last word as a string
- Finally, because we want all text on the site to be in all-caps, we’ll add `.toUpperCase()`
- These function calls can all be chained next to each other!

```js
// …
function parseResult() {
  if (speech.resultValue) {
    alert(
      speech.resultString
        .split(' ')
        .pop()
        .toUpperCase()
    )
  }
}
```

Spectacular! Now let’s set the background color to the color, and write it onscreen.

```js
// …
function parseResult() {
  if (speech.resultValue) {
    const color = speech.resultString
      .split(' ')
      .pop()
      .toUpperCase()
    background(color)
    text(color, width / 2, height / 2)
    console.log(color)
  }
}
```

- Because we need to use the color name in multiple places, we’re setting it to a variable, so that we don’t have to do the whole split/pop/upperCase things multiple times.
- Setting the background is as simple as `background(color)`. Thanks, p5!
- Adding the text onscreen works just the way the instructions did. Because we want it centered horizontally & vertically, we set the x coordinate to `width / 2` (so the midpoint of the width of the canvas), & the y to `height / 2` (same for canvas height).
- The `console.log` line is totally optional, but it allows you to see what’s being transcribed in your [DevTools JavaScript console](https://developers.google.com/web/tools/chrome-devtools/console/log).

## Wrapping up

That’s it! Here’s the whole `script.js` file:

```js
const speech = new p5.SpeechRec('en-US', parseResult)
speech.continuous = true
speech.interimResults = false

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)
  fill(25)

  textSize(48)
  textAlign(CENTER)
  textStyle(BOLDITALIC)
  textFont('"Avenir Next", system-ui, sans-serif')
  text('SAY A COLOR', width / 2, height / 2)
  speech.start()
}

function draw() {
  // Where we’re going we don’t need drawing
}

function parseResult() {
  if (speech.resultValue) {
    const color = speech.resultString
      .split(' ')
      .pop()
      .toUpperCase()
    background(color)
    text(color, width / 2, height / 2)
    console.log(color)
  }
}
```

A few ideas to take this further:

- Support multi-word color names. Hint: instead of getting the last word, maybe figure out how to remove the spaces?
- As aforementioned, support your own colors 👀
- Keep track of all the colors, maybe show them all simultaneously?
