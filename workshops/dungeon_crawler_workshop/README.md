---
name: 'Dungeon Crawler Overworld'
description: 'Create your dungeon crawler overworld!'
author: '@JakeGerber'
image: 'https://cloud-3oy6wuv14.vercel.app/0screenshot__1430_.png'
---

# Create a Dungeon Crawler Overworld!

Dungeon crawlers are cool so let's make our own. You can even make your own custom map! In this workshop, we will be creating a dungeon crawler overworld with Python and the turtle library!

<img src="https://cloud-3oy6wuv14.vercel.app/0screenshot__1430_.png" width="900" alt="Dungeon Crawler Example">

<img src="https://media2.giphy.com/media/QYECbEHYafe9O/200.gif" width="380" alt="Knight Dancing Gif">

# Repl.it Setup
Let's begin!

<img src="https://media.tenor.com/images/5cdca354a391fe57bd449ae1acb45c2e/tenor.gif" width="380" alt="Bart Simpson Dancing Gif">

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an IDE which allows us to write our code online. No downloads necessary.

Create a new repl and use Python as the language.

<img src="https://cloud-eyujimcxl.vercel.app/0screenshot__1431_.png" width="600" alt="Python Repl">

# Initial Statements
Don't forget these initial statements. They are important!
```py
import turtle
```
Let's import the [turtle library](https://docs.python.org/3/library/turtle.html). This allows us to draw to the screen!

```py
import turtle

myarr = []
col = 1
row = 1
turtle.hideturtle()
```
Create an empty array, and set some initial player positions based on the map you will create later. Don't worry about it now but this is important later. Also, hide the turtle cursor.

# Reading Text File
<img src="https://media3.giphy.com/media/WoWm8YzFQJg5i/giphy.gif" width="380" alt="Spongebob Reading Gif">

Even though we haven't created the text file yet, we are going to read in the one we will create later. Don't worry!

```py
f = open("map.txt", "r")

f.close()
```
The open and close statements allow us to read and close a text file. Although we haven't created map.txt yet, add these statements because we will add the text file later.

```py
f = open("map.txt", "r")

while(True):
  tempLine = f.readline()

f.close()
```
This while loop will be used to read the text file line by line. We are setting the tempLine variable to the current line being read. Each time the while loop is run, it goes to the next line.

```py
f = open("map.txt", "r")

while(True):
  tempLine = f.readline()

  if tempLine == "": 
    break

f.close()
```
If the line being read is empty, that means we are at the end of the text file. If this is the case, then break out of the while loop.

```py
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

If the line is not empty, it is being added to an array, which is then added to the "myarr" array. This creates a [2D array](https://www.tutorialspoint.com/python_data_structure/python_2darray.htm).

# Drawing the Square Function
<img src="https://i.imgur.com/FkDPzDz.gif?noredirect" width="380" alt="Squidward Bold and Brash Gif">

Squares! Squares everywhere! Let's draw them.

```py
#Previous code would be here.
def drawSquare(x, y, side, color):
```
This function takes in x and y coordinates, the size of the square, and the [color](https://trinket.io/docs/colors).
- The turtle begins a fill and draws a filled in square at the coordinates.

```py
#Previous code would be here.
def drawSquare(x, y, side, color):
  turtle.up()
  turtle.goto(x, y)
```
Make the turtle go up, and go to the specified location.

```py
#Previous code would be here.
def drawSquare(x, y, side, color):
  turtle.up()
  turtle.goto(x, y)
  if (not color == "none"):
```
We only want to draw the square if there is a color. If the color is "none", then that is empty space so we draw nothing.

```py
#Previous code would be here.
def drawSquare(x, y, side, color):
  turtle.up()
  turtle.goto(x, y)
  if (not color == "none"):
    turtle.color(color)
    turtle.begin_fill()
    turtle.end_fill()
```
If there is a color, then set the turtle's color to the color. Then, add begin and end fill statements so the square we draw is filled in.

```py
#Previous code would be here.
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
Squares have four sides, so we are using the for loop to move forward the side amount, and then more right. This is repeated until the square is complete.

# Drawing the Map Function
Let's take that square function and apply it to the entire map.

```py
#This comes after everything we already wrote.
def drawMap():
```
The draw map function will draw to the screen.

```py
#This comes after everything we already wrote.
def drawMap():
  x = -120
  y = 60
  originalX = -120
  side = 10
```
Set some variables for x and y locations, the original x location, and the side length. We need the original x location because, we need to know where to start when drawing every row.

```py
def drawMap():
  //Variables would be here.
  turtle.tracer(0, 0)
  for arr in myarr:
    for value in arr:
  turtle.update()
```
The tracer and update statements make the turtle draw everything at the same time rather than refreshing after every draw statement. It makes your program run instantly instead of really slow. We also have for loops so we can run through the 2D array.

```py
#This comes after everything we already wrote.
def drawMap():
  #Variables would be here.
  turtle.tracer(0, 0)
  for arr in myarr:
    for value in arr:
      if (value == "0"):
        drawSquare(x, y, side, "green")
      elif (value == "1"):
        drawSquare(x, y, side, "yellow")
      elif (value == "2"):
        drawSquare(x, y, side, "red")
  turtle.update()
```
We are defining some map values. When creating the map, we represent different sections with numbers, so we are translating those numbers into squares.

```py
def drawMap():
  #variables would be here.
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
  turtle.update()
```
If there is a "\n", that means it is going to the next line. In this case, we want to not draw anything. If there is an unknown number, we are just making a black square.

```py
#This comes after everything we already wrote.
def drawMap():
  #Variables would be here.
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
```
After every square drawn, we want to move over to the next square. After every row drawn, we want to go back to the original x and move down a y amount.

```py
def drawMap():
  #Everything we just wrote would be here.

drawMap()
```
Make sure to call the drawMap function after creating it to show the user the original map before any movement.

# Movement
The player NEEDS to move. Let's make that functionality.

<img src="https://media1.tenor.com/images/eaaee9a9d645b72a7dfb6b867659a8e4/tenor.gif?itemid=13599207" width="380" alt="Spongebob Brings It Around Town Gif">

## Up
```py
#The code we already wrote would be here.
def up():
  global myarr
  global row
  global col
```
By making these variables global, we are able to access and modify them within our function.

```py
def up():
  global myarr
  global row
  global col
  if (myarr[row-1][col] == "0"):
    myarr[row][col] = "0"
    row -=1
    myarr[row][col] = "1"
```
If the spot that we want to move up to is free, we are moving up there and making our current spot empty.

```py
def up():
  global myarr
  global row
  global col
  if (myarr[row-1][col] == "0"):
    myarr[row][col] = "0"
    row -=1
    myarr[row][col] = "1"
  turtle.clear()
  drawMap()
```
We are clearing the screen and drawing the map again, since it is now updated.

## Down
```py
def down():
  global myarr
  global row
  global col
  if (myarr[row+1][col] == "0"):
    myarr[row][col] = "0"
    row +=1
    myarr[row][col] = "1"
  turtle.clear()
  drawMap()
```
This is the same function as the left function but instead of trying to move the player up, we are trying to move them down by increasing the row.

## Left
```py
def left():
  global myarr
  global row
  global col
  if (myarr[row][col-1] == "0"):
    myarr[row][col] = "0"
    col -=1
    myarr[row][col] = "1"
  turtle.clear()
  drawMap()
```
This checks if the square left of your current position is empty space and if it is, it changes the array values. It is essentially the same as the previous functions but we are checking the col instead of row, and we are decreasing the col.

## Right
```py
def right():
  global myarr
  global row
  global col
  if (myarr[row][col+1] == "0"):
    myarr[row][col] = "0"
    col +=1
    myarr[row][col] = "1"
  turtle.clear()
  drawMap()
```
This checks if the square right of your current position is empty space and if it is, it changes the array values. Instead of decreasing the col, we are increasing it.

# Listening for Player Input
<img src="https://media0.giphy.com/media/tqfS3mgQU28ko/giphy.gif" width="380" alt="Spongebob Music Gif">

But how does the player make their inputs? Let's find out!

```py
turtle.onkey(up, "w")
turtle.onkey(left, "a")
turtle.onkey(right, "d")
turtle.onkey(down, "s")

turtle.listen()
turtle.mainloop()
```
Player input for w, a, s, and d and the corresponding movement function is called. The turtle is also always listening for input.

# Final Source Code (for the Main File)
Here is the final source code for the main file! Nice job!

<img src="https://media1.giphy.com/media/IoMkSXKHQIDVm/200.gif" width="380" alt="Spongebob Happy Gif">

```py
import turtle


myarr = []
col = 2
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
  if (myarr[row-1][col] == "0"):
    myarr[row][col] = "0"
    row -=1
    myarr[row][col] = "1"
  turtle.clear()
  drawMap()


def down():
  global myarr
  global row
  global col
  if (myarr[row+1][col] == "0"):
    myarr[row][col] = "0"
    row +=1
    myarr[row][col] = "1"
  turtle.clear()
  drawMap()


def left():
  global myarr
  global row
  global col
  if (myarr[row][col-1] == "0"):
    myarr[row][col] = "0"
    col -=1
    myarr[row][col] = "1"
  turtle.clear()
  drawMap()


def right():
  global myarr
  global row
  global col
  if (myarr[row][col+1] == "0"):
    myarr[row][col] = "0"
    col +=1
    myarr[row][col] = "1"
  turtle.clear()
  drawMap()

turtle.onkey(up, "w")
turtle.onkey(left, "a")
turtle.onkey(right, "d")
turtle.onkey(down, "s")

turtle.listen()
turtle.mainloop()
```

# The Text File
<img src="https://cloud-4dguhfgxx.vercel.app/0screenshot__1432_.png" width="380" alt="Map Text File">
- Create a new text file named "map.txt" and add 0s, 2s, and a 1 for the empty space, walls, and player.
- Be sure to update the "col" and "row" values at the beginning of the program depending on where you place the player! For example, if you want to place the player of the example below 1 space to right, we would keep the row as 1, but we would set the column to 2. Remember that the index of an array starts at 0!

```
222222222222222222222222
210000000000200000000002
200000000000200000000002
200022220000200222222202
200020020000200000002202
200020022000000000002202
200020002222200000002202
200020000000000000002202
222222222222222222222222
```
Here's an example map I created with the col and row values both as 1.

# More You Can Create
- [Original Program](https://repl.it/@CosmicSnowman/Dungeon-Workshop#main.py)
- [Add More Colors](https://repl.it/@CosmicSnowman/Dungeon-Workshop-Extended-1#main.py)
- [Choose a Starting Location](https://repl.it/@CosmicSnowman/Dungeon-Workshop-Extended-2#main.py)
- [Add More Shapes](https://repl.it/@CosmicSnowman/Dungeon-Workshop-Extended-3#main.py)
