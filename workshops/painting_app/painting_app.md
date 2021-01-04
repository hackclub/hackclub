---
name: Painting app
description: Create a painting app for your website
author: '@wollygfx'
img: ''
---

In this workshop you'll learn how to make a painting application using HTML, CSS & JavaScript, follow along with me and see how easy it is.

Here you can find a [live demo](https://css.wollygfx.repl.co) and here, you will find the [source code](https://repl.it/@wollygfx/css#index.html).


## Set Up

This workshop requires a very basic knowledge of the following languages: HTML & JS. Don’t worry if you get stuck at some point in the workshop, everything is explained the best way for you to understand!

For this workshop we will use [Repl.it](https://repl.it), click [here](https://repl.it/languages/html) to create a coding environment right for this workshop.

![Setup](https://cloud-qbmylslty.vercel.app/0image.png)

## HTML

In this part of the workshop will go all the elements that are part of the application, which are: buttons, inputs, and a canvas.

So let's start by creating a `div` container with the class `main-container` inside of our `<body>` tag. In this container we'll put all of our html elements.
```html
<div class="main-container"></div>
```

Then, we are creating another `div` container, that will hold all the color button. Inside of this `div` container, we'll put 6 `button` elements, with the following values:
```html
<div class="main-container">
	<div class="colors">
		<button value="#FBFF00"></button>
		<button value="#009fff"></button>
		<button value="#000000"></button>
		<button value="#FF0000"></button>
		<button value="#3EFF00"></button>
		<button value="#FFF"></button>
	</div>
</div>
```
Each button represent its respective HEX code.

Finally, right after the `div` container with the class `colors`, we'll put 4 elements with the following values:
```
<div class="main-container">
	<div class="colors">
		<button value="#FBFF00"></button>
		<button value="#009fff"></button>
		<button value="#000000"></button>
		<button value="#FF0000"></button>
		<button value="#3EFF00"></button>
		<button value="#FFF"></button>
	</div>

   <--! Here we put the 4 elements-->

	<input id="brush" type="range" value="1" min="1" max="5" step="1"></input>
	<button id="clear" type="button">Clear</button>
	<button id="save" type="button">Save</button>
	<br>
	<canvas id="paint-canvas" width="640" height="400"></canvas>

</div>
```
Let's break this down:
- The `input` element is used to create interactive controls for web-based forms in order to accept data from the user, since the type of input we are using is `range`, it requires you to set the attributes `value`, `min`, `max` and `step` which basically set the initial value for the input, the max and min value for it, and the step from a value to other respectively
- The two buttons here will be used to clear and save the canvas data.
- The `canvas` element is used to let the user make drawings through it.

*Note: All the attributes and values used for the seen elements are mandatory in order to the app to work*

Here's the result of the code above
![Result](https://cloud-lblb3umex.vercel.app/0image.png)

## JS

Now that we have our html document ready to go, we are going to start by giving all the elements its functionalities.

So, the first thing we want to do, is to use the `onload` event, which runs a block of code when a given resource has loaded. In this case, we want our javascript file to run when the html document has finished to load.
```js
windows.onload(){

}
```
*Note: from now, all the javascript code will go inside of the curly braces*

The next thing we are going to do is to define 4 variables:
```js
	var canvas = document.getElementById("paint-canvas");
	var context = canvas.getContext("2d");
	var boundings = canvas.getBoundingClientRect();
	var range = document.getElementById("brush").value;
```
Let's break this down:
- The first variable, uses the method `document.getElementById` to get the element from the html document with the specified `id`.
- The second variable, takes the first variable and gets the canvas context using the method `getContext`. The canvas context provides the 2D rendering context for the drawing surface of a `<canvas>` element.
- The third variable, takes the first variable and uses the method `getBoundingClientRect()`, which returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
- The fourth variable gets the element in the document with the id `brush` and gets the element's value using the method `value`.

We need to create another 4 variables, but this time we will use these to configure some stuff for the canvas.
```js
	var mouseX = 0;
	var mouseY = 0;
	var isDrawing = false;
	context.strokeStyle = 'black';
```
Let's break this down:
- The first two variables, set the default position of the mouse with the X and Y coordinates.
- The third variable will be used later to tell the application if the mouse is drawing something on the canvas. 
- The `context.strokeStyle` property of the Canvas 2D API specifies the color, gradient, or pattern to use for the strokes (outlines) around shapes.

Now, we'll need to handle the brush's size, in this block of code we’ll make sure the line width changes every time the input's value changes.
```js
//Handle brush size
var brush = document.getElementById('brush');

brush.addEventListener('input', function(brush){
 context.lineWidth = brush.target.value;
});
```
- First, we are creating a variable that uses the method `getElementById` to get an element from the document with the specified id. It gets the input element from the document.
- The method `addEventListener` takes the brush element, and every time the value of this element changes, a function is called
- This function takes the context of the canvas element and using the property `lineWidth`, it sets the thickness of the brush to the value from the range input.

Then, we'll need to handle the colors of the brush, in this block of code we'll make sure that whenever the user clicks on any of the color buttons, the color of the brush changes.
```js
// Handle Colors
var colors = document.getElementsByClassName('colors')[0];

colors.addEventListener('click', function(event) {
 context.strokeStyle = event.target.value || 'black';
});
```
- First, we are creating a variable that uses the method `getElementByClassName` to get an element from the document with the specified class. It gets the `div` element from the document, this div container acts like an array and every element inside of it is indexed.
- Then, we are taking the `colors` variable (div element), and we are adding it an `addEventListener`, every time a button gets clicked a function runs.
- Ultimately, this function takes the context of the canvas element and using the property `strokeStyle`, it sets the color of the brush to one of the button's value or to black.

Now, we are going to create 3 events that depending on if the mouse is on the canvas, will draw.
```js
	// Mouse Down Event
	canvas.addEventListener('mousedown', function(event) {
		setMouseCoordinates(event);
		isDrawing = true;

		// Start Drawing
		context.beginPath();
		context.moveTo(mouseX, mouseY);
	});

	// Mouse Move Event
	canvas.addEventListener('mousemove', function(event) {
		setMouseCoordinates(event);

		if(isDrawing){
		  context.lineTo(mouseX, mouseY);
		  context.stroke();
		}
	});

	  // Mouse Up Event
	canvas.addEventListener('mouseup', function(event) {
		setMouseCoordinates(event);
		isDrawing = false;
  });
```

The first event, takes the canvas element and adds it an event listener, when the event has place, the function starts running. What this function does is to call the function `setMouseCoordinates` (which i won't explain right now but don't worry we'll see it later), and then it asigns the value of `isDrawing` to `true`, finally the function takes the context of the canvas element, and uses the `beginPath` method to start a new path, and then it also takes the `moveTo` method to start a sub-path in the specified coordinates.

We do almost the same thing for the mouse move event; in this one we don't have to re-assign the value of the variable `isDrawing` though, because we already did, and then we use an if statement to run the code between the curly braces if the `isDrawing` variable has a true value (which is the case); what this code does, is to take the context of the canvas element and using the methods `lineTo` and `stroke`, we add a straight line to the current sub-path by connecting the sub-path's last point to the specified (x, y) coordinates, and we stroke the current or given path with the current stroke style.

Finally, the mouse up event takes the canvas element and adds it an event listener, when the mouseup event has place, the function gets executed. This function calls the function `setMouseCoordinates` and set the value of the `isDrawing` variable to `false`.

Now, we are going to need a function that handles the mouse coordinates.
```js
	// Handle Mouse Coordinates
	function setMouseCoordinates(event) {
	    mouseX = event.clientX - boundings.left;
	    mouseY = event.clientY - boundings.top;
	}
```
Let's break this down:
- First we take the `mouseX` variable (declared earlier), and we use the method `event.clientX` to get the horizontal coordinate within the application's viewport at which the event occurred (as opposed to the coordinate within the page). This given coordinate is substracted from the coordinate got in the variable `boundings`
- We do the same thing but with the variable `mouseY` and using `event.clientY`.

The next thing we need to do is to give the clear button a functionality.
```js
	// Handle Clear Button
	var clearButton = document.getElementById('clear');

	clearButton.addEventListener('click', function() {
	    context.clearRect(0, 0, canvas.width, canvas.height);
	});
```
Let's break this down:
- First we are creating a variable that gets the clear button from the document, using the `getElementById` method.
- Then we take that button and we add it an event listener, when the button is clicked, the function runs.
- What this function does, is to take the context of the canvas element and using the method `clearRect`, it sets the pixels in a rectangular area to transparent black (rgba(0,0,0,0)). The rectangle's corner is at (x, y), and its size is specified by width and height.

Finally, we'll give to the save button a functionality.
```js
 // Handle Save Button
  var saveButton = document.getElementById('save');

  saveButton.addEventListener('click', function() {
    var imageName = prompt('Please enter image name');
    var canvasDataURL = canvas.toDataURL();
    var a = document.createElement('a');
    a.href = canvasDataURL;
    a.download = imageName || 'drawing';
    a.click();
  });
```
Let's break this down:
- First we are creating a variable that gets the save button from the document.
- Then we add to this button an event listener, when the button is clicked, the function runs.
- This function declares 3 variables, the first one holds what the user writes in the `prompt` input. The second variable takes the canvas and convert it to a data URI containing a representation of the image in the format specified by the type parameter (defaults to PNG). The third variable creates a hyperlink element in the document.
- Then we take that hyperlink element and set its href attribute to the data url acquired in the variable `canvasDataURL`. 
- Set the download attribute of the hyperlink element to the text gotten from the variable `imageName`, if the user didn't type anything, the file will be downloaded as `drawing`, this is what the file downloaded gets saved as.
- Finally, it triggers a click event on the hyperlink with JavaScript.

## CSS

Now that we have our application working, we can style it to make it look good.

First, we are going to start by centering all the elements horizontally and vertically.
```css   
.main-container {  
  
display: flex;  
flex-direction: column;  
justify-content: center;  
align-items: center;  
height: 100vh;  
}  
```  
Let's break this down:
- `display: flex`: makes the element a flexbox container.
- `flex-direction: column`: sets the direction of the main axis as from top to bottom. 
- `justify-content: center`: sets the alignment over the main axis as centered.  
- `align-items: center`: sets the alignment over the cross axis as centered. 
- `height: 100vh`: sets the height of this container as 100% to the viewport. 

Now, we are going to style the canvas a little bit:
```css  
canvas {  
border: 1px black solid;  
cursor:crosshair;  
}  
```  
Let's break this down:
- The property `border: 1px black solid;` sets the color, style and width of the border.
- The property `cursor:crosshair;` sets the type of mouse cursor, if any, to show when the mouse pointer is over an element.

Finally, we are going to style all the buttons:
```css  
.colors button {  
display: inline-block;  
border: 1px solid #00000026;  
border-radius: 70%;  
outline: none;  
cursor: pointer;  
width: 20px;  
height: 20px;  
margin-bottom: 5px  
}  
```  
- `display: inline-block`: sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
- `border: 1px solid #00000026`: styles the border of the buttons
- `border-radius: 70% `: rounds the corners of an element's outer border edge.
- `outline: none `: this is a shorthand way to set one or more of the individual outline properties, but there are none in this house.
- `cursor: pointer `: sets the type of mouse cursor, if any, to show when the mouse pointer is over an element.
- `width: 20px `: gives a width to the buttons
- `height: 20px `: gives a height to the buttons
- `margin-bottom: 5px;`: gives to the buttons a margin to the bottom.

	
Now, we'll give a color to each button:
```css  
.colors button:nth-of-type(1) {  
background-color: #FBFF00;  
}  
  
.colors button:nth-of-type(2) {  
background-color: #009fff;  
}  
  
.colors button:nth-of-type(3) {  
background-color: #000000;  
}  
  
.colors button:nth-of-type(4) {  
background-color: #FF0000;  
}  
  
.colors button:nth-of-type(5) {  
background-color: #3EFF00;  
}  
  
.colors button:nth-of-type(6) {  
background-color: #FFF;  
}  
```  
The `:nth-of-type()` CSS pseudo-class matches elements of a given type (tag name), based on their position among a group of siblings. Notice that we have 6 buttons inside of the `div` container with the class `colors`, these buttons are indexed just like in an array, so think of the `div` container as an array, and the buttons as indexed data. In this order of ideas, we are giving to every button a background color.

### Hack it!

Yay! you made it to the end of this workshop.

![Congrats GIF](https://cloud-d0aqa4icc.vercel.app/0bec38a05d56ac6ae2d9dec2f482ebff9.gif)

You can always hack it and give it your own style. 

### Live demos

Here are some demos made by other people:
- [Old school painting app](https://jspaint.app/#local:3e18c054dde3f)
- [Painting application with a lot of more functions](https://github.com/bnjasim/paint-application-javascript)
- [Simplest painting app](https://tryenlight.github.io/demo/web-paint-project/index.html)



