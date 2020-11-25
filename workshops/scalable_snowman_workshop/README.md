---
name: 'Scalable Snowman'
description: 'Create your own scalable snowman!'
author: '@JakeGerber'
---

# Create a Scalable Snowman!

<img src="https://cloud-81lsm6jyf.vercel.app/0screenshot__1406_.png" width="380" alt="Snowman Example">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE!

Create a new repl and use Python as the language.

<img src="https://cloud-3jkz47rpl.vercel.app/0screenshot__1408_.png" width="600" alt="Python Repl">

# Initial Statements

Let's Begin!

```py
import turtle

radius1 = float(input("What radius for the first circle?: "))
radius2 = float(input("What radius for the second circle?: "))
radius3 = float(input("What radius for the third circle?: "))

turtle.speed(0)
turtle.hideturtle()
turtle.bgcolor("black")
```

- Import the turtle library. We will be using this to draw to the screen.
- Get the user input for the radius for each snowman body part.
- Set the turtle speed to zero, hide the cursor, and make the background black.

# Snowman Function

## Initial Statements
Put the function under what we just wrote.

```py
#What we already wrote.
def Snowman(x, y, radius1, radius2, radius3):
  turtle.goto(x, y)
  turtle.color("lightblue")
```

- We are creating the Snowman function with parameters of the x and y coordinates (where the head will be) and the three radii.
- Inside the function we are going to the coordinate and setting the color of the turtle as light blue.

## Head and Body Pieces

```py
def Snowman(x, y, radius1, radius2, radius3):
  turtle.goto(x, y)
  turtle.color("lightblue")
  
  #head
  turtle.begin_fill() 
  turtle.circle(radius1) 
  turtle.end_fill() 
  turtle.up()

  #body piece 1
  turtle.right(90)
  turtle.forward(radius2*2)
  turtle.left(90)
  turtle.begin_fill() 
  turtle.circle(radius2) 
  turtle.end_fill() 
  turtle.up()

  #body piece 2
  turtle.right(90)
  turtle.forward(radius3*2)
  turtle.left(90)
  turtle.begin_fill() 
  turtle.circle(radius3) 
  turtle.end_fill() 
```

