---
name: 'Dice Rolling'
description: 'Simulate Rolling Dice!'
author: '@JakeGerber'
image: 'https://cloud-8ogf0pnlo.vercel.app/0screenshot__1424_.png'
---

Create the dice rolling simulation of your dreams with this workshop by using Python and the turtle library. It's cool even if you don't play DND! Maybe you just like rolling dice?

<img src="https://cloud-8ogf0pnlo.vercel.app/0screenshot__1424_.png" width="900" alt="Dice Rolling Example">

<img src="https://1.bp.blogspot.com/-19Qnj82lCrk/U-FYkM_tvvI/AAAAAAAAQNc/5J1wSym33Nw/s320/Spongebob-Squarepants-GIFs-spongebob-squarepants-23416975-500-309.gif" width="380" alt="Spongebob Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE that allows us to write code online. It's REALLY easy to set up.

Create a new repl and use Python as the language.

<img src="https://cloud-ai5440o46.vercel.app/0screenshot__1423_.png" width="600" alt="Python Repl">

# Initial Statements

Let's Begin! We need some initial statements for our program. Don't forget them!

<img src="https://thumbs.gfycat.com/SecondTartCygnet-max-1mb.gif" width="380" alt="Dice Rolling Gif">

```py
import dice
import turtle
```
Add code to main.py for the time being. It should have nothing in it before adding code. Import these two statements. Importing dice will import the functions from the dice.py file we will write later, and the turtle statement allows us to draw to the screen.

```py
import dice
import turtle

reroll()

turtle.onkey(reroll, "space")

turtle.listen()
turtle.mainloop()
```
We are calling the reroll function that we will create in a moment. Then, if space is pressed, the reroll function is called, and the turtle is always listening for user input.

# ReRoll

<img src="https://media3.giphy.com/media/3orieXuSY8GJj1xtaU/source.gif" width="380" alt="Dog Gif">
This is our rolling function. This seems confusing now because we haven't written all the functions, but fear not! Everything will be explained soon.

```py
import dice
import turtle


def reroll():
```
Add the reroll function right below the import statement. It takes in no parameters.

```py
def reroll():
  turtle.clear()
  turtle.tracer(0, 0)
  turtle.update()
```
The screen in cleared so we can draw new dice. Add the tracer and update functions. These make it so the dice we will draw are fully drawn at the same time, instead of the screen refreshing after every draw call. Basically, without these statements, the dice would draw VERY slow.


```py
def reroll():
  turtle.clear()
  turtle.tracer(0, 0)
  dice.Die(0, 0, 100, 10, "black", "red")

  dice.Die(0, 150, 100, 10, "black", "red")

  dice.Die(0, -150, 100, 10, "black", "red")
  turtle.update()
```
The dice file that we imported earlier and will create in a moment is used here to draw the Die function. This will make sense in a moment!

# Create the "dice.py" file.
Create the "dice.py" file as shown below. We're gonna put all of our fancy dice functions in this file.

<img src="https://cloud-p8cbn4vsp.vercel.app/0screenshot__1421_.png" width="600" alt="Python Repl">

```py
import turtle
import random
```
Focus on dice.py for the rest of the workshop! Add these statements to the top so we can access the turtle and random libraries. The turtle library allows us to draw to the screen, and the random library allows us to get random numbers.

# Drawing the Box

<img src="https://cloud-eexbpirit.vercel.app/0screenshot__1425_.png" width="380" alt="Drawn Box">

Every dice has a box. If not then it's just circles. Only circles. Pretty ominous. Add the box.

```py
import turtle
import random

def drawBox(x, y, size, color):
```
This function will draw the box of the dice. It takes in x and y coordinates, a size, and a color.

```py
def drawBox(x, y, size, color):
  turtle.color(color)
  turtle.setheading(0)
  turtle.up()
  turtle.goto(x, y)
```
We are setting the turtle's color to the parameter color, setting the direction, making the turtle go up, and going to the coordinates.

```py
def drawBox(x, y, size, color):
  turtle.color(color)
  turtle.setheading(0)
  turtle.up()
  turtle.goto(x, y)
  turtle.begin_fill()
  turtle.end_fill()
```
Add the begin and end fill statements so the box drawn will be filled in.

```py
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
Use a for loop and draw the box. Remember, a box has four sides so we are using a for loop for that!

# Rolling the Die
Under the function that we just created, create a "rolls" function. This will draw the dots on the dice. Everybody likes circles! Don't be that one square person in the room.

<img src="https://cloud-2mtzavva3.vercel.app/0screenshot__1429_.png" width="380" alt="Dots on the Box">

```py
def rolls(x, y, size, radius, color, roll):
  turtle.color(color)
  turtle.up()
```
Add the rolls function right under the function we just wrote. It takes in x and y coordinates, the size of the box we just created, the radius of the circles, and the random number that will be passed in.

## Row 1
Every row has three dots and there are three rows. Let's start with row 1.

```py
def rolls(x, y, size, radius, color, roll):
  turtle.color(color)
  turtle.up()

  #row 1
  turtle.goto(x+(size/6), y-(size/6)-radius)
```
Let's go to the location of the first circle in the first row of the die. The die scales depending on the box size.

```py
def rolls(x, y, size, radius, color, roll):
  //Previous code would be here.

  #row 1
  turtle.goto(x+(size/6), y-(size/6)-radius)

  #circle 1 (row 1)
  if (roll == 2 or roll == 3 or roll == 4 or roll == 5 or roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()

  turtle.forward(size/3)
```
If the roll is a 2, 3, 4, 5, or 6, then draw the first circle. We always need begin and end fill statements for these circles so they are filled in. Draw the circle with the radius that was passed in as the parameter, and afterwards, go forward 1/3 the size of the box.

```py
def rolls(x, y, size, radius, color, roll):
  #Previous code would be here.

  #circle 2 (row 1)
  '''
  if ():
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()
  '''

  turtle.forward(size/3)
```
There is never a case where the second circle on the first row is used, which is why it is commented out. Once again, move forward 1/3 the size of the box.

```py
def rolls(x, y, size, radius, color, roll):
  #Previous code would be here.

  #circle 3 (row 1)
  if (roll == 4 or roll == 5 or roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()
```
If the roll is 4, 5, or 6, draw the filled in circle. 

## Row 2
Now onto row 2. Keep it up!

```py
def rolls(x, y, size, radius, color, roll):
  #Previous code would be here.
  
  #row 2
  turtle.goto(x+(size/6), y-(size/6)-(size/3)-(radius))
```
Let's go to the location of the first circle on the second row.

```py
def rolls(x, y, size, radius, color, roll):
  #Previous code would be here.
  

  #circle 1 (row 2)
  if (roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()

  turtle.forward(size/3)
```
If the roll is a 6, draw the circle. Then, move forward to the second circle.

```py
def rolls(x, y, size, radius, color, roll):
  #Previous code would be here.

  #circle 2 (row 2)
  if (roll == 1 or roll == 3 or roll == 5):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()

  turtle.forward(size/3)
```
If the roll is a 1, 3, or 5, draw the circle. Then move forward to the third circle.

```py
def rolls(x, y, size, radius, color, roll):
  #Previous code would be here.
  
  #circle 3 (row 2)
  if (roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()
```
If the roll is a 6, draw the third circle.

## Row 3
Final row to draw. Hang in there!

```py
def rolls(x, y, size, radius, color, roll):
  #Previous code would be here.
  
  #row 3
  turtle.goto(x+(size/6), y-(size/6)-((size/3)*2)-(radius))
```
Go to the location of the first circle on the third row.

```py
def rolls(x, y, size, radius, color, roll):
  #Previous code would be here.
  
  #circle 1
  if (roll == 4 or roll == 5 or roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()

  turtle.forward(size/3)
```
If the roll is a 4, 5, or 6, then draw the circle. Then go forward to the location of the second circle.

```py
def rolls(x, y, size, radius, color, roll):
  #Previous code would be here.
  
  #circle 2
  '''
  if ():
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()
  '''

  turtle.forward(size/3)
```
There is no roll where the second circle is drawn so it is commented out. Move forward to the third circle.

```py
def rolls(x, y, size, radius, color, roll):
  #Previous code would be here.
  
  #circle 3
  if (roll == 2 or roll == 3 or roll == 4 or roll == 5 or roll == 6):
    turtle.begin_fill()
    turtle.circle(radius)
    turtle.end_fill()
```
If the roll is a 2, 3, 4, 5, or 6, then draw the circle.


# Putting It All Together
We are creating a function that will call the functions to draw the box and the circles. You're so close to the end that I cannot even comprehend how close you are because you are just so close. Don't give up at the finish line!

```py
def Die(x, y, size, radius, color1, color2):
```
Add this function right below the other ones we just wrote. It takes in x and y coordinates, the size of the box, the radius of the circles, and two colors (one for the box and one for the circles).

```py
def Die(x, y, size, radius, color1, color2):
  turtle.speed(0)
  turtle.hideturtle()
  x -= (size/2)
  y += (size/2)
```
The turtle's speed is set to 0 so it draws instantly, and the cursor is hidden. The x and y coordinates are repositioned because when the user inputs coordinates, we want the coordinates to be for the center of the box. Changing the x and y accounts for this.

```py
def Die(x, y, size, radius, color1, color2):
  turtle.speed(0)
  turtle.hideturtle()
  x -= (size/2)
  y += (size/2)
  drawBox(x, y, size, color1)
  rolls(x, y, size, radius, color2, random.randint(1, 6))
```
The drawBox and rolls functions are called with their respective parameters.

# Source Code
Here's all the code we wrote! YOU ARE DONE. Enjoy! :D

<img src="https://images.squarespace-cdn.com/content/v1/562516c0e4b095e786b37604/1569883250050-HNCMTRS3DEIHY4CPB87S/ke17ZwdGBToddI8pDm48kOM0wi0zWgY49OChaGdbQod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfAtPlxizjcWvBNqgWc_KYFyyq31ajrfWMcmXEH6sz4g7zs2yPjc1ECvpa5Zm_kMqw/yay.gif" width="380" alt="Yay Gif">

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
- [Original Program](https://repl.it/@CosmicSnowman/Dice-Roll#main.py)
- [Add Randomized Colors](https://repl.it/@CosmicSnowman/Dice-Roll-Extended-1#dice.py)
- [Add Nine Possible Choices](https://repl.it/@CosmicSnowman/Dice-Roll-Extended-2#main.py)
- [Choose the Number of Dice](https://repl.it/@CosmicSnowman/Dice-Roll-Extended-3#main.py)
