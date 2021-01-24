---
name: 'Drawing Shapes Program'
description: 'Make a drawing program with shapes!'
author: '@JakeGerber'
image: 'https://cloud-r8adu66vb.vercel.app/0screenshot__1391_.png'
---

# Create a Drawing Program with Shapes!
I like to draw, you like to draw, so let's create a drawing program with shapes such as circles, squares, and triangles! It will turn out really cool.

<img src="https://cloud-r8adu66vb.vercel.app/0screenshot__1391_.png" width="580" alt="Drawing Example">

<img src="https://thumbs.gfycat.com/FantasticFaintAmurminnow-small.gif" width="380" alt="Nice Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE, meaning that it allows us to write code from the Repl.it website!

Create a new repl and use Python as the language.

<img src="https://cloud-2ojs193ra.vercel.app/0screenshot__1396_.png" width="600" alt="Python Repl">

# Let's Begin Creating the Program
<img src="https://media2.giphy.com/media/62PP2yEIAZF6g/giphy.gif" width="380" alt="Cool Gif">

I hope you're ready because we're getting straight into the creation!

## Importing Libraries
Let's begin by importing the turtle and math libraries.

```python
import turtle
import math
```

We will be drawing to the screen using the [turtle library](https://www.geeksforgeeks.org/turtle-programming-python/)! The turtle allows us to draw to the screen like a whiteboard. We can go to specific spots on the screen, draw lines and dots, create filled in shapes, change the drawing color, and more. You'll get to see it in action soon! The math library will be used for calculations.

## Creating Variables
Now lets create some initial variables. Don't miss them or else you'll have issues.
```python
squareWidth = 20
circleRadius = 10
triangleLength = 20
```
We are creating variables for the width of the square, radius of the circle, and length of the triangle. They will be used in the drawing process later.
 
```python
itemNum = 0
maxItem = 3
```
The amount of shapes we have will be under "maxItem" and "itemNum" is where we will start (the index in the array). This will make more sense when we draw the items later on.

```python
colorNum = 0 
colors = ["red", "green", "blue", "yellow", "orange", "purple", "grey", "black"]
```
The variable "colorNum" is the index we are starting at with the array of "colors". We will handle swtiching between colors later on.

## Initializing The Turtle
Let's initialize the turtle.

<img src="https://media.tenor.com/images/3dda08893f64e5e4437dc3ba93cad5b9/tenor.gif" width="380" alt="Turtle Gif">

```python
turtle.hideturtle()
turtle.speed(0)
turtle.up()
```
We are hiding the turtle cursor. Also, we are setting the speed to 0 so it will draw instantly and making the turtle's pen go up so it will not draw while moving.

# Drawing the Shapes

I know you're eager to get into the meat of the progran, so let's do it.

## Drawing the Circle
We are going to create the circle function. Look at the "o". I know it's a pretty cool circle.

<img src="https://cloud-me8qh205n.vercel.app/0screenshot__1392_.png" width="380" alt="Circle Example">

```python
def circle(x, y): 
  turtle.begin_fill()
  turtle.end_fill()
```
The def defines the function, and we are passing in x and y coordinates as parameters. Add these begin and end fill statements, which allows us to make filled in shapes.

```python
def circle(x, y): 
  turtle.begin_fill()
  turtle.goto(x, y-circleRadius) 
  turtle.circle(circleRadius) 
  turtle.end_fill()
```

We are then going to the the location of where we will draw. It is offset so it will be centered at the mouse point. Then, draw the circle!


## Drawing the Square
We are going to create the square function.

<img src="https://cloud-mkkyzdd9l.vercel.app/0screenshot__1393_.png" width="380" alt="Square Example">

```python
def square(x, y):
  turtle.begin_fill()
  turtle.goto(x-(squareWidth/2), y-(squareWidth/2))
  turtle.setheading(0)
  turtle.end_fill()
```
Once again add the def to define the function and pass in the x and y coordinates as parameters. Then add the begin and end fill statements the same as before, go to the offset, and set the direction of the turtle to face right.

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

We are running a for loop to create each side of the square. Squares have four sides so the for loop runs four times. Yeah, pretty clever. I know.

## Drawing the Triangle
We are going to create triangle function.

<img src="https://cloud-mo50706v1.vercel.app/0screenshot__1394_.png" width="380" alt="Triangle Example">

```python
def triangle(x, y):
  turtle.goto(x-(triangleLength/2), y-((triangleLength *math.sqrt(3))/6))
  turtle.setheading(0)
  turtle.begin_fill()
  turtle.end_fill()
```
The def defines the function (its the last shape this time), and we are passing in x and y coordinates as parameters. Go to the offset, set the direction to the right, and add the begin and end fill statements.

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
In the for loop, we are going forward and then turning left 3 times in order to create the triangle. After the fill, set the direction to the right.


## Finishing Up the Shapes

<img src="https://media1.tenor.com/images/46422729dc9ecd6898203ef13b3d9985/tenor.gif?itemid=15700153" width="380" alt="Almost There Gif">

We are done making the shapes, but that's useless if we can't switch between them! Let's add that.

## Switching Between Shapes
Here is the functionality to switch between shapes.

```python
def switchShape(x, y):
  global itemNum
  global maxItem
```
Define the function for switching shapes and pass in the x and y coordinates as parameters. This sounds weird, but the only way the turtle will recognize this function after input is with these parameters. Just add them. Also, make the itemNum and maxItem global so we can use them in here.


```python
def switchShape(x, y):
  global itemNum
  global maxItem

  itemNum += 1

  if (itemNum >= maxItem):
    itemNum = 0
```
Increment the itemNum and if it is greater than or equal to the maxItem amount, go back to 0.

## Drawing Shapes
Here is the functionality to draw the current shape.

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
The "itemNum" variable is made global so we can use it. We then see what value it is and draw the respective shape. If the item number is not one of the ones we have a shape for, then print it to the console.

# Switching Between Colors
Functionality to change the color.

<img src="https://cloud-c9ojk6h90.vercel.app/0screenshot__1395_.png" width="380" alt="Switch Colors Example">

```python
def switchColor(x, y):
  global colorNum
  global colors
```
Let's create function to switch the color. Once again, the turtle library's ability for input forces us to pass in x and y parameters. The colorNum and colors variables are made global so we can use them.

```python
def switchColor(x, y):
  global colorNum
  global colors

  colorNum += 1

  if (colorNum >= len(colors)):
    colorNum = 0
    

  turtle.color(colors[colorNum])
```
Increment the itemNum and if greater than or equal to the "colors" length, go back to 0. We then set the turtle's color to the color at the colorNum index of the colors array.


# Clicking On Screen

<img src="https://media3.giphy.com/media/hCfESQ8r1eBOg/giphy.gif" width="380" alt="Clicking Screen Gif">

```python
turtle.onscreenclick(drawItem, 1)
turtle.onscreenclick(switchColor, 2)
turtle.onscreenclick(switchShape, 3)
```
- The "turtle.onscreenclick()" function takes in a function with x and y parameters and the mouse button.
- If we click the left button (1), draw the current shape.
- If we click the middle button (2), switch the color.
- If we click the right button (3), switch the shape.

# Alternative Controls
In case your middle mouse button and right click do not work, let's make some alternative keyboard controls.

```python
def alternativeControl1():
  canvas = turtle.getcanvas()
  x, y = canvas.winfo_pointerx(), canvas.winfo_pointery()
  switchSize(x, y)

def alternativeControl2():
  canvas = turtle.getcanvas()
  x, y = canvas.winfo_pointerx(), canvas.winfo_pointery()
  switchShape(x, y)
```
The functions get the current mouse position and call their respective function of switching the shape or size.

```python
turtle.onkey(alternativeControl1, "s")
turtle.onkey(alternativeControl2, "d")

turtle.listen()
turtle.mainloop()
```
The turtle is then listening for the key presses, and the functions we created are called when either the s or d key is pressed.

# Final Source Code
You are done! Congrats! Here's all the code we wrote.

<img src="https://media2.giphy.com/media/26u4lOMA8JKSnL9Uk/giphy.gif" width="380" alt="Done Gif">

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


def alternativeControl1():
  canvas = turtle.getcanvas()
  x, y = canvas.winfo_pointerx(), canvas.winfo_pointery()
  switchSize(x, y)

def alternativeControl2():
  canvas = turtle.getcanvas()
  x, y = canvas.winfo_pointerx(), canvas.winfo_pointery()
  switchShape(x, y)


turtle.onkey(alternativeControl1, "s")
turtle.onkey(alternativeControl2, "d")

turtle.listen()
turtle.mainloop()
```

# More that you can create + Source Code
- [Original Program](https://repl.it/@CosmicSnowman/Drawing-Turtle#main.py)
- [Get a Random Color Every Time](https://repl.it/@CosmicSnowman/Drawing-Turtle-Expanded-1#main.py)
- [Create Even More Shapes](https://repl.it/@CosmicSnowman/Drawing-Turtle-Expanded-2#main.py)
- [Add More Sizes for the Shapes](https://repl.it/@CosmicSnowman/Drawing-Turtle-Expanded-3#main.py)
