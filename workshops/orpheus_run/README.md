---
name: 'Orpheus Run'
description: 'Create an obstacle avoiding game with just HTML, CSS and some JavaScript!'
author: '@faisalsayed10'
image: 'https://cloud-g7zlt63qw.vercel.app/0image.png'
---

# Orpheus Run

You probably must have played Temple Run or the famous 404 Dino Game! What if we create our own simple version of that? Well, we are going to do exactly the same in today's workshop! And you know what? It only requires HTML, CSS and JavaScript!

![Demo of our today's workshop](https://cloud-da2q27sz3.vercel.app/01.gif)

Here's the [source code](https://repl.it/@FaisalSayed1/Obstacle-Avoiding-Game).

## Part 1: Prerequisites

You should know the basics (and I mean, very basics) of:

* HTML
* CSS
* JavaScript

We also require a picture of Orpheus so that we can use it as the game character!

Download it by going [here](https://cloud-iz63k53d6.vercel.app/0image.png).

## Part 2: Setup

For writing our code, we'll be using [Replit](https://repl.it) which is an online code editor!

To start, go to this [starter code](https://repl.it/languages/html) and Replit will create a starter HTML project for you!

Also import the downloaded Orpheus image into your repl.

Here's how:  
![importing orpheus image into the repl](https://cloud-iso38maak.vercel.app/02.gif)

## Part 3: Building the project

### 1) HTML

Every web project always begins with an HTML file and so do ours! So let's start writing the HTML code required for our project.

First, we'll create a `<div>` with the class of `game` and then add 2 more `<div>` tags inside it with the class of `character` and `obstacles` respectively.

```html
<body>
  <div class="game">
    <div class="character"></div>
    <div class="obstacles"></div>
  </div>
  <script src="script.js"></script>
</body>
```

**NOTE:** Make sure that the `<script>` tag is always at the very last line inside your `<body>` tag.

Next, outside the `<div>`, we'll add a `<p>` tag for displaying score and also a button with the purpose of starting the game.

```html
<body>
  <div class="game">
    <div class="character"></div>
    <div class="obstacles"></div>
  </div>
  <p class="score">Score: 0</p>
  <button>START</button>
  <script src="script.js"></script>
</body>
```

And lastly, we'll add `onclick` attributes to the `div` with the class of `game` and also to the button so that the functions (which we'll create very soon) can be triggered on clicking that DOM element.

Your HTML code should look something like this!
```html
<body>
  <div onclick="jump()" class="game">
    <div class="character"></div>
    <div class="obstacles"></div>
  </div>
  <p class="score">Score: 0</p>
  <button onclick="start()">START</button>
  <script src="script.js"></script>
</body>
```

So now the `jump()` function will be triggered when we click on the div with the class of `game` and the `start()` function will be triggered when we click on the start button!

Your preview looks something like this:
![preview of the code written so far](https://cloud-mx8ey0ual.vercel.app/0image.png)

We won't see anything special in our preview window as we haven't added any styles yet. CSS is going to play a very important role in today's workshop, so let's start writing some styles!

### 2) CSS

It's time to write some styles for our DOM elements so that we can see them on the screen! Head over to the `style.css` file in your repl and let's start writing.

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600&display=swap');

* {
  font-family: 'Montserrat Alternates', sans-serif;
  padding: 0;
  margin: 0;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
}
```

Explanation: First, we simply import a font named `Montserrat Alternates` from [Google Fonts](fonts.google.com). Then, by using `*` which basically selects all the elements, we give a font family of `Montserrat Alternates`. We also remove the default margin and padding from all the elements. (Some elements such as divs and headings have a default value for their margin and padding)

Next, we select the `body` and set its display to `flex` so that by using the `align-items` and `justify-content` properties, we can align our elements to the center of the screen. For this we also require the `min-height` to be set to `100vh` (viewport height), so we exactly do that in the next line.

If you are new to viewport units, learn more about them [here](https://css-tricks.com/fun-viewport-units/).

Next, let's add some more styles, specifically to the `<div>` tags.

```css
.game {
  width: 500px;
  height: 200px;
  border: 2px solid #000;
  overflow: hidden;
}

.character {
  width: 60px;
  height: 80px;
  background-image: url("orpheus.png");
  background-size: cover;
  position: relative;
  top: 125px;
  left: 20px;
  z-index: 2;
}
```

Explanation: The `div` with the class of `game` gets a `width` and a `height` of 500px and 200px respectively. Then, we also give it a black solid border of 2px. The `overflow` is set to hidden so that when the game actually works, we won't see overflowing obstacles going out of the div.

Next, the `character` is given a width and a height of 60px and 80px respectively. The background image is set to the image's file name which we downloaded. Make sure with the name of the image file, for me it was `orpheus.png`, it might be different for you. If it is, simply replace the `url` with your image name. The `background-size` property is set to `cover` so that the image doesn't look buggy.

Next, we set its position to `relative` so that we can position it properly inside the `game` div. Then, its `top` position is set to 125px and `left` position is set to 20px and we give it a z-index of 2 so it appears above all the other elements.

Here's what your game now looks like!

![preview of our code written so far](https://cloud-8lx2r9sy5.vercel.app/0image.png)

We are getting really close to our desired product!

Next, let's add styles for the score text, the obstacles and the button.

```css
.score {
  text-align: center;
  font-size: 26px;
}

.obstacles {
  width: 30px;
  height: 70px;
  background-color: #ee3f3f;
  position: relative;
  top: 50px;
  left: 470px;
}

button {
  background-color: #e6f151;
  font-size: 15px;
  font-weight: 600;
  margin: 1rem;
  padding: 8px 20px;
  outline: none;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.9);
}
```

Explanation: 