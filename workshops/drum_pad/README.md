---
name: 'Drum Pad'
description: 'Creating a Drum Pad with HTML, CSS & JS'
author: '@emmanuel39hanks'
---

Ever wondered how you can play sounds with code? Well, if yes, then you will love this workshop! We will be creating a drum pad in less than 230 lines of code that plays actual sounds, and if you are a beginner, this won't only be fun and creative but will help you get comfortable with coding!

<p align='center'>
<img src="https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif" alt="ready-to-code" >
</p>


# Overview

_Preview of the Drum Pad we are going to be creating_

![Drum Pad Preview](https://cloud-ms6ubs6qu.vercel.app/0screencapture-drum-emmanuel39hanks-repl-co-2020-11-07-23_20_37.png)

Apart from building the drum pad, you will also be learning about different types of events, functions, styling, and more with Vanilla JavaScript, HTML, and CSS. This whole workshop is customizable according to you, and the best part is, it will take less than 20 minutes to complete! 

[Link to demo](https://drum.emmanuel39hanks.repl.co)

[Link to code](https://github.com/emmanuel39hanks/beat_maker)

## Getting started

Let's start by setting up or coding environment on [repl.it](https://repl.it/), a free, online code editor.
To start your coding right away, navigate to https://repl.it/languages/html, and you will have your whole setup ready when you sign up.

You will see that there are already three files named index.html, style.css, and script.js. Navigate to your `index.html` file, and we can start working on the structure of our drum pads in our HTML file. 

## HTML:

We will start writing HTML, going into our `<body>` tag, where we write code that will be shown to the user.

Inside the `<body>` tag, we will create a big header that displays the text `DRUM PAD`, and we will do that with the `<h1>` tag:

```html
<h1>DRUM PAD</h1>
```

Then just under the `<h1>` tag, we will have three rows and four columns of pads, and each pad will be created with the `<div>` tag. You can think of the `<div>` tag as a box or container, and that's why we are using it here because each of our pads will have a boxy look.

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

To quickly break this down. We have a parent `<div>` tag that nests or holds all of our pads, and then we just pass letters from A to L to easily identify each pad and like I mentioned above, each pad will be given a box look, and that's why we are using `div` tags.

And if we run our code, it should look like this:

![Preview of HTML with no CSS](https://cloud-hqtl5tea3.vercel.app/0screencapture-drumpad-emmanuel39hanks-repl-co-2020-11-03-08_36_46.png)

# CSS:

But this doesn't look that nice, right? We will write some CSS to add styling, which make our drum pad look prettier. Let's do that!

Just before the end of your `<head>` tag, link your CSS file:

```html

<link rel="stylesheet" href="style.css"/>

```

Your CSS file should be linked, and we can start writing our CSS code.

Navigate to your `style.css` file and add the following code:

We will be writing code to change the colors, adding fonts, height, width, and more. We are also going to be using the font [Roboto](https://fonts.google.com/specimen/Roboto?query=roboto).

So, we will import the font first and then edit the properties of our `<body>` tag to change the background color, height, width, display type, font family, and alignment of our content.

```css

/* The import rule allows you to @import a style sheet into another style sheet. The @import rule must be at the top of the document. */

/* Here, we are importing the Roboto font from Google fonts. */

@import  'https://fonts.googleapis.com/css?family=Roboto';

body {

  background-color: #fff;

  height: 100%;

  width: 100%;

  /* The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container */

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  /* The CSS overflow property controls what happens to content that is too big to fit into an area. This text is really long, and the height of its container is only 100 pixels. Therefore, a scrollbar is added to help the reader to scroll the content. */

  /* And we hide all content that overflows. */

  overflow: hidden;

  /* Here, we set the font of our web page to 'Roboto', and the reason we are padding two is in case 'Roboto' doesn't load, we are going to revert to the font sans-serif. */

  font-family: 'Roboto', sans-serif;

}

```

When we run our code, you will notice that our content has been aligned to the center, and that's because we changed the properties of our `<body>` tag, and the `<body>` tag renders content to our web page.

![Preview of HTML with CSS applied, to change the layout](https://cloud-bp7m8g6di.vercel.app/0screencapture-drumpad-emmanuel39hanks-repl-co-2020-11-03-08_35_57.png)

We want to style the header's font size, color, and letter spacing.

```css

/* Changing properties of our `<h1>DRUM PAD</h1>`, giving it a white color in hex values, a font size of 5 Viewport Width and letter spacing of 6px. */

h1 {

  color: #000;

  /* This unit is based on the width of the user's visible area of a web page. A value of 1vw is equal to 1% of the visible area of a web page width. */

  font-size: 5vw;

  /* Letter spacing just adds space horizontally between text characters. */

  letter-spacing: 6px; 

}
```

Then create three rows and four columns to correctly align the pads and give them a box or container look.

```css

/* Here, we are changing the properties of our container that holds all our pads changing the width, display, how we justify the content, and a flex-wrap. */

.pad {

  width: 500px;

  display: flex;

  /* The justify-content property aligns flex items along the main axis of the current line of the flex container. It defines how space is distributed between and around flex items. */

  /* And a flex item is a flex container that expands items to fill available free space or shrinks them to prevent overflow. */

  justify-content: space-between;

  /* The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked, and in this case, we tell them to wrap. */

  flex-wrap: wrap;

}
```

We will change each of our pad's properties, and we will do that with the class name `.box`, to give them unique styling.

```css

/* Here, we are changing the values of our individual pads in the pad area that holds all our pads. */

.box {

  width: 100px;

  height: 100px;

  margin: 10px  0;

  /* The box-shadow property is used to cast one or more drop shadows to an element. Each shadow is defined by one to five components: a horizontal offset value, a vertical offset value, an optional blur radius, an optional spread radius, and an optional color. */

  box-shadow: 0  8px  6px  -6px  black;

  background-color: #444;

  display: flex;

  /* Here, like above, we justify our content and this time to the center. */

  justify-content: center;


  /* The align-items property sets the align-self value on all direct children as a group */

  align-items: center;

  font-size: 20px;

  /* We are changing the color of our individual pad, and in this case, instead of using hex values or a normal color name, we use rgb() */

  /* The rgb() function define colors using the Red-green-blue (RGB) model. An RGB color value is specified with rgb(red, green, blue). Each parameter defines the intensity of that color and can be an integer between 0 and 255 or a percentage value (from 0% to 100%). */

  color: rgba(255, 255, 255, 0.4);

  /* user-select property specifies whether the text of an element can be selected. In web browsers, if you double-click on some text, it will be selected/highlighted. This property can be used to prevent this. */

  user-select: none;

  /* The border property sets the border around an HTML element, meaning all four borders (top, right, bottom, and left). */

  /* Here, we are giving our individual pads a 4px solid border. */

  border: 4px solid;

}
```

If you run your code, nothing has changed. That's because we are using classes, and the HTML class attribute specifies one or more class names for an element. Classes are used by CSS and JavaScript to select and access specific elements. The class attribute can be used on any HTML element.

Let's go back to our `index.html`, to our parent `<div>` we will give it the class name `pad` and to our nested `<div>` tags We want to add the class name `box` which will add the styles that we wrote in our CSS.

```html

<!-- Here we give the parent div the class name pad -->
<div  class="pad">

<!-- Here we give the nested divs each the class name box that will add styling of each individual pad -->

  <div  class="box">A</div>

  <div  class="box">B</div>

  <div  class="box">C</div>

  <div  class="box">D</div>

  <div  class="box">E</div>

  <div  class="box">F</div>

  <div  class="box">G</div>

  <div  class="box">H</div>

  <div  class="box">I</div>

  <div  class="box">J</div>

  <div  class="box">K</div>

  <div  class="box">L</div>

</div>

```

And when we rerun our code, it should look like this:

![Preview of HTML with layout CSS applied, the pads are in a grid but all gray](https://cloud-edj42rbl8.vercel.app/0screencapture-drum-emmanuel39hanks-repl-co-2020-11-07-23_43_18.png)

We will go where we wrote styling for our `.box` class, and we will add styling that will give our pads a rounded border with a pinkish color.

```css
.box {

  /* We will add these two properties to the .box class to add a colored rounded, solid border. */

  border: 4px solid #E5446D; 

  /* The border-radius property defines the radius of the element's corners. */

  /* This property allows you to add rounded corners to elements! */

  border-radius: 15px;

}
```

We will then add code that adds hovering effects, inactive or active states to our pads.

```css
/* The :hover pseudo-class in CSS selects elements when the mouse cursor is over them. */

/* Here, we will add the :hover pseudo-class on the .box class styling to make the pad lighter when the cursor hovers on it. */

.box:hover {

  background-color: lighten(#444, 10%);

  /* Changing the cursor to a pointer when we hover on the pads. */

  cursor: pointer;

}

/* :active is a CSS pseudo-class that specifies and selects an element based on a state—the active state—and is used to apply styles to an element when it matches that state. The :active pseudo-class is a dynamic class that applies when an element is activated by the user. */

/* And we will use the :active pseudo-class on the .box class and add styling for when the pads are in an active state. */

.box:active {

  /* When the pad is clicked, we darken the pad with a gray-ish represented by the hex value #444, darken 10% */

  background-color: darken(#444, 10%);

  /* transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model. */

  /* Here, we just make it 10% larger when clicked with the scale() function. */

  transform: scale(1.1);

  /*CSS transitions provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. */

  /* We give a transition that lasts a period of 0.2 seconds, and we use a value of “all” to refer to transition properties. */

  transition: all  0.2s;

}

```

Now that we have finished our styling, here's what your website should look like:

![Preview of HTML with finished layout CSS applied, and our pad borders colored](https://cloud-ms6ubs6qu.vercel.app/0screencapture-drum-emmanuel39hanks-repl-co-2020-11-07-23_20_37.png)

## JavaScript:

When you click on the buttons, we have no sound. We need to write our JavaScript code that will get us sound.

We will start by navigating to the `index.html` file to link our JavaScript file. Then, just before the end of your `<body>` tag, import your `script.js` file that will be used when our document loads:

```html

<script src="script.js"></script>

```

We will start writing our JavaScript code in the `script.js` file.

```javascript


  // A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

function play(link) {

    let audio = new Audio(link);
    
  // Creating an audio variable and giving it the name audio. To the variable, we create a new Audio object which will give us the functionality to sounds, and to the object, we pass the link.

  // let is just another keyword that allows you to declare a variable in JavaScript.

    // We load the sound from the link

    audio.load();

    // And we play it here

    audio.play();

}
```

To explain what we did above, we created a function called `play()`, and it receives a parameter, which is `link`. This is the link to the sound hosted on AWS (Amazon Web Services). Don't worry, you won't need to host your files by yourself. You can use mine. We then create an audio object and pass `link` to the object. Now we can just load the audio with the `load()` function and play it with the `play()` function.

All we need to do now is add an on click event to each of our nested `divs` then we call the `play()` function and pass the link to the sound file as our parameter.

Luckily the code required to playing our sounds is minimal. Let's navigate to our `index.html` file first, and then we will add the `onclick=""` HTML attribute, and inside we call the `play(link)` with the link inside like below:
  
```html

<div  class="pad">

  <div  class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0025.mp3')">A</div>

  <div  class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0010.mp3')">B</div>

  <div  class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0000.mp3')">C</div>

  <div  class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/RS.mp3')">D</div>

  <div  class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/OH25.mp3')">E</div>

  <div  class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/MA.mp3')">F</div>

  <div  class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CY0010.mp3')">G</div>

  <div  class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CH.mp3')">H</div>

  <div  class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CB.mp3')">I</div>

  <div  class="box" onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0010.mp3')">J</div>

  <div  class="box"  onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0000.mp3')">K</div>

  <div  class="box"  onclick="play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CP.mp3')">L</div>

</div>

```

If you run your code now, you should see a working drum pad!
If everything works, your drum pad is complete!


![Image](https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif)

## Hacking

Now that you have finished building, you should share your beautiful creation with other people! Remember, it's as easy as giving them your URL! Don't forget to share it with me on Slack @emmanuel39hanks.

## Resources

- Audio Object (https://www.w3schools.com/JSREF/dom_obj_audio.asp)
- Onclick event (https://www.w3schools.com/jsref/event_onclick.asp)
- Explanation on the Flex Direction CSS property (https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)

Make sure you have created an account on [repl.it](https://repl.it) to save this wonderful creation!

Now it is up to you! Do anything with this project, try to implement a way to play the drum pad with your keyboard's corresponding keys. 

To finish, here are some amazing, more customized drum pad machines/beatmakers made by other developers:

- A code playground on Solo Learn by Andrew Siachos (https://code.sololearn.com/WfYyBdZwc6qn/#html)

- Music Pad Controller with a Keyboard (https://endertech.com/blog/music-pad-javascript-html-css)

- My favorite one is by Dev Ed, Making Music with JavaScript (https://www.youtube.com/watch?v=8T4SCksjrQ4).
