---
name: 'Creating a DrumPad/Beat Maker in HTML, CSS & JQuery'
description: 'A web drumpad/beat maker in HTML/CSS & JQuery to see how cool web dev is!'
author: '@emmanuel39hanks'
---

# Creating a DrumPad/Beat Maker in HTML, CSS & JQuery

![Beat Maker Preview](https://i.ibb.co/r0JLpWB/Annotation-2020-09-20-200719.png)

_^ Preview of the DrumPad/Beat Maker we are going to be creating_

In this workshop, you’re going to create a drumpad/beat maker that plays actual sounds, in less than 230 lines of code.

[Link to demo](https://AssuredStudiousNotifications--five-nine.repl.co)

## Getting started
We’re going to be using HTML, CSS & jQuery(a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax).

Get started by creating an HTML/CSS & JavaScript project on repl.it. Once your project is setup, navigate to the `index.html` file. Then, just before the end of your `<head>` tag, import jQuery:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
```

Great! Now that we’ve imported jQuery, we’re ready to start writing our code.

## Laying out our pads!

We are going to start out by writing HTML code we are going to go into our `<body>` tag which is where we write code that will be shown to the client and create a header with the `<h1>` tag, and then we will have 3 rows and 4 columns of pads and each pad will be a `<div>`, you can think of the `<div>` as a box or container.


```html
<h1>BEAT MAKER</h1>

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


![Preview](https://i.ibb.co/72XvNn3/Annotation-2020-09-20-204442.png)
And if we run our code it should look like this.
Not so compelling right? we will now need to write some CSS which will style our HTML document and make our Beat Maker look prettier, let's do that.

Just before the end of your `<head>` tag, link your CSS file:

```html
<link rel="stylesheet" href="style.css">
```


Your CSS file should now be linked and we can start writing our CSS code.


We're going to start by writing code for our document to change the colors, adding fonts, height, width etc, we are also going to be using a custom font so to do that at the top of our CSS file we will import it using the line `@import 'https://fonts.googleapis.com/css?family=Roboto';`
```css
@import 'https://fonts.googleapis.com/css?family=Roboto';

html, body {
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

![Beat Maker Preview](https://i.ibb.co/qgY3jCv/Annotation-2020-09-20-210409.png)

The major thing you will notice when we run our code this time is that our content has ben aligned to the center.

Now what we want to do is style the header to give it spaces and then creates 3 rows and 4 colums to perfectly align the pads and give them a box or container look we will do just that. 

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
  margin: 10px 0;
  box-shadow: 0 8px 6px -6px black;
  background-color: #444;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.4);
  user-select: none;
}

.pad-1, .pad-2, .pad-3, .pad-4, .pad-5, .pad-6, .pad-7, .pad-8, .pad-9, .pad-10, .pad-11, .pad-12 { 
  border: 2px solid; 
}

```

If you run your code nothing has changed, that because we are using class to group our HTML elements, let's go back to our `index.html` and to our `<div>` we will want to do the following:

```html
<div class="pad">
    <div class="box pad-1">A</div>
    <div class="box pad-2">B</div>
    <div class="box pad-3">C</div>
    <div class="box pad-4">D</div>

    <div class="box pad-5">E</div>
    <div class="box pad-6">F</div>
    <div class="box pad-7">G</div>
    <div class="box pad-8">H</div>

    <div class="box pad-9">I</div>
    <div class="box pad-10">J</div>
    <div class="box pad-11">K</div>
    <div class="box pad-12">L</div>
</div>

```


![Preview](https://i.ibb.co/TLFcmvk/aasdasd.png)
And finally when we run our code again it should look like this.

So far so good we are now going to add colors and make hovering effects, unactive or active states, to make it stand out and make the experience better, we will do that with the following code:

```css
.pad-1 {
    background-color: #E5446D;
}

.pad-2 {
    background-color: #44aae5;
}

.pad-3 {
    background-color: #e044e5;
}

.pad-4 {
    background-color: #4f97c7;
}

.pad-5 {
    background-color: #7fe544;
}

.pad-6 {
    background-color: #e56444;
}

.pad-7 {
    background-color: #44e595;
}

.pad-8 {
    background-color: #11b619;
}

.pad-9 {
    background-color: #44e559;
}

.pad-10 {
    background-color: #3679df;
}

.pad-11 {
    background-color: #df581a;
}

.pad-12 {
    background-color: #ff0496;
}

.box:hover {
    background-color: lighten(#444, 10%);
    cursor: pointer;
  }
  
 .box:active {
    background-color: darken(#444, 10%);
    transform: scale(1.1);
    transition: all .2s;
  }

.active {
  background-color: darken(#444, 10%);
  transform: scale(1.1);
  transition: all .2s;
}
```

![Preview](https://i.ibb.co/LpYQY6N/asdasdasdasdasdasd.png)
And finally we are done with our CSS, it now looks good and feels good but when you click on the buttons, they are clickable but we have no sound, what we need to do is now write our JavaScript/jQuery code that will get us sound.

Navigate to the `index.html` file. Then, just before the end of your `<body>` tag, import your `script.js` file that will be loaded when our document loads:

```html
<script src="script.js"></script>
```

We will then start writing our jQuery code in `script.js`.

We will start by checking if the document is ready so we can perform our script instructions:

```javascript
$(document).ready(function () {

});
```
And in the function above is where we will write all our code, what we will do is create 12 variables that will hold sound files hosted on aws, don't worry you won't need to host your files by yourself you can use mine.

after creating a variable we will use the Audio class to make our variable an object. the Audio class comes with the jQuery library.
```javascript

$(document).ready(function () {
    // Add this code
    var padOne = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0025.mp3');
    
    var padTwo = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0010.mp3');
    
    var padThree = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0000.mp3');
    var padFour = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/RS.mp3');
    
    var padFive = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/OH25.mp3');

    var padSix = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/MA.mp3');
    var padSeven = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CY0010.mp3');
  
    var padEight = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CH.mp3');

    var padNine = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CB.mp3');
    var padTen = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0010.mp3');

    var padEleven = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0000.mp3');

    var padTwelve = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CP.mp3');
 
});
```

So we are almost done all we need to do is use the jQuery selector which is `$` to select classes and check for actions, we want to load and play a sound when the mouse key is down and we will do that with the following code:

```javascript
$(document).ready(function () {
    var padOne = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0025.mp3');
    
    var padTwo = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0010.mp3');
    
    var padThree = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0000.mp3');
    var padFour = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/RS.mp3');
    
    var padFive = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/OH25.mp3');

    var padSix = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/MA.mp3');
    var padSeven = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CY0010.mp3');
  
    var padEight = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CH.mp3');

    var padNine = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CB.mp3');
    var padTen = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0010.mp3');

    var padEleven = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0000.mp3');

    var padTwelve = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CP.mp3');
    
    // Add the following code 
     $('.pad-1').mousedown(function () {
        padOne.load();
        padOne.play();
    });
    
    $('.pad-2').mousedown(function () {
        padTwo.load();
        padTwo.play();
    });
    
    $('.pad-3').mousedown(function () {
        padThree.load();
        padThree.play();
    });
    
    $('.pad-4').mousedown(function () {
        padFour.load();
        padFour.play();
    });
    
    $('.pad-5').mousedown(function () {
        padFive.load();
        padFive.play();
    });
    
    $('.pad-6').mousedown(function () {
        padSix.load();
        padSix.play();
    });
    
    $('.pad-7').mousedown(function () {
        padSeven.load();
        padSeven.play();
    });
    
    $('.pad-8').mousedown(function () {
        padEight.load();
        padEight.play();
    });
    
    $('.pad-9').mousedown(function () {
        padNine.load();
        padNine.play();
    });
    
    $('.pad-10').mousedown(function () {
        padTen.load();
        padTen.play();
    });
    
    $('.pad-11').mousedown(function () {
        padEleven.load();
        padEleven.play();
    });
    
    $('.pad-12').mousedown(function () {
        padTewlve.load();
        padTewlve.play();
    });
});
```
## Publishing

Once you're done making this, how about sharing it in the Slack ship channel and also with me @Emmanuel Haankwenda on Hack Club Slack.

## Resources
- jQuery Scripting API Docs (https://api.jquery.com/)
- HTML Docs (https://www.w3schools.com/html/)
- CSS Docs (https://www.w3schools.com/css/)
- JavaScript Docs (https://www.w3schools.com/js/)
- Audio Object (https://www.w3schools.com/JSREF/dom_obj_audio.asp)
## Inspiration

To finish off, I'd like to leave you with some amazing customized Drum Pad Machines/Beat Makers by programmers out their.

- Solo Learn Code Playfround by Andrew Siachos (https://code.sololearn.com/WfYyBdZwc6qn/#html)
- Music Pad Controller with Keyboard (https://endertech.com/blog/music-pad-javascript-html-css)
- My favorite one is Make Music with JavaScript by Dev Ed on Youtube(https://www.youtube.com/watch?v=8T4SCksjrQ4). 

We are finally done with our project and you can go own ahead and customize it and add more things to it hope you had fun creating this with me.
I truly hope you enjoyed this workshop, happy hacking!

```
