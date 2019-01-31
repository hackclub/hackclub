### But wait, there's a problem.

If you watch closely, you may notice something strange here: sometimes, the sky will _skip_ flashes. We didn't add any code for that… so what's going on?

Remember that `flashOff` is called only 10ms after `flashOn`. That's only 1/100th of a second!

Your computer is fast, but it isn't magic. Everything takes time, including the process of "drawing" this page. Usually the computer redraws the page very quickly and frequently. But your computer is juggling _lots_ of stuff—playing music, updating apps, receiving emails—so sometimes the drawing process slows down just enough for the sky to flash on and off _before it has a chance to redraw_.

So it might look like this:

`flashOn | DRAW | flashOff | DRAW | DRAW | DRAW | flashOn | DRAW DRAW | flashOff | DRAW | flashOn | flashOff | DRAW`

Look at that last `flashOn`/`flashOff`—there is no DRAW inbetween, so you _won't see any flash_.

So `setTimeout(flashOff, 10)` is actually _not_ a reliable way to draw something very fast like lightning!

If only we could guarantee that every flash would look like this:

`flashOn | DRAW | flashOff | DRAW`

Thankfully we can, using a function called `requestAnimationFrame`. This works kinda like `setTimeout`, except instead of triggering a function after some number of milliseconds, it triggers a function _just before_ the next DRAW.

We want to "request" a frame each time we change the screen. So once for `flashOn`, and once for `flashOff`.

Change your code in `click` to trigger `flashOn` with `requestAnimationFrame`, like this:

```javascript
function click() {
  console.log("Clicking");

  // Ask the browser to trigger flashOn just before the next "redraw"
  requestAnimationFrame(flashOn);

  ...
}
```

Then change your code in `flashOn` to trigger `flashOff` with `requestAnimationFrame` instead of `setTimeout`, like this:

```javascript
function flashOn() {
  console.log("Flashing On");
  body.style.background = "white";

  // Ask the browser to trigger flashOff just before the next "redraw"
  requestAnimationFrame(flashOff);

  ...
}
```

```html

```
