---
name: 'Javascript Typing Test'
description: 'A Typing Test website built with HTML, CSS, and Javascript'
author: '@GurshanBrar'
img: 'https://cloud-gny03pu07.vercel.app/0javascript_typing_test_cover.png'
---

### The project
Obviously we need to know what we'll build before starting the workshop, so here's the [final demo](https://javascript-typing-test-final.gurshanbrar.repl.co/) and the [final code](https://repl.it/@GurshanBrar/Javascript-Typing-Test-Final). These images show our final project:

![Screenshot of the final site for the test portion](https://cloud-1v9gb7z3j.vercel.app/0javascript_typing_test_final_image_1.png)

![Screenshot of the final site for the results portion](https://cloud-1v9gb7z3j.vercel.app/1javascript_typing_test_final_image_2.png)

### Prerequisites
This project will be more fun to code if you have a general understanding of HTML, CSS, and Javascript. However, don't worry if you don't because you can definitely complete this workshop without any prerequisites.

### Focus
Yes, **focus**. JK. This workshop will focus on Javascript, so you'll have a starter template (with HTML and CSS) that will be explained.

### The IDE
An IDE (Integrated Development Environment) is just fancy speak for where your code will run. We'll be using [repl.it](https://repl.it) as our IDE because...

1. It saves your code in the cloud
2. All you need is an internet connection and a web browser
3. It's really easy to fork (copy) from

# Let's start!

## Step 0: Forking the starter repl
To fork (copy) the starter template,

1. Navigate to the [Starter Template](https://repl.it/@GurshanBrar/Javascript-Typing-Test-Starter)
2. Edit anything and the template will be copied as one of your repls
3. Click on the run button to run the website, and click on the "open in a new tab" button on the right of the url inside the repl's output.

You can make a change now, like changing the page's title in the ```<title>``` tag or adding a random space. Another option is to wait until we start coding Javascript!

## Step 1: Explaining the starter template
To explain the starter template, I'll go over the HTML, CSS, and Javascript files one by one

#### The HTML file
HTML stands for **Hyper Text Markup Language** and is used for defining the **basic structure and content** of a web page. HTML consists of opening tags followed by closing tags. Inside the two tags, we add in our content. We use HTML to define a ```<div>``` (container) for our typing test and ```<span>```/```<ul>``` elements for the individual letters, and the results. Now lets go over it!
- ```html <!DOCTYPE html>``` tells the browser to render the file as an HTML document
- Inside ```<html lang="en">``` is where all of our content goes
- Inside the ```<head>``` tag is where content that is more geared towards accessiblity, metadata, and the title. It is not visible on the page, except for the title.
- Finally, the ```<body>``` houses the visible part of our program and everthing that is rendered on page load. We add Javascript after definining our HTML elements to avoid errors orginiating from accidently accessing an HTML element before it has been loaded, and to make our pages load vital components first.

This is the basic overview of an HTML document. Now lets dive into our ```<head>``` tag!

First up is the ```<title>``` tag. This tag simply takes text and helps web browsers display it above the search bar. You can see where it is displayed in this screenshot:

![Screenshot showing where the ```<title>``` tag is shown](https://cloud-dv408c6c4.vercel.app/0javascript_typing_test_title_demo.png)

I've called Typing Test, but you can call it whatever. These ```<meta>``` tags: 
```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
``` 
are additions to any web page that should always be included. The first line tells the browser that the character [encoding](http://net-informations.com/q/faq/encoding.html) of characters used inside the webpage is [utf-8](https://www.fileformat.info/info/unicode/utf8.htm). This means that we can use the extensive set of characters this encoding provides and is important for the browser to know. 

The second line is used for proper viewport configuration on mobile devices. The ```name``` tag tells us that we are referring to the viewport. ```content="width=device-width``` tells the browser to set the page width to the on-screen width of the device, and ```initial-scale=1``` means to set the initial zoom level to 1.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />
<link rel="stylesheet" href="style.css" />
```
These two ```<link>``` tags define CSS stylesheets that are being linked to our page. The ```rel``` attribute is an HTML attribute meaning it adds more functionality to HTML elements. In this case, it defines the purpose of the link attribute which is to link a CSS "stylesheet". Furthermore, the ```href``` attribute defines the url of the stylesheet. The first tag refers to a CSS framework we'll use called [bootstrap](https://getbootstrap.com/). It links to their stylesheet and allows us to use their styles. Our stylesheet is local on the filesystem, so we can give it a link of "style.css".

We can look into the ```<body>``` tag now. Starting off with our title and subtitle, we have this:
```html
<div class="intro">
    <h1 class="intro-heading">Typing Test</h1>
    <p class="font-weight-light intro-text">
        This is a typing speed test! Type a letter to begin.
    </p>
</div>
```
Looking into this, we see a ```<div>``` element. A ```<div>``` element is simply a box that contains other elements. It's used to group elements, and also as literal boxes. ```id``` and ```class``` are two HTML attributes that we will use. ```id``` means that the element has a unique identifier used for referencing the element in CSS and Javascript. ```class``` is the same thing, but it allows multiple elements to fall under the same identifier. In this case we use ```class```.

Inside the ```<div>``` there is an ```<h1>``` and a ```<p>```. The ```<h1>``` tag defines an HTML heading. The ```<p>``` tag represents a text. 

You can see how we have a weird class called ```font-weight-light```. Well it turns out, there's another great property of ```class``` in our case. Remember that Bootstrap stylesheet we used? That stylesheet contains custom styles that are referenced under class names. Using those class names in our HTML will allow the stylesheet to select our element and the styles will be applied. 

Therefore, a class we use is [```font-weight-light```](https://getbootstrap.com/docs/4.5/utilities/text/#font-weight-and-italics). This class means that the text will have a *light* look and feel to it. It allows us to create different styles very easily and we don't have to code any CSS for this purpose!

To create the container that holds our text, we use this code:
```html
<div id="main" class="container main">
    <div class="text-container" id="text-container"></div>
</div>
```
We use a simple ```<div>``` with the bootstrap class [```container```](https://getbootstrap.com/docs/4.5/layout/overview/#containers). ```container``` just means that our box will resize properly and look good on all devices. Inside that we have another ```<div>``` to hold our actual text. 

Now you may have some questions...

1. **Why do we have so many ```id``` and ```class``` names?**. We have these because we will use them later on to reference our HTML elements in our CSS stylesheet and our Javascript.`
2. **Why isn't there any text inside ```<div class="text-container" id="text-container"></div>```?**. As for the text, what we'll do is use Javascript to add a bunch of ```<span>``` elements into this container. Our text will be in the Javascript file and each letter of the text will consist of a ```<span>``` element with the letter inside. This way we can dynamically change the color of each individual letter.

The final ```<div>``` we have is this:
```html
<div class="results-container" id="results">
```
This ```<div>``` is used to contain our results. At first it is not visible, but we can change that with Javascript. Inside this is a [bootstrap unordered list](https://getbootstrap.com/docs/4.5/components/list-group/) with its bullet points automatically removed. 

Inside this are many ```<li>```(list elements) that contain the results. Inside three of these ```<li>``` elements are ```<span>``` elements. What ```<span>``` means is inline text. Inline text doesn't have a line break between each element like ```<p>``` does. Therefore we can have two on one line, and use Javascript to fill in the results. We add a [```flex```](https://getbootstrap.com/docs/4.5/utilities/flex/) property on the ```<li>``` elements for horizontal alignment of our ```<span>``` elements.

Finally, the ```<script>``` tags link to a Javascript file. We have three for Bootstrap's Javascript and one for our Javascript file.

#### The CSS File
CSS stands for Cascading Style Sheets and defines how HTML elements look to the user. A CSS *block* looks like this:
```css
selector {
  property: property value
}
```
You can select an element to apply styles to, or select a class/id name. This is why we added so many ids and classes to our elements! Additionally, if an HTML element has CSS styling, the CSS properties will be inherited by that element's children. In this case, being a child of an HTML element means being inside that HTML element. For example, our introduction's text will inherit properties set on the introduction text's container.

Look at *style.css*. Inside that file, we apply styles that pertain to our HTML elements. First, we add a ```--nav-color``` variable to `:root` to define a single color. We center align our introduction text and add ```margin``` properties. In CSS, every element can have a ```margin```, a ```border```, some ```padding```, and content. These properties are all part of the CSS [box model](https://www.w3schools.com/css/css_boxmodel.asp) which define how an element looks on the page. Here is an image to illustrate:

![Image explaining the box model](https://cloud-jvqp47ln2.vercel.app/0box_model_demo.png)

```margin``` is the space around an element, and ```padding``` is the space between the ```border``` and the content. Therefore, to create spacing we use these properties. On our ```.main``` ```<div>```, we set a ```border-radius``` to round off the border, add a ```background-color```, and put a shadow around the ```<div>``` to make it pop out. We also add padding. ```.char``` and ```.space``` are classes set to the future ```<span>``` elements we will add into our container. These control the padding and font size to make the letters look good.

For the ```.results-container``` we center align our ```ul``` and set the ```display``` to ```none```. The css [```display```](https://www.w3schools.com/cssref/pr_class_display.asp) property is used to change the display of an element. We set it to ```none``` but to see the container, you can set it to ```block```. Try it! 

Our ```.results-list``` is where the results are shown. It also has a border radius, and a defined width in pixels. We overrode bootstrap's default ```padding``` and added another ```box-shadow```. We then use the ```>``` selector. This selector selects all children of the element on the left. If we have a selector like this: ```a > b {width: 400px}``` then all children of ```a``` that are the HTML element ```b``` will have that style. 

On the children of our ```ul```, we add a simple border and set the background color.

Finally, there is a very weird selector that looks like this:
```css
@media screen and (max-width: 220px) {
    .results-list {
        width: 100%;
    }
}
```
This is a [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries). A media query pertains to a device's characteristics. The characteristic selected in our case is ```screen```. We add this after ```@media``` to tell CSS that we're using this characteristic. The ```screen``` characteristic lets us select instances where the screen's size is a certain width. We do this to make our ```.results-list``` ```100%``` width if the screen size is very small. This way the content doesn't get chopped off. What we are saying is that if the width of the screen is smaller than 220 pixels, make the width of our ```ul``` ```100%```. ```max-width: 220px``` means that the style only applies to a maximum screen width of 220 pixels.

#### The Javascript file
In *script.js*, we can see a bunch of ```let``` keywords, ```=``` signs, and ```document.getElementById();``` function calls. 

The ```let``` keyword declares a variable in Javascript. A variable is like a box used to store information. 

![Image of a variable in a box](https://cloud-r8b9ebfrj.vercel.app/0what_are_variables.png)

To assign a value to a variable, we can use the ```=``` sign. Finally, we access the ```document```'s ```getElementById()``` function. The `document` in Javascript is a giant variable related to the page. It has many [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) (also called methods) that do different things. 

A Javascript function is a variable in which you can store code to run later on. We call the ```getElementById()``` function to store an HTML element inside a variable. We do this by adding its id into a [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) as a function parameter. A string is a data type consisting of text. A parameter is data passed to a function so that the function can use it. We'll learn more about this soon. In conclusion, we store a bunch of HTML elements into variables to modify later on.

## Step 2: Coding our Javascript
Now we'll code our Javascript! Our program will be split up into three blocks that provide functionality: ```handleKey(key)```, ```handleEnd()```, and the event listener. We'll also have variables defined at the beginning to assist these three blocks. Let me explain how our program will flow:

1. First we'll declare variables for our text, time, position, etc.
2. Then we'll start our event listener. Everytime a key is pressed it will check if the key is a valid symbol or letter. It'll forward the key to ```handleKey(key)``` if it is, otherwise ignore it.
3. Everytime ```handleKey(key)``` gets a character, it checks it against the text. If it's correct it increments the position in the text and changes the letter's color to green. Otherwise it changes it to red and sets a ```backspaceNeeded``` variable.
4. When the user is done typing, the ```handleEnd()``` function computes the results, changes the CSS ```display``` property, and modifies the HTML content.

We'll code our program section by section!

#### Section 1:
All the variables we declare on the top will be available to our functions! So we don't have to worry about variable accessibility. 

Lets start off by creating an ```invalidKeys``` array and a text string. Add this at the end:
```javascript
const invalidKeys = 'F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12 Escape Tab CapsLock Shift Control Alt Meta ArrowLeft ArrowRight ArrowDown ArrowUp Enter'.split(
    ' ',
);
const text =
    'Hello there! I hope your day is going well. Thanks for trying out my typing test. Did you know that this project was actually made for Hackclub? Hackclub is a worldwide, student led coding club for teens that strives to provide a comfortable and educational place to collaborate with others!';
```
The first variable is used by our event listener and lists all the keys we won't count as *errors* when typing. We use Javascript's built-in [```split()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) function to separate the string into an [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

An array in Javascript is a variable that can store a list of many variables. A specific variable inside an array is accesible by an index value that starts at zero. Index 0 corresponds to the first element in the array. Index 1 contributes to the second, and so on. Arrays are initialized like this: ```let array = ['string', 'apple']```.

![Image that explains index](https://cloud-ei7nqg21v.vercel.app/3index_demo.png)

The ```split()``` function splits a string into an array based on a delimeter. The delimeter is the string we add in its parantheses as a parameter. So every time it sees the parameter we passed in, it makes a new array element.

Finally we have a string that defines what text we'll add for our typing test. Add this at the end:
```javascript
const textArr = text.split('');
const htmlArr = textArr.map((item, index, array) => {
    if (item === ' ') {
        return `<span class="space" id="span${index}">${item}</span>`;
    }
    return `<span class="char" id="span${index}">${item}</span>`;
});
```
We split our text string into an array for easier checking. Now, every letter is an element in the array. 

To show text in our HTML, we'll need to split every letter into a ```<span>``` element. We use Javascript's ```map()``` method to make a new array based on a certain condition. ```map()``` goes through ```textArr``` and calls a function. That function is used to tell the ```map()``` function what to add into the new array. Whatever the function returns, the ```map()``` function adds in to ```htmlArr```. If the character in ```textArr``` is a space we assign a different CSS class. 

A new syntax is used: ``` `span${index}` ```. These backticks allow you to easily enter variables in a string. Use the dollar sign and brackets to add in a variable. Now, lets add in the final variables at the end:
```javascript
let errors = [];
textContainer.innerHTML = htmlArr.join('');
let firstTime = true;
let currentPos = 0;
let backspaceNeeded = false;
let currentTime = 0;
let repeat;
```
I'll go over this line by line. We make an empty ```errors``` array to store any mistakes made when typing. We join together the ```<span>``` elements in our ```htmlArr``` into a string using the ```join()``` function. That function joins all elements of an array together with a string in between. We make a ```firstTime``` variable to check if it's the user's first letter typed. 

```currentPos``` is a counter used to track the position of the user in the ```textArr``` array. ```backspaceNeeded``` tells the program that a backspace has to be typed to continue. ```currentTime``` simply stores the time in seconds, and repeat is used to set an interval for the timer. I'll get back to the interval later.

#### Section 2: 
Now that we've declared all of our variables, we need to start our event listener. The event listener simply consists of a function that runs when a key is pressed. The event listener will call the ```handleKey(key)``` function that takes care of the key that was pressed. Add this code at the end of your file:
```javascript
document.addEventListener('keydown', event => {
    if (event.key === ' ') {
        event.preventDefault();
    }
    if (firstTime) {
        firstTime = false;
        repeat = setInterval(() => currentTime++, 1000);
    }
    if (event.location === 0 && !invalidKeys.includes(event.key)) {
        handleKey(event.key);
    }
});
```
We add a listener on the Javascript ```document``` variable, using Javascript's built in method called [```addEventListener('eventType', function)```](https://www.w3schools.com/jsref/met_element_addeventlistener.asp). This function adds a listener on whatever variable we call it from. Since we called it from ```document``` it adds one on the whole page. The function takes two arguments: the type of event that will call the function, and the code to run once the event happens. 

![Image explaining ```document```](https://cloud-ei7nqg21v.vercel.app/2document_demo.png)

The first argument is the ```'keydown'``` string. This string tells the listener to activate once any key is pressed down. The second argument is a function. That function is called whenever our listener picks up a ```'keydown'``` event. The function takes one argument: the ```event``` variable. This variable contains information about our event.

The function we use first checks if ```event.key``` is a space (empty string). It does this by using the ```===``` operator. That operator compares two values. If they are the same it returns ```true```. To check what ```event```'s properties are on a certain keypress, check out [keycode.info](keycode.info).

```event.key``` returns the literal string representation of the key that was pressed. If it is a space, we use the ```event``` [```preventDefault()```](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) function. That function prevents the normal behavior of the key. Without this, whenever we type a space the page scrolls automatically to the end (which is very annoying).

We then check if it's the first key that was typed. The code in an [```if```](https://www.w3schools.com/js/js_if_else.asp) statement in Javascript runs if the condition in the parentheses is ```true```. Otherwise it skips over. Since ```firstTime``` is literally set to ```true```, the code runs. The code first changes the variable to ```false``` so that it doesn't run again, and sets an ```interval```. 

[```setInterval()```](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) repeats a function periodically. We give it a time in miliseconds to repeat, and a function to call. The function inside of it is called an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). 

Arrow functions are just normal functions but shorthand. The first part of our arrow function is `()`. `()` is usually where parameters would go. A parameter is a variable given to a function to allow the variable's use inside the function. We need no parameters, so we give it an empty value. We then use `=>` to represent that it's an arrow function. After `=>` we write our function normally. Our function's body in this case just increments the currentTime by 1. `++` is an operator that increases the value of the operand by 1 (just increases the ```currentTime``` variable, and it repeats every 1000 miliseconds (1 second), so it's basically a timer we created).

We do another equality check, this time making sure that the [```location```](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/location) property of the event is ```0```, and making sure that the key isn't inside our ```invalidKeys``` array. The ```location``` property being zero means that the key was one of the general key presses. Additionally we use our array ```invalidKeys```'s, built-in [```includes()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method to check if an element is inside that array.

The ```!``` operator reverses the outcome of the condition. So if the key is inside ```invalidKeys``` it'll return true but we need it to return false. So we add the ```!``` in the front. In the middle we use an two ampersands (&&) to influence our ```if``` condition. Basically the operator means that if the condition on the left and right are both true, only then will the whole condition be true. That way we can be sure that the key is okay to be included.

We finally call our ```handleKey(key)``` function, and give the function access to our key. We'll make this next, but first a final code check. 

#### Check In
Your Javascript at this point should look like this:
<details>
	
```javascript
'use strict';
let main = document.getElementById('main');
let textContainer = document.getElementById('text-container');
let resultsContainer = document.getElementById('results');
let wpmText = document.getElementById('wpm');
let accuracyText = document.getElementById('accuracy');
let timeText = document.getElementById('time');

const invalidKeys = 'F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12 Escape Tab CapsLock Shift Control Alt Meta ArrowLeft ArrowRight ArrowDown ArrowUp Enter'.split(
	' ',
);
const text =
	'Hello there! I hope your day is going well. Thanks for trying out my typing test. Did you know that this project was actually made for Hackclub? Hackclub is a worldwide, student led coding club for teens that strives to provide a comfortable and educational place to collaborate with others!';
const textArr = text.split('');
const htmlArr = textArr.map((item, index, array) => {
	if (item === ' ') {
	return `<span class="space" id="span${index}">${item}</span>`;
	}
	return `<span class="char" id="span${index}">${item}</span>`;
});
let errors = [];
textContainer.innerHTML = htmlArr.join('');
let firstTime = true;
let currentPos = 0;
let backspaceNeeded = false;
let currentTime = 0;
let repeat;

document.addEventListener('keydown', event => {
	if (event.key === ' ') {
	event.preventDefault();
	}
	if (firstTime) {
	firstTime = false;
	repeat = setInterval(() => currentTime++, 1000);
	}
	if (event.location === 0 && !invalidKeys.includes(event.key)) {
	handleKey(event.key);
	}
});
```
</details>

You can also check against [this repl](https://repl.it/@GurshanBrar/Javascript-Typing-Test-Check-in#script.js) for assurance.

#### Section 3:
In this section we make our ```handleKey(key)``` function! This function changes the color of the key, changes the position of the key in the array, and forces backspaces. To start, add this at the end:
```javascript
function handleKey(key) {
    let span = document.getElementById(`span${currentPos}`).style;
    if (!backspaceNeeded) {
        if (key === textArr[currentPos]) {
            span.color = 'green';
            currentPos++;
        } else {
            if (textArr[currentPos] === ' ') {
                span.backgroundColor = 'red';
            } else {
                span.color = 'red';
            }
            backspaceNeeded = true;
            errors.push(textArr[currentPos]);
        }
    } else {
        if (event.key === 'Backspace') {
            if (textArr[currentPos] === ' ') {
                span.backgroundColor = 'transparent';
            } else {
                span.color = 'black';
            }
            backspaceNeeded = false;
        }
    }
    if (currentPos === textArr.length) {
        clearInterval(repeat);
        handleEnd();
    }
}
```
We first get the span element that corresponds with the current position. We get its [```style```](https://www.w3schools.com/jsref/prop_html_style.asp) property to modify the CSS. 

By using `if (!backspaceNeeded) {` We make sure the there isn't a backspace needed. Meaning, we make sure the `backspaceNeeded` isn't true. If it isn't, we validate the key pressed by comparing its equality with the current position in the ```textArr```. `textArr[currentPos]` means that we are accessing the element at `currentPos` index of the array. If it's correct we set the color to green (`span.color = 'green';`) by using the CSS `color` property, and increment the ```currentPos``` variable. `++` means to increase the value before it by 1.

If the pressed key isn't correct, meaning that the `else` statement gets executed, we check if the current letter inside `textArr` is a space or letter in another `if` statement. A space refers to `' '` and it's a letter if it isn't a space. We then change either the ```backgroundColor``` or the ```color```. `backgroundColor` is required to be changed if the letter in `textArr` (the letter the user needs to type) is a space since `color` only applies to text. If it isn't correct we also set ```backspaceNeeded``` to true and add the letter into the ```errors``` array. 

The [`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method is a method used on arrays to add an element at the end of the array. We add the letter that was supposed to be typed at the end of the `errors` array so that we can log how many errors the user made.

If there is a backspace needed, we only execute code if the ```key``` is a backspace. We do this so that our program doesn't continue when a backspace is needed. After doing the appropriate check for space or letter, we change the color to `black` if it's a letter, and `transparent` if it's a space. `transparent` is the default `backgroundColor` and `black` is the default color in our case. This resets the colors back to normal. Finally we reset the ```backspaceNeeded``` variable if the key pressed was indeed a backspace.

At the end we make sure that if the current position has been incremented to ```textArr.length```, we stop the timer function by doing `clearInterval(repeat)`. This takes the `setInterval()` method's variable `repeat` that we assigned, and stops it from repeating. We finally call our ```handleEnd()``` function to show the results. Since array indexes reference **one more than the index value** having an index equivalent to the array's length would reference a non-existant value. Therefore we know that we have reached the end of the program.

#### Section 4:
Now we need to add the final segement of our code: the ```handleEnd()``` function. This function calculates the results, modifies the HTML, and changes the display properties that hide the results. Add this at the end:
```javascript
function handleEnd() {
    let wpm = Math.floor(textArr.length / 5 / (currentTime / 60));
    let accuracy = Math.floor(
        ((textArr.length - errors.length) / textArr.length) * 100,
    );
    let multiples = Math.floor(currentTime / 60);
    let seconds = currentTime - multiples * 60;
    wpmText.innerHTML = `${wpm} wpm`;
    accuracyText.innerHTML = `${accuracy}%`;
    timeText.innerHTML = `${multiples} m ${seconds} s`;
    main.style.display = 'none';
    resultsContainer.style.display = 'block';
}
```
First off, we calculate the time, the wpm, and the accuracy. If you want to learn how they are calculated, refer to [this site](https://www.speedtypingonline.com/typing-equations). But basically, we use `Math.floor()` to round results down, and divide by integers to compute our result. We finally store them in variables. Javascript math operations follow the order of operations (PEMDAS). Therefore we can ensure that our result is accurate.

As for the time, we get the minutes first. To get the minutes we divide the time by 60. The remainder is chopped off because we use ```Math.floor()``` (```Math.floor()``` rounds the result down). We then store the leftover seconds in ```seconds```. We modify the ```innerHTML``` properties of our ```wpmText```, ```accuracyText```, and ```timeText``` variables. Remember that these variables were declared at the very top of our file and refer to HTML elements. 

![Image describing ```innerHTML```, ```outerHTML```, and ```innerText```](https://cloud-ei7nqg21v.vercel.app/1inner_html_demo.png)

Finally, we set the display of our ```main``` container to ```'none'``` and the ```resultsContainer``` to ```'block'```. We can do this by referencing the HTML `style` attribute. The `style` attribute adds an inline `style` to the HTML element. To create the `style` attribute we can reference it as an object `key`. We can then add CSS styles inside of it. Our style hides the text and shows the results by using the CSS `display` property. Remember we set the display of our `resultsContainer` to `none`? Our Javascript `style` attribute overrides that property and returns the `resultsContainer` back to its default value. We now set a new property on the `main` container to hide it.

## Step 3: Extras

![Image resembling finishing a race](https://cloud-ei7nqg21v.vercel.app/0finished.jpeg)

Thats it! We've finished coding the typing test workshop. You should feel proud of yourself because you learned many new skills such as functions, backticks, operators, ```if``` statements, and more! This workshop is pretty hackable, though. Here are some examples of extending it:

- A try again button! We can add a try again button to our workshop. Here's the [final demo](https://javascript-typing-test-final-1.gurshanbrar.repl.co/) and the [source code](https://repl.it/@GurshanBrar/Javascript-Typing-Test-v1#index.html).
- Save our results in ```localStorage```. ```localStorage``` is a place on a user's browser to store data. We can store the results there, and fetch them every time we complete the typing test! The [final demo](https://javascript-typing-test-v2.gurshanbrar.repl.co/) and the [source code](https://repl.it/@GurshanBrar/Javascript-Typing-Test-v2#script.js).
- Add a nice little navbar. We can add a navbar that links to your github and has a link to Hackclub. Just make sure to read the comment inside the HTML file. The [final demo](https://javascript-typing-test-v3.gurshanbrar.repl.co/) and the [source code](https://repl.it/@GurshanBrar/Javascript-Typing-Test-v3#index.html).

A version with all of these features is [here](https://javascript-typing-test.netlify.app)

If you have any questions, you can message me on [Slack](https://hackclub.slack.com/team/U0198EM6ZA7) or [visit my GitHub](https://github.com/gurshanbrar). 
