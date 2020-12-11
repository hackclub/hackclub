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

reroll()

turtle.onkey(reroll, "space")

turtle.listen()
turtle.mainloop()

```
- Add this code to "main.py".
- We import the turtle library and the dice functions that we will soon create.
- The turtle listens for the space button and calls the reroll function if pressed. We are about to create it.

# ReRoll

```py
import dice
import turtle


def reroll():
  turtle.clear()
  turtle.tracer(0, 0)
  dice.Die(0, 0, 100, 10, "black", "red")

  dice.Die(0, 150, 100, 10, "black", "red")

  dice.Die(0, -150, 100, 10, "black", "red")
  turtle.update()


reroll()

turtle.onkey(reroll, "space")

turtle.listen()
turtle.mainloop()
```
- Add this function right after the import statements.
- This function clears the screens and redraws the dice. They will get another random number.

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
Under the function that we just created, create a "rolls" function. This will draw the dots on the dice.
```py
#Initial statements and function to draw the box would be here.
def rolls(x, y, size, radius, color, roll):
  turtle.color(color)
  turtle.up()
```
## Row 1
```py
def rolls(x, y, size, radius, color, roll):
  turtle.color(color)
  turtle.up()

  #row 1
  turtle.goto(x+(size/6), y-(size/6)-radius)

  #circle 1
  if (roll == 2 or roll == 3 or roll == 4 or roll == 5 or roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()

  turtle.forward(size/3)

  #circle 2
  '''
  if ():
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()
  '''

  turtle.forward(size/3)

  #circle 3
  if (roll == 4 or roll == 5 or roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()
```
- The first circle (top left) is used by rolls 2, 3, 4, 5, and 6.
- The second circle (top middle) is not used by any rolls.
- The third circle (top right) is used by rolls 4, 5, and 6.

## Row 2
```py
def rolls(x, y, size, radius, color, roll):
  #row 1 would be here.
  
  #row 2
  turtle.goto(x+(size/6), y-(size/6)-(size/3)-(radius))

  #circle 1
  if (roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()

  turtle.forward(size/3)

  #circle 2
  if (roll == 1 or roll == 3 or roll == 5):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()

  turtle.forward(size/3)

  #circle 3
  if (roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()
```
- The first circle (middle left) is used by roll 6.
- The second circle (middle middle) is used by rolls 1, 3, and 5.
- The third circle (middle right) is used by roll 6.

## Row 3
```py
def rolls(x, y, size, radius, color, roll):
  #rows 1 and 2 would be here.
  
  #row 3
  turtle.goto(x+(size/6), y-(size/6)-((size/3)*2)-(radius))

  #circle 1
  if (roll == 4 or roll == 5 or roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()

  turtle.forward(size/3)

  #circle 2
  '''
  if ():
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()
  '''

  turtle.forward(size/3)

  #circle 3
  if (roll == 2 or roll == 3 or roll == 4 or roll == 5 or roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()
```
- The first circle (bottom left) is used by rolls 4, 5, and 6.
- The second circle (bottom middle) is not used by any rolls.
- The third circle (bottom right) is used by rolls 2, 3, 4, 5, and 6.

# Putting It All Together
Add this function under the ones we just created.
```py
def Die(x, y, size, radius, color1, color2):
  turtle.speed(0)
  turtle.hideturtle()
  x -= (size/2)
  y += (size/2)
  drawBox(x, y, size, color1)
  rolls(x, y, size, radius, color2, random.randint(1, 6))
```
This function calls the boxes and dots functions to draw them, and it picks the random number.

# Source Code
Here's all the code we wrote!

## main.py
```py
import dice
import turtle

def reroll():
  turtle.clear()
  turtle.tracer(0, 0)
  dice.Die(0, 0, 100, 10, "black", "red")

  dice.Die(0, 150, 100, 10, "black", "red")

  dice.Die(0, -150, 100, 10, "black", "red")
  turtle.update()

reroll()

turtle.onkey(reroll, "space")

turtle.listen()
turtle.mainloop()
```

## dice.py
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

def rolls(x, y, size, radius, color, roll):
  turtle.color(color)
  turtle.up()

  #row 1
  turtle.goto(x+(size/6), y-(size/6)-radius)

  #circle 1
  if (roll == 2 or roll == 3 or roll == 4 or roll == 5 or roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()

  turtle.forward(size/3)

  #circle 2
  '''
  if ():
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()
  '''

  turtle.forward(size/3)

  #circle 3
  if (roll == 4 or roll == 5 or roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()

  #row 2
  turtle.goto(x+(size/6), y-(size/6)-(size/3)-(radius))

  #circle 1
  if (roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()

  turtle.forward(size/3)

  #circle 2
  if (roll == 1 or roll == 3 or roll == 5):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()

  turtle.forward(size/3)

  #circle 3
  if (roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()

  #row 3
  turtle.goto(x+(size/6), y-(size/6)-((size/3)*2)-(radius))

  #circle 1
  if (roll == 4 or roll == 5 or roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()

  turtle.forward(size/3)

  #circle 2
  '''
  if ():
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()
  '''

  turtle.forward(size/3)

  #circle 3
  if (roll == 2 or roll == 3 or roll == 4 or roll == 5 or roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()

def Die(x, y, size, radius, color1, color2):
  turtle.speed(0)
  turtle.hideturtle()
  x -= (size/2)
  y += (size/2)
  drawBox(x, y, size, color1)
  rolls(x, y, size, radius, color2, random.randint(1, 6))
```

# More You Can Create
- [Add Randomized Colors](https://repl.it/@CosmicSnowman/Dice-Roll-Extended-1#dice.py)
- [Add Nine Possible Choices](https://repl.it/@CosmicSnowman/Dice-Roll-Extended-2#main.py)
- [Choose the Number of Dice](https://repl.it/@CosmicSnowman/Dice-Roll-Extended-3#main.py)
