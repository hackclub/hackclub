---
name: 'Sprite Creator Program'
description: 'Make your own sprites!'
author: '@JakeGerber'
image: 'https://cloud-j2h9qribj.vercel.app/0screenshot__1437_.png'
---

# Create a Sprite Creator Program!
In this workshop, we will be creating a sprite creation program where you can create and cycle through your own custom sprites.

<img src="https://cloud-j2h9qribj.vercel.app/0screenshot__1437_.png" width="580" alt="Sprite Example">

<img src="https://art.pixilart.com/a3c97a99fb3c1ed.gif" width="380" alt="Zelda 2 Link Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE, meaning that it allows us to write code from the Repl.it website!

Create a new repl and use Python as the language.

<img src="https://cloud-rccf2cjdi.vercel.app/0screenshot__1440_.png" width="600" alt="Python Repl">

# What is a Sprite?
Essentially, a sprite is a bunch of squares (called pixels) that create an image.
<img src="https://cloud-8hfp3i0cf.vercel.app/0sansspr.png" width="380" alt="Sans Sprite">
This sprite is made up of black and white squares that ultimately produce this skeleton face.

# Importing Turtle
We are using the Turtle library to draw to the screen.
```py
import turtle
```
Add this statement to the top of the program in order to import the Turtle library.

# Drawing a Pixel
Let's create a function that goes to a speicified location and draws a single pixel.

```py
def drawSquare(x, y, side, color):
  turtle.up()
  turtle.goto(x, y)
```
- Right under our import statment add this function declaration.
- We are passing in the x and y coordinates, the size of the pixel, and the color.
- We are then having our turtle move up and go to the specified location.

```py
def drawSquare(x, y, side, color):
  turtle.up()
  turtle.goto(x, y)
  
  if (not color == "none"):
    turtle.color(color)
    turtle.begin_fill()
    for x in range(4):
      turtle.forward(side)
      turtle.right(90)
    turtle.end_fill()
```
- If the color is "none", then we do not want to draw anything.
- Else, we set the turtle's color as our "color" variable and create a for loop to draw the square.
- The begin and end fill statements make sure that the square we create will be filled in.

# Reading in the Text File
- We are going to read in a text file that we will later create. The text file will be where the user enter's their sprite information.
- Add the code we will write after the "import" statement but before our function

<img src="https://vip.socio-corp.jp/wp-content/uploads/sites/3/2014/12/pixel-art-1.gif?w=500" width="380" alt="Train Pixel Art Gif">

## Initial Statements

```py
turtle.hideturtle()
turtle.clear()
turtle.speed(0)

allsprites = []
place = 0

myarr = []
```
- The turtle statements are just initializing it's speed to be instant, clearing the screen, and hiding the cursor.
- We are also creating variables that will hold the sprites that we will create in a moment.

## Opening the Text File
```py
f = open("sprite.txt", "r")

f.close()

```
These statements allow us to open the "sprite.txt" text file that we will later create and assigns it to a file object. [Here is more information about opening files in Python.](https://www.w3schools.com/python/python_file_open.asp)

## Checking Each Line
```py
f = open("sprite.txt", "r")

while(True):
  tempLine = f.readline()

  if tempLine == "": 
    break
  elif tempLine[0] == "-":
    allsprites.append(myarr.copy())
    myarr.clear()

f.close()
```
- The while loop makes sure that we check every line.
- We are assigning the line that the file read to the "tempLine" variable.
- We are then making sure that there is text there. If there is no text then it is end of the file and we break out of the while loop. If the text is a dash, then we are done with our current sprite, append it to our "allsprites" array, and clear "myarr". This seems complicated but will make much more sense soon!

```py
f = open("sprite.txt", "r")

while(True):
  tempLine = f.readline()

  if tempLine == "": 
    break
  elif tempLine[0] == "-":
    allsprites.append(myarr.copy())
    myarr.clear()


  temparr = []
  tempr = ""
  for t in tempLine:
    if (not t == ","):
      tempr+= t
    else:
      temparr.append(tempr)
      tempr = ""
  myarr.append(temparr)

f.close()
```
- We are then creating an empty "temparr" array. This will hold our pixel color information on the line.
- The "tempr" string will get the entire color until a comma is seen, which represents the end of the pixel color.
- Our "temparr" array is then getting each pixel, and finally, it is appending the pixel list to the "myarr" array.

# Drawing All the Pixels
```py
def draw(currentarr):
  turtle.clear()
  x = -60
  y = 60
  originalX = -60
  side = 10
```
- Add this function right under the "drawSquare" function.
- We are clearing the screen in order to draw the sprite, and initializing some variables to determine our starting position and size of each pixel.

```py
def draw(currentarr):
  turtle.clear()
  x = -60
  y = 60
  originalX = -60
  side = 10
  
  turtle.tracer(0, 0)
  turtle.update()
```
The turtle tracer and update functions make it so the screen will refresh after all of the sprite is complete, instead of each time something is drawn.

```py
def draw(currentarr):
  turtle.clear()
  x = -60
  y = 60
  originalX = -60
  side = 10
  turtle.tracer(0, 0)
  
  for arr in currentarr:
    for val in arr:
      drawSquare(x, y, side, val)
      x+=side
    y-=side
    x = originalX
    
  turtle.update()
```
- The for loop will go through each line within our sprite, and then each pixel within each line.
- The pixel will be drawn, and then the x and y variables are updated to reflect the position the next pixel is at.

# Changing the Current Sprite
We are going to add functionality to allow you to cycle between your sprites.

<img src="https://media0.giphy.com/avatars/nickyrojo/AJxzsBVCtrjo.gif" width="380" alt="Pixel Art Dog Gif">

## Left
```py
def left():
  global place
  place -= 1
```
- Define the function.
- Access the place value that we created in our initial statements and decrement it because we are cycling left.

```py
def left():
  global place
  place -= 1
  
  if (place < 0):
    place = int(len(allsprites)) - 1
  draw(allsprites[place])
```
- If our place is less than 0, the first index, we need to go to the back of our sprite list.
- We are then calling our "draw" function and using our current sprite in the parameter.

## Right
```py
def right():
  global place
  place += 1
```
- Define the function.
- Instead of decrementing the place value, we are incrementing it since we are moving right.

```py
def right():
  global place
  place += 1
  
  if (place > len(allsprites)-1):
    place = 0
  draw(allsprites[place])
```
- If our place is greater than our final index, we are going back to index 0, the first index.
- We are then calling our "draw" function and using our current sprite in the parameter.

# Final Statements
```py
draw(allsprites[place])

turtle.onkey(left, "Left")
turtle.onkey(right, "Right")

turtle.listen()
turtle.mainloop()
```
- At the bottom of our program add these commands.
- The draw function will draw our current sprite so there is a sprite shown when the program is run.
- The turtle listens for the left and right arrow keys to call their respective function.

# Creating the Text File
Create a file and name it "sprite.txt".
<img src="https://cloud-avutgg3d9.vercel.app/0screenshot__1434_.png" width="380" alt="sprite.txt file">
- Add some colors! Make sure each color has a comma after it, with no spaces anywhere.
- If you want to create a new sprite then add a dash on it's own line.
<img src="https://cloud-ft6bf29c5.vercel.app/0screenshot__1438_.png" width="380" alt="Example sprites">

# Final Code for "main.py"
<img src="https://thumbs.gfycat.com/RespectfulHonestAxolotl-max-1mb.gif" width="380" alt="Charmander Gif">

```py
import turtle

turtle.hideturtle()
turtle.clear()
turtle.speed(0)

allsprites = []
place = 0

myarr = []

f = open("sprite.txt", "r")

while(True):
  tempLine = f.readline()

  if tempLine == "": 
    break
  elif tempLine[0] == "-":
    allsprites.append(myarr.copy())
    myarr.clear()

  temparr = []
  tempr = ""
  for t in tempLine:
    if (not t == ","):
      tempr+= t
    else:
      temparr.append(tempr)
      tempr = ""
  myarr.append(temparr)

f.close()

def drawSquare(x, y, side, color):
  turtle.up()
  turtle.goto(x, y)
  if (not color == "none"):
    turtle.color(color)
    turtle.begin_fill()
    for x in range(4):
      turtle.forward(side)
      turtle.right(90)
    turtle.end_fill()

def draw(currentarr):
  turtle.clear()
  x = -60
  y = 60
  originalX = -60
  side = 10
  turtle.tracer(0, 0)
  for arr in currentarr:
    for val in arr:
      drawSquare(x, y, side, val)
      x+=side
    y-=side
    x = originalX
  turtle.update()


def left():
  global place
  place -= 1
  if (place < 0):
    place = int(len(allsprites)) - 1
  draw(allsprites[place])

def right():
  global place
  place += 1
  if (place > len(allsprites)-1):
    place = 0
  draw(allsprites[place])


draw(allsprites[place])

turtle.onkey(left, "Left")
turtle.onkey(right, "Right")

turtle.listen()
turtle.mainloop()
```

# Original Program & More You Can Create
- [Original Program](https://repl.it/@CosmicSnowman/Sprite-Creation-Workshop#main.py)
- [Simpler Inputs for Specific Colors](https://repl.it/@CosmicSnowman/Sprite-Creation-Workshop-Expanded-1#main.py)
- [Random Cycle](https://repl.it/@CosmicSnowman/Sprite-Creation-Workshop-Expanded-2#main.py)
- [Sprite Layering](https://repl.it/@CosmicSnowman/Sprite-Creation-Workshop-Expanded-3#sprite.txt)
