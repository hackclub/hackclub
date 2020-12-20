---
name: 'Dungeon Crawler Overworld'
description: 'Create your dungeon crawler overworld!'
author: '@JakeGerber'
image: 'https://cloud-3oy6wuv14.vercel.app/0screenshot__1430_.png'
---

# Create a Dungeon Crawler Overworld!

In this workshop, we will be creating a dialogue tree system with C#.

<img src="https://cloud-3oy6wuv14.vercel.app/0screenshot__1430_.png" width="900" alt="Dungeon Crawler Example">

<img src="https://media2.giphy.com/media/QYECbEHYafe9O/200.gif" width="380" alt="Knight Dancing Gif">

# Repl.it Setup
Let's begin!

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an IDE which allows us to write our code online. No downloads necessary.

Create a new repl and use C# as the language.

<img src="https://cloud-eyujimcxl.vercel.app/0screenshot__1431_.png" width="600" alt="Python Repl">

# Initial Statements

```py
import turtle

myarr = []
col = 1
row = 1
turtle.hideturtle()
```
This sets up the array and initial player position.

# Reading Text File

```py
import turtle


myarr = []
col = 1
row = 1
turtle.hideturtle()


f = open("map.txt", "r")

while(True):
  tempLine = f.readline()

  if tempLine == "": 
    break

  temparr = []
  for t in tempLine:
    temparr.append(t)
  myarr.append(temparr)

f.close()
```
The text file lines are being added to an array, which is then added to the "myarr" array, creating a 2D array.

# Drawing the Square Function
```py
#This is right under our initial statements and reading the text file.
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
- Add this function right under our initial statements and reading the text file.
- This function takes in x and y coordinates, the size of the square, and the color.
- The turtle begins a fill and draws a filled in square at the coordinates.

# Drawing the Map Function
```py

def drawMap():
  x = -120
  y = 60
  originalX = -120
  side = 10
  turtle.tracer(0, 0)
  for arr in myarr:
    for value in arr:
      if (value == "0"):
        drawSquare(x, y, side, "green")
      elif (value == "1"):
        drawSquare(x, y, side, "yellow")
      elif (value == "2"):
        drawSquare(x, y, side, "red")
      elif (value == "\n"):
        drawSquare(x, y, side, "none")
      else:
        drawSquare(x, y, side, "black")
      x+=side
    y-=side
    x = originalX
  turtle.update()
  
#But the function call below outside of the function.  
drawMap()
```
- This function goes below the "drawSquare" function we just wrote.
- The tracer and update function surrounding our for loops make it so we do not keep refreshing after every square we draw. Without it, our program will take a long to draw.
- We are reading the character and drawing a corresponding square.
- Add the "drawMap" call at the end so we can draw the inital map.

# Movement

## Up
```py
def up():
  global myarr
  global row
  global col
  if (myarr[col-1][row] == "0"):
    myarr[col][row] = "0"
    col -=1
    myarr[col][row] = "1"
  turtle.clear()
  drawMap()
```

## Down
```py
def down():
  global myarr
  global row
  global col
  if (myarr[col+1][row] == "0"):
    myarr[col][row] = "0"
    col +=1
    myarr[col][row] = "1"
  turtle.clear()
  drawMap()
```

## Left
```py
def left():
  global myarr
  global row
  global col
  if (myarr[col][row-1] == "0"):
    myarr[col][row] = "0"
    row -=1
    myarr[col][row] = "1"
  turtle.clear()
  drawMap()
```

## Right
```py
def right():
  global myarr
  global row
  global col
  if (myarr[col][row+1] == "0"):
    myarr[col][row] = "0"
    row +=1
    myarr[col][row] = "1"
  turtle.clear()
  drawMap()
```

# Listening for Player Input
```py
turtle.onkey(up, "w")
turtle.onkey(left, "a")
turtle.onkey(right, "d")
turtle.onkey(down, "s")

turtle.listen()
turtle.mainloop()
```

# Final Source Code
Here is the final source code! Make sure you have a "map.txt" with your created map within it.
```py
import turtle


myarr = []
col = 1
row = 1
turtle.hideturtle()

f = open("map.txt", "r")

while(True):
  tempLine = f.readline()

  if tempLine == "": 
    break

  temparr = []
  for t in tempLine:
    temparr.append(t)
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


def drawMap():
  x = -120
  y = 60
  originalX = -120
  side = 10
  turtle.tracer(0, 0)
  for arr in myarr:
    for value in arr:
      if (value == "0"):
        drawSquare(x, y, side, "green")
      elif (value == "1"):
        drawSquare(x, y, side, "yellow")
      elif (value == "2"):
        drawSquare(x, y, side, "red")
      elif (value == "\n"):
        drawSquare(x, y, side, "none")
      else:
        drawSquare(x, y, side, "black")
      x+=side
    y-=side
    x = originalX
  turtle.update()

drawMap()




def up():
  global myarr
  global row
  global col
  if (myarr[col-1][row] == "0"):
    myarr[col][row] = "0"
    col -=1
    myarr[col][row] = "1"
  turtle.clear()
  drawMap()


def down():
  global myarr
  global row
  global col
  if (myarr[col+1][row] == "0"):
    myarr[col][row] = "0"
    col +=1
    myarr[col][row] = "1"
  turtle.clear()
  drawMap()


def left():
  global myarr
  global row
  global col
  if (myarr[col][row-1] == "0"):
    myarr[col][row] = "0"
    row -=1
    myarr[col][row] = "1"
  turtle.clear()
  drawMap()


def right():
  global myarr
  global row
  global col
  if (myarr[col][row+1] == "0"):
    myarr[col][row] = "0"
    row +=1
    myarr[col][row] = "1"
  turtle.clear()
  drawMap()

turtle.onkey(up, "w")
turtle.onkey(left, "a")
turtle.onkey(right, "d")
turtle.onkey(down, "s")

turtle.listen()
turtle.mainloop()
```

# More You Can Create
- [Original Program](https://repl.it/@CosmicSnowman/Dungeon-Workshop#main.py)
- [Add More Colors](https://repl.it/@CosmicSnowman/Dungeon-Workshop-Extended-1#main.py)
- [Choose a Starting Location](https://repl.it/@CosmicSnowman/Dungeon-Workshop-Extended-2#main.py)
- [Add More Shapes](https://repl.it/@CosmicSnowman/Dungeon-Workshop-Extended-3#main.py)
