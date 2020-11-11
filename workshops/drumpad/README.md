---
name: 'Drum Pad'
description: 'Creating a Drum Pad in HTML, CSS & JS'
author: '@emmanuel39hanks'
---

# Creating a Drum Pad in HTML, CSS & JavaScript

In this workshop, we are going to be creating a drum pad in less than 230 lines of code.

_Preview of the Drum Pad we are going to be creating_

![Drum Pad Preview](https://cloud-ms6ubs6qu.vercel.app/0screencapture-drum-emmanuel39hanks-repl-co-2020-11-07-23_20_37.png)

[Link to demo](https://drum.emmanuel39hanks.repl.co)

## Getting started

Head over to repl.it (https://repl.it/) and we will get started by creating an HTML/CSS & JavaScript repl. Once the repl is set up, navigate to your `index.html` file, and we can start working on the pad layout. 

## Part 1

We are going to start writing HTML; going into our `<body>` tag, which is where we write code that will be shown to the user of the web page. Let's create a header with the `<h1>` tag. Then we will have three rows and four columns of pads and each pad will be a `<div>`. you can think of the `<div>` tag as a box or container.

We will do that with the following code:

```html

<!-- Header tag -->
<h1>DRUM PAD</h1>

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

And if we run our code, it should look like this:

![Preview of HTML with no CSS](https://cloud-hqtl5tea3.vercel.app/0screencapture-drumpad-emmanuel39hanks-repl-co-2020-11-03-08_36_46.png)

Not so compelling, right? We will now write some CSS, which will style our HTML document and make our drum pad look prettier. Let's do that.

Just before the end of your `<head>` tag, link your CSS file:

```html

<link rel="stylesheet" href="style.css"/>

```

Your CSS file should be linked, and we can start writing our CSS code.

We will start by writing code for our document to change the colors, adding fonts, height, width, and more. We are also going to be using the font Roboto (https://fonts.google.com/specimen/Roboto?query=roboto), to do that at the top of our CSS file, we will import it using the line `@import 'https://fonts.googleapis.com/css?family=Roboto';`

```css

/* The import rule allows you to @import a style sheet into another style sheet. The @import rule must be at the top of the document. */

/* And we are importing the Roboto font from Google fonts. */

@import  'https://fonts.googleapis.com/css?family=Roboto';

html,

body {

  background-color: #fff;

  height: 100%;

  width: 100%;

  /* The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container */

  display: flex;

  /* flex-direction: column; The flexbox items are ordered the same way as the text direction, along the cross axis. The flexbox items are ordered the opposite way as the text direction, along the cross axis. */

  flex-direction: column;

  justify-content: center;

  align-items: center;

  /* The CSS overflow property controls what happens to content that is too big to fit into an area. This text is really long and the height of its container is only 100 pixels. Therefore, a scrollbar is added to help the reader to scroll the content. */

  /* And we hide all content that overflows. */

  overflow: hidden;

  /* Here we set the font of our web page to 'Roboto' and the reason we are padding two is in case, 'Roboto' doesn't load we are going to revert to the font san-serif. */

  font-family: 'Roboto', sans-serif;

}

```

The major thing you will notice when we run our code this time is that our content has been aligned to the center.

![Preview of HTML with CSS applied, to change the layout](https://cloud-bp7m8g6di.vercel.app/0screencapture-drumpad-emmanuel39hanks-repl-co-2020-11-03-08_35_57.png)

We want to style the header to give it spaces and then create three rows and four columns to correctly align the pads and give them a box or container look. We will do just that.

```css

/* Changing properties of our `<h1>DRUM PAD</h1>`, giving it a white color in hex values, a font size of 5 Viewport Width and letter spacing of 6px. */

h1 {

  color: #000;

  /* This unit is based on the width of the user's visible area of a web page. A value of 1vw is equal to 1% of the visible area of a web page width. */

  font-size: 5vw;

  /* Letter spacing just adds space horizontally between text characters. */

  letter-spacing: 6px; 

}

/* Here we are changing the properties of our container that holds all our pads changing the width, display, how we justify the content and a flex wrap. */

.pad {

  width: 500px;

  display: flex;

  /* The justify-content property aligns flex items along the main axis of the current line of the flex container. It defines how space is distributed between and around flex items. */

  /* And a flex item is a flex container that expands items to fill available free space or shrinks them to prevent overflow. */

  justify-content: space-between;

  /* The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked and in this case we tell them to wrap. */

  flex-wrap: wrap;

}

/* Here we are changing value of our individual pads in the pad area that holds all our pads. */

.box {

  width: 100px;

  height: 100px;

  margin: 10px  0;

  /* The box-shadow property is used to cast one or more drop shadows to an element. Each shadow is defined by one to five components: a horizontal offset value, a vertical offset value, an optional blur radius, an optional spread radius, and an optional color. */

  box-shadow: 0  8px  6px  -6px  black;

  background-color: #444;

  display: flex;

  /* Here like above, we justify our content and this time to the center. */

  justify-content: center;


  /* The align-items property sets the align-self value on all direct children as a group */

  align-items: center;

  font-size: 20px;

  /* We are changing the color of our individual pad and in this case, instead of using hex values or a normal color name we use rgb() */

  /* The rgb() function define colors using the Red-green-blue (RGB) model. An RGB color value is specified with: rgb(red, green, blue). Each parameter defines the intensity of that color and can be an integer between 0 and 255 or a percentage value (from 0% to 100%). */

  color: rgba(255, 255, 255, 0.4);

  /* user-select property specifies whether the text of an element can be selected. In web browsers, if you double-click on some text it will be selected/highlighted. This property can be used to prevent this. */

  user-select: none;

  /* The border  property sets the border around an HTML element, meaning all four borders (top, right, bottom and left). */

  /* Here we are giving our individual pads a 4px border that is solid. */

  border: 4px solid;

}
```

If you run your code, nothing has changed. That's because we are using classes to group our HTML elements. Let's go back to our `index.html` and to our `<div>` we will want to add the class name `box` to our nested `div` elements, and the parent header will be given the class name `pad`:

```html

<!-- Here we give the parent div the class name pad -->
<div  class="pad">

<!-- Here we give the nested divs each the class name box -->

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

We will write code to make hovering effects, inactive or active states, to make it stand out. and make the experience better. We will do that with the following code

```css
.box {

  width: 100px;

  height: 100px;

  /* The margin CSS property sets the margin area on all four sides of an element. It is a shorthand for margin-top , margin-right , margin-bottom , and margin-left  */

  margin: 10px  0;

  box-shadow: 0  8px  6px  -6px  black;

  background-color: #444;

  display: flex;

  justify-content: center;

  align-items: center;

  font-size: 20px;

  color: rgba(255, 255, 255, 0.4);

  user-select: none;

  /* We will add these two properties to the .box class to add a colored rounded solid border. */

  border: 4px solid #E5446D; 

  /* The border-radius property defines the radius of the element's corners. */

  /* This property allows you to add rounded corners to elements! */

  border-radius:15px;

}

/* The :hover pseudo class in CSS selects elements when the mouse cursor is current over them. */

/* Here we use the pseudo class on the individual pad to make the pad lighter when the cursor hovers on it. */

.box:hover {

  background-color: lighten(#444, 10%);

  /* Here we change the cursor to a pointer when we hover on the pads. */

  cursor: pointer;

}

/* :active is a CSS pseudo-class. It specifies and selects an element based on a state—the active state—and is used to apply styles to an element when it matches that state. The :active pseudo-class is a dynamic class which applies when an element is being activated by the user. */

.box:active {

  /* When the pad is clicked we darken the pad with a gray-ish represented by the hex value #444, darken 10% */

  background-color: darken(#444, 10%);

  /* transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model. */

  /* Here we just make it 10% larger when clicked with the scale() function. */

  transform: scale(1.1);

  /*CSS transitions provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. */

  /* We give a transition that lasts a period of 0.2 seconds and we use a value of “all” to refer to transition properties. */

  transition: all  0.2s;

}

```

We are done with our styling and layout:

![Preview of HTML with our finished layout CSS applied, and our pad borders colored](https://cloud-ms6ubs6qu.vercel.app/0screencapture-drum-emmanuel39hanks-repl-co-2020-11-07-23_20_37.png)

## Part 2

And finally, we are done with our CSS. It now looks good, but when you click on the buttons, we have no sound. We need to write our JavaScript code that will get us sound.

Navigate to the `index.html` file. Then, just before the end of your `<body>` tag, import your `script.js` file that will be used when our document loads:

```html

<script  src="script.js"></script>

```

We will start writing our JavaScript code in the `script.js` file.

```javascript

  // We create a function called play and let it take a parameter which will be a link.

  // A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

  function  play(link) {

  // Creating an audio variabe and giving it the name audio. To the variable we create a new Audio object which will give us the functionality to sounds, and to the object we pass the link.

  // let is just another keyword that allows you to declare a variable in JavaScript.

  let audio = new Audio(link);

  // We load the sound from the link

  audio.load();

  // And we play it here

  audio.play();

}
```
What we did above is we created a function called `play()` and it receives a parameter which is `link`, which is the link to the sound hosted on AWS (Amazon Web Services), don't worry, you won't need to host your files by yourself. You can use mine. We then create an audio object and pass the `link` to the object, and then what we do is we just load the audio with the `load()` function and play it with the `play` function.

All we need to do now is add an on click event to each of our nested `divs` then we call the `play()` function and pass the link to the sound file as our parameter.

Luckily the code required to playing our sounds is minimal, let's navigate to our `index.html` file first, and then we will add the `onclick=""` html attribute, and inside we call the `play(link)` with the link inside like below:
  
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

And we have built the Drum Pad successfully.
Try it out by clicking the pads and see the magic!

![Image](https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif)
 
## Publishing

Now that you have finished building it, you should share your beautiful creation with other people! Remember, it's as easy as giving them your URL! Don't forget to share it with me on Slack @emmanuel39hanks.

## Resources
  
- HTML Docs (https://www.w3schools.com/html/)
- CSS Docs (https://www.w3schools.com/css/)
- JavaScript Docs (https://www.w3schools.com/js/)
- Audio Object (https://www.w3schools.com/JSREF/dom_obj_audio.asp)
- Onclick event (https://www.w3schools.com/jsref/event_onclick.asp)
- JavaScript functions (https://www.w3schools.com/js/js_functions.asp)

## The End

Make sure you have created an account on [repl.it](https://repl.it) to save this wonderful creation!

If you face any difficulties in signing up, [watch this](https://www.youtube.com/watch?v=Mtqp4CUepk0).

Now it is up to you! Do anything with this project, try to implement a way to play the drum pad with the corresponding keys on your keyboard. 

Check out these crazy examples!
To finish, here are some amazing, more customized drum pad machines/beatmakers made by other developers:

- A code playground on Solo Learn by Andrew Siachos (https://code.sololearn.com/WfYyBdZwc6qn/#html)

- Music Pad Controller with a Keyboard (https://endertech.com/blog/music-pad-javascript-html-css)

- My favorite one is by Dev Ed, Making Music with JavaScript (https://www.youtube.com/watch?v=8T4SCksjrQ4).

  
We are done with our workshop. Go ahead, customize it, and add more things to it and have fun. I hope you enjoyed this workshop, happy hacking!
