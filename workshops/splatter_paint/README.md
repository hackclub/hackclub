---
name: 'Splatter Paint'
description: 'Make some splatter paint with Paper.js '
author: '@MatthewStanciu'
group: 'start'
order: 2
---

**Warning: the following workshop involves flashing colors and is not recommended for those with a history of epilepsy.**

One of the biggest fears that many people have when learning to code is that coding requires solving complex mathematical problems and a deep technical understanding of how computers work. You’re going to crush this myth in this workshop by making crazy, colorful splatter paint right in your browser.

![](https://raw.githubusercontent.com/hackclub/hackclub/splatter-paint/workshops/splatter_paint/img/demo.PNG)

## Getting started
Start by creating a new HTML project on repl.it by going to [repl.it/languages/html](https://repl.it/languages/html).

We’re going to be using a library called [Paper.js](http://paperjs.org), which makes it easy to create cool visuals on an [HTML canvas](https://www.w3schools.com/html/html5_canvas.asp).

To import a Javascript library in HTML, we use the `<script>` tag and include a link to the library we want to import. For Paper.js, this looks like:

```html
<script src="https://unpkg.com/paper@0.11.5/dist/paper-full.min.js"></script>
```

Add a script tag that imports Paper.js somewhere in the `<head>`. Then, directly under it, add the following:

```html
<script type=“text/paperscript” canvas=“splatterPaint” src=“/script.js”></script>
```

Let’s go over what each attribute of this tag does:

1. `type=“text/paperscript”` tells Paper.js that the code in the script is Paper.js code
2. `canvas=“splatterPaint”` refers to the ID of the HTML canvas that Paper.js will operate on (we haven’t created this canvas yet, but we will in a second)
3. `src=“script.js”` means that the content of this script is located in your `script.js` file

Remember when we referred to a canvas called `splatterPaint` that hasn’t been created yet? Let’s create that canvas. In the `<body>`, remove the line that imports `script.js` and replace it with

```html
<canvas id=“splatterPaint”></canvas>
```

Amazing—we’ve got ourself a canvas!

## Drawing some circles
Now that we’ve successfully imported Paper.js and created a canvas to work on, it’s time to write the code that will create our splatter paint.

Let’s write a function that draws a circle at the cursor’s position whenever the mouse is moved.

Start by creating a function called `onMouseMove()`:

```js
function onMouseMove(event) {

}
```

Although normally you can call functions whatever you want, it’s important that this function is called `onMouseMove()`. Paper.js knows what `onMouseMove()` is—when it sees a function with this name, it will know to run it every time the mouse moves.

Time to draw our circle! Inside the function you just created, add this code snippet, which creates a circle at the mouse cursor with a radius of 10px:

```js
var path = new Path.Circle({
	center: event.middlePoint,
	radius: 10
})
```

If you run your repl now and move your mouse around, you’ll see...nothing. You are drawing circles, but the circles are currently transparent. So, let’s give them some color. Under the previous code, still in the `onMouseMove()` function, add:

```js
path.fillColor = {
	hue: 0,
	saturation: 1,
	brightness: 1
}
```

Instead of using hexademical or RGB colors, which most people are familiar with, Paper.js uses the HSB color system, which is a system that uses angles to describe color. In the HSB color system, 0 = 0° = red, and `360*n`° is also red.

(If you’re interested in learning more about the HSB color system, check out [this fantastic explanation](https://learnui.design/blog/the-hsb-color-system-practicioners-primer.html)).

![](https://raw.githubusercontent.com/hackclub/hackclub/splatter-paint/workshops/splatter_paint/img/hsb-color-wheel.PNG)

With this in mind, try running your repl now. You’ll notice that you’re now drawing red circles, but only in the top left corner of the screen. That’s because your canvas’ width and height are currently set to the defaults (300px by 150px).

Let’s make your canvas fill the whole screen. In your `style.css` file, add the following:

```css
canvas {
  width: 100%;
  height: 100%;
}
```

Run your repl again.

Almost there. The CSS you just wrote set the canvas width and height to 100% of the parent element. In our case, this is the `<body>`, which is as big as the `<html>`. With this in mind, add the following to your CSS file.

```css
html, body {
	width: 100%;
	height: 100%;
	margin: 0;
}
```

This sets the width and height of the body to the width and height of your screen, and removes any extra space between the edge of your screen and the body.

If you run your repl again, you should notice that your red circles are now filling the entire screen. Woohoo!

![](https://raw.githubusercontent.com/hackclub/hackclub/splatter-paint/workshops/splatter_paint/img/red-circles.PNG)

Now that you can finally see your circles in all their glory, you can also play with their radii. Take a look at the [Paper.js docs on mouse events](https://paperjs.org/reference/mouseevent/). How can you use the properties of the MouseEvent to play with the radius? (here’s what I came up with: try setting the radius to `event.delta.length` and see what happens)

## Making it splattery
We’re getting somewhere, but this still doesn’t feel very splattery.

Part of what makes splatter paint so fun to create and look at is the chaotic randomness of everything on the canvas. So, if we want to get our website as close to splatter paint as possible, we should introduce some randomness.

![](img/real-splatter-paint.JPG)

Change the radius of your circles from `10` to `Math.floor(Math.random() * 30) + 5`. This makes the radius a random number between 5 and 30. Then run the repl again.

![](https://raw.githubusercontent.com/hackclub/hackclub/splatter-paint/workshops/splatter_paint/img/random-radius.PNG)

Not bad, but it all sort of blends together, doesn’t it? Maybe we can make each circle unique by making each one a different color. Try changing the hue from `0` to `event.count * 3`. Run the repl and see what happens.

![](https://raw.githubusercontent.com/hackclub/hackclub/splatter-paint/workshops/splatter_paint/img/rainbow-colors.PNG)

`event.count * 3` creates a rainbow effect by setting the hue on each circle to the total number of times a circle has been drawn multiplied by 3, which jumps around the HSB color wheel. And it looks great!

Congratulations! You’re well on your way to making splatter paint! If you haven’t already, open your repl in a new tab and treat yourself to a bigger canvas to go crazy on.

## Hacking
However, your journey is far from over. There are endless directions you can take this project in. Here are a few suggestions.

1. If you want to increase the distance between each circle, you can add `tool.fixed distance = SOME_NUMBER` to the top of your `script.js` file. This will fire the event after your cursor has moved every `SOME_NUMBER`px instead of every time your mouse moves.
2. If rainbows are too predictable for you, you can set the hue to a random number between 0 and 360 (remember, this covers every color on the HSB system)
3. Who says your canvas has to be white? Try setting the background color of your website to something custom, and/or change it every time a new circle is created.
4. Who says you have to draw circles? Try drawing a random mix of circles, ovals of random lengths and widths, and other shapes.
5. If you want to hurt your eyes and ears, try using the [Tone.js](https://tonejs.github.io) library to play a synth sound of a random frequency whenever a new circle is created.

Here are some example projects that have stemmed from this project:

- [https://welllitvelvetyoperation.techbug2012.repl.co](https://welllitvelvetyoperation.techbug2012.repl.co)
- [https://splatter-paint-crazy.techbug2012.repl.co](https://splatter-paint-crazy.techbug2012.repl.co) (**WARNING: FLASHY COLORS**)
- [https://wlhc-paperjs-demo-custom1.glitch.me](https://wlhc-paperjs-demo-custom1.glitch.me)

Your task now is to spend the rest of the meeting making this project insanely cool and totally unique.