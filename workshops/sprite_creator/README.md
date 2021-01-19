---
name: 'Sprite Creator'
description: 'Make your own sprites with Python!'
author: '@JakeGerber'
image: 'https://cloud-j2h9qribj.vercel.app/0screenshot__1437_.png'
---

# Create a Sprite Creator Program!
Video game sprites are rad, so let's create our own. In this workshop, we will be creating a sprite creation program where you can create and cycle through your own custom sprites.

<img src="https://cloud-j2h9qribj.vercel.app/0screenshot__1437_.png" width="580" alt="Sprite Example">

<img src="https://art.pixilart.com/a3c97a99fb3c1ed.gif" width="380" alt="Zelda 2 Link Gif">

## Getting started

We're going to use [Repl.it](https://repl.it/~), a free, online code editor, to create the project.

Create a new Python repl by going to [repl.it/languages/python3](https://repl.it/languages/python3).

<img src="https://cloud-rccf2cjdi.vercel.app/0screenshot__1440_.png" width="600" alt="Python Repl">

### What is a sprite?

Essentially, a [sprite](https://en.wikipedia.org/wiki/Sprite_(computer_graphics)) is a bunch of squares (called pixels) that create an image. Think of retro video games!

<img src="https://cloud-8hfp3i0cf.vercel.app/0sansspr.png" width="380" alt="Sans Sprite">

In this example, the sprite is made up of black and white squares that ultimately produce this skeleton face.

### Importing Turtle

We are using the [Turtle library](https://docs.python.org/3/library/turtle.html) to easily draw on the screen. Start by adding this import statement to the top of your `main.py` file:

```py
import turtle
```

### Initial Statements

Just under the `import` statement, add these three lines:

```py
turtle.hideturtle()
turtle.clear()
turtle.speed(0)
```

Here, the turtle's cursor is hidden, the screen is cleared, and the speed is set 0 so it draws instantly.

Next, add these three lines:

```py
allsprites = []
place = 0

myarr = []
```

There is an array for all the sprites, the index place, and another empty array. This will make more sense later.

## Drawing a Pixel

Let's create a function that goes to a specified location and draws a single pixel. We're definitely going to be calling this function a lot, unless you draw like two pixels. Art is art I guess. :P

```py
def drawSquare(x, y, side, color):
  turtle.up()
  turtle.goto(x, y)
```

Right under the code you just wrote, add a function called `drawSquare()`, which passes in the x and y coordinates, the size of the pixel, and the color. Inside, move the turtle up and go to the passed-in location.

```py
def drawSquare(x, y, side, color):
  turtle.up()
  turtle.goto(x, y)
  
  if (not color == "none"):
    turtle.color(color)
```

We want to draw the square if they input a color. If "none" is inputted, then we don't want to draw anything.

```py
def drawSquare(x, y, side, color):
  turtle.up()
  turtle.goto(x, y)
  
  if (not color == "none"):
    turtle.color(color)
    turtle.begin_fill()
    
    turtle.end_fill()
```

We need to wrap everything we draw inside `begin_fill()` and `end_fill()` functions in order to fill in the square. Add these two functions. Leave a space in between them because we're going to add some drawing code in a second.

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

In between the `begin_fill()` and `end_fill()` functions, add a for loop that draws all 4 sides of a square.

## Reading in the Text File

We are going to read in a text file that we will later create. The text file will be where the user enters their sprite information.

<img src="https://cloud-8z2exkpcx.vercel.app/068747470733a2f2f7669702e736f63696f2d636f72702e6a702f77702d636f6e74656e742f75706c6f6164732f73697465732f332f323031342f31322f706978656c2d6172742d312e6769663f773d353030.gif?w=500" width="380" alt="Train Pixel Art Gif">

### Opening the Text File

After the initial statements but before the `drawSquare()` function, add:

```py
f = open("sprite.txt", "r")

f.close()
```

These statements allow us to open the `sprite.txt` file that we will create in a minute, and assigns it to a file object.

[*Learn more about opening files in Python.*](https://www.w3schools.com/python/python_file_open.asp)

### Checking Each Line

In between the two lines you just wrote, add the following code:

```py
f = open("sprite.txt", "r")

while(True):
  tempLine = f.readline()

f.close()
```

This is an infinite `while` loop that loops through every line in the `sprite.txt` file and assigns each one to a variable called `tempLine`.

Next, add this:

```py
while(True):
  tempLine = f.readline()

  if tempLine == "": 
    break
  elif tempLine[0] == "-":
    allsprites.append(myarr.copy())
    myarr.clear()
```

- First, we check to make sure that the line we're on contains text. If there is no text, then it is the end of the file, so we break out of the loop.
- If the text is a dash, then we are finished with our current sprite, so we append it to the `allsprites` array we created earlier, and we clear the `myarr` array. The reason why we do this will make sense soon.

```py
while(True):
  //Previous code would be here.

  temparr = []
  tempr = ""
```

Next, create an empty array called `temparr`. This will hold our pixel color information on the line. After that, create an empty string called `tempr`. We'll use this later to get color data.

```py
while(True):
  #Previous code would be here.

  temparr = []
  tempr = ""
  for t in tempLine:
    if (not t == ","):
      tempr+= t
    else:
      temparr.append(tempr)
      tempr = ""
```

Under the `tempr` string, add a for loop, which loops through each letter in the `tempLine` string. It continues adding characters to the `tempr` string until it finds a comma. If it finds a comma, it appends the fully-formed `tempr` string to the `temparr` array, resets `tempr` to an empty string, and continues searching. Once this loop completes, `temparr` will contain a list of strings from the `sprites.txt` file. We'll find out what exactly this data will be in a minute.

```py
while(True):
  //Previous code would be here.

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

After the loop completes, append the `temparr` array to the `myarr` array.

## Drawing All the Pixels

Everything needs to be drawn! EVERYTHING!

```py
def draw(currentarr):
```

Add a function called `draw()`, which takes an array of sprite information, right after the `drawSquare()` function.

```py
def draw(currentarr):
  turtle.clear()
  x = -60
  y = 60
  originalX = -60
  size = 10
```

Inside the function,
- clear the screen
- initialize some x and y coordinates to determine the starting point and size of each pixel.

```py
def draw(currentarr):
  //Code we just wrote.
  
  turtle.tracer(0, 0)
  turtle.update()
```

The turtle tracer and update functions make it so the screen will refresh after all of the sprite is complete, instead of each time something is drawn. Without it, everything will be drawn REALLY slowly.

```py
def draw(currentarr):
  //Code we just wrote.

  turtle.tracer(0, 0)
  for arr in currentarr:
    for val in arr:
      drawSquare(x, y, side, val)
      x+=side
    y-=side
    x = originalX
  turtle.update()
```
In between the `turtle.tracer()` and `turtle.update()` lines, add two for loops, one nested inside the other. This will loop through each line within our sprite, and then each pixel within that line. The pixel will be drawn, and then the x and y variables update to refelct the position of the next pixel.

## Changing the Current Sprite

Next, let's write some code that allows you to cycle between your sprites.

<img src="https://media0.giphy.com/avatars/nickyrojo/AJxzsBVCtrjo.gif" width="380" alt="Pixel Art Dog Gif">

### Left

I hope you know directions!

```py
def left():
  global place
  place -= 1
```

Add this function at the bottom of the program. Access the `place` value that we created in our initial statements by making it global. Then, decrement it, because we are cycling left.

```py
def left():
  global place
  place -= 1
  
  if (place < 0):
    place = int(len(allsprites)) - 1
  draw(allsprites[place])
```

If the `place` is less than 0 (the first index), we need to go to the back of our sprite list.

Then, call the `draw()` function and use the current sprite in the parameter.

### Right

I hope you know directions part 2!

```py
def right():
  global place
  place += 1
```
Create another function at the bottom of the file called `right()`. Add the same code that you added for `left()`, except this time we're incrementing `place` by 1 (becasue we're cycling right).

```py
def right():
  global place
  place += 1
  
  if (place > len(allsprites)-1):
    place = 0
  draw(allsprites[place])
```

If the `place` is greater than the final index, we go back to index 0 (the first index). Then, just like before, we `draw()` the current sprite.

## Final Statements

Almost there. Now, add these statements at the bottom of your program.

```py
draw(allsprites[place])

turtle.onkey(left, "Left")
turtle.onkey(right, "Right")

turtle.listen()
turtle.mainloop()
```

The `draw()` function will draw our current sprite so there is a sprite shown when the program is first run. Then, the turtle listens for the left and right arrow keys to call their respective function.

## Creating the Text File

Finally, let's create the long-awaited `sprite.txt` file and populate it with sprite data.

<img src="https://cloud-avutgg3d9.vercel.app/0screenshot__1434_.png" width="380" alt="sprite.txt file">

- Add some colors! Make sure each color has a comma after it, with no spaces anywhere.
- If you want to create a new sprite then add a dash on its own line.

<img src="https://cloud-ft6bf29c5.vercel.app/0screenshot__1438_.png" width="380" alt="Example sprites">

<details>

<summary>Here's some example sprite data that you can use:</summary>

```
none,none,none,red,red,red,red,red,red,
none,none,red,red,red,red,red,red,red,red,red,red,
none,none,brown,brown,brown,tan,tan,tan,black,tan,none,none,
none,brown,tan,brown,tan,tan,tan,tan,black,tan,tan,tan, tan
none,brown,tan,brown,brown,tan,tan,tan,tan,black,tan,tan,tan,
none,brown,brown,tan,tan,tan,tan,tan,black,black,black,black,
none,none,none,tan,tan,tan,tan,tan,tan,tan,tan,
none,none,red,red,blue,red,red,red,red,
none,red,red,red,blue,red,red,blue,red,red,red,
red,red,red,red,blue,blue,blue,blue,red,red,red,red,
tan,tan,red,blue,yellow,blue,blue,yellow,red,red,tan,tan,
tan,tan,tan,blue,blue,blue,blue,blue,blue,tan,tan,tan,
tan,tan,blue,blue,blue,blue,blue,blue,blue,blue,tan,tan,
none,none,blue,blue,blue,none,none,blue,blue,blue,
none,brown,brown,brown,none,none,none,none,brown,brown,brown,
brown,brown,brown,brown,none,none,none,none,brown,brown,brown,brown,
-
pink,pink,pink,pink,pink,pink,
pink,pink,pink,pink,pink,pink,
pink,pink,pink,pink,pink,pink,
pink,pink,pink,pink,pink,pink,
pink,pink,pink,pink,pink,pink,
pink,pink,pink,pink,pink,pink,
pink,pink,pink,pink,pink,pink,
pink,pink,pink,pink,pink,pink,
pink,pink,pink,pink,pink,pink,
pink,pink,pink,pink,pink,pink,
-
red,red,red,red,red,red,red,red,red,red,red,red,red,red,red,red,
red,red,red,red,red,red,red,red,red,red,red,red,red,red,red,red,
red,red,red,red,red,red,red,red,red,red,red,red,red,red,red,red,
red,red,red,red,red,red,red,red,red,red,red,red,red,red,red,red,
red,red,red,red,red,red,red,red,red,red,red,red,red,red,red,red,
red,red,red,red,red,red,red,red,red,red,red,red,red,red,red,red,
red,red,red,red,red,red,red,red,red,red,red,red,red,red,red,red,
red,red,red,red,red,red,red,red,red,red,red,red,red,red,red,red,
-
black,black,black,
-
```

</details>

## You're done!

<img src="https://thumbs.gfycat.com/RespectfulHonestAxolotl-max-1mb.gif" width="380" alt="Charmander Gif">

Yay, you made it to the end of the workshop! Pretty sweet, I know. Now go and create some epic sprites!

<details>

<summary> Final code:</summary>

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

</details>

## Hacking

Here are some ways you can expand this project:

- [Simpler Inputs for Specific Colors](https://repl.it/@CosmicSnowman/Sprite-Creation-Workshop-Expanded-1#main.py)
- [Random Cycle](https://repl.it/@CosmicSnowman/Sprite-Creation-Workshop-Expanded-2#main.py)
- [Sprite Layering](https://repl.it/@CosmicSnowman/Sprite-Creation-Workshop-Expanded-3#sprite.txt)
