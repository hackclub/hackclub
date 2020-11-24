---
name: "Magic Square with Javascript"
description: "Magic square is a web page that behaves like a Rubik's Cube"
author: "@Taiwrash"
---
![page](https://cloud-2ktbvz94x.vercel.app/5images.png)

At one time or the other, we would have heard or seen a Rubik's cube. We might as well have thought of how to have a webpage that behaves like it. In this workshop you will see how simple it is to manipulate the `DOM` and use style to build great stuffs.

At the end of this workshop you will be able to make a _MAGIC SQUARE APP_. An application that behaves like a rubik's cube as shown below.


The live demo is available [here](https://magic-square.taiwrash.repl.co) and the full code [here](https://repl.it/@Taiwrash/magic-square)

![page](https://cloud-esohbbw0s.vercel.app/0example.gif)

## Set Up

The basic prerequisite for this workshop is the knowledge of HTML, CSS and Javascript. Never mind if you are not yet comfortable with these languages, I will simplify everything so that you can understand!

## Development Environment

This workshop will be using [repl.it](https://repl.it) as the development environment. [Click Here](https://repl.it) to signup, if you don't have an account yet, and create a coding environment to follow this workshop.


![Repl.it](https://cloud-be2z8hzbo.vercel.app/0image.png)

## Mark Up Section (HTML Set Up)

Now that your coding environment is ready, the next step is to start writing the codes. Let us start with the `html` part. First, create a `div` with the class attribute of `container`. Feel free to name the attribute as you wish, and make sure it is placed inside the body tag of your repl page.

```html
<div class="container"></div>
```

The above snippet serves as container for all the nine squares that will represent the faces of our box. Now, we need to put the nine `divs` inside the div tag above with the first `div` having a class attribute of `master` and the text `TAP ME`.

```html
<div class="master">TAP ME</div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

Remember, the nine `divs` above represent the squares we will be interacting with and your final code should look like this:

```html
<div class="container">
  <div class="master">TAP ME</div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

_That is all for our html code and we move on to the next part_

## The Style Part

Moving on, we will be setting the style (colors, textures, tranforms, shadow etc) for everything in our app as required by the app.


**_Note_ All the codes in this part are to be in the `style.css` file.**

To start with, we need to set the color of the background of our app.

```css
body {
  background-color: gainsboro;
}
```

Since we need to display our squares in a `3 x 3 matrix`, we will be creating three rows and three columns for the squares, as our work so far only displays the background colour we set at the top with our text `TAP ME` and nothing else.

Now we have to include some visualisations to our app and we will be implementing the `CSS GRID`. To learn more about CSS grid, you can check out this [`css grid cheat sheet`](https://www.codecademy.com/learn/learn-css/modules/learn-css-grid/cheatsheet).

Add the snippets below to see css grid in action:

```css
.container {
  display: grid;
  justify-content: center;
  grid-template-columns: 60px 60px 60px;
  grid-template-rows: 60px 60px 60px;
  margin-top: 50px;
  gap: 30px;
}
```

Remember, all the nine squares are in a container. The CSS snippet above will authomatically create a `60px by 60px` square for us which displays in a 3 by 3 matrix format, with a gap of `30px` between each other with the help of the css property `gap`.

OH yes! we are getting there. Let's display each square and see the wonderful work we've been doing so far. By adding the following CSS snippet, you will be happy to see the great work you have been doing so far.

```css
.container div {
  background-color: green;
  border-radius: 5px;
  box-shadow: 2px 6px blue;
  transition: 1s ease-in;
}
```

Each square is expected to have a background `green` colour, a little round edge with the help of `border-radius`, and a nice big `blue` shadow with a little `transition` animation.
![result](https://cloud-esohbbw0s.vercel.app/1rresult.gif)


Now we are almost done! But let's decorate the text in the first square a little bit.

```css
.master {
  font-size: 14px;
  color: white;
  text-align: center;
  text-shadow: 1px 2px 4px black;
  padding: 1px;
  font-family: "Roboto", sans-serif;
  display: grid;
  align-items: center;
}
```

We have just made the text fit a little bit into the box, setting out its font size, type and colour. A little shadow was added to make it stand out as we start performing our magic. The grid property enabled the `align-items` property which gives us the ability to make the text verically centered in the square.

![weldone](https://cloud-2ktbvz94x.vercel.app/2weldone.gif)

_You won't believe we are done with the css part of our workshop! It remains just one last simple part_

## Javascript part

This is the most exciting and crucial part of our workshop and we are starting with the fun part.

![fun](https://cloud-2ktbvz94x.vercel.app/3excited.gif)

**_Note_ All the Snippets in this part are to be in the `script.js` file.**

First of all, let's create a variable to store the values of our mark-ups. We will only need three global variables, the one that will hold all our squares, another one to hold the first square as it is the master of our magic, and the one to hold the body will be the third global variable. Feel free to name them the way you like.

```js
const master = document.querySelector(".master");
const squares = document.querySelectorAll(".container div");
const body = document.querySelector("body");
```

The `master` variable helps us hold the first square, so that we can have access to it in the `DOM`, the `squares` holds every square and the `body` is for the background of our app.

Next, we create a function for every style we intend to put on our squares while the magic is in place. For this workshop, we will be creating three styles:

1.  Transformation styles (rotate)
2.  Colour styles
3.  Shadow styles

As usual, the sky is your limit as regards the number of styles you can add, so feel free to add as many styles as possible.

Now, let's start with the first style which is the `Transformation style`. In this, we will be dealing with the rotation method of our squares. I will be creating a function to carry this out as shown below:

```js
const transformSquares = () => {
  const tranformValues = [
    "rotate(30deg)",
    "rotate(45deg)",
    "rotate(120deg)",
    "rotate(60deg)",
  ];
  return tranformValues[Math.floor(Math.random() * tranformValues.length)];
};
```

Let's break this down and see what is going on. First, we are declaring an arrow function, which is a new way of creating functions in ECMAScript (ES6) of javascript. The function was named `transformSquares`, and we created an array of CSS values to be applied to the squares during the magic inside the fuction. Remember `rotate()` is a CSS value for the `transform` property, you will understand this better later in the workshop. Finally, the function is returning random values from our array of values created in the function.

Next is to create the remaining funtions for other styles of our magic!

```js
const bgColor = () => {
  let backgroundColors = ["yellow", "pink", "blue", "green"];
  return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
};
```

This function is returning random colours from the array of colours created inside the `bgColor` function.

And lastly, the fuction to add the shadows during the magic. We will be creating an array of shadow values in the funtion.

```js
const boxShadows = () => {
  const shadows = ["2px 6px red", "2px 6px white", "2px 6px orange"];
  return shadows[Math.floor(Math.random() * shadows.length)];
};
```

The above returns random shadow values.

![great!](https://cloud-2ktbvz94x.vercel.app/1fantastic.gif)

Let's put the functionalities together, we do this by adding an `addEventListener` to the master square as shown below:

```js
master.addEventListener("click", () => {
  squares.forEach((item) => {
    item.style.backgroundColor = bgColor();
    item.style.transform = transformSquares();
    item.style.boxShadow = boxShadows();
  });
});
```

The `addEventListener` enables a click event on the master div and `querySelectorAll` is used to bring the squares to the DOM which returns an array. This gives us the ability to perform a `Higher Order Function` (HOF) on the square array returned by the `querySelectorAll` which is the `item` variable of the `forEach` function which represents every child of the element of the div with the class of container.

![Amazing](https://cloud-2ktbvz94x.vercel.app/4congratulations.gif)
YAY! Congratulations you just built a Magic Square app. Test it by clicking on the master div.

![final](https://cloud-esohbbw0s.vercel.app/0example.gif)

This is just the beginning of the styles you can apply by manipulating the DOM. I will be glad to see more of your works using what you have learnt in this workshop

## Other Hacks Examples

Check hacks by other people to see more

[Tile Game from Magic Square](https://vigorous-blackwell-168b39.netlify.app/)

[Magic Square with Magic Background](https://taiwrash.github.io/workshops/magic-square/sample.html)

[Hacks on color style](https://scrimba.com/scrim/cof9e4a628090e0b4dd64edf8)


## More Resources

[querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

[CSS transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

[forEach as HOF](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
