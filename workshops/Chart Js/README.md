---
name: Chart JS
description: Create any kind of chart for your website
author: '@wollygfx'
img: ''

---


In this workshop you'll learn how to make charts using [Chart Js](https://www.chartjs.org), a free open-source JavaScript library for data visualization. Follow along and see how easy it is!

Here's a [live demo](https://repl.it/@wollygfx/ChartJs#script.js) of what we will make, you can also find the final code there.

![Chart JS](https://cloud-g96wt9icu.vercel.app/0screen_recording_2020-11-19_at_4.38.37_pm.gif)

## Set Up

This workshop requires a very basic knowledge of the following languages: HTML & JS. Don’t worry if you get stuck at some point in the workshop, everything is explained the best way for you to understand!

For this workshop we will use [Repl.it](https://repl.it), click [here](https://repl.it/languages/html) to create a coding environment right for this workshop.

![Setup](https://cloud-qbmylslty.vercel.app/0image.png)

## HTML

Alright, the first thing we have to do is to install Chart JS in our html document, to do this, we are going to paste the following code inside of our `<head>` tag. This allows us to use the Chart JS library without having to download it. 
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js"></script>
```

Last thing we have to do here is to create a [canvas](https://www.w3schools.com/html/html5_canvas.asp) element inside of our `<body>` tag. We also have to give it an `id`, a `width` and a `height`.
```html
<canvas id="myChart" width="400" height="400"></canvas>
``` 

## Javascript

Now, let's move to the fun part of the workshop.

### Setting up the canvas
First we'll need to get the context for our canvas. The [canvas context](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) is an object with properties and methods that you can use to render graphics inside the **canvas** element.
```js
var ctx = document.getElementById('chart').getContext('2d');
```
1. First, we are creating a variable named `ctx`, that gets the canvas element using the `getElementById('')` method.
2. Then using the `getContext('')` method we return the drawing context of the canvas, which is `2d`. 

## Creating a chart
Now, we are going to create the actual chart using a variable that i will name as `chart`.
```js
var chart = new Chart(ctx, {
    type: '',
    data: {
        labels: [],
        datasets: [{
            label: '',
            data: [],
        }]
    },
});
```
Let's break this down:
1. The `new`  operator lets us create an object, which will be a Chart.
2. `Chart(ctx,{});` this object that we just created, will be inserted inside of the canvas context `ctx`.
3. Each chart is composed of two elements, the `type` element; which specifies what type of chart we will render, and the `data` element; which is composed by other elements that we'll see in a few moments.

### Types of charts
Chart.js allows us to use up to 7 built-in charts types, and you can even create your own chart type.

Here are some of them:
<details><summary>Bar</summary>
![Bar chart](https://cloud-c1xuq61f3.vercel.app/0image.png)
</details>

<details><summary>Line</summary>
![Line chart](https://cloud-35yumi24n.vercel.app/0image.png)
</details>

<details><summary>Doughnut and Pie</summary>
![Doughnot and pie charts](https://cloud-hh4vxew90.vercel.app/0image.png)
</details>

<details><summary>Radar</summary>
![Radar chart](https://cloud-jy6tuwny1.vercel.app/0image.png)
</details>

They're all very easy to do, i promise... Let me show you

