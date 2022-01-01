---
name: 'Reverse Workshop: Stressed Ball'
description: 'learn to code like real programmers, by looking everything up'
author: '@leomcelroy'
img: 'https://cloud-4h5kwjg61-hack-club-bot.vercel.app/0demo.png'
locales: 'es-xl'
---

Today let’s try to make this stressed out little ball.

![Stressed Ball](https://cloud-hgjwh224h-hack-club-bot.vercel.app/0gif_1.gif)

It's a little colored circle that moves around the screen.

What’s going to be a bit different is that I’m **not** going to tell you how to do it. You're going to find out for yourself. This workshop will perhaps be a bit challenging, if you end up making something different from the ball that's totally fine. Just try to challenge yourself by getting your drawing to move, grow, bounce, etc. The ball is just a push in that direction.

If you are having trouble figuring something out ask people around you too. Try to figure things out together.

## Template

To get started head over to this [live-editor](https://hackclub.github.io/live-editor/) (use a Chrome or Chromium browser) and paste in this starter template. It creates a canvas for our circle to live in.

```html
<style>
  body {
    margin: 0px;
  }

  #root {
    display: grid;
    place-content: center;
    background: coral;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
</style>

<div id="root">
  <canvas width="300px" height="300px"></canvas>
</div>

<script type="module">
  function resize() {
    const container = document.querySelector("#root");
    const c = document.querySelector("canvas");
    c.width = container.clientWidth;
    c.height = container.clientHeight;
  }

  resize();

  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const w = canvas.width;
  const h = canvas.height;
	
  // BEGIN YOUR CODE

  // VARIABLES HERE

  function draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);

    // DRAW CIRCLE HERE (3 lines)

    // COLOR CIRCLE HERE (2 lines)

    // CHANGE VARIABLES HERE

  }

  // END YOUR CODE

  setInterval(draw, 10);
</script>
```

To help get you along I'll give you some targets that break down the project, and mention some things which will be helpful in your searches. Google (and StackOverflow.com) will be dear friends on your coding journey.

**Tips:**

- **Look for short code snippets.** Better to find something you can copy, run, then understand than to read about the history of specifications.
- **Be explicit.** Tell yourself out loud what you want to do in plain english before doing it in code. All good code starts with good thoughts.
- **Use the browser tools.** Open up the DevTools to use the JavaScript console and HTML inspector. Helpful error messages will be logged in the console. You can do this by right clicking and pressing inspect element.
- **Mess with stuff.** If you are curious what something is try changing it and see what happens. All of the numbers can be clicked and dragged.
- **Look stuff up.** There are a number of prompts for questions `written like this` try Googling them.

## Landmarks

### Draw a circle

![circle outline](https://cloud-frxdc2f2o-hack-club-bot.vercel.app/1screen_shot_2021-11-02_at_12.21.50_pm.png)

When you get your circle on the screen, try and decipher what the code is doing to make it. In JavaScript function calls look like this `functionName(argument0, argument1)`. There can be any number of arguments. When you draw the circle try to figure out what the different arguments mean.

**Questions**

- `How do I draw a circle with javascript canvas?`
- `Example beginPath() and stroke() in js canvas?`

### Color your circle

![Colored circle](https://cloud-frxdc2f2o-hack-club-bot.vercel.app/2screen_shot_2021-11-02_at_12.23.35_pm.png)

There are lots of ways to describe colors in code, like: 

- hex (`#ff4455`)
- rgb (`rgb(100, 200, 30)`)
- hsl (`hsl(34, 23%, 43%)`)
- some words (`orange`)

Your color will probably be in a [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), written like:

- `"red"`

**Questions**

- `How to fill a shape js canvas?`
- `How to set a fill style js canvas?`
- `How to color a shape js canvas?`

### Move your circle

![Circle moving](https://cloud-hgjwh224h-hack-club-bot.vercel.app/1gif_2.gif)

You'll want to use variables, like this:

- `let y = 10;`

**Questions**

- `How do I increase a variable js?`
- `Whats the difference between declaration and assignment in js?`
- `Which direction is up on the canvas?`

### Dealing with abandonment

Let's stop the ball from running away off the screen. So how do we get from this

![Circle moving diagonally](https://cloud-hgjwh224h-hack-club-bot.vercel.app/2gif_3.gif)

to this

![Circle moving diagonally](https://cloud-hgjwh224h-hack-club-bot.vercel.app/3gif_4.gif)

or this

![Circle moving diagonally then bouncing](https://cloud-hgjwh224h-hack-club-bot.vercel.app/4gif_5.gif)

**Questions**

- `What values correspond to the left, right, top and bottom of the screen?`
- `How can we get something to wrap around?`
- `How do we control the direction of movement?`
- `How to use conditionals in js?`
- `How to use modulo arithmetic in js?`

### Spruce it up

![Circle moving diagonally while changing it's color](https://cloud-hgjwh224h-hack-club-bot.vercel.app/5gif_6.gif)

Add some randomness to x and y

- `How do I generate a random number in js?`

Have the color change with position, here is a simple example of string interpolation which will be useful to you

```html
`hsl(${number}, 60%, 80%)`
```

**Questions**

- `string interpolation in js`
- `hsl coloring`

Notes on math

- division and multiplication change rates
- negative/positive signs corresponds to direction

## Sharing


Leave 15 minutes at the end of the workshop for people to share their work. You can hit share link in the live-editor to generate a link to your site. Share it with Hack Club by pasting the link in the input box at the bottom of [this](https://workshops.hackclub.com/stressed_ball/) page.
