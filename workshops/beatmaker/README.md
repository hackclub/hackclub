---
name: 'Drum Pad'
description: 'Build a Drum Pad in HTML/CSS & JS'
author: '@emmanuel39hanks'
---

# Creating a Drum Pad in HTML, CSS & JavaScript

![Drum Pad Preview](https://cloud-ms6ubs6qu.vercel.app/0screencapture-drum-emmanuel39hanks-repl-co-2020-11-07-23_20_37.png)

_Preview of the Drum Pad we are going to be creating._

In this workshop, we are going to be creating a drum pad in less than 230 lines of code.

[Link to demo](https://drum.emmanuel39hanks.repl.co)

## Getting started

Head over to repl.it(https://repl.it/) and we will get started by creating an HTML/CSS & JavaScript project. Once the project is set up, navigate to your `index.html` file, and we can start working on the pad layout. 

## Part 1

We are going to start writing HTML; going into our `<body>` tag, which is where we write code that will be shown to the client, create a header with the `<h1>` tag, and then we will have three rows, and four columns of pads and each pad will be a `<div>,` you can think of the `<div>` tag as a box or container.

```html

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

```

![Preview of HTML with no CSS](https://cloud-hqtl5tea3.vercel.app/0screencapture-drumpad-emmanuel39hanks-repl-co-2020-11-03-08_36_46.png)

And if we run our code, it should look like this.

Not so compelling, right? We will now write some CSS, which will style our HTML document and make our drum pad look prettier. Let's do that.

Just before the end of your `<head>` tag, link your CSS file:

```html

<link  rel="stylesheet"  href="style.css"  />

```

Your CSS file should now be linked, and we can start writing our CSS code.

We will start by writing code for our document to change the colors, adding fonts, height, width, and more. We are also going to be using the font Roboto (https://fonts.google.com/specimen/Roboto?query=roboto), to do that at the top of our CSS file, we will import it using the line `@import 'https://fonts.googleapis.com/css?family=Roboto';`

```css

@import  'https://fonts.googleapis.com/css?family=Roboto';

html,

body {

background-color: #fff;

height: 100%;

width: 100%;

display: flex;

flex-direction: column;

justify-content: center;

align-items: center;

overflow: hidden;

font-family: 'Roboto', sans-serif;

}

```

![Preview of HTML with CSS applied, to change the layout](https://cloud-bp7m8g6di.vercel.app/0screencapture-drumpad-emmanuel39hanks-repl-co-2020-11-03-08_35_57.png)

The major thing you will notice when we run our code this time is that our content has been aligned to the center.

We want to style the header to give it spaces and then create three rows and four columns to correctly align the pads and give them a box or container look. We will do just that.

```css

h1 {

color: #000;

font-size: 5vw;

letter-spacing: 6px;

}

.pad {

width: 500px;

display: flex;

justify-content: space-between;

flex-wrap: wrap;

}

.box {

width: 100px;

height: 100px;

margin: 10px  0;

box-shadow: 0  8px  6px  -6px  black;

background-color: #444;

display: flex;

justify-content: center;

align-items: center;

font-size: 20px;

color: rgba(255, 255, 255, 0.4);

user-select: none;

border: 4px solid;

}
```

If you run your code, nothing has changed. That's because we are using classes to group our HTML elements. Let's go back to our `index.html` and to our `<div>` we will want to add the class name `box` to our nested `div` elements, and the parent header will be given the class name `pad`:

```html

<div  class="pad">

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

![Preview of HTML with layout CSS applied, the pads are in a grid but all gray](https://cloud-edj42rbl8.vercel.app/0screencapture-drum-emmanuel39hanks-repl-co-2020-11-07-23_43_18.png)

And when we rerun our code, it should look like this.

We will write code to make hovering effects, inactive or active states, to make it stand out. and make the experience better. We will do that with the following code

```css
.box {

width: 100px;

height: 100px;

margin: 10px  0;

box-shadow: 0  8px  6px  -6px  black;

background-color: #444;

display: flex;

justify-content: center;

align-items: center;

font-size: 20px;

color: rgba(255, 255, 255, 0.4);

user-select: none;

// We will add these two properties to the .box class to add a colored rounded solid border.
border: 4px solid #E5446D; 

border-radius:15px;

}

.box:hover {

background-color: lighten(#444, 10%);

cursor: pointer;

}

.box:active {

background-color: darken(#444, 10%);

transform: scale(1.1);

transition: all  0.2s;

}

.active {

background-color: darken(#444, 10%);

transform: scale(1.1);

transition: all  0.2s;

}

```

![Preview of HTML with our finished layout CSS applied, and our pad borders colored](https://cloud-ms6ubs6qu.vercel.app/0screencapture-drum-emmanuel39hanks-repl-co-2020-11-07-23_20_37.png)

We are done with our styling and layout.

## Part 2

And finally, we are done with our CSS. It now looks good, but when you click on the buttons, we have no sound. We need to write our JavaScript code that will get us sound.

Navigate to the `index.html` file. Then, just before the end of your `<body>` tag, import your `script.js` file that will be used when our document loads:

```html

<script  src="script.js"></script>

```

We will then start writing our JavaScript code in the `script.js` file.

```javascript
function  play(link) {

let  audio = new  Audio(link);

audio.load();

audio.play();

}
```
What we did above is we created a function called `play()` and it receives a parameter with the name `link`, which is the link to the sound hosted on AWS (Amazon Web Services), don't worry, you won't need to host your files by yourself. You can use mine. We then create an audio object and pass the `link` to the object, and then what we do is we just load the audio with the `load()` function and play it with the `play` function.

All we need to do now is add an on click event to each of our nested `divs` then we call the `play()` function and pass the link to the sound file as our parameter.

Luckily the code required to playing sound is little all we have to do is navigate to our `index.html` file first, and then we add the `onclick=""` html attribute, and inside we call the `play(link)` with the link inside like below:
  
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

Suppose you haven't created an account on [repl.it](https://repl.it), make sure you do so to save this wonderful creation!

If you face any difficulties in signing up, [watch this](https://www.youtube.com/watch?v=Mtqp4CUepk0).

Now it is up to you! Do anything with this project, try to implement a way to play the drum pad with the corresponding keys on your keyboard. 

Check out these crazy examples!
To finish, here are some amazing, more customized drum pad machines/beatmakers made by other developers:

- A code playground on Solo Learn by Andrew Siachos (https://code.sololearn.com/WfYyBdZwc6qn/#html)

- Music Pad Controller with Keyboard (https://endertech.com/blog/music-pad-javascript-html-css)

- My favorite one is by Dev Ed, Make Music with JavaScript by on Youtube(https://www.youtube.com/watch?v=8T4SCksjrQ4).

  

We are done with our workshop. Go ahead, customize it, and add more things to it and have fun. I hope you enjoyed this workshop, happy hacking!
