# Geometric Pattern

![](img/final.png)

We'll be creating a cool graphic like the one above, using JavaScript and p5.js.
[p5.js](http://p5js.org/) is a library for making stuff in conjunction with the HTML canvas element. It is nothing more than JS code written to make commonly-desired functionality much more accessible. It is a JS port of Processing, a software for making pictures and visuals with code. 

## Part I: Set-up

First, go to Cloud9 and open up your `projects` workspace by pressing Open.

![](img/c9_dash.png)

Once in the workspace, right-click the `projects` folder on the left and select `New Folder`. Name it `geometric_pattern`.

Next, right-click the `geometric_pattern` folder, select `New File`, and name it `index.html`.
Then, right-click the `geometric_pattern` folder again, select `New File` again, and this time, name it `main.js`.

## Part II: Priming the Files

### Priming the HTML File

Double-click `index.html` to open it. Just as we've done previously, we'll add this base structure into our HTML file:

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

Now, let's add our JavaScript dependencies. This time around, we'll be using a library called p5.js. Let's add that into our **body** with a `<script>` tag: **Please type everything except the URL, which you can copy and paste!**

```html
<body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.12/p5.js"></script>
</body>
```

We'll also need to attach our JavaScript file, `main.js`. Add this below the line that adds p5.js:

```html
<body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.12/p5.js"></script>
  <script src="main.js"></script>
</body>
```

Now we'll save (with shortcut: `CTRL+s` / `Command+s`) and open Live Preview (`Preview` > `Live Preview`).

### Priming the JS File

Double-click `main.js` to open, and type the following:

```js
function setup() {
}

function draw() {
}
```

p5.js works by automatically calling two special functions: [`setup()`](http://p5js.org/reference/#/p5/setup) and [`draw()`](http://p5js.org/reference/#p5/draw) to create the visuals on your webpage. We'll be writing our own code in these functions, so that p5.js can then run our code.

`setup()` is run only once, at the beginning. `draw()` on the other hand, is run repeatedly after `setup()` finishes, and in this way, provides the basis for any animation or interaction you see in your project.

Let's save and refresh Live Preview.

It looks like nothing, because our functions do nothing. Let's add something for `setup()` to set up.

```js
function setup() {
  createCanvas(480,600);
}
```

[`createCanvas()`](http://p5js.org/reference/#p5/createCanvas) is a function that takes two arguments (two numbers for width and height, respectively) and creates an [HTML canvas element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) (i.e., where your pattern will be contained) of that size.

In this project, we'll be creating a tiling of overlapping circles.

First, let's decide how many circles we want in each row. We can store this number in a variable **at the top, above both functions**:

```js
var NUM_CIRCLES = 12;

function setup() {
  createCanvas(480,600);
}

function draw() {
}
```

We'll use this to determine the diameter of the circles we want to draw, by doing some simple math. Let's declare a variable to store the value of the circle diameter; name it `circleDiameter`. Add the declaration at the top of the file, underneath `NUM_CIRCLES`, and define it within `setup()`:

```js
var NUM_CIRCLES = 12;
var circleDiameter;

function setup() {
  createCanvas(480,600);
  circleDiameter = width/NUM_CIRCLES;
}
```

p5.js stores the width of the canvas in a constant named `width`. By dividing the width by the number of circles, we can calculate the length of the diameter, which we'll store in `circleDiameter`.

## Part III: Drawing on the Canvas

### Drawing One Circle

p5.js makes drawing ellipses and circles easy with the function [`ellipse()`](http://p5js.org/reference/#p5/ellipse).

Let's see the `ellipse()` function in action by drawing a circle in the middle of the screen:

```js
function draw() {
  ellipse(width/2,height/2,circleDiameter,circleDiameter);
}
```

Save and refresh Live Preview.

In this example, the first two arguments we pass to the ellipse function are the x and y coordinates of the center of the ellipse. We've passed in `width/2` and `height/2`, respectively, which means the center of the ellipse will also be the center of the canvas. The latter two arguments are the x-width and y-width of the ellipse. Since we want to draw a circle, we're passing the same value for both.

You can play around with these values to get a better feel of how this function works.

### Drawing a Row of Circles

Let's try to draw a row of circles first. We'll want to place them `circleDiameter` away from each other. Modify your `draw()` function so it looks like this:

```js
function draw() {
  ellipse(0, height/2, circleDiameter, circleDiameter);
  ellipse(circleDiameter, height/2, circleDiameter, circleDiameter);
  ellipse(2*circleDiameter, height/2, circleDiameter, circleDiameter);
  ellipse(3*circleDiameter, height/2, circleDiameter, circleDiameter);
  ellipse(4*circleDiameter, height/2, circleDiameter, circleDiameter);
}
```

So here we've drawn 5 circles. We can draw more, since we've made room for 12 (when we set NUM_CIRCLES). Keep going until it looks like this:

![](img/twelve_circles_middle.png)

Great, now that we've drawn one row of circles in the middle, we have to draw the other rows. Guess we'll be writing a lot of `ellipse()` statements.

Just kidding! There's a construct in programming called a loop, and it repeats a set of instructions as many times as you decide.

Let's remove all those repetitive lines and add a for-loop into our `draw()` function, like so:

```js
function draw() {
  for (var x = 0; x <= width; x = x+circleDiameter) {
  }
}
```

This for-loop executes the code within it over the period when the value of `x`, which we've initialized at `0`, is less than or equal to `width`. In each iteration of the loop, the value of `x` is increased by `circleDiameter`.

If we save and refresh, we'll see nothing. That's because we there is no code inside the for-loop. Let's add a line that draws ellipses along a row at the top of the canvas:

```js
function draw() {
  for (var x = 0; x <= width; x = x+circleDiameter) {
    ellipse(x, 0, circleDiameter, circleDiameter);
  }
}
```

We're supplying `x` as the x-coordinate (cleverly named, eh?), and 0 as the y-coordinate, of the ellipse's center.

If you save and refresh, you'll see a line of cut-off circles at the top. This is the magic of the for-loop. Since the value of `x` was increased by `circleDiameter` during every repeated call of the `ellipse()` function, circles were drawn in intervals of `circleDiameter` pixels.

As to why the circles are cut off -- this is because we set the y-coordinate of the _center_ of every circle to 0.

### Drawing a Grid of Circles

So that's great, we've drawn one row of circles. But what we'd like is to cover the entire canvas with circles.

Just like we used a for-loop to repeat circles in the horizontal direction, we can also use a for-loop to repeat them in the vertical direction.

If we wrap our existing for-loop in another for-loop, we'll be performing the action of filling an entire row with circles, multiple times. And thus covering multiple rows.

Let's put everything so far inside another for-loop:

```js
function draw() {
  for (var y = 0; y <= height; y = y+circleDiameter) {
    for (var x = 0; x <= width; x = x+circleDiameter) {
      ellipse(x, y, circleDiameter, circleDiameter);
    }
  }
}
```

As with the previous for-loop's `x`, we're executing code as long as the value of `y`, which starts at `0`, is less than or equal to `height`. (`height`, as you may have guessed, is the counterpart to `width`, and it is where p5.js stores the height of the canvas.) We're also incrementing `y` at each iteration by `circleDiameter`.

Save and refresh Live Preview to check it out!

### Offsetting the Circles in the Y-Direction

We want the circles to overlap, so let's change the spacing in the y-direction.

We can achieve this by changing the incrementing value in the outer for-loop to be `circleDiameter/2` instead of `circleDiameter`.

We'll create a variable (call it `circleRadius`) for this, at the top of the file, define it in `setup()`, and make the replacement in our outer for-loop, like so:

```js
var NUM_CIRCLES = 12;
var circleDiameter;
var circleRadius;

function setup() {
  createCanvas(480,600);
  circleDiameter = width/NUM_CIRCLES;
  circleRadius = circleDiameter/2;
}

function draw() {
  for (var y = 0; y <= height; y = y+circleRadius) {
    for (var x = 0; x <= width; x = x+circleDiameter) {
      ellipse(x, y, circleDiameter, circleDiameter);
    }
  }
}
```

Save and refresh Live Preview to see the change.

### Offsetting the Circles in the X-Direction

It looks pretty cool right now, but our circles aren't overlapping quite right. It looks like every other row should be shifted over by `circleRadius`.

We can keep track of alternating rows by using a flag. A flag is just a variable that stores a `true`/`false` value.

Let's add one in our `draw()` function:

```js
function draw() {
  var alternatingRow = false;
  for (var y = 0; y <= height; y = y+circleRadius) {
    for (var x = 0; x <= width; x = x+circleDiameter) {
      ellipse(x, y, circleDiameter, circleDiameter);
    }
  }
}
```

To differentiate between rows, we should add our code inside the outer for-loop, but outside the inner for-loop. This is because the inner for-loop deals with the lineup of circles in the row itself.

We'll flip the value of the flag after each row is created, using the negation operator (`!`):

```js
function draw() {
  var alternatingRow = false;
  for (var y = 0; y <= height; y = y+circleRadius) {
    for (var x = 0; x <= width; x = x+circleDiameter) {
      ellipse(x, y, circleDiameter, circleDiameter);
    }
    alternatingRow = !alternatingRow;
  }
}
```

This sets the flag `alternatingRow` to its opposite. Its initial value was `false`, and after one row, its value will be `true`. Thus, the second row will be an alternating row. After the second row is created, the flag will be flipped back to false, and so on.

Let's create a conditional that will use the flag's value to determine whether or not to shift the row. We'll add this just before the inner for-loop:

```js
function draw() {
  var alternatingRow = false;
  for (var y = 0; y <= height; y = y+circleRadius) {
    if (alternatingRow) {

    } else {

    }
    for (var x = 0; x <= width; x = x+circleDiameter) {
      ellipse(x, y, circleDiameter, circleDiameter);
    }
    alternatingRow = !alternatingRow;
  }
}
```

Now we just need to make this shift. We'll do this by modifying the start `x` value in our inner for-loop. Currently, the start `x` value is always 0, which results in every row starting at the x-coordinate 0.

We can create a variable (`startX`) within `draw()` and use our conditional to set the value of `startX` to 0 or `circleRadius`, depending on if it's an alternating row or not.

Don't forget to modify the inner for-loop so that the value of `x` starts at `startX`.

```js
function draw() {
  var alternatingRow = false;
  var startX;
  for (var y = 0; y <= height; y = y+circleRadius) {
    if (alternatingRow) {
      startX = circleRadius;
    } else {
      startX = 0;
    }
    for (var x = startX; x <= width; x = x+circleDiameter) {
      ellipse(x, y, circleDiameter, circleDiameter);
    }
    alternatingRow = !alternatingRow;
  }
}
```

Save and check it out!

### Reversing Direction

So you may have noticed that it seems that our circles are overlapping on the wrong side. We wanted them to overlap each other on the top, but they are overlapping on the bottom. This is because they are being drawn from top to bottom, and the upper circles are being drawn over.

We can fix this by swapping the start and end values of `y` in the outer for-loop and instead of incrementing the value of `y`, we'll decrement it.

Don't forget to change the condition in the for-loop to be greater than or equal to 0 instead of less than or equal to.

```js
function draw() {
  var alternatingRow = false;
  var startX;
  for (var y = height; y >= 0; y = y-circleRadius) {
    if (alternatingRow) {
      startX = circleRadius;
    } else {
      startX = 0;
    }
    for (var x = startX; x <= width; x = x+circleDiameter) {
      ellipse(x, y, circleDiameter, circleDiameter);
    }
    alternatingRow = !alternatingRow;
  }
}
```

Save to see the changes!

## Part IV: Adding Color

Black and white is nice, but how about some color? p5.js provides several helpful functions, including: [`color()`](http://p5js.org/reference/#p5/color), [`fill()`](http://p5js.org/reference/#p5/fill), and [`stroke()`](http://p5js.org/reference/#p5/stroke) that help modify the graphics.

### Changing Fill

One way to use `color()` is to provide 3 arguments; each corresponding to [red (R), green (G), and blue (B) values](https://en.wikipedia.org/wiki/RGB_color_model).

Let's choose our color to be red. The R, G, and B values for a bright red are 255, 0, and 0, respectively. We can create this color with `color(255, 0, 0)`.

Now we'll pass this color to the `fill()` function. If we set fill before drawing the ellipse, all the ellipses we draw will be filled with that color. Let's give it a try!

```js
fill(color(255, 0, 0));
```

Save and refresh. Your canvas should now look like red dragon scales.

### Changing Stroke

Just like how there's a `fill()` for changing the fill color, there's a `stroke()` for changing the stroke color. Right now, the stroke is black (hence the black outlines).

We can make a garish display by adding a bright green stroke, if we place the following line above the ellipse creation line:

```js
stroke(color(0,255,0));
```

Save and refresh, and let your eyes be assaulted by this faux pas.

### Changing Color between Rows

While this looks pretty cool, let's make the rows different colors. We can get the gradient effect by setting a starting color, and incrementing the R, G, and B values each time we go through the for loop.

Let's do this by first declaring variables to store each of the R, G, and B values at the top of the file, beneath our constants: 

```js
var NUM_CIRCLES = 12;
var circleDiameter;
var circleRadius;
var rVal;
var gVal;
var bVal;
```

Next, we'll set their initial values at the top of the `draw()` function:

```js
function draw() {
  rVal = 255;
  gVal = 0;
  bVal = 0;

...

}
```

And then increment the values at the bottom of the outer for-loop in `draw()`, by adding these lines.

```js
...

    rVal = rVal - 1;
    gVal = gVal + 5;
    bVal = bVal + 2;
  }
}
```

Here, we're decrementing the R value by 1, incrementing the G value by 5, and the B value by 2.

You can also try adding those three lines within the inner for-loop, which will modify the colors within each row.

Finally, we'll replace the arguments in `color()` with these variables, in both the `fill()` and `stroke()` function calls:

```js
fill(color(rVal,gVal,bVal));
stroke(color(rVal,gVal,bVal));
```

Now, save and see the gradient effect you've applied throughout the pattern! Yay!

## Part V: Publishing and Sharing

### Downloading Your Masterpiece (OPTIONAL SECTION IDK HOW COOL THIS WILL BE CUZ IT'S JUST GONNA BE THE SAME THING SO WHO CARES)

You can actually download the this cool pattern to your computer, to use as a desktop background or what have you. p5.js provides a function to download the canvas. (FACT CHECK THIS it's avail in processing but ive never done it in p5)

### Making It Live

Make sure all of your files are saved. Then, head on over to the terminal in Cloud9 by pressing `alt+t` and type the following commands (pressing Enter after each one):

- `git add --all`
- `git commit -m "Geometric Pattern Workshop"`
- `git push`

Then, enter your GitHub username and password (careful here, as password will not be displayed).

Congratulations! Your pattern is now live on `USERNAME.github.io/geometric_pattern/` (replace `USERNAME` with your own GitHub username!)

## Part VI: Animate It

We can create a cool scrolling color effect by manipulating our colors to cycle. Right now we are resetting our initial RGB values each time `draw()` runs. But if we didn't reset every time, we could have rotating colors.

```js
function setup() {
  createCanvas(480,600);
  circleDiameter = width/NUM_CIRCLES;
  circleRadius = circleDiameter/2;
  rVal = 255;
  gVal = 0;
  bVal = 0;
}

function draw() {
  var alternatingRow = false;
  var startX;

...
```

If we move the three lines that set the initial RGB values to `setup()`, then we will be increment the values indefinitely. If we save and refresh our Live Preview, we'll see that everything is white. What's the deal?

Since the max values of RGB are 255, 255, 255 (which makes white), any values above that will be white. The `draw()` function executes so many times per second that you can't see the color change progression.

We can have color progression while keeping the values below 255 by modding each of these by 255 with the `%` operator. Let's change our incrementation code to incorporate this:

```js
rVal = (rVal - 1)%255;
gVal = (gVal + 5)%255;
bVal = (bVal + 2)%255;
```

JavaScript `%` operator does something stupid, in that it mods negative numbers incorrectly. We can get around this by recognizing that subtracting 1 and modding is the same as adding 254 and modding.

```js
rVal = (rVal + 254)%255;
```

Save and refresh and be warned that it might be jarring.

As a check, your `main.js` should look like this:

Final code:

```js
// ok this gives me epilepsy but whatever
// just put a medical warning about epilepsy

var NUM_CIRCLES = 12;
var circleDiameter;
var circleRadius;
var rVal;
var gVal;
var bVal;

function setup() {
  createCanvas(480,600);
  circleDiameter = width/NUM_CIRCLES;
  circleRadius = circleDiameter/2;
  rVal = 255;
  gVal = 0;
  bVal = 0;
}

function draw() {
  var alternatingRow = false;
  var startX;
  for (var y = height; y >= 0; y-=circleRadius) {
    if (alternatingRow) {
      startX = circleRadius;
    } else {
      startX = 0;
    }
    for (var x = startX; x <= width; x+=circleDiameter) {
      stroke(color(rVal, gVal, bVal));
      fill(color(rVal, gVal, bVal));
      ellipse(x, y, circleDiameter, circleDiameter);
    }
    rVal = (rVal + 254)%255;
    gVal = (gVal + 5)%255;
    bVal = (bVal + 2)%255;
    alternatingRow = !alternatingRow;
  }
}
```

## Part VII: Hacking

Ideas:

- try different colors until you find a combination you like (you can do this by changing the start values of rVal, gVal, and bVal. You can also change the incrementing value)
- try no fill to make cool lineart with overlapping circles
  > ![](img/overlapping_circle_pattern.png)
- change number of circles per line
- change number of lines / spacing of lines
- change shape of ellipses (what about horizontally fat ovals? vertically tall ovals?)
- change placement or spacing of ellipses
- change shapes (p5.js offers easy functions to make triangles, rectangles, and more)
- p5.js knows [where your mouse is](TODO mouseX and mouseY link). you could have the seizurific colors only on mouseOver.


---

NOTES TO SELF:
- debating how to do this cuz zach told me to write outside in (which is also how i naturally do things)
  - but i think it would be more gratifying if the user could write inside out
  - and it would be easier to debug?
  - DEFINITELY INCLUDE SCREENSHOTS IN THIS WORKSHOP
- not sure if reversing direction is necessary. but i guess it's a "this is good to know" and shows the flexibility of a for loop?????
  - might add unnecessary length to the workshop


- more notes: i also am specifically not repeating myself with code snippets because i want the user to read the english that describes what the code is doing because when you read shit, you process it. instead of just using your eyes to search for code snippets and typing that shit perfunctorily(?is this the adv of perfunctory)
