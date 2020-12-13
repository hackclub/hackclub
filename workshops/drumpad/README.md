---
name: 'Drum Pad'
description: 'Creating a Drum Pad with HTML, CSS & JS'
author: '@emmanuel39hanks'
img: 'https://cloud-edj42rbl8.vercel.app/0screencapture-drum-emmanuel39hanks-repl-co-2020-11-07-23_43_18.png'
---

Ever wondered how you can play sounds with code? Well, if yes, then you will love this workshop! We will be creating a drum pad with less than 230 lines of code that plays actual sounds.

![Am ready GIF](https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif)
# Overview

_Preview of the Drum Pad we are going to be creating_

![Drum Pad Preview](https://cloud-edj42rbl8.vercel.app/0screencapture-drum-emmanuel39hanks-repl-co-2020-11-07-23_43_18.png)

Apart from building the drum pad, you will also be learning about different types of events, functions, styling, and more with Vanilla JavaScript, HTML, and CSS.

Final Code: [GitHub](https://github.com/emmanuel39hanks/beat_maker), Demo: [Live](https://drum.emmanuel39hanks.repl.co)

## Getting started

Let's start by setting up our coding environment using [repl.it](https://repl.it/), a free, online code editor.
To begin, navigate to [repl.it](https://repl.it/languages/html), and create a new repl.

You will see that there are already three files: index.html, style.css, and script.js. Navigate to your `index.html` file, and we will work on the structure of our drum pad there. 

## HTML:

We will write most of our HTML code inside the `body` tag. Let's start by creating a header that displays the text `DRUM PAD` using the `h1` tag:

```html
<h1>DRUM PAD</h1>
```

Just under the `h1` tag, we will have three rows and four columns of buttons. Each button will be created with a `div` tag. You can think of a `div` tag as a box or container, and we are using it because each of our buttons will have a boxy look.

```html
<!-- Parent div -->
<div>
  <!-- nested child divs -->
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
  <div>F</div>
  <div>G</div>
  <div>H</div>
  <div>I</div>
  <div>J</div>
  <div>K</div>
  <div>L</div>
</div>
```

To quickly break this down. We have a parent `div` tag that nests our button `divs`, and then we label our buttons with letters to easily identify them, and like I mentioned above, each button will be given a boxy look, and that's why we are using `div` tags.

<details>  
<summary>Here's what your entire index.html file should look like so far:</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <h1>DRUM PAD</h1>
    <div>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div>E</div>
        <div>F</div>
        <div>G</div>
        <div>H</div>
        <div>I</div>
        <div>J</div>
        <div>K</div>
        <div>L</div>
    </div>
  <script src="script.js"></script>
</body>
</html>
```
</details>

When we run our code, it will look like this at the moment:

![Preview of HTML with no CSS](https://cloud-hqtl5tea3.vercel.app/0screencapture-drumpad-emmanuel39hanks-repl-co-2020-11-03-08_36_46.png)

# CSS:

Now let's write some CSS styles for our drum pad to make it look visually appealing!

Let's navigate to our `style.css` file and add the following code:

```css
body {
  background-color: #fff;
  height: 100%;
  width: 100%;
  
  /* To learn more about the CSS flex box, check out the hacking section */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* To learn more about the overflow property, check out the hacking section */
  overflow: hidden;

  /* To learn more about the font-family property, check out the hacking section */
  font-family: sans-serif;
}
```

When we run our code, you will see that our content has been aligned to the center, and that's because we changed the properties of our `body` tag, and the tag basically renders the content on a web page.

![Preview of HTML with CSS applied, to change the layout](https://cloud-bp7m8g6di.vercel.app/0screencapture-drumpad-emmanuel39hanks-repl-co-2020-11-03-08_35_57.png)

We're going to be using classes to add styling to our `div` tags, a class name is an HTML attribute that points to a tag or a group of tags that have the same class name. Classes are used by CSS and JavaScript to select and access specific tags, the class attribute can be used on any HTML tag by adding the keyword `class=""` to it.

Let's navigate back to our `index.html`, We will give our parent `div` tag the class name `pad`, and all our nested `div` tags will get the class name `box` which will apply the styling that our classes have.

```html
<div class="pad">
  <div class="box">A</div>
  <div class="box">B</div>
  <div class="box">C</div>
  <div class="box">D</div>
  <div class="box">E</div>
  <div class="box">F</div>
  <div class="box">G</div>
  <div class="box">H</div>
  <div class="box">I</div>
  <div class="box">J</div>
  <div class="box">K</div>
  <div class="box">L</div>
</div>
```

Now navigate to your `style.css`, and we will change our header's font size, color, and letter spacing using the following code:

```css
h1 {
  color: #000;

  /* To learn more about the font-size property, check out the hacking section */
  font-size: 5vw;

  /* To learn more about the letter-spacing property, check out the hacking section */
  letter-spacing: 6px; 
}
```

Then we create three rows and four columns to correctly align our header and buttons.

```css
.pad {
  width: 500px;
  display: flex;

  /* To learn more about the justify-content property, check out the hacking section */
  justify-content: space-between;
  
  /* To learn more about the flex-wrap property, check out the hacking section */
  flex-wrap: wrap;
}
```

We will write styling for our class name `.box`, to specify our buttons unique styling.

```css
.box {
  width: 100px;
  height: 100px;
  margin: 10px 0;

  /* To learn more about the box-shadow property, check out the hacking section */
  box-shadow: 0 8px 6px -6px black;
  background-color: #444;
  display: flex;

  justify-content: center;

  /* To learn more about the align-items property, check out the hacking section */
  align-items: center;
  font-size: 20px;

  /* To learn more about the rgba function, check out the hacking section */
  color: rgba(255, 255, 255, 0.4);

  /* To learn more about the border-radius property, check out the hacking section */
  border: 4px solid;
}
```

And when we run our code again, it should look like this:

![Preview of HTML with layout CSS applied, the pads are in a grid and all gray borders](https://cloud-edj42rbl8.vercel.app/0screencapture-drum-emmanuel39hanks-repl-co-2020-11-07-23_43_18.png)

We will then add styling that adds hovering effects, inactive or active states to our buttons:

```css
/* To learn more about the lighten function and :hover pseudo class, check out the hacking section */
.box:hover {
  background-color: lighten(#444, 10%);

  /* To learn more about the cursor property, check out the hacking section */
  cursor: pointer;
}

/* To learn more about the :active pseudo class, check out the hacking section */
.box:active {
  /* To learn more about the darken function, check out the hacking section */
  background-color: darken(#444, 10%);

  /* To learn more about the transform property, check out the hacking section */
  transform: scale(1.1);

  /* To learn more about the transition property, check out the hacking section */
  transition: all 0.2s;
}
```

Now that we have finished our styling, let's work on our drum pad functionality.

## JavaScript:

When you click on the buttons, we have no sound. We need to write some JavaScript code that will play sounds.

Navigate to your `script.js` file and add the following code:

```javascript
function play(link) {
    let audio = new Audio(link);
    audio.load();
    audio.play();
}
```

To explain what we did, we created a function called `play()`, it receives a parameter, which is `link`. This is the link to the sound. We then create an audio object and pass the link to the object. Now we can just load the audio with the `load()` function and with the `play()` function we can play our sound. A function is a block of code designed to perform a particular task, it is executed when "something" invokes it (calls it).

All we need to do now is find a way to play sound when a button is clicked.

Navigate to your `index.html` file, we want a sound to play when a button is click, we will need a way to call our `play()` function. We will use an HTML attribute called `onclick=""`, learn more about the onclick event here: [onclick events](https://www.w3schools.com/jsref/event_onclick.asp), it helps us call a function when a tag with the attribute is clicked on, inside the quotation marks, we pass the `play()` function and pass a link as the parameter to the function. And when a button is clicked, it will get triggered and call the `play()` function and play the sound from that link:

```html
<div class="pad">
  <div class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0025.mp3')">A</div>
  <div class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0010.mp3')">B</div>
  <div class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0000.mp3')">C</div>
  <div class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/RS.mp3')">D</div>
  <div class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/OH25.mp3')">E</div>
  <div class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/MA.mp3')">F</div>
  <div class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CY0010.mp3')">G</div>
  <div class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CH.mp3')">H</div>
  <div class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CB.mp3')">I</div>
  <div class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0010.mp3')">J</div>
  <div class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0000.mp3')">K</div>
  <div class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CP.mp3')">L</div>
</div>
```

If you run your code now, you should see a working drum pad!

![We did it GIF](https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif)

## Hacking

Now that you have finished building, you can share your beautiful creation with other people! Remember, it's as easy as giving them your URL! Don't forget to share it with me on Slack @emmanuel39hanks.

**Resources:**

- [JavaScript Audio Object](https://www.w3schools.com/JSREF/dom_obj_audio.asp)
- [JavaScript onclick event](https://www.w3schools.com/jsref/event_onclick.asp)
- [CSS flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
- [CSS flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
- [CSS justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
- [CSS Flex box](https://www.w3schools.com/css/css3_flexbox.asp)
- [CSS overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
- [CSS font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
- [CSS letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
- [CSS transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [CSS transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [CSS :hover pseudo class](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)
- [CSS :hover pseudo class](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)
- [CSS cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
- [CSS lighten & darken function](https://css-tricks.com/snippets/javascript/lighten-darken-color/)
- [CSS border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
- [CSS rgba function](https://www.w3schools.com/cssref/func_rgba.asp)
- [CSS box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
- [CSS align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
- [CSS font-family](https://www.w3schools.com/css/css_font.asp)

Now it's up to you! Do anything with this project, go on and implement something crazy. 

To finish, here are some examples of what can be built on top of this project:

- **Play an automated beat track:** [demo and code](https://repl.it/@emmanuel39hanks/drumpadwithabeattrack)
- **Play the drum pad with your keyboard:** [demo and code](https://repl.it/@emmanuel39hanks/drumpadwithkeyboard)
- **A beautifully styled drum pad:** [demo and code](https://repl.it/@emmanuel39hanks/beautifulstyleddrumpad)
