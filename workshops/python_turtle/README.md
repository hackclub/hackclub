---
name: 'Python Turtle'
description: 'Draw shapes & patterns using Python’s Turtle library'
author: '@YashKalbande'
img: 'https://cloud-qtdzdcl76.vercel.app/2020-10-22_arzjn43gad592m4py1nqcngtnmjkqzma.jpeg'
---

# Exciting Visuals with Python Turtle

## Introduction

Welcome! Using Python, with the help of the turtle library, we can create stunning visuals. First, I'm going to present to you the basics of the Python turtle library. Then I’ll share with you how to draw shapes like triangles, stars, and hexagons. Finally, you’ll create your own graphics.

![Benzen ring with Turtle](https://cloud-36kk4uh0h.vercel.app/turtle_benzene_ring.gif)

## Hello, Turtle!

I’m sure everybody has used a drawing board as a kid. Now, imagine, instead of manually drawing on the board, you could command the system to draw for you. Isn’t that cool? Python’s turtle module lets you do that. It basically lets you create a drawing board and command a turtle to draw for you. A turtle is a tiny robot that draws on your screen, we can tell it to move around using Python commands.

Start new coding environment of Python 3 on [repl.it](https://repl.it/languages/python3) for turtle graphics.

Then enter the following code in the newly-created `main.py` file:

```python 
from turtle import *
forward(100)
```
Click on _Run Button_. Observe how the turtle moved forward 100 pixels? The turtle has a pen attached, and draws lines as it moves around the screen.

Now, lets make the turtle move around canvas! Try using backward(distance) as well as turning the turtle by using right(angle) and left(angle). Eg backward(20) tells the turtle to move backwards 20 pixels, and right(90) tells the turtle to turn right 90 degrees. You can give more than one instruction at a time, they will be executed in order.

```python
from turtle import *

speed(11)
shape("turtle")

forward(100)
right(120)
forward(100)
left(90)
backward(100)
left(90)
forward(50)
```

Here's how that code works:

- `from turtle import *` tells Python we want to use the `turtle` library, a collection of code we can use to draw on the screen. Using a library means we can save time.
- `speed()` sets the speed of the turtle, it take a value between 1 and 11 (11 is the fastest, 1 is the slowest).
- `shape()` we are using the "turtle" shape, but it can also take the values "arrow", "cicle", "square", "triangle" or "classic".

```python
from turtle import *

forward(100)
left(90)
forward(100)
left(90)
forward(100)
left(90)
forward(100)
```

Click on Run Button. The output of this program will look like this:

![Square](https://cloud-36kk4uh0h.vercel.app/square.gif)

The instructions in your program tell the "turtle" how to move. The turtle draws a line behind it as it moves. This program draws a square. The steps given to the program are:

1. Move forward 100 steps. (In the beginning, the turtle is facing to the right.)
2. Turn 90 degrees to the left.
3. Move forward 100 steps.
4. Turn 90 degrees to the left.
5. Move forward 100 steps.
6. Turn 90 degrees to the left.
7. Move forward 100 steps. The turtle has ended up where it started.

With these seven steps, the turtle draws a square. The `from turtle import *` is an instruction needed at the beginning of all of your turtle programs. It imports the turtle module so you can do the turtle instructions.

There are many instructions like left() and forward(). These instructions are called functions. This tutorial explains many of the functions in the turtle module. When you learn more about these functions, you will be able to draw many different shapes and beautiful pictures!

There are many instructions like left() and forward(). These instructions are called functions. Commonly used turtle methods are:

| Method          | Parameter                              | Description                                                                 | Example             |
| --------------- | -------------------------------------- | --------------------------------------------------------------------------- | ------------------- |
| turtle()        | None                                   | Creates and returns a new turtle object                                     |
| shape()         | shape name                             | Should be ‘arrow’, ‘classic’, ‘turtle’ or ‘circle’                          | shape(turtle)       |
| turtle.speed()  | speed – an integer in the range 0..10  | set the speed of turtule                                                    | turtle.speed(9)     |
| penup()         | None                                   | Picks up the turtle's Pen                                                   |
| right()         | value of angle is degree               | Turns the turtle clockwise                                                  | turtle.right(45)    |
| left()          | value of angle is degree               | Turns the turtle counter clockwise                                          | turtle.left(45)     |
| forward()       | distance – a number (integer or float) | Moves the turtle forward by the specified amount                            | turtle.forward(25)  |
| backward()      | distance – a number (integer or float) | Move the turtle backward by distance                                        | turtle.backward(30) |
| turtle.circle() | radius, extent=None, steps=None        | radius – a number ,extent – a number (or None),steps – an integer (or None) | turtle.circle(50)   |
| color()         | Color name                             | Changes the color of the turtle’s pen                                       | color("red")        |
| fillcolor()     | Color name                             | Changes the color of the turtle will use to fill a polygon                  | fillcolor("yellow") |
| goto()          | x, y                                   | Move the turtle to position x,y                                             | goto(2,5)           |

## Turtle Motion

By calling these functions, the turtle can be made to move around the screen. Imagine the turtle holding a pen down on the ground and drawing a line as it moves around.

The turtle's position is two numbers: the X coordinate and Y coordinate.

### forward(_distance_)

The forward() function moves the turtle _distance_ several steps in the current direction. If the pen is down (see pendown() and penup()) a line will be drawn as the turtle moves forward. If _distance_ is a negative number, the turtle will move backward.

### backward(_distance_)

The backward() function moves the turtle _distance_ several steps in **opposite direction** the current direction. If the pen is down (see pendown() and penup()) a line will be drawn as the turtle moves backward. If _distance_ is a negative number, the turtle will move forward.

### right(_angle_)

The right() function will change the current direction clockwise by _angle_ degrees. If you imagine being above the turtle looking down, the turtle turning right looks like it is turning clockwise. The turtle will not move; it will only change the direction it is facing.

This example moves the turtle forward, then turns right by 90 degrees, then moves forward again:

This example moves the turtle forward, then turns left by 90 degrees, then moves forward again:

```python
from turtle import *
forward(100)
right(90)
forward(100)
```

### left(_angle_)

The left() function will change the current direction counter-clockwise or anti-clockwise by _angle_ degrees. If you imagine being above the turtle looking down, the turtle turning left looks like it is turning counter-clockwise or anti-clockwise. The turtle will not move; it will only change the direction it is facing.

This example moves the turtle forward, then turns left by 90 degrees, then moves forward again:

```python
from turtle import *
forward(100)
left(90)
forward(100)
```

### goto(_x_, _y_)

The goto() function will immediately move the turtle to the given _x_ and _y_ coordinates. If the pen is down (see pendown() and penup()) a line will be drawn from the previous coordinates to the new coordinates.

This example moves to several x and y coordinates while drawing a line behind it:

```python
from turtle import *

goto(50, 50)
goto(-50, 50)
goto(100, -50)
goto(-50, -50)
```

### setx(_x_)

The goto() function will immediately move the turtle to the given _x_ coordinate. The turtle's y coordinate will stay the same. If the pen is down (see pendown() and penup()) a line will be drawn from the previous coordinates to the new coordinates.

### sety(_y_)

The goto() function will immediately move the turtle to the given *y *coordinate. The turtle's x coordinate will stay the same. If the pen is down (see pendown() and penup()) a line will be drawn from the previous coordinates to the new coordinates.

### setheading(_heading_)

The setheading() function will change the current direction to the _heading_ angle. If you imagine being above the turtle looking down, the turtle turning left looks like it is turning counter-clockwise or anti-clockwise. The turtle will not move; it will only change the heading it is facing.

```python
from turtle import *

for angle in range(0, 360, 15):
    setheading(angle)
    forward(100)
    write(str(angle) + '°')
    backward(100)
```

### undo()

The undo() function will undo the turtle's last action. It will be as though the last action was never made. For example, if the last action was a call to the forward(100) function, calling undo will move the turtle backward 100 steps and erase any line that was drawn. The undo() function can be called many times to erase more and more of the turtle

```python
from turtle import *

for i in range(10):
    forward(100)
    left(90)
    forward(10)
    left(90)
    forward(100)
    right(90)
    forward(10)
    right(90)

for i in range(30):
    undo()
```

### home()

The home() function will move the turtle to its original position at the coordinates (0, 0) and set the direction to 0 degrees. Calling home() is the same as calling goto(0, 0) and setheading(0). If the pen is down (see pendown() and penup()) a line will be drawn as the turtle moves back home.

```python
from turtle import *

forward(100)
right(90)
forward(100)
home()
```

You can read more about `forward` [on the Python docs](https://docs.python.org/3/library/turtle.html#turtle.forward)

## Some basic shapes with turtle

**Triangle**<br />

```python
import turtle
pencil = turtle.Turtle()
pencil.forward(100)
pencil.left(120)
pencil.forward(100)
pencil.left(120)
pencil.forward(100)
turtle.done()
```

![Triangle](https://cloud-36kk4uh0h.vercel.app/triangle.gif)

**Star**<br />

```python
import turtle

star = turtle.Turtle()

for i in range(50):
    star.forward(50)
    star.right(144)

turtle.done()
```

![Star](https://cloud-36kk4uh0h.vercel.app/star.gif)

**Hexagon**<br />

```python
import turtle
polygon = turtle.Turtle()

num_sides = 6
side_length = 70
angle = 360.0 / num_sides

for i in range(num_sides):
    polygon.forward(side_length)
    polygon.right(angle)

turtle.done()
```

![Hexagon](https://cloud-36kk4uh0h.vercel.app/hexagon.gif)

## Rainbow Benzene

So now you have gained basic knowledge of python turtle library. Now let's build the exciting rainbow benzene with a turtle.

```python
import turtle
colors = ['red', 'purple', 'blue', 'green', 'orange', 'yellow']
t = turtle.Pen()
turtle.bgcolor('black')
for x in range(360):
    t.pencolor(colors[x%6])
    t.width(x/100 + 1)
    t.forward(x)
    t.left(59)
```

![Turtle Benzen ring](https://cloud-36kk4uh0h.vercel.app/turtle_benzene_ring.gif)

## Drawing

### pendown()

The pendown() function will cause the turtle to draw as it moves around. The line it draws can be set with the pencolor() and pensize() functions.

### penup()

The penup() function will cause the turtle to draw as it moves around. The line it draws can be set with the pencolor() and pensize() functions.

### pensize(_size_)

The pensize() function sets the width of the line that the turtle draws as it moves.

### pencolor(), pencolor(_color_), pencolor((_red_, _green_, _blue_)), pencolor(_red_, _green_, _blue_)

The pencolor() function sets the color of the line that the turtle draws. The pencolor() function can be passed a string of the color, such as 'red' or 'black'. Or, the pencolor() function can be passed an "RGB color tuple" (see the [Color](#color) section).

```python
from turtle import *

pensize(20)
pencolor('red')
forward(50)
pencolor(0, 1.0, 0)
forward(50)
pencolor((0, 0.5, 0.5))
forward(50)

pensize(10)
goto(-400, 50)

for red in range(4):
    for green in range(4):
        for blue in range(4):
            pencolor(red / 4.0, green / 4.0, blue / 4.0)
            forward(10)
```

### clear()

The clear() function will erase all the line drawings on the screen. This function does not move the turtle.

### reset()

The reset() function will erase all the line drawings on the screen and return the turtle to the (0, 0) coordinate and facing 0 degrees. This function does the same thing as calling the clear() and home() function.

## Color

Red, green, and blue are the three primary colors of light.

The float value 0.0 represents no brightness of that color. The float value 1.0 represents the full brightness of that color. So the color red is represented by the RGB color tuple (1.0, 0, 0). The color purple is half-bright red and half-bright blue, so it is represented by the RGB color tuple (0.5, 0.0, 0.5). Full brightness of red and blue makes pink: (1.0, 0.0, 1.0).

## Filling in Shapes

The turtle can outline shape and then fill it in with color using the fill functions. The filling process starts when the begin_color() function is called. The turtle can move around as normal. When the end_fill() function is called, the shape the turtle was drawing will be filled with the fill color. The fill color is separate from the pen color.

```python
from turtle import *

fillcolor('purple')
pensize(10)
pencolor('black')
forward(100)

begin_fill()
forward(100)
left(90)
forward(100)
left(90)
forward(100)
left(90)
forward(100)
left(90)
end_fill()
```

### fillcolor(), fillcolor(_color_), fillcolor((_red_, _green_, _blue_)), fillcolor(_red_, _green_, _blue_)

The fillcolor() function sets the color of the filled-in shape when end_fill() is called. The fillcolor() function can be passed a string of the color, such as 'red' or 'black'. Or, the fillcolor() function can be passed an "RGB color tuple" (see the [Color](#color) section).

### begin_fill()

The begin_fill() starts recording the moves that will be the outline of the filled-in shape. The filled-in shape will not be drawn until end_fill() is called.

### end_fill()

The end_fill() function will stop recording the moves for the filled-in shape and draw the shape.

[Here’s more information on color in turtle.](https://docs.python.org/3/library/turtle.html#turtle.color)

## Hacking

There are endless ways to make this turtle completely your own! Go back through your code and look for anything that can be played with. Try changing the default values of your forward, angle, color, size, etc.

Here are some examples to give you some ideas:

- [Square spiral Demo and Code](https://repl.it/@YashKalbande/squarespiral#main.py)
- [Geometrical Wheel Shape Demo and Code](https://repl.it/@YashKalbande/geometrical#main.py)
- [Colorful Spiral Demo and Code](https://repl.it/@YashKalbande/spiral#main.py)

![Turtle Spiral](https://cloud-36kk4uh0h.vercel.app/spiral.gif)
