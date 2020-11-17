---
name: 'Drawing Shapes Program'
description: 'Make a drawing program with shapes!'
author: '@JakeGerber'
---

# Create a Drawing Program with Shapes!

<img src="https://cloud-bj4vorj8t.vercel.app/examplebot.png" width="380" alt="Message Example">

## Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE!

Create a new repl and use Python as the language.

<img src="https://cloud-otu0relhe.vercel.app/0screenshot__1383_.png" width="600" alt="Node.js Repl"> CHANGE
## FINISH

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


## Drawing Shapes


### Switching Between Colors

### Clicking On Screen

### Final Result and Source Code

### More that you can create
