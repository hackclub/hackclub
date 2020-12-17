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
  margin: 10px;
  padding: 8px 20px;
  outline: none;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.9);
}
```

Explanation: We simply set the font size of `score` to 26px. Then, we select the `obstacles` class. After giving it a specific `width` and `height`, we give it a reddish color. Then, just like our character, we also set its position to `relative`, `top` position of 50px and `left` position of 470px.

Then we give some basic styles to the button such as the background color, text's font size, `font-weight` so that the text looks a bit bolder, a `margin` of 10px on all the sides, a `padding` of 8px on top and bottom and 20px on left and right. We remove its default `outline` and `border`, we set the `cursor` property to `pointer` and lastly, we give it a box shadow.

Now comes the animation part! We will create 2 animations, 1 for jumping of our character and another for the movement of obstacles towards us. Let's first start with the `move` animation.

```css
@keyframes move {
  0% {
    left: 500px
  }
  100% {
    left: -20px
  }
}
```
Explanation: If you remember the basics of CSS animations, you'll see that we first write `@keyframes` and then we write the name of our animation, then by opening curly brackets, we define the animation.

What our animation simply does is changes its `left` position. At 0% of the animation, its left position will be 500px (it will be on the extreme right of our `game` div) and at 100% of the animation, its left position will be -20px! This will make it look like the obstacles are moving towards the left and out of the `game` div.

Let's test our animation so that if you are confused, you'll get a very clear idea of how it works!

For this, we'll create a new class `move` and give these animation properties to it.

```css
.move {
  animation: move 1s infinite linear;
}
```

**NOTE:** You can name the class anything you want, its not necessary for the name to match the animation name.

Explanation: `animation` is the shorthand property which is combined of various other animation properties. The first is the `animation-name`, which in fact, we give it as `move`, then is the `animation-duration` which we set it as 1 second.

Then is the `animation-iteration-count` which we set to `infinite` so our animation will run infinitely. The next property is known as `animation-timing-function` which basically defines the way an animation works. We use `linear` for this animation as it is the most suitable!

Now whichever element has this `move` class will be animated with our `move` animation.

Let's go back to our HTML and add this `move` class to the `obstacles` div.

```html
<div class="obstacles move"></div> <!-- Just add the move keyword after a space! -->
```

Now if you click `RUN` you'll be surprised!

![our move animation working perfectly fine!](https://cloud-8td2hgnzi.vercel.app/03.gif)

**NOTE:** After we are done testing this animation, remove the `move` class from the `<div>` because we don't want the animation to start directly after we `RUN` our code. We'll use JavaScript later to add the `move` class back again to the `<div>` accordingly.

Now, we need to implement the `jump` animation!

```css
@keyframes jump {
  0% {
    top: 125px;
  }
  30% {
    top: 60px;
  }
  50% {
    top: 30px;
  }
  70% {
    top: 60px;
  }
  100% {
    top: 125px;
  }
}

.jump {
  animation: jump 0.8s linear;
}
```
Explanation: We create the `jump` animation similar to the `move` animation but instead of changing its left position, we change its top position to get that sleek jumping effect! And then, we create a new class `jump` and apply this animation to that class.

Now, if you want to test this animation, you can simply add this class to the `character` div and you'll see that your character jumps! As we haven't set it to iterate infinitely, it will only jump once after you `RUN` the code.

![our character jumping!](https://cloud-e26ox5peb.vercel.app/04.gif)

After we have done making our animations, it's time that we implement these animations using JavaScript, implement a scoring system and also a game over system!

<detail><summary>Your final CSS code should look like this:</summary>

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

.score {
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
  margin: 10px;
  padding: 8px 20px;
  outline: none;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.9);
}


@keyframes move {
  0% {
    left: 500px
  }
  100%{
    left: -20px
  }
}

.move {
  animation: move 1s infinite linear;
}

@keyframes jump{
  0% {
    top: 125px;
  }
  30% {
    top: 60px;
  }
  50% {
    top: 30px;
  }
  70% {
    top: 60px;
  }
  100% {
    top: 125px;
  }
}

.jump {
  animation: jump 0.8s linear;
}
```

</details>

### 3) JavaScript

Let's start writing the second most important part, that is JavaScript inside the `script.js` file!

First, let's declare some important variables and also access the required DOM elements.

```js
const character = document.querySelector(".character")
const obstacles = document.querySelector(".obstacles")
const scoreText = document.querySelector(".score")
let score = 0;
let isStarted = false;
```

Explanation: We'll create a variable `character` which will access the DOM element which has the class of `character` using the `querySelector()` method. The querySelector() method returns the first element that matches a specified CSS selector(s) in the document. In the same manner, we also access the elements which have the classes `obstacles` and `score`.

Next, we define a `score` variable and set it to 0. We also define a boolean `isStarted` which is set to `false`. We'll basically use this variable to check each time if the game is started or not. The game doesn't start until the player clicks the start button. So, it's set to `false` as the default.

Next, let's create a function which will enable us to add the jump animation to the character.

```js
function jump() {
  if (character.classList !== "jump") {
    clearTimeout()
    character.classList.add("jump");
    setTimeout(() => {
      character.classList.remove("jump");
    }, 700);
  }
}
```
Explanation: Basically, we don't want to add the `jump` class to our `character` if it's already jumping. If we don't ensure this, we might face several bugs. So, to be on the safer side, we first check if the `character` already has the `jump` class or not (If the character already has it, it means that the character is jumping). So, If it doesn't have the `jump` class in its `classList`, we'll add that class to it!

But we also need to remove this class after a specific time. If you remember, the jump animation lasts for 800 miliseconds. So, after we add the class to the character, we set a `timeout` of 700 miliseconds and immediately after that, we remove the `jump` class from the character.

Also, to clear all the past unfinished timeouts before we do anything, we call the `clearTimeout()` function which ensures that we always set a fresh new `timeout`.

**NOTE:** Wondering when `jump()` will be called and executed? If you remember, we passed an `onclick` attribute to the `game` div in our HTML. So yeah! that's our answer! Whenever we click on the `game` div, the character jumps!

Try clicking to test it!

![testing of our jump() function](https://cloud-er3hifytb.vercel.app/05.gif)

Now, let's create a function which will start the movement of the obstacles.

```js
function startMoving() {
  if (obstacles.classList !== "move") {
    obstacles.classList.add("move")
  }
}
```

Explanation: Similar to the above function, if the `obstacles` don't have the `move` class, we'll simply add it to its `classList`.

If we `RUN` the code now, we won't much JavaScript into action because we haven't called our functions yet except the `jump()` function.

So let's create a `start()` function, which will start the game on clicking the start button!

```js
function start() {
  if (!isStarted) {
    isStarted = true;
    startMoving();
  }
}
```




# TODO

## Part 4: The End

Annd we just learnt React Leaflet and built this wonderful map!

[yay](https://media.giphy.com/media/xUPGcMzwkOY01nj6hi/giphy.gif)

Make sure you create an account on CodeSandbox to save this wonderful piece of creation or you'll loose it 😧.

Now it is up to you! Do crazy things with this project!

Here are some helpful links:

1. [LeafletJS Documentation](https://leafletjs.com/)

2. [React Leaflet Documentation](https://react-leaflet.js.org/docs/start-introduction)

Here are some tasks for you:

1. Play around with different types of Tile Layers!  
[Here is the full list](https://leaflet-extras.github.io/leaflet-providers/preview/)

2. Add popups and markers to your map!  
[Example](https://react-leaflet.js.org/docs/example-popup-marker)

3. Create a map which shows your location!  
[Example](https://react-leaflet.js.org/docs/example-events)

Now that you have finished building it, you should share your beautiful creation with other people! (I can't wait to see you ship this!)

You probably know the best ways to get in touch with your friends and family, but if you want to share your project with the worldwide Hack Club community there is no better place to do that than on Slack.

1. In a new tab, open and follow [these directions][slack] to signup for our Slack.
2. Then, post the link to the [`#ship`](https://hackclub.slack.com/messages/ship) channel to share it with everyone and also ping me!

[slack]: https://slack.hackclub.com/


PS. I'm `@fayd` on slack.