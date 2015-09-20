# Ajar.io

---

[Agar.io](http://agar.io) is a popular game built for the web with [HTML, CSS, and Javascript](https://www.quora.com/Difference-between-HTML-XML-PHP-CSS-and-JavaScfdffdript-in-layman-terms). The goal of this workshop is to teach you to make your own simplistic version of agar.io which we'll call ajar.io. 

![](img/agar.png)

The workshop will be divided into several parts:

- __Part 1__ – display the user's cell on screen.
- __Part 2__ – convert the code from part 1 to use functions.
- __Part 4__ – make the user's cell follow the mouse cursor.
- __Part 5__ – add randomly generated food.
- __Part 6__ – add acceleration & velocity to the cell's movements. 
- __More coming soon...__

## Part 1

In this part you're going to learn to display the user's cell on-screen using the [HTML `<canvas>` element](http://www.w3schools.com/html/html5_canvas.asp).

> The HTML `<canvas>` element is used to draw graphics, on the fly, via scripting (usually JavaScript).

> The `<canvas>` element is only a container for graphics. You must use a script to actually draw the graphics.

> Canvas has several methods for drawing paths, boxes, circles, text, and adding images.

> *--- from [W3C](http://www.w3schools.com/html/html5_canvas.asp)*

My the end of this part you'll have something that looks like this:

![End of Part 1](img/part1-end.jpg)

Check out the demo [here](http://jsbin.com/jizoyo/edit?output) ([JS Fiddle](http://jsfiddle.net/4j6od7hv/)).

### Creating the files

In Cloud9, create two files in a folder of your choice:

- index.html
- app.js

Your folder should look like this:

![Directory](img/directory.jpg)

### Setting up the HTML

Type the below code as it is written *exactly* into your `index.html` file in Cloud9 (no copy-pasting :p):

```
<!DOCTYPE html>
<html>
<head>
	<title>Ajar.io</title>
</head>
<body>
</body>
</html>
```

Next, add the below `<canvas>` element inside of the `<body>` element.

```
<canvas id="canvas" width="500px" height="500px"></canvas>
```

![Adding the canvas element](img/adding-canvas.gif)

> #### Understanding the code

> `canvas` – the canvas element allows you to draw shapes and other visual elements on screen. Feel free to [read more about canvas](http://www.w3schools.com/html/html5_canvas.asp).

> `id` – to review, this *attribute*, which can be applied to any HTML element, allows you to use that element in your javascript.

> `width` – specifies the width of the `<canvas>`, this time in pixels.

>  `height` – specifies the height of the `<canvas>`, this time in pixels.

---

Now we have to tell our HTML (`index.html`) to use our Javascript (`app.js`). In our `index.html` file we add the following line inside of the the `<body>` element (make sure it's at the end):

```
<script type="text/javascript" src="app.js"></script>
```

![](img/script-element.gif)

Your HTML is now configured!

### Writing the Javascript

The bulk of this workshop will take place in our the `app.js` file. If you completed the previous section successfully, your `app.js` file should be linked to your HTML (`index.html`).

Let's start by writing this line:

```
var canvas = document.getElementById("canvas");
```

![Get canvas element](img/get-element-canvas.gif)

> #### Understanding the code

> `var` – creates a variable named `canvas`. Variables are containers for storing data values. In this case `canvas` is used to reference the `<canvas>` element from your HTML.

> `document.getElementById("canvas")` – this function gets an element from your HTML that has the id you provide inside the quotes, in this case "canvas". Feel free to [read more about functions](http://www.w3schools.com/js/js_functions.asp).

> The `<canvas>` element retreived by `document.getElementById("canvas")` gets *assigned* to the variable `canvas`.

Next, write this line of code:

```
var context = canvas.getContext("2d");
```

![](img/assign-context.gif)

> #### Understanding the code

> You create another variable, this time named `context`. Don't worry too much about *what* `context` is, just know that we will be using it to draw shapes on the canvas.

Time to draw a circle! Open your `index.html` file and from the menu bar click `Preview > Live Preview File (index.html)`.

![](img/live_preview.gif)

Now each time you save changes to your HTML or Javascript your site will refresh to reflect the changes. Remember to *save* changes by going to `File > Save`.

Write the following lines at the end of your `app.js` file:

```
context.beginPath();
context.arc(10, 10, 10, 0, 2*3.14159);
context.fill();
```

You should have something that looks like this.

![](img/first-circle.png)

> #### Understanding the code

> `context.beginPath()` – any shape on the canvas is considered a path. You need to call this function before begining to draw a new shape. In this case we are starting to draw a circle.

> `context.arc(10, 10, 10, 0, 2*Math.PI)` – this function creates an arc. An arc that ends where it starts forms a circle. The function takes a lot of *arguments* (the items separated by commas) so let's look at each one. The order of the arguments goes as follows: `x, y, radius, startAngle, endAngle`. 

> - The `x` and `y` (both 10 in this case) indicate where to position the center of the arc. The top left corner of the canvas is considered (0, 0). Try moving the circle to a different location by changing the `x` and `y`.

> - The `radius` (also 10) determines the radius of the arc. Try making the circle a little larger by changing the `radius`.

> - The `startAngle` (0) determines at what angle the arc should start. The angle is measured in [radians](https://www.mathsisfun.com/geometry/radians.html). Briefly, 0 radians = 0 degrees and 2π radians = 360 degrees.

> - The `endAngle` (2*π) determins at what angle the arc should end. If the `endAngle` is 2π radians, or 360 degrees, more than the `startAngle`, the arc loops back into itself and forms a circle. Try making a semi-circle by changing the `endAngle`.

> `context.fill()` fills the shape with a solid color. In this case the color is black.

Let's add some color! For this we write the following line directly above the `context.fill` function:

```
context.fillStyle = "cyan";
```

![Fill style](img/fill-style.jpg)

Woah! Our circle is now cyan. 

> #### Understanding the code

> The fillStyle is a variable that deterimines the color that is used to fill the shape. [Many colors](http://www.w3schools.com/cssref/css_colornames.asp) are available, so try some on your own (like papayawhip).

When you've finished exploring, change the arguments of the `context.arc` function to the following:

- `x`: 250
- `y`: 250
- `radius`: 40
- `startAngle`: 0
- `endAngle`: 2*3.14159

Your website should now look like this:

![End of Part 1](img/part1-end.jpg)

#### Congrats!

You've finished Part 1!

![](img/celebrate.gif)

# More coming soon..