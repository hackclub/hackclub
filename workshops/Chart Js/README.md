---
name: Charts with Chart.js
description: Create any kind of chart for your website
author: '@wollygfx'
img: 'https://cloud-d661yx1ei.vercel.app/0screen_recording_2020-12-11_at_10.42.35_pm.gif'
---

In this workshop you'll learn how to make a chart generator using [Chart.js](https://www.chartjs.org), a free open-source JavaScript library for data visualization. Follow along and see how easy it is!

Here you can find a [live demo](https://chart-generator-def.wollygfx.repl.co) and here, you will find the [source code](https://repl.it/@wollygfx/Chart-generator-def#index.htmll).

![Chart Generator](https://cloud-d661yx1ei.vercel.app/0screen_recording_2020-12-11_at_10.42.35_pm.gif)

## Set Up

This workshop requires a very basic knowledge of the following languages: HTML & JS. Don’t worry if you get stuck at some point in the workshop, everything is explained for you to understand!

For this workshop we will use [Repl.it](https://repl.it), click [here](https://repl.it/languages/html) to create a coding environment right for this workshop.

![Setup](https://cloud-qbmylslty.vercel.app/0image.png)

## HTML

Alright, the first thing we have to do is to load Chart.js into our HTML document, to do this, we are going to paste the following code inside of our `<head>` tag. 
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js"></script>
```
This allows us to use Chart.js without having to download it. Learn about CDNs [here](https://www.cloudflare.com/es-la/learning/cdn/what-is-a-cdn/).

The next thing we have to do is to create a [canvas](https://www.w3schools.com/html/html5_canvas.asp) element inside of our `body` tag, and give it an **id**. Our chart will be drawn in this canvas.
```html
<canvas id="myChart"></canvas>
```

Additionally, we have to create inside of a `div` container, 2 input elements and 3 buttons with the following attributes and values.
```html
<canvas id="myChart"></canvas>
<div>
  <input id="data" type="number" placeholder="Data">
  <input id="label" type="text" placeholder="Data's Label">

  <button onclick="addData(myChart)">Add Data</button>
  <button onclick="removeData(myChart)">Remove Data</button>
  <button onclick="saveCanvas()">Save Chart</button>
</div>
```
Notice that the 2 input elements have the attribute `type` but with different values. The `number` type is used to let the user enter a number, and the `text` type create basic single-line text fields. These inputs also have the attribute `placeholder`, which specifies a short hint that describes the expected value of an input field.

Also, you can see that the `button` elements have the `onclick` attribute, this is actually an [event handler](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers). When the button is being clicked, certain function or event will be run.

Here's how our HTML document looks so far:
![HTML DOM](https://cloud-3q20mqjc9.vercel.app/0image.png)

## CSS

Now that we have our HTML document ready, we should style it a little bit to make it look better. So, go ahead and click on the `style.css` file located in the **Files** tab.

The first thing we want to do, is to align all the input and button elements to the center.
```css
div {
  display:flex;
  justify-content:center;
}
```
Let's break this down:

- The `display` property sets whether an element is treated as a [block or inline element](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout) and the layout used for its children, such as [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout), [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) or [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout).

- The `justify-content` property defines how the browser distributes space between and around content items along the [main-axis](https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis) of a flex container, and the inline axis of a grid container.

When we click on *run*, we'll see that our elements are perfectly aligned to the center.

![Div aligned to the center](https://cloud-48yrakqtz.vercel.app/0image.png)

*Note: Make sure your style.css file is linked to your HTML document so we can see changes.*

Cool! – But our elements look very boring yet, so let's style them a little bit...
```css
button {
  background-color: #ffe0e6;
  border: 2px solid #fbabbb;
  border-radius: 5px;
  padding: 7px 16px;
  margin:0 2px 0 0;
  color: #7b7a7a;
  cursor: pointer;
}

input{
  background-color: #ffe0e6;
  border: 2px solid #fbabbb;
  border-radius: 5px;
  padding: 5px;
  margin:0 2px 0 0;
}

```
What we basically did here, was to give the elements a background color, a border (with a color too), a border radius, and some other stuff that you can see here:
![HTML DOM but with CSS](https://cloud-2dy6ppnzz.vercel.app/0image.png)

Cool, our website looks a lot better now!

## JavaScript

Now, let's move to the fun part of the workshop. Go ahead and click on the `script.js` file located in the **Files tab**. 

![Fun gif](https://cloud-n5xpv2pg5.vercel.app/0file_from_ios.gif)

### Setting up the canvas

First we'll need to get the context for our canvas. The [canvas context](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) is an object with properties and methods that you can use to render graphics inside the **canvas** element.
```js
var canvas = document.getElementById('myChart');
var ctx = canvas.getContext('2d');
```
1. First, we are creating a variable named `canvas`, that gets the canvas element using the `getElementById('')` method.
2. Then, we are creating another variable named `ctx`, that uses the `getContext('')` method to return the drawing context of the canvas, which is `2d`.

## Creating a chart

Now, we are going to create the actual chart using a variable that we'll name as chart, we are also giving it some colors and adding some options that will be useful later.
```js
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: '',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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

1. In a variable called `chart`, we are creating a Chart object using the `new`  operator.
2. This object has 2 essential elements: the `type` element; which specifies what type of chart we want to be rendered, and the `data` element; which contains a serie of datasets and labels that will be used to render the chart.
3. The `backgroundColor:` and `borderColor:` elements set the background and border color for each bar respectively using [rgba colors](https://www.w3schools.com/css/css_colors_rgb.asp).
4. The `borderWidth` element sets the width for the border.
5. The `options` element is used to configure the chart in different ways.

Here's what the code above will render:
![Chart](https://cloud-eh5pe4f89.vercel.app/0image.png)

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

![Polar area chart](https://cloud-4x3lxyzvi.vercel.app/0image.png)
</details>

### Data

Now we have our chart, but we need to get data from somewhere. So, what we are going to do, is to create a function that takes the input elements and gets their values, then using Chart.js methods, we'll push that data into our chart.
```js
function addData(chart) {
  chart.data.labels.push(document.getElementById("label").value);
  chart.data.datasets.forEach((dataset) => {
  dataset.data.push(document.getElementById("data").value);
  });
  chart.update();
}
```
As mentioned before, we are creating a function called `addData`, this function will be called whenever the user clicks on the **Add Data** button.

Then we are taking the variable `chart` (where the Chart object is in), and using its methods:

- The `data` method gets the data array from the object `chart`.
- The `labels` method gets the `labels` array from the `data` array.
- The `push` method adds data to the `labels` array. This data is gotten using the methods `document.getElementById()` and `value`.

Then we do the same thing but this time we'll get the `datasets` array from the `data` array, and using the `forEach()` method we'll call a function that will execute for every `dataset` in our `datasets` array.

Finally, we use the `update` method to update the chart once the data is gotten.

Here's the result of the code above:
![Result](https://cloud-l9cwjcuh7.vercel.app/0screen_recording_2020-12-23_at_1.04.00_pm.gif)

Now, we'll create a function that removes data from the chart, we'll do it the same way as the past function, but this time we'll use the `pop` method instead of the `push` method.

```js
function removeData(chart) {
chart.data.labels.pop();
chart.data.datasets.forEach((dataset) => {
dataset.data.pop();
});
chart.update();
} 
```
Let's see if it works:
![Result](https://cloud-goab5uq2w.vercel.app/0screen_recording_2020-12-24_at_11.31.05_am.gif)

Nice! – Now, the last thing we have to do is to create a function that saves the chart as a png image.

```js
function saveCanvas() {
    var image = canvas.toDataURL();  
    var tmpLink = document.createElement( 'a' );  
    tmpLink.download = 'my_chart.png';
    tmpLink.href = image;  
    document.body.appendChild( tmpLink );  
    tmpLink.click();  
    document.body.removeChild( tmpLink );  
}
```
This is what the code above does:
1. Convert the canvas to a [data url](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs), and store that url in the variable image.
2. Create an HTML link element using the method `document.createElement()`
3. Set the download attribute of the link element to `my_chart.png`, this is what the file downloaded gets saved as.
4. Set the href attribute of the link element to the data url acquired in step 1. This will cause that to be the image that is downloaded when the link is clicked.
5. Append the link to the end of the page, so that it is part of the website
6. Automatically trigger a click event on the link with JavaScript
7. Remove the link from the website, so it's no longer visible

Now, let's try it
![Demo](https://cloud-9j7oiwmca.vercel.app/0screen_recording_2020-12-29_at_6.17.34_pm.gif)

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


