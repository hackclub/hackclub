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

- When drawing circles, turtle starts at the bottom of the circle and creates it upwards.
- We are starting with the head piece and filling in a circle with the radius of the "radius1" variable.
- We are going down to the first body piece and filling in a circle with the radius of the "radius2" variable.
- We are then going down to the second body piece and filling in a circle with the radius of the "radius3" variable.

## Drawing the Eyes

```py
def Snowman(x, y, radius1, radius2, radius3):
  #What we just wrote.
  
  #eyes
  turtle.color("blue")
  turtle.left(90)
  turtle.forward(radius3*2+radius2*2+radius1)

  turtle.left(-90)
  turtle.forward(radius1/2)
  turtle.begin_fill() 
  turtle.circle(radius1/6) 
  turtle.end_fill() 

  turtle.left(180)
  turtle.forward(radius1)
  turtle.right(180)
  turtle.begin_fill() 
  turtle.circle(radius1/6) 
  turtle.end_fill()
```

- We are going up to halfway up head piece.
- We are changing the turtle color to blue for the eyes (or to whatever color you want).
- We are then going halfway across the head piece and creating the first eye with a radius of 1/6 of the head's radius.
- We are then doing the same for the other eye but going across to the other side.

## Drawing the Nose

```py
def Snowman(x, y, radius1, radius2, radius3):
  #What we wrote.
  
  #nose
  turtle.forward(radius1/2)
  turtle.right(90)
  turtle.color("orange")

  turtle.begin_fill()
  turtle.forward(radius1/2)
  turtle.left(120)
  turtle.forward(radius1/2)
  turtle.left(120)
  turtle.forward(radius1/2)
  turtle.end_fill()
```

- We are going back to halfway across the head.
- We are then turning to face down.
- We are setting the color to orange (or any color you want).
- We are then starting a fill and going forward 1/2 of the head's radius and turning left 120 degrees until we create a triangle.

## Drawing the Buttons

```py
def Snowman(x, y, radius1, radius2, radius3):
  #What we wrote.

  #buttons
  turtle.setheading(270)
  turtle.forward(radius1)
  
  for x in range(3):
    turtle.forward(radius2/2)
    turtle.begin_fill() 
    turtle.circle(radius1/6) 
    turtle.end_fill()
  
  turtle.left(90)
```
- We are setting our direction to down (turtle.setheading(270)) and going to the top of the first body part.
- We are creating a for loop three times for the three buttons.
- In the loop, we are moving forward half the radius of the first body part and creating a circle with 1/6 the radius of the head.

# Calling Statements
Let's create some statements. Make these after the function.

```py
#What we already wrote
Snowman(0, 0, radius1, radius2, radius3)
Snowman(120, 0, radius1, radius2, radius3)
Snowman(-120, 5, radius1, radius2, radius3)
```
Fill in the parameters with what you want. We are putting the user input for the radii.
 
# Final Code

```py
import turtle

radius1 = float(input("What radius for the first circle?: "))
radius2 = float(input("What radius for the second circle?: "))
radius3 = float(input("What radius for the third circle?: "))

turtle.speed(0)
turtle.hideturtle()
turtle.bgcolor("black")


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

  #eyes
  turtle.color("blue")
  turtle.left(90)
  turtle.forward(radius3*2+radius2*2+radius1)

  turtle.left(-90)
  turtle.forward(radius1/2)
  turtle.begin_fill() 
  turtle.circle(radius1/6) 
  turtle.end_fill() 

  turtle.left(180)
  turtle.forward(radius1)
  turtle.right(180)
  turtle.begin_fill() 
  turtle.circle(radius1/6) 
  turtle.end_fill()

  #nose
  turtle.forward(radius1/2)

  turtle.right(90)
  turtle.color("orange")

  turtle.begin_fill()
  turtle.forward(radius1/2)
  turtle.left(120)
  turtle.forward(radius1/2)
  
  turtle.left(120)
  turtle.forward(radius1/2)
  
  turtle.end_fill()

  #buttons
  turtle.setheading(270)
  turtle.forward(radius1)
  for x in range(3):
      turtle.forward(radius2/2)

      turtle.begin_fill() 
      turtle.circle(radius1/6) 
      turtle.end_fill()
  turtle.left(90)


Snowman(0, 0, radius1, radius2, radius3)
Snowman(120, 0, radius1, radius2, radius3)
Snowman(-120, 5, radius1, radius2, radius3)
```

# More You Can Do + Source Code















