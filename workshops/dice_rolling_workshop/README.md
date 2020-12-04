---
name: 'Dice Rolling'
description: 'Simulate Rolling Dice!'
author: '@JakeGerber'
image: 'https://cloud-8ogf0pnlo.vercel.app/0screenshot__1424_.png'
---

In this workshop we are going to be creating a dice rolling simulation using Python and the turtle library.

<img src="https://cloud-8ogf0pnlo.vercel.app/0screenshot__1424_.png" width="900" alt="Dice Rolling Example">

<img src="https://media.tenor.com/images/d86646ec4acbb11c68c0e101b090a74d/tenor.gif" width="380" alt="Kazoo Kid Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE that allows us to write code online.

Create a new repl and use Python as the language.

<img src="https://cloud-ai5440o46.vercel.app/0screenshot__1423_.png" width="600" alt="Python Repl">

# Initial Statements

Let's Begin!
```py
import dice
import turtle

dice.Die(0, 0, 100, 10, "black", "red")

dice.Die(0, 150, 100, 10, "black", "red")

dice.Die(0, -150, 100, 10, "black", "red")
```
- Add this code to "main.py".
- Don't worry we're about to create these functions.
- We need the turtle library here to detect key presses later on.

# ReRoll

```py
#What we just wrote.
def reroll():
  turtle.clear()
  dice.Die(0, 0, 100, 10, "black", "red")

  dice.Die(0, 150, 100, 10, "black", "red")

  dice.Die(0, -150, 100, 10, "black", "red")

turtle.onkey(reroll, "space")


turtle.listen()
turtle.mainloop()
```
- This code comes directly after what we just wrote.
- This code clears the screen and calls the dice functions again if space is pressed. The turtle is always listening for the user's input.

# Create the "dice.py" file.
Create the "dice.py" file as shown below.

<img src="https://cloud-p8cbn4vsp.vercel.app/0screenshot__1421_.png" width="600" alt="Python Repl">

```py
import turtle
import random
```
Add these statements to the top so we can access the turtle and random libraries.

# Drawing the Box

<img src="https://cloud-eexbpirit.vercel.app/0screenshot__1425_.png" width="380" alt="Drawn Box">

```py
import turtle
import random

def drawBox(x, y, size, color):
  turtle.color(color)
  turtle.setheading(0)
  turtle.up()
  turtle.goto(x, y)
  turtle.begin_fill()
  for x in range(4):
    turtle.forward(size)
    turtle.right(90)
  turtle.end_fill()
```
- This function goes to the coordinate and draws a square. This will be the square part of the die.

# Rolling the Die

# Putting It All Together

# Source Code

# More You Can Create
