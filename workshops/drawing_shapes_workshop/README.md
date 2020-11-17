---
name: 'Drawing Shapes Program'
description: 'Make a drawing program with shapes!'
author: '@JakeGerber'
---

#### Create a Drawing Program with Shapes!

<img src="https://cloud-r8adu66vb.vercel.app/0screenshot__1391_.png" width="380" alt="Drawing Example">

## Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE!

Create a new repl and use Python as the language.

<img src="https://cloud-2ojs193ra.vercel.app/0screenshot__1396_.png" width="600" alt="Python Repl">

### Let's Begin Creating the Program


## Importing Libraries
Let's begin by importing the turtle and math libraries.

```js
import turtle
import math
```

- We will be drawing to the screen using the turtle library!
- The math library will be used later!

## Creating Variables
Now lets create some variables.
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
- We are setting the max amount of shapes we will draw under "maxItem" and "itemNum" is our index to start at.
- "colorNum" is the index we are starting at with the array of "colors"

## Initializing Turtle
Let's initialize the turtle.
```python
#Code we already wrote

turtle.hideturtle()
turtle.speed(0)
turtle.up()
```
- We are hiding the turtle cursor.
- We are setting the speed to 0 so it will draw instantly.
- We are making the turtle go up.

### Creating the Shapes

## Creating the Circle
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
- The "turtle.begin_fill()" function makes the circle we will draw filled in.
- We are then going to the the location of where we will draw. It is offset so it will be centered at the mouse point.
- We are then drawing the circle and ending the fill.


## Creating the Square
We are going to create square function.

<img src="https://cloud-me8qh205n.vercel.app/0screenshot__1392_.png" width="380" alt="Circle Example">

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

## Creating the Triangle
We are going to create triangle function.

<img src="https://cloud-me8qh205n.vercel.app/0screenshot__1392_.png" width="380" alt="Circle Example">

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
- We are going forward and then turning left for 3 times in order to create the triangle.
- We finally end the fill and set the direction to the right.


### Finishing Up the Shapes

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
- Increment the itemNum and if greater than the maxItem amount, then go back to 0.
- Even though we are not using the parameters, we need them for our screen clcik function later.

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
- We then see what value it is and draw the shape based on the number.

### Switching Between Colors
We are changing the color.

<img src="https://cloud-me8qh205n.vercel.app/0screenshot__1392_.png" width="380" alt="Circle Example">

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
- Increment the itemNum and if greater than or equal to the "colors" length, then go back to 0.
- We then set the turtle's color to the color at the colorNum index of the colors array.


### Clicking On Screen

```python
#everything we already wrote
turtle.onscreenclick(drawItem, 1)
turtle.onscreenclick(switchColor, 2)
turtle.onscreenclick(switchShape, 3)
```
- The turtle.onscreenclick function takes in a function with x and y parameters and the mouse button.
- If we click the left button, draw the current shape.
- If we click the middle button, switch the color.
- If we click the right button, switch the shape.

### Final Source Code
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
```

### More that you can create
- [Original Program](https://repl.it/@CosmicSnowman/Drawing-Turtle#main.py)
- [Randomized Color](https://repl.it/@CosmicSnowman/Drawing-Turtle-Expanded-1#main.py)
- [More Shapes](https://repl.it/@CosmicSnowman/Drawing-Turtle-Expanded-2#main.py)
- [More Sizes](https://repl.it/@CosmicSnowman/Drawing-Turtle-Expanded-3#main.py)
