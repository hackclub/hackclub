---
name: 'Drawing Shapes Program'
description: 'Make a drawing program with shapes!'
author: '@JakeGerber'
image: 'https://cloud-r8adu66vb.vercel.app/0screenshot__1391_.png'
---

# Create a Drawing Program with Shapes!
In this workshop, we will be creating a drawing program that allows us to make pictures out of different shapes such as circles, squares, and triangles.

<img src="https://cloud-r8adu66vb.vercel.app/0screenshot__1391_.png" width="580" alt="Drawing Example">

<img src="https://thumbs.gfycat.com/FantasticFaintAmurminnow-small.gif" width="380" alt="Nice Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE, meaning that it allows us to write code from the Repl.it website!

Create a new repl and use Python as the language.

<img src="https://cloud-2ojs193ra.vercel.app/0screenshot__1396_.png" width="600" alt="Python Repl">

# Let's Begin Creating the Program
<img src="https://media2.giphy.com/media/62PP2yEIAZF6g/giphy.gif" width="380" alt="Cool Gif">

## Importing Libraries
Let's begin by importing the turtle and math libraries.

```python
import turtle
import math
```

We will be drawing to the screen using the turtle library! Turtle allows us to draw to the screen like a whiteboard. More information [here](https://www.geeksforgeeks.org/turtle-programming-python/) The math library will be used for calculations!

## Creating Variables
Now lets create some initial variables.
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
```

- We are creating variables for the width of the square, radius of the circle, and length of the triangle.
- The amount of shapes we have will be under "maxItem" and "itemNum" is where we will start. This will make more sense when we draw the items later on. 
- The variable "colorNum" is the index we are starting at with the array of "colors". We will handle swtiching between colors later on.

## Initializing The Turtle
Let's initialize the turtle.

<img src="https://media.tenor.com/images/3dda08893f64e5e4437dc3ba93cad5b9/tenor.gif" width="380" alt="Turtle Gif">

```python
#Code we already wrote

turtle.hideturtle()
turtle.speed(0)
turtle.up()
```
- We are hiding the turtle cursor.
- We are setting the speed to 0 so it will draw instantly.
- We are making the turtle's pen go up so it will not draw while moving.

# Drawing the Shapes

## Drawing the Circle
We are going to create the circle function.

<img src="https://cloud-me8qh205n.vercel.app/0screenshot__1392_.png" width="380" alt="Circle Example">

```python
def circle(x, y): 
  turtle.begin_fill()
  turtle.goto(x, y-circleRadius) 
  turtle.circle(circleRadius) 
  turtle.end_fill()
```
- The def defines the function, and we are passing in x and y coordinates as parameters.
- The "turtle.begin_fill()" function fills in the circle we will draw.
- We are then going to the the location of where we will draw. It is offset so it will be centered at the mouse point.
- We are then drawing and filling the circle and ending the fill.


## Drawing the Square
We are going to create the square function.

<img src="https://cloud-mkkyzdd9l.vercel.app/0screenshot__1393_.png" width="380" alt="Square Example">

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
- The def defines the function, and we are passing in x and y coordinates as parameters.
- We are beginning the fill and going to the offset coordinate.
- We are setting the direction to face right.
- We are running a for loop to create each side of the square and then ending the fill.

## Drawing the Triangle
We are going to create triangle function.

<img src="https://cloud-mo50706v1.vercel.app/0screenshot__1394_.png" width="380" alt="Triangle Example">

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
- The def defines the function, and we are passing in x and y coordinates as parameters.
- We are going to the offset coordinate and setting the direction to face right.
- We are beginning the fill and creating a for loop.
- We are going forward and then turning left 3 times in order to create the triangle.
- We finally end the fill and set the direction to the right.


## Finishing Up the Shapes

<img src="https://media1.tenor.com/images/46422729dc9ecd6898203ef13b3d9985/tenor.gif?itemid=15700153" width="380" alt="Almost There Gif">

## Switching Between Shapes
Here is the functionality to switch between shapes.

```python
def switchShape(x, y):
  global itemNum
  global maxItem

  itemNum += 1

  if (itemNum >= maxItem):
    itemNum = 0
```
- The itemNum and maxItem are made global so we can use them.
- Increment the itemNum and if greater than or equal to the maxItem amount, go back to 0.
- Even though we are not using the parameters, they are required for our screen click function later.

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
- The "itemNum" variable is made global so we can use it.
- We then see what value it is and draw the respective shape.

# Switching Between Colors
We are changing the color.

<img src="https://cloud-c9ojk6h90.vercel.app/0screenshot__1395_.png" width="380" alt="Switch Colors Example">

```python
def switchColor(x, y):
  global colorNum
  global colors

  colorNum += 1

  if (colorNum >= len(colors)):
    colorNum = 0
    

  turtle.color(colors[colorNum])
```
- The "colorNum" and "colors" variables are made global so we can use them.
- Increment the "itemNum" and if greater than or equal to the "colors" length, go back to 0.
- We then set the turtle's color to the color at the colorNum index of the colors array.


# Clicking On Screen

<img src="https://media3.giphy.com/media/hCfESQ8r1eBOg/giphy.gif" width="380" alt="Clicking Screen Gif">

```python
#Everything we already wrote.
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
- Underneath the mouse buttons we wrote, add these alternative control functions.
- The functions get the current mouse position and call their respective function.
- The turtle is then listening for the key presses.

# Final Source Code
This is the code for the entire program.

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
