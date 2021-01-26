---
name: 'Sprite Creator'
description: 'Make your own sprites with Python!'
author: '@JakeGerber'
img: 'https://cloud-j2h9qribj.vercel.app/0screenshot__1437_.png'
---

# Create a Sprite Creator Program!
Video game sprites are rad, so let's create our own. In this workshop, we will be creating a sprite creation program where you can create and cycle through your own custom sprites.

<img src="https://cloud-j2h9qribj.vercel.app/0screenshot__1437_.png" width="580" alt="Sprite Example">

[Check out what we're going to make!](https://repl.it/@CosmicSnowman/Sprite-Creation-Workshop#main.py)

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
unchangedarr = []
myarr = []
invert = False
```

There is an array for all the sprites, the index place, and two other empty arrays. Also, there is a boolean named `invert` that will be used to invert the colors. This will make more sense later.

## Drawing a Pixel

Let's create a function that goes to a specified location and draws a single pixel. We're definitely going to be calling this function a lot, unless you draw like two pixels. Art is art I guess. :P

Right under the code you just wrote, add a function called `drawSquare()`, which passes in the x and y coordinates, the size of the pixel, and the color. Inside, move the turtle up and go to the passed-in location. Also, make the invert boolean from earlier global so we can modify and use it within the function.

```py
def drawSquare(x, y, side, color):
  global invert
  turtle.up()
  turtle.goto(x, y)
```

Next, add this if statement:

```py
def drawSquare(x, y, side, color):
  global invert
  turtle.up()
  turtle.goto(x, y)
  if (not color == "none"):
```

We want to draw the square if they input a color. If "none" is inputted, then we don't want to draw anything.

```py
def drawSquare(x, y, side, color):
  global invert
  turtle.up()
  turtle.goto(x, y)
  if (not color == "none"):
    if (color[0] == "#"):
      if (invert):
```

We want if statements to see if the color has a # symbol in front of it, and we want to check if the invert boolean is true.

```py
def drawSquare(x, y, side, color):
  global invert
  turtle.up()
  turtle.goto(x, y)
  if (not color == "none"):
    if (color[0] == "#"):
      if (invert):
        tempcolR = color[1] + color[2]
        tempcolR = 255 - int(tempcolR, 16)
    else:
      turtle.color(color)
```

This part is going to seem really weird if you've never heard of [color hex codes](https://www.techopedia.com/definition/29788/color-hex-code). You can represent colors in a form named hexadecimal, rather than our regular decimal system. In these two lines, we are getting the first two places after the `#` symbol, which represents our red in RGB. We are then converting them to decimal and subtracting from 255 because we are inverting the color. Also, in the else statement set the color to the color string. This means the user most likely just entered the color word, in which case we cannot invert it.

<img src="https://cloud-aevez7g72.vercel.app/0screenshot__1470_.png" width="380" alt="Color picker">

If you search "color picker" on Google, you'll see a slider that can be moved around to pick a color. The hex code at the bottom is the same that you will use when creating your sprites.

```py
if (invert):
  tempcolR = color[1] + color[2]
  tempcolR = 255 - int(tempcolR, 16)
  tempcolG = color[3] + color[4]
  tempcolG = 255 - int(tempcolG, 16)
  tempcolB = color[5] + color[6]
  tempcolB = 255 - int(tempcolB, 16)
  turtle.color(tempcolR, tempcolG, tempcolB)
```
Do the same thing for the other colors in RGB but change the index values. Afterwards, set the turtle's color using the RGB values.


```py
else:
  tempcolR = color[1] + color[2]
  tempcolR = int(tempcolR, 16)
  tempcolG = color[3] + color[4]
  tempcolG = int(tempcolG, 16)
  tempcolB = color[5] + color[6]
  tempcolB = int(tempcolB, 16)
  turtle.color(tempcolR, tempcolG, tempcolB)
```
In the else statement, once again get the index values from the color string and convert them to integers. But, since we are NOT inverting the colors, do NOT subtract them from 255.


```py
def drawSquare(x, y, side, color):
  if (not color == "none"):
    #Everything we already wrote would be here.
    turtle.begin_fill()

    turtle.end_fill()
```

We need to wrap everything we draw inside `begin_fill()` and `end_fill()` functions in order to fill in the square. Add these two functions. Leave a space in between them because we're going to add some drawing code in a second.

```py
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

changeVal = 0

turtle.colormode(255)

while(True):
  tempLine = f.readline()

f.close()
```

Create a changeVal integer and set it to 0, along with setting the turtle colormode to 255. This while loop loops through every line in the `sprite.txt` file and assigns each one to a variable called `tempLine`.

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
  #Previous code would be here.

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
def draw(currentarrA, orientation):
  global invert
```
Create a draw function that takes in an array and orientation. Also make the invert boolean global so we can access and modify it.

```py
def draw(currentarrA, orientation):
  global invert
  currentarr = currentarrA.copy()
  turtle.clear()
  x = -60
  y = 60
  originalX = -60
  side = 10
```
Copy ober the array to another variable, clear the screen, and define some variables. These define the starting x and y location, the original x location, and the side length of every pixel square.


```py
def draw(currentarrA, orientation):
  #Everything we just wrote would be here.
  turtle.tracer(0, 0)
  turtle.update()
```
We want everything drawn to be between these tracer and update functions. This prevent the screen from updating every time something is drawn, and instead draws everything when all the draw statements are entered. Without it, our program runs VERY slow.

## Orientations
We will have four orientations for the sprite: normal (0), flipped vertically (1), flipped horizontally and vertically (2), and flipped horizontally (3).

```py
def draw(currentarrA, orientation):
  #Everything we just wrote would be here.
  if (orientation == 1):
    temparr = currentarr.copy()
    currentarr.clear()
    for i in range(len(temparr)):
      currentarr.append(temparr[len(temparr) - i - 1])
```
If the orientation is 1 (flipped vertically), then we want to change our array to draw it that way. In this case, everything at the bottom comes to the top to be drawn first, which is what we are doing in our for loop.

```py
def draw(currentarrA, orientation):
  #Everything we just wrote would be here.
  if (orientation == 1):
    temparr = currentarr.copy()
    currentarr.clear()
    for i in range(len(temparr)):
      currentarr.append(temparr[len(temparr) - i - 1])
```

```py
  if (orientation == 3):
    temparr = currentarr.copy()
    currentarr.clear()
```
We're actually skipping to orientation 3 (flipped horizontally) because oritentation 2 combines both orientation 1 and 3. We are copying over currentarr and then clearing it.

```py
  if (orientation == 3):
    temparr = currentarr.copy()
    currentarr.clear()
    for i in range(len(temparr)):
      linearr = []
      for p in range(len(temparr[i])):
        linearr.append(temparr[i][len(temparr[i])-p-1])
      currentarr.append(linearr)
```
For each array in the array, we want to swap the back values to the front. We are doing this with each line and appending each line to the currentarr array.

```py
  if (orientation == 2):
    temparr = currentarr.copy()
    currentarr.clear()
    for i in range(len(temparr)):
      currentarr.append(temparr[len(temparr) - i - 1])
    temparr = currentarr.copy()
    currentarr.clear()
    for i in range(len(temparr)):
      linearr = []
      for p in range(len(temparr[i])):
        linearr.append(temparr[i][len(temparr[i])-p-1])
      currentarr.append(linearr)
```
Add this orientation between 1 and 3. It is the SAME code of orientation 1 and 3. We start with orientation 1, and then we do orientation 3, all within this if statement.

```py
  for arr in currentarr:
    for val in arr:
      drawSquare(x, y, side, val)
      x+=side
    y-=side
    x = originalX

  turtle.update()
```
Finally, we go through the 2D array and draw rach square pixel, adjusting the x and y after every one. The y always changes the same amount, but when the x gets to the end of the row, it has to go to the original x to start the next row.

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
  draw(allsprites[place], 0)
```

If the `place` is less than 0 (the first index), we need to go to the back of our sprite list. Then, call the `draw()` function and use the current sprite and orientation 0 (defualt orientation) in the parameter.

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
  draw(allsprites[place], 0)
```

If the `place` is greater than the final index, we go back to index 0 (the first index). Then, just like before, we `draw()` the current sprite with orientation 0.

### Up
Here's where the orientation will be changed!

```py
def up():
  global place
  global changeVal
  changeVal+=1
  if (changeVal > 3):
    changeVal = 0
  draw(allsprites[place], changeVal)
```
We are making the place and changeVal variables global so we can use them, and then incrementing changeVal. If changeVal is greater than 3 (the max oritentation number), then make changeVal 0. Finally, call the draw function.

### Down
Here's where the invert setting will be changed!

```py
def down():
  global invert
  global place
  if (invert):
    invert = False
  else:
    invert = True
  draw(allsprites[place], changeVal)
```
We are making invert and place global so we can access them. If the invert is true, we want to make it false, and vise versa. After, we want to call the draw function.

## Final Statements

Almost there. Now, add these statements at the bottom of your program.

```py
draw(allsprites[place], 0)

turtle.onkey(left, "Left")
turtle.onkey(right, "Right")
turtle.onkey(up, "Up")
turtle.onkey(down, "Down")

turtle.listen()
turtle.mainloop()
```

The `draw()` function will draw our current sprite so there is a sprite shown when the program is first run. Then, the turtle listens for the left and right arrow keys to switch between sprites, the up arrow key to switch orientation, and the down arrow key to turn inverted colors on or off.

## Creating the Text File

Finally, let's create the long-awaited `sprite.txt` file and populate it with sprite data.

<img src="https://cloud-prkpho0t8.vercel.app/0screenshot__1471_.png" width="380" alt="sprite.txt file">

- Add some color hex codes! Make sure each color has a comma after it, with no spaces anywhere.
- If you want to create a new sprite then add a dash on its own line.

<img src="https://cloud-ft6bf29c5.vercel.app/0screenshot__1438_.png" width="380" alt="Example sprites">

<details>

<summary>Here's some example sprite data that you can use:</summary>

```
none,none,none,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,none,none,none,none,none,
none,none,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,none,none,
none,none,#a52a2a,#a52a2a,#a52a2a,#D2B48C,#D2B48C,#D2B48C,#000000,#D2B48C,none,none,none,none,
none,#a52a2a,#D2B48C,#a52a2a,#D2B48C,#D2B48C,#D2B48C,#D2B48C,#000000,#D2B48C,#D2B48C,#D2B48C,none,none,
none,#a52a2a,#D2B48C,#a52a2a,#a52a2a,#D2B48C,#D2B48C,#D2B48C,#D2B48C,#000000,#D2B48C,#D2B48C,#D2B48C,none,
none,#a52a2a,#a52a2a,#D2B48C,#D2B48C,#D2B48C,#D2B48C,#D2B48C,#000000,#000000,#000000,#000000,none,none,
none,none,none,#D2B48C,#D2B48C,#D2B48C,#D2B48C,#D2B48C,#D2B48C,#D2B48C,#D2B48C,none,none,none,
none,none,#ff0000,#ff0000,#0000ff,#ff0000,#ff0000,#ff0000,#ff0000,none,none,none,none,none,
none,#ff0000,#ff0000,#ff0000,#0000ff,#ff0000,#ff0000,#0000ff,#ff0000,#ff0000,#ff0000,none,none,none,
#ff0000,#ff0000,#ff0000,#ff0000,#0000ff,#0000ff,#0000ff,#0000ff,#ff0000,#ff0000,#ff0000,#ff0000,none,none,
#D2B48C,#D2B48C,#ff0000,#0000ff,yellow,#0000ff,#0000ff,yellow,#ff0000,#ff0000,#D2B48C,#D2B48C,none,none,
#D2B48C,#D2B48C,#D2B48C,#0000ff,#0000ff,#0000ff,#0000ff,#0000ff,#0000ff,#D2B48C,#D2B48C,#D2B48C,none,none,
#D2B48C,#D2B48C,#0000ff,#0000ff,#0000ff,#0000ff,#0000ff,#0000ff,#0000ff,#0000ff,#D2B48C,#D2B48C,none,none,
none,none,#0000ff,#0000ff,#0000ff,none,none,#0000ff,#0000ff,#0000ff,none,none,none,none,
none,#a52a2a,#a52a2a,#a52a2a,none,none,none,none,#a52a2a,#a52a2a,#a52a2a,none,none,none,
#a52a2a,#a52a2a,#a52a2a,#a52a2a,none,none,none,none,#a52a2a,#a52a2a,#a52a2a,#a52a2a,none,none,
-
#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,
#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,
#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,
#FFB6C1,#FFB6C1,#FFB6C1,#008000,#008000,#FFB6C1,
#FFB6C1,#FFB6C1,#FFB6C1,#008000,#008000,#FFB6C1,
#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,
#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,
#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,
#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,
#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,#FFB6C1,
-
#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,
#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,
#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,
#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,
#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,
#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,
#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,
#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,#ff0000,
-
#000000,#000000,#000000,none,none,none,#000000,#000000,#000000,
none,none,none,none,none,none,none,none,none,
none,none,none,#000000,#000000,#000000,none,none,none,
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
