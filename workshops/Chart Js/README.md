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
![Fun gif](https://cloud-n5xpv2pg5.vercel.app/0file_from_ios.gif)

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

<details><summary>Polar area</summary>

![Polar area chart]([https://cloud-4x3lxyzvi.vercel.app/0image.png](https://cloud-4x3lxyzvi.vercel.app/0image.png)
</details>

They're all very easy to do, i promise... 

### Data

So, now that we have our chart, if we clicked on "run" it would render this:
![Chart rendered](https://cloud-ltszs5o7k.vercel.app/0image.png)

So, we'll have to give it data. For this workshop, i've created a data table that we are going to use, here it is:
![Data table](https://cloud-9ts8w8agi.vercel.app/0image.png)

Now, think of each **animal** as a variable and that each animal has a value that we'll call **# of Animals**. So what we need to do, is to put the animal variables inside of the `label` element.

*Note: Each animal goes inside 2 apostrophes and followed by a comma.*

```js
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Lions', 'Pinguines', 'Monkeys', 'Elephants'],
        datasets: [{
            label: '',
            data: [],
        }]
    },
});
```

Now if we clicked on run, you would see that now we have our animals right under the x axis.  

![Chart rendered](https://cloud-gpp881t22.vercel.app/0image.png)

Cool, but a bar chart would not be anything if it had no values or data, so we'll now do that.

Let's move into the `datasets` element, what we want to do is to fill the `label` and `data` elements with data, duh. So, do you remember that each animal has a value that we called **# of Animals**? –Well, that's what we are going to put inside of the `label` element. And then, inside of the `data` element we'll put the values for each animal respectively.
```js
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Lions', 'Pinguines', 'Monkeys', 'Elephants'],
        datasets: [{
            label: '# of Animals',
            data: [7, 17, 15, 10],
        }]
    },
});
```
After clicking on run we'll see that each animal have its value:
![Chart rendered](https://cloud-95ig0rwc3.vercel.app/0image.png)

But, we have a problem here. ChartJs puts the the smallest given value (7) at the beginning and that's not what we want. And we are fixing this using the `options` element:
```js
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Lions', 'Pinguines', 'Monkeys', 'Elephants'],
        datasets: [{
            label: '# of Animals',
            data: [7, 17, 15, 10],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
```
What this basically does is to put the zero at the beginning in the y coordinate.

Now, i want you to quickly change the type of the chart for any of the mentioned before. You'll see how easy you can make any chart using the same data structure. 

![Pie and Polar area charts](https://cloud-9brkk5dkc.vercel.app/0screen_recording_2020-11-20_at_7.47.38_pm__1_.gif)

*Note: Some charts such as polar area and pie, don't require the `options` element.*

### Colors
You have probably noticed that this chart is too boring, we can simply fix this by giving it colors. To do this, we are going to use the elements `backgroundColor:` , `borderColor:` & `borderWidth`. Those elements go inside of the element `datasets`, here's an example:
```js
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Lions', 'Pinguines', 'Monkeys', 'Elephants'],
        datasets: [{
            label: '# of Animals',
            data: [7, 17, 15, 10],
            /* Here we put our elements */
            backgroundColor: [
                'rgba(255, 251, 0, 0.2)',
                'rgba(0, 0, 0, 0.2)',
                'rgba(250, 0, 0, 0.2)',
                'rgba(60, 0, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 251, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(250, 0, 0, 1)',
                'rgba(60, 0, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
```
Let's break this down:
- The `backgroundColor:` and `borderColor:` elements set the background and border color for each bar respectively using [rgba colors](https://www.w3schools.com/css/css_colors_rgb.asp).
- The `borderWidth` element sets the width for the border.

![Cool chart](https://cloud-2flrxsktt.vercel.app/0screen_recording_2020-11-20_at_8.11.26_pm.gif)

### Practical exercise
Now, i want to challenge you to make a line chart by your own using the following data:
![Practical Exercise](https://cloud-idj8t53rb.vercel.app/0image.png)

<details><summary>Solution</summary>

```js
var ctx = document.getElementById('chart').getContext('2d');

var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Chapel School', 'Student Port', 'Reddam House', 'AUK', 'Ad Astra', 'Instenalco'],
        datasets: [{
            label: '# of Members',
            data: [8,4,12,6,15,5],
            backgroundColor: [
                'rgba(0, 0, 0, 0.2)'
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
```

![Result](https://cloud-2gycqani2.vercel.app/0screen_recording_2020-11-20_at_8.31.47_pm.gif)

</details>

## Hack it
Yes! –you made it to the end of the workshop

![Congrats GIF](https://cloud-d0aqa4icc.vercel.app/0bec38a05d56ac6ae2d9dec2f482ebff9.gif)

Now that you know how to use Charts Js, feel free to hack it and use it for your personal projects.

##  Live demos
Check out these charts made by other people using ChartJs:
- [ChartJS visualization gallery](http://www.bezanilla-solar.cl/libs/jscripts/DevExpressChartJS/Demos/)
- [Chart Js line demo](https://jsfiddle.net/leighking2/jx1w1xed/)

## Resources
- [10 Chart.js example charts to get you started](https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/)
- [Official Guide](https://chartjs.org/docs)
- [A zoom and pan plugin for Chart.js](https://github.com/chartjs/chartjs-plugin-zoom)
- [Awesome Chart Js](https://github.com/chartjs/awesome)
