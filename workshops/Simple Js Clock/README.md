---
name: 'JavaScript Clock'
description: 'Build a clock using HTML, CSS, JavaScript.'
author: '@FaisalSayed'
---

# JavaScript Clock  

Have you ever wondered how to build a clock? Have you ever wanted to build your own clock but didn't because it was hard?  
Well today I'm going to show you how to build one and you know what? It's very simple!  

It will look something like this (But make sure you do add some custom CSS!) :  
![Image](https://cloud-azpvjrywa.vercel.app/image.png)

Here's the [live demo][final_live_demo] and [final code][final_code].

[final_live_demo]: https://js-css-clock.faisalsayed1.repl.co/
[final_code]: https://repl.it/@FaisalSayed1/JS-CSS-Clock
[repl_it]: https://repl.it

## Part 1: Prerequisites
You should have a beginner understanding of:
- HTML
- CSS
- JavaScript

## Part 2: Setup

### Setting up your code environment on Repl.it

[Repl.it](https://repl.it) is an online code editor where you can build your clock today. You don't have to use Repl.it but we suggest you do as it sets everything up for you.

To get started, go to [https://repl.it/languages/html](https://repl.it/languages/html). Your coding environment will spin up in just a few seconds!

This is what it looks like:  
![Image](https://cloud-me8mfihcw.vercel.app/image.png)  
## Part 3: Inspecting The Default Files

![Image](https://media.giphy.com/media/3o7bufkPz3LRof205G/giphy.gif)

### 1) The HTML file
Let us first take a look at the HTML file (`index.html`) present in your repl.

At line 1 we have `<!DOCTYPE html>` This declares that this file is a HTML file.  
If we take a look in the `<html>` tag, we will find a `<body>` tag. Here's where we will write the code. Make sure that all the code you write is included between the opening and closing body tags. (`<body></body>`). Make sure to remove line 5 (`<meta name="viewport" content="width=device-width">`) which may cause some weird responsiveness issues for our workshop.  

![Image](https://cloud-9zj6930c6.vercel.app/gif_maker.gif)

### 2) The CSS file

This is the `style.css` file in your directory. Whatever styles we give to our website is written in this file. If you take a look in the `<head>` tag in your HTML, you will find a line of code (`<link href="style.css" rel="stylesheet" type="text/css" />`). This means that your HTML file is properly linked to your CSS file!

### 3) The JavaScript file

This is the `script.js` file in your directory. It's empty for now, but we will fill it eventually through the workshop!  
Also, this is the most important file for our today's workshop. The code written here will be responsible for the functioning of our clock.  
If you take a look in the `<body>` tag, you'll find:

```html
<script src="script.js"></script>
```
This means that your HTML file is linked to your JavaScript.

## Part 4: Building the Clock

### 1) HTML

Lets start building our clock! First let's write the HTML code required.  
Inside of our `<body>` tag, add a `<div>` tag with a class "clock".  

Add another `<div>` tag inside of your existing `<div>` and give it a class of "clock-face". Let's add 3 more `<div>` tags nested inside of the "clock-face" div. 

Give a class of `hand hour-hand`, `hand min-hand`, `hand second-hand` to each of the 3 new `<div>` tags respectively.  

Note: Make sure the `<script>` tag, which is in your body, is below the `<div>` tags or else it will throw you errors.  

This is what your code should look like so far:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
	<div class="clock">
		<div class="clock-face">
			<div class="hand hour-hand"></div>
			<div class="hand min-hand"></div>
			<div class="hand second-hand"></div>
		</div>
	</div>
    <script src="script.js"></script>
  </body>
</html>
```

And that's it! We have completed writing our HTML.

### 2) CSS

After we have done writing our HTML, it doesn't really show up on your browser screen. Your browser screen is blank!  
Let's now add some styles to our `<div>` tags!  

Go to `style.css` in your repl.it directory. Let's start by adding some styles to our body! uhh... I meant `<body>`!  

Add the following code to your CSS:

```css
body {
  background: #01ed7f;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
```

**Explanation:**
3 main steps in writing CSS:
1. Select the element / class / id on which you want to apply your styles.
2. Open curly brackets `{}`.
3. Start adding your styles inside the curly brackets!

We start by giving our website a soothing green color. Go ahead and try changing it to the color of your own choice!  

Then we removed the default margin and padding from all the elements in our website (Some elements have a default value for their margin and padding). We changed the default display `(display: block)` to `(display: flex)`.  

A very good reason for this is because `flex` enables you to align your items perfectly to the center! And that's what we have done in the next two lines. The `align-items` property aligns all your children elements to center, but horizontally. The `justify-content` property aligns all your children elements to center, but vertically.  

Next we have the `min-height` property which sets a minimum height of `100vh` (viewport height) to your `<body>`. The `min-height` property works together with the `align-items` property and helps the children to align properly at the center.

Learn more about [viewport heights](https://www.sitepoint.com/css-viewport-units-quick-start/)

Next, we'll need to add some styles to our clock!  
Following the 3 main steps given above, let's accomplish this task!  
1. Select the class designated to the clock div.  

![Image](https://cloud-namz2to6v.vercel.app/image.png)

2. Open Curly Brackets to write the stylings.  

![Image](https://cloud-b7yg1ciea.vercel.app/image.png)

3. Add the following styles to this class. 

```css
.clock {
    width: 25rem;
    height: 25rem;
    border: 20px solid whitesmoke;
    border-radius: 50px;
    background: blanchedalmond;
    background-image: url(https://bit.ly/2RcERUw);
    background-size: cover;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1),
		inset 0 0 0 3px #efefef,
		inset 0 0 10px black,
		0 0 10px rgba(0, 0, 0, 0.2);
}
```

**Explanation**:
We gave a width and a height to our clock. Next, we gave it a border and the radius for the border. Next, is the background color for that clock (if you don't like it, consider changing it or even removing it).  

Similarly, there's a background image which is the face of the clock. we need to add `background-size: cover;` property, in order to show our image properly on the website screen.  

Also, we have added some shadows to the element. We gave multiple shadows so as to get a cool effect on our clock. Also, the `inset` property changes the shadow from an outer shadow (outset) to an inner shadow.

Now lets test our code! Click on the **RUN** button and Voila! Here's the basic background for our clock!  

![Image](https://cloud-dgjpl9scw.vercel.app/image.png)

Next, give `position: relative;` , `width: 100%;` & `height: 100%` to the class `.clock-face`.  
(Try to do it on your own by following the 3 main steps of writing CSS).

Your CSS code so far:

```css
body {
	background: #01ed7f;
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
}

.clock {
	width: 25rem;
	height: 25rem;
	border: 20px solid whitesmoke;
	border-radius: 50px;
	background: blanchedalmond;
	background-image: url(https://bit.ly/2RcERUw);
	background-size: cover;
	box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1),
		inset 0 0 0 3px #efefef,
		inset 0 0 10px black,
		0 0 10px rgba(0, 0, 0, 0.2);
}

.clock-face {
	position: relative;
	width: 100%;
	height: 100%;
}
```

Similarly, add more stylings to your CSS code:

```css
.hand {
	background: black;
	height: 6px;
	position: absolute;
	top: 50%;
	transform-origin: 100%;
	transform: rotate(90deg);
	transition: all 0.05s;
	transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}

.hour-hand {
	width: 30%;
	right: 50%;
}

.min-hand {
	width: 35%;
	right: 50%;
}

.second-hand {
	width: 40%;
	right: 50%;
}
```

**Explanation:** 
We give the clock hands, a black color.  
We specify It's height and position. Next, we give it a property of `top` to `50%`, basically it aligns our clock hands in the very center of our clock. To ensure that our clock rotates properly, we give it a  `transform-origin: 100%;`. The transformation origin is the point around which a transformation is applied.  

Next we have more transition properties to animate our hands so as to give us that real clock effect! (transition properties help you animate the elements).

![Image](https://cloud-e99m314xu.vercel.app/image.png)

Learn more about [transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)

Note: The `.hand` class was given to 3 `<div>` tags which means this styling will affect all the 3 `<div>` tags. To give some extra classes to the Hour hand, Minute hand and the Second hand specifically, we also gave those 3 `<div>` tags, a unique classname.  

To align each hand properly, we also give them a property of `right: 50%;`  

Here's what we have so far:

![Image](https://cloud-fprpa1onx.vercel.app/image.png)

And that's it for the CSS. Now let's move on to the JavaScript Part!  

![Image](https://media.giphy.com/media/oymRJRRiiPaVzDnIF1/giphy.gif)

## 3) JavaScript

Before panicking, let me ensure you that there's really only 30 lines of JavaScript code!

Go to your `script.js` file.  
First let us link the `<div>` tags in our HTML to JavaScript:  
Type the following code:  

```js
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
```

**Explanation:**
We declare the variables `secondHand`, `minsHand`, `hourHand` using 'const' and set It's value to the first element that matches a specified CSS class(s) in the document. In our case, that CSS selectors are `.second-hand` , `.min-hand` , `.hour-hand` respectively.  

**What is querySelector()?**
The `querySelector()` method returns the first element that matches a specified CSS class(s) in the document.

Learn more about `query selector` [here](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector).

Now It's time to implement a function which will help us in the proper functioning of the clock.  
Create a function `setDate` in your file. (You can name it anything you want)

```js
function setDate() {
}
```

We can get the current date using the `JavaScript Date Object`. Let's store it in a variable:

```js
function setDate() {
 	const currentTime = new Date();
}
```
The `Date` object contains specific methods through which we can get the current hour / minute / second.  

Learn more on [JavaScript dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

lets start by getting the current seconds, Add this code to the `setDate` function:  
```
const seconds = currentTime.getSeconds();
```
Now, if we want the hands to rotate, we can't simply feed the current time to it. We'll need to convert the current values into degrees and then do the transition.  

Time to do some maths! 

![Image](https://media.giphy.com/media/26gR0YFZxWbnUPtMA/giphy.gif)

Code:

```js
function setDate() {
	const currentTime = new Date();
	const seconds = currentTime.getSeconds();
	const secondDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}
```
**Explanation:**
We have the current seconds stored in the `seconds` variable. We then create a new variable (`secondDegrees`) in which we use an equation to convert the current seconds into degrees. In the next line, we add the transform style property to the `secondHand` which will rotate the hand according to the value of `secondDegrees`.  
Note: Here, we used backticks (` `) instead of quotes (""). This is an ES6 syntax. It helps us to write variables inside of strings.  
So that line basically looks like:  

```
eg: if secondDegrees = 150;
then: secondHand.style.transform = 'rotate(150deg)'; 
```

![Image](https://cloud-bmrnpv27n.vercel.app/image.png)

**Challenge:** Do the same above process for fetching minutes & hours and convert them into degrees.  
**Hint:** Use the methods `getMinutes()` and `getHours()`

The code so far:

```js
function setDate() {
 	const currentTime = new Date();
	const seconds = currentTime.getSeconds();
	const secondDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;

	const mins = currentTime.getMinutes();
	const minsDeg = ((mins / 60) * 360) + 90;
	minsHand.style.transform = `rotate(${minsDeg}deg)`;

	const hours = currentTime.getHours();
	const hourDeg = ((hours / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hourDeg}deg)`;
}
```

Our clock is almost finished! We now just need to call that function every second (recursion).  
For this, first we will call a `requestAnimationFrame()` function inside of our main function (`setDate()`).  
Now, pass `setDate` to `requestAnimationFrame(//pass value here)`. This will make sure our function keeps running and never stops.

```js
requestAnimationFrame(setDate)
```
Let us now try to run our code.  
Hmm... Something is wrong... Our JavaScript doesn't seem to work.  
That is because we never called our function at the very first place.  
Call our function outside in our script.   

Learn more on [requestAnimationFrame()](https://css-tricks.com/using-requestanimationframe/).

Let us now try to run our code. And Voila! Our clock is ready!  
But let us wait for a minute to pass and see if its working correctly. Did you see a glitch which just happened for a millisecond? Lets fix it.  

Add this to your code inside our function and before the `requestAnimationFrame(setDate)`:

```js
if(seconds == 0){
	secondHand.style.transitionDuration = '0s';
	minsHand.style.transitionDuration = '0s';
	hourHand.style.transitionDuration = '0s';
} else {
	secondHand.style.transitionDuration = '0.05s';
	minsHand.style.transitionDuration = '0.05s';
	hourHand.style.transitionDuration = '0.05s';
}
```

**Explanation** : We use `if-else` statements to check if our seconds are 0, meaning if we have passed a minute. When that statement is true, i.e when we pass a minute, we set all our `transitionDurations` to 0. Which means we basically stop our transitions at that particular moment. Otherwise we keep all our `transitionDuration` to the normal value.  
This prevents that bug from happening every minute.

The Final Code:

```js
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
 	const currentTime = new Date();
	const seconds = currentTime.getSeconds();
	const secondDegrees = (seconds / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;

	const mins = currentTime.getMinutes();
	const minsDeg = (mins / 60) * 360 + 90;
	minsHand.style.transform = `rotate(${minsDeg}deg)`;

	const hours = currentTime.getHours();
	const hourDeg = (hours / 12) * 360 + 90;
	hourHand.style.transform = `rotate(${hourDeg}deg)`;
	if(seconds == 0){
		secondHand.style.transitionDuration = '0s';
		minsHand.style.transitionDuration = '0s';
		hourHand.style.transitionDuration = '0s';
	} else {
		secondHand.style.transitionDuration = '0.05s';
		minsHand.style.transitionDuration = '0.05s';
		hourHand.style.transitionDuration = '0.05s';
	}
	requestAnimationFrame(setDate);
}

setDate();
```

**And congratulations! You just built a clock using just 20 lines of JavaScript!**    

![Image](https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif)

## Part 5: The End
If you haven't created an account on [repl.it](https://repl.it), make sure you do so to save this wonderful piece of creation!  

Here are somethings which you can do:  
1. Consider changing the colors and adding more features!  
2. Try to make the clock circular!  
3. Try to make it dark theme!
4. Try to think of more unique ideas on how you can add more features (displaying the date etc).

**Examples on how people have customized it:**  
- [HumanChalk](https://closelawfulbinarysearchtree--five-nine.repl.co/)  
- [Adrian](https://js-clock.loboadrian.repl.co/)  
- [Tanishq](http://darlingnoxiousfolder--five-nine.repl.co/)
- [Aaryan Porwal](https://myjsclock.aaryanporwal.repl.co/)

Now that you have finished building this wonderful clock, you should share your beautiful creation with other people! Remember, it's as easy as giving them your URL!  

You probably know the best ways to get in touch with your friends and family, but if you want to share your project with the worldwide Hack Club community there is no better place to do that than on Slack.  

1. In a new tab, open and follow [these directions][slack] to signup for our Slack.  
2. Then, post the link to the [`#scrapbook`](https://hackclub.slack.com/messages/scrapbook) channel to share it with everyone!

[slack]: https://slack.hackclub.com/
