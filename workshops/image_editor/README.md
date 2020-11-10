---
name: Image Editor
description: Make your own image editor
author: @wollygfx
img: 'https://cloud-81e0x4zt3.vercel.app/0image.png'
---

# Image editor
In this workshop you'll learn how to make a very simple image editor using [CSS Filters](https://www.w3.org/TR/filter-effects/) , [jQuery](https://jquery.com) and [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) . Follow along with me and see how easy it is!

Here's a [live demo](https://image-editor.wollygfx.repl.co) and the [source code](https://repl.it/@wollygfx/Image-editor) if you want to check it out before we start.
![live demo](https://cloud-gvno5b2im.vercel.app/0screen_recording_2020-11-09_at_8.14.57_pm.gif)

## Set Up
This workshop requires a basic knowledge of the following languages: HTML, CSS & JS. Don’t worry if you get stuck at some point in the workshop, everything is explained the best way for you to understand!

For this workshop we will use  [Repl.it](https://repl.it/), click  [here](https://repl.it/languages/html)  to create a coding environment right for this workshop.

![Repl.it](https://cloud-qbmylslty.vercel.app/0image.png)

## HTML
Okay, we're gonna start by making all the elements that will be in our image editor, the layout will be like this:
![Image editor's layour](https://cloud-lrjvj5rqz.vercel.app/0image.png)
1. In **section 1** we will put an image input and a button that updates the image displayed in section 2.
2. In **section 2** the chosen image will be displayed.
3. In **section 3** we will put some inputs that will let the user edit the image displayed in section 2.

### Coding the layout
So, to make the layout an actual thing we are going to use Bootstrap, but if you have enough experience in css you can do this part yourself.

Add the following code inside of your ```<head>``` tag. What it does is to connect the bootstrap stylesheet with our html.
```
<link  rel="stylesheet"  href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cerulean/bootstrap.min.css"  integrity="sha384-3fdgwJw17Bi87e1QQ4fsLn4rUFqWw//KU0g8TvV6quvahISRewev6/EocKNuJmEw"  crossorigin="anonymous">
```
[Bootstrap’s grid system](https://getbootstrap.com/docs/4.1/layout/grid/) uses a series of containers, rows, and columns to layout and align content, the website will be full of them:
![Div Containers](https://cloud-e8d17xj1f.vercel.app/0image.png)
- Color grey represents the ```<body>``` tag
- Color green represents the main container.
- Color pink represents a row.
- Color blue represents a column, the two last rows are divided by 3 columns.

Copy the following code and paste it into your ```<body>``` tag:
```html
<div class="container-fluid">

    <!--Section #1-->
  <div class="row">
    <div class="col-md-12">
    </div>
  </div>
  
  <!--Section #2-->
  <div class="row">
    <div class="col-md-4">
    </div>
    <div class="col-md-4">
    </div>
    <div class="col-md-4">
    </div>
  </div>

    <!--Section #3-->
  <div class="row">
    <div class="col-md-4">
    </div>
    <div class="col-md-4">
    </div>
    <div class="col-md-4">
    </div>
  </div>
  
</div>
```
Each ```<div>``` tag simply creates a container where the rows/columns will be in. What we actually need to understand are the classes that we are using:

- The main container has the class: **container**-**fluid** which is like any other div but that can expand/shrink depending on how big your browser is displaying the website. This is known as responsive.
- Column classes indicate the number of columns you’d like to use out of the possible 12 per row. We need three equal-width columns across, so we can use  ```col-md-4```, also we need a single column for the first row, that's why we are using ```col-md-12```.

This is how you make the layout, you can Hack it and make one by yourself... Here are some examples of how you can make your own layout:
![Other layouts](https://cloud-lvg07z1co.vercel.app/0image.png)
It's all up to you :)

## Section 1
In this section we are going to put an input where people will be able to choose what image they want to edit. To do this we are going to need a form, a text input and a button with these values:
```html
<!--Section #1-->
<div class="row">
  <div class="col-md-12 text-center mb-3 mt-3">
      <form id="imgurl">
            <input type="text" placeholder="Image URL" id="onlineurl">
            <button type="submit">Change Image</button>
        </form>
    </div>
</div>
```
Let's break this down:
- The class ```text-center``` keeps the input and the button elements in the center of the column.
- The class ```mb-3``` gives the column 3px of margin to its bottom.
- The class ```mt-3``` gives the column 3px of margin to its top.

Here's how the section 1 looks so far:
![Section 1 Result](https://cloud-nw3yei40u.vercel.app/0image.png)

## Section 2
In section 2 we'll just have to add an image tag inside of the **second column** of the **second row**:
```html
<!--Section #2-->
<div class="row">
  <div class="col-md-4">
  </div>
  <div class="col-md-4 text-center">
        <img src="https://assets.hackclub.com/flag-orpheus-top.svg" id="targetimage" alt="">
  </div>
  <div class="col-md-4">
  </div>
</div>
```
- The class ```text-center``` as seen before, keeps all the elements in the center.
- The ```src``` attribute inside of the ```<img>``` tag let us put an image as default, feel free to change it if you want to!

Here's the result:
![Section 2 Result]([https://cloud-6hre0bjjz.vercel.app/0image.png](https://cloud-6hre0bjjz.vercel.app/0image.png))

## Section 3
In this section we will put some inputs that will let the user edit the image displayed in section 2.

Let's start by adding a heading and a form:
```html
<div class="col-md-4 p-2" id="section_three">
  <h3 class="text-center">Image Filters</h3>
      <form id="slider-form" class="text-center">
    </form>
</div>
```
Notes:
- The ```p-2``` gives the column a 2px padding.
- The column has an id because we want to style the section 3 later using css.

Now, inside of that form we're going to start adding range inputs that will let us play with the image filters:
```html
<p>
  <label for="hue-rotate">Hue-Rotate</label>
  <input id="hue-rotate" name="hue-rotate" type="range" min="0" max="" value="0" class="slider">
</p>
```
All of these attributes are very important and deleting them might cause problems later.

We are adding 3 more inputs but with different values:
```html
<p>
  <label for="gs">Grayscale</label>. 
  <input id="gs" name="gs" type="range" min="" max="100" value="0" class="slider">
</p>
                    
<p>
  <label for="blur">Blur</label>
  <input id="blur" name="blur" type="range" min="0" max="" value="0" class="slider">
</p>

<p>
  <label for="sepia">Sepia</label>
  <input id="sepia" name="sepia" type="range" min="0" max="" value="0" class="slider">
</p>
```
Finally we need a button that we can use to reset the filters, this button goes inside of the form too:
```html
<button type="reset" class="btn btn-primary" >Reset</button>
```
The classes ```btn``` & ```btn-primary``` are used to style the button.

Here's the result:
![Section 3 Result](https://cloud-tfzc4gig6.vercel.app/0image.png)

# CSS
I don't want to style too much the website because i'd like to keep it simple. But you can still style it if you want to.
```css
img{
  width: 400px;
}

#section_three{
  border:2px solid black; 
}
```
Let's break this down:
- I am setting this width as default for every image we edit because some images can be too big and might not fit in the website.
- Added a border to the section 3 to make it look a little bit better.

Here's the result:
![CSS Result](https://cloud-i0vj1gzw6.vercel.app/0image.png)

# Javascript
This is my favorite part of the workshop, because this part makes the website actually work.

So let's start by creating 3 variables:
```javascript
let myform = document.getElementById('imgurl');
let targetimage = document.getElementById('targetimage');
let inputrange = document.querySelectorAll('.slider');
```
- The first variable will hold the data gotten from the input in the section 1.
- You'll find `document.querySelectorAll` returns a NodeList, a special type of list of elements, that will contain the amount of elements with  `class=slider` in the document. So the 3rd variable contains the value of all the range inputs in the section 3. 

```js
myform.addEventListener('submit', function(e){
    let urlimage = document.getElementById('onlineurl');
    let urlimageval = urlimage.value;
    if(urlimageval.length){
        targetimage.setAttribute('src',urlimageval);
        urlimage.value = '';
    }
    
    e.preventDefault();
    console.log('Image displayed');
});
```
This event gets the value of the image url input when the change image button is clicked, and checks that the value is not empty, if it is not empty it attempts to set the src attribute of the 'targetimage' element which is defined in one of the variables above.

Now let's test it out:
![Image displaying gif](https://cloud-jumlfocs6.vercel.app/0screen_recording_2020-11-08_at_11.26.14_pm.gif)
Works perfectly!

Copy and paste the following code:
```js
for(let i=0; i<=inputrange.length-1; i++ ){
    inputrange[i].addEventListener('input', editimage);
}
```
It loops through the inputrange array, then for each input, it adds an event listener to it, and when the event happens, the editimage function gets called

Now we'll create a function that takes the values from the range inputs, and then update the style of the image applying the css filter function using those values:
```js
function editimage(){
    let gs = document.getElementById('gs');
    let blur = document.getElementById('blur');
    let huerotate = document.getElementById('hue-rotate');
    let sepia = document.getElementById('sepia');

    let invertval = invert.value;
    let gsval = gs.value;
    let blurval = blur.value;
    let huerotateval = huerotate.value;
    let sepiaval = sepia.value;

    targetimage.style.filter = 'grayscale('+gsval+'%) blur('+blurval+'px) hue-rotate('+huerotateval+'deg) sepia('+sepiaval+'%) invert('+invertval+'%)';
}
```

![Image displaying gif](https://cloud-rnyr55z84.vercel.app/0screen_recording_2020-11-08_at_11.31.24_pm.gif)
Finally we'll need to give the reset button a functionality:
```js
let sliderform = document.getElementById('slider-form');
sliderform.addEventListener('reset', function(){
    sliderform.reset();
    setTimeout(function(){
        editimage();
    },0)
})
```
It adds an event listener to the sliderform element, then it calls the callback which resets the sliderform and then edits the image:
![Image displaying gif](https://cloud-6xk3j2yw1.vercel.app/0screen_recording_2020-11-08_at_11.35.41_pm.gif)

## Hack it
Congratulations! You just made an amazing image editor. 
![Congrats gif](https://cloud-d0aqa4icc.vercel.app/0bec38a05d56ac6ae2d9dec2f482ebff9.gif)
Hack this workshop and share it in the [Hack Club Slack](https://hackclub.slack.com/), I would love to see what you can create using what you've learned in this workshop!

## Other examples
- [Example 1](https://webdevtrick.com/demos/css-filter-editor/)
- [Example 2](https://image-editor-1.wollygfx.repl.co)

## Resources
Check these resources to go even further:
- [15 CSS Image Filter Libraries & Tools](https://speckyboy.com/css-image-filter-toolbox/)
- [Font Awesome icons](https://fontawesome.com/v4.7.0/icons/)
- [5 Stunning CSS Filters tricks you must see](https://www.youtube.com/watch?v=XEuzpXmAEG4)
- [jQuery for beginners](https://www.tutorialrepublic.com/jquery-tutorial/)