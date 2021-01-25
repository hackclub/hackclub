---
name: 'Drawing Shapes with Turtle'
description: 'Make a shape drawing program with Python Turtle!'
author: '@JakeGerber'
img: 'https://cloud-r8adu66vb.vercel.app/0screenshot__1391_.png'
---

I like to draw, you like to draw, so let's create a drawing program with shapes such as circles, squares, and triangles! It will turn out really cool.

<img src="https://cloud-r8adu66vb.vercel.app/0screenshot__1391_.png" width="580" alt="Drawing Example">

<img src="https://thumbs.gfycat.com/FantasticFaintAmurminnow-small.gif" width="380" alt="Nice Gif">

[Final demo and code](https://repl.it/@CosmicSnowman/Drawing-Turtle#main.py)

## Setting up

We're going to use [Repl.it](https://repl.it/~), a free, online coding editor, to create the project. Get started by visiting [repl.it/languages/python3](https://repl.it/languages/python3).

<img src="https://cloud-2ojs193ra.vercel.app/0screenshot__1396_.png" width="600" alt="Python Repl">

Once your repl spins up, let's do this!

<img src="https://media2.giphy.com/media/62PP2yEIAZF6g/giphy.gif" width="380" alt="Cool Gif">

### Importing Libraries

Let's begin by importing the `turtle` and `math` libraries. At the top of the `main.py` file, add:

```python
import turtle
import math
```

We will be drawing to the screen using the [turtle library](https://www.geeksforgeeks.org/turtle-programming-python/)! `turtle` allows us to draw to the screen like a whiteboard. We can go to specific spots on the screen, draw lines and dots, create filled in shapes, change the drawing color, and more. You'll get to see it in action soon!

The `math` library just provides an easy way to do math in python. We'll use it to make some calculations in a bit.

### Creating Variables

Next, let's create some initial variables:

```python
squareWidth = 20
circleRadius = 10
triangleLength = 20
```

We are creating variables for the width of the square, radius of the circle, and length of the triangle. They will be used in the drawing process later.

Under those variables, add these variables:
 
```python
itemNum = 0
maxItem = 3
```

The amount of shapes we have will be under `maxItem` and `itemNum` is where we will start (the index in the array). This will make more sense when we draw the items later on.

Finally, add these variables:

```python
colorNum = 0 
colors = ["red", "green", "blue", "yellow", "orange", "purple", "grey", "black"]
```

The variable `colorNum` is the index we are starting at with the array of "colors". We will handle swtiching between colors later on.

### Initializing The Turtle

Next, let's initialize the turtle.

<img src="https://media.tenor.com/images/3dda08893f64e5e4437dc3ba93cad5b9/tenor.gif" width="380" alt="Turtle Gif">

After everything you wrote, at the bottom of the file, add:

```python
turtle.hideturtle()
turtle.speed(0)
turtle.up()
```

Here, we're:

- hiding the turtle cursor, which shows up by default
- setting the speed to 0 so it will draw instantly
- making the turtle's pen go up so it will not draw while moving

## Drawing the Shapes

I know you're eager to get into the meat of the progran, so let's do it.

### Drawing the Circle

We are going to create the circle function. Look at the "o". I know it's a pretty cool circle.

<img src="https://cloud-me8qh205n.vercel.app/0screenshot__1392_.png" width="380" alt="Circle Example">

At the bottom of the file, add:

```python
def circle(x, y): 
  turtle.begin_fill()
  turtle.end_fill()
```

- First, we define the function, which passes in x and y coordinates as parameters
- Inside the function, we add `begin_fill()` and `end_fill()` statements. Anytime you draw with turtle, you need to wrap your drawing in between these two statements.

In between those two statements, add:

```python
def circle(x, y): 
  turtle.begin_fill()
  turtle.goto(x, y-circleRadius) 
  turtle.circle(circleRadius) 
  turtle.end_fill()
```

- First, we go to the location of where we will draw. It is offset so it'll be centered at the mouse point.
- Then, we draw the circle with `turtle.circle()`!

### Drawing the Square

Next, let's create the square function.

<img src="https://cloud-mkkyzdd9l.vercel.app/0screenshot__1393_.png" width="380" alt="Square Example">

Under the `circle()` function, add:

```python
def square(x, y):
  turtle.begin_fill()
  turtle.goto(x-(squareWidth/2), y-(squareWidth/2))
  turtle.setheading(0)
  turtle.end_fill()
```

This look similar to the `circle()` function, except the `goto` statement is optimized for a square, and then we set the direction of the turtle to face right.

Next, just before the `end_fill()` statement but after everything else, add:

```python
def square(x, y):
  turtle.begin_fill()
  turtle.goto(x-(squareWidth/2), y-(squareWidth/2))
  turtle.setheading(0)
  
  for x in range(4):
    turtle.forward(20)
    turtle.left(90) 
  turtle.end_fill()
```

Here, we're:

- Running a for loop 4 times, to account for each side of a square
- Moving the turtle along the square, so that it draws the square.

### Drawing the Triangle

Next, let's create the triangle function.

<img src="https://cloud-mo50706v1.vercel.app/0screenshot__1394_.png" width="380" alt="Triangle Example">

After the `square()` function, add:

```python
def triangle(x, y):
  turtle.goto(x-(triangleLength/2), y-((triangleLength *math.sqrt(3))/6))
  turtle.setheading(0)
  turtle.begin_fill()
  turtle.end_fill()
```

Again, similar to the previous functions, except the `goto()` statement optimizes for a triangle.

Next, in between the `begin_fill()` and `end_fill()` statements, add:

```python
def triangle(x, y):
  turtle.goto(x-(triangleLength/2), y-((triangleLength *math.sqrt(3))/6))
  turtle.setheading(0)

  turtle.begin_fill()
  for x in range(3):
    turtle.forward(triangleLength)
    turtle.left(120) 
  turtle.end_fill()

  turtle.setheading(0)
```

Just like how we drew the square, we're drawing the 3 sides of the triangle.

## Finishing Up the Shapes

<img src="https://media1.tenor.com/images/46422729dc9ecd6898203ef13b3d9985/tenor.gif?itemid=15700153" width="380" alt="Almost There Gif">

We are done making the shapes, but that's useless if we can't switch between them! Let's add that.

### Switching Between Shapes

At the bottom of the Python file, after every function you wrote, add:

```python
def switchShape(x, y):
  global itemNum
  global maxItem
```

- First, we create a function called `switchShape()`, which takes in x and y coordinates as parameters.
- Then, we use the [`global`](https://www.programiz.com/python-programming/global-keyword) keyword to be able to modify the `itemNum` and `maxItem` global variables we definined at the beginning of this workshop inside this function.

Next, continue the function with the following code:

```python
def switchShape(x, y):
  global itemNum
  global maxItem

  itemNum += 1

  if (itemNum >= maxItem):
    itemNum = 0
```

Here, we're just incrementing the `itemNum` variable by 1 and resetting it to 0 if it's greater than the `maxItem`.

### Drawing Shapes

Next, let's add a function for drawing shapes. At the bottom of the file, add:

```python
def drawItem(x, y): 
  global itemNum
  if (itemNum == 0):
    circle(x, y)
  elif (itemNum == 1):
    square(x, y)
  elif (itemNum == 2):
    triangle(x, y)
  else:
    print(itemNum)
```

- First, we use the `global` keyword again to access the `itemNum` variable.
- If the variable is 0, we draw a circle.
- If it's 1, we draw a square.
- If it's 2, we draw a triangle.
- Otherwise, we print the number to the console since we don't have a shape for it.

### Switching Between Colors

Next, let's add a function to switch between colors.

<img src="https://cloud-c9ojk6h90.vercel.app/0screenshot__1395_.png" width="380" alt="Switch Colors Example">

At the bottom of the file, add:

```python
def switchColor(x, y):
  global colorNum
  global colors

  colorNum += 1

  if (colorNum >= len(colors)):
    colorNum = 0
    

  turtle.color(colors[colorNum])
```

- First, we access the global `colorNum` and `colors` variables.
- Then, we increment the `colorNum` by 1.
- If `colorNum` is greater than the number of items in the `colors` array, we reset it to 0
- Then, we set the turtle's drawing color to the color at the index of the current `colorNum` in the `colors` array.

## Clicking On Screen

<img src="https://media3.giphy.com/media/hCfESQ8r1eBOg/giphy.gif" width="380" alt="Clicking Screen Gif">

We're almost done! Now, we want to add some code that will handle the user clicking on the screen to draw something. At the bottom of the file, after every function, add:

```python
turtle.onscreenclick(drawItem, 1)
turtle.onscreenclick(switchColor, 2)
turtle.onscreenclick(switchShape, 3)
```

- We call the `turtle.onscreenclick()` function, which is run when it detects that the screen has been clicked.
- If the user clicks the left mouse button (1), we draw the current shape.
- If the user clicks on the middle button (2), we switch the color.
- If the user clicks on the right button (3), we switch the shape.

## Alternative Controls

In case your middle mouse button and right click do not work, let's make some alternative keyboard controls. At the bottom of the file, add:

```python
def alternativeControlColor():
  canvas = turtle.getcanvas()
  x, y = canvas.winfo_pointerx(), canvas.winfo_pointery()
  switchColor(x, y)

def alternativeControlShape():
  canvas = turtle.getcanvas()
  x, y = canvas.winfo_pointerx(), canvas.winfo_pointery()
  switchShape(x, y)
```

These functions get the current mouse position and call their respective function of switching the shape or size.

Next, let turtle know of these alternate controls.

```python
turtle.onkey(alternativeControlColor, "s")
turtle.onkey(alternativeControlShape, "d")
```

Similar to the `onscreenclick()` function, the `onkey` function will automatically run when turtle detects that the user pressed a key. We link the color control to `s` and the shape control to `d`.

Finally, at the bottom, add:

```python
turtle.listen()
turtle.mainloop()
```

These two lines make our turtle program run.

## You're done!

You are done! Congrats!

<img src="https://media2.giphy.com/media/26u4lOMA8JKSnL9Uk/giphy.gif" width="380" alt="Done Gif">

<details>

<summary> Final source code: </summary>

```python
import turtle
import math 

squareWidth = 20
circleRadius = 10
triangleLength = 20

itemNum = 0
maxItem = 3

colorNum = 0 
colors = ["red", "green", "blue", "yellow", "orange", "purple", "grey", "black"]

turtle.hideturtle()
turtle.speed(0)
turtle.up()

  
def drawItem(x, y): 
  global itemNum
  if (itemNum == 0):
    circle(x, y)
  elif (itemNum == 1):
    square(x, y)
  elif (itemNum == 2):
    triangle(x, y)
  else:
    print(itemNum)

def circle(x, y): 
  turtle.begin_fill()
  turtle.goto(x, y-circleRadius) 
  turtle.circle(circleRadius) 
  turtle.end_fill()

def square(x, y):
  turtle.begin_fill()
  turtle.goto(x-(squareWidth/2), y-(squareWidth/2))
  turtle.setheading(0)
  for x in range(4):
    turtle.forward(20)
    turtle.left(90) 
  turtle.end_fill()

def triangle(x, y):
  turtle.goto(x-(triangleLength/2), y-((triangleLength *math.sqrt(3))/6))
  turtle.setheading(0)

  turtle.begin_fill()
  for x in range(3):
    turtle.forward(triangleLength)
    turtle.left(120) 
  turtle.end_fill()

  turtle.setheading(0)  

  
def switchColor(x, y):
  global colorNum
  global colors

  colorNum += 1

  if (colorNum >= len(colors)):
    colorNum = 0
    

  turtle.color(colors[colorNum])

def switchShape(x, y):
  global itemNum
  global maxItem

  itemNum += 1

  if (itemNum >= maxItem):
    itemNum = 0
 
  
turtle.onscreenclick(drawItem, 1)
turtle.onscreenclick(switchColor, 2)
turtle.onscreenclick(switchShape, 3)


def alternativeControlColor():
  canvas = turtle.getcanvas()
  x, y = canvas.winfo_pointerx(), canvas.winfo_pointery()
  switchColor(x, y)

def alternativeControlShape():
  canvas = turtle.getcanvas()
  x, y = canvas.winfo_pointerx(), canvas.winfo_pointery()
  switchShape(x, y)


turtle.onkey(alternativeControlColor, "s")
turtle.onkey(alternativeControlShape, "d")

turtle.listen()
turtle.mainloop()
```

</details>

## Hacking

The fun doesn't stop here! Here are some things you can do to take this project further:

- [Get a Random Color Every Time](https://repl.it/@CosmicSnowman/Drawing-Turtle-Expanded-1#main.py)
- [Create Even More Shapes](https://repl.it/@CosmicSnowman/Drawing-Turtle-Expanded-2#main.py)
- [Add More Sizes for the Shapes](https://repl.it/@CosmicSnowman/Drawing-Turtle-Expanded-3#main.py)
