---
name: 'Breakfast_plate'
description: 'Making breakfast with python turtle!'
author: 'Sid672'
image: 'https://github.com/Sid672/Breakfast_plate/blob/main/breakfast.PNG'
---
# Breakfast_plate :
![breakfast](https://github.com/Sid672/Breakfast_plate/blob/main/breakfast.PNG)

[Link to the demo.](https://repl.it/@Siddharthsing13/testpy#main.py)


# Functions used:

| Method          | Parameter                              | Description                                                                      |
| --------------- | -------------------------------------- | ---------------------------------------------------------------------------------| 
| turtle()        | None                                   | Creates and returns a new turtle object                                          | 
| right()         | value of angle is degree               | Turns the turtle clockwise                                                       | 
| left()          | value of angle is degree               | Turns the turtle counter clockwise                                               |
| forward()       | distance – a number (integer or float) | Moves the turtle forward by the specified amount                                 | 
| pencolor()      | Color name                             | Changes the color of the turtle’s pen                                            | 
| bgcolor()       | Color name                             | Changes the color of the background                                              |
| done()          | None                                   | This function is used to starts event loop – calling Tkinter’s main loop function| 

# Let's start
Create a new Python project on repl.it by visiting https://repl.it/languages/python3

![KRiymXy9LEKXwQMUGv](https://media.giphy.com/media/KRiymXy9LEKXwQMUGv/giphy.gif)


#  Steps to draw breakfast plate:
- Import turtle library to draw shapes, patterns.
```python
import turtle
```
## Set up screen and turtle
Here `s = turtle.Screen()` means (s) variable is my screen name, which gives a white screen. `t = turtle.Turtle()` (t) a variable is my turtle name, which gives a small black triangle.` turtle.done()` is used to maintain the screen (written in the last line of code).
```python
s = turtle.Screen()
t = turtle.Turtle()
turtle.done()
```
![](https://github.com/Sid672/Breakfast_plate/blob/main/bk_1.PNG?raw=true)

##  Set colour of background and pen
To set background colour `turtle.bgcolor("black")` is used, I choose black colour in background.The variable col is a list of different colours `col = ["red","orange","yellow","light green","blue","purple"]` from this list colour of turtle will change. Varible j is used to denote index value of col list, initial j = 0 means col[0] = red color. `pencolor()` is a function used to give color to the turtle `t.pencolor("purple")` , initial pen color of turtle (t) is purple.
```python
#color of background
turtle.bgcolor("black")
#color of pen
col = ["red","orange","yellow","light green","blue","purple"]
j = 0
t.pencolor("purple")
```
![](https://github.com/Sid672/Breakfast_plate/blob/main/bk_2.PNG?raw=true)

## Let's start drawing
Before code, you need to understand the pixel and angle.
- Pixel is the smallest measurable unit on screen. 
- Angle used in turtle is in degrees.

- Nested loop means loop inside loop.
`example - 
Outer loop:
   Inner loop:
     #body
`

Variable `n = 36` is used to repeat the pattern ![](https://github.com/Sid672/Breakfast_plate/raw/main/firstcircle.PNG) 36 times. `t.right(270)` here angle of turtle changes to 270 degrees at this position turtle will be facing towards upward. Line `t.forward(25)` moves the turtle 25 pixels forward in an upward direction.

- `Note: Before drawing anything on python turtle you should draw it on paper.`
![](https://media.giphy.com/media/hmRzYbArCq1i6rFfmo/giphy.gif)

Let's understand for loop, it will repeat 36 times because n = 36, next for loop will repeat `int((3 * n) / 4) = 21 times`.
Then `t.forward(0.8)`means turtle will move 0.8 pixel , `t.left(360/ n)` turn left 10 degrees because `360/ n = 10 degrees` and turtle move forward 25 pixels.

```python
n = 36                                          
t.right(270)
t.forward(25)
for i in range(n):
   #nested loop
   for i in range(int((3 * n) / 4)):
       t.forward(0.8)
       t.left(360/ n)
   t.forward(25)
```
![](https://github.com/Sid672/Breakfast_plate/blob/main/bk_3.PNG?raw=true)
## One more nested loop is needed
Since the pattern is not the same as the breakfast plate, so we need another loop, to turn the turtle in a way that it moves in a circular path, not a square path like in the above picture. 

To do this move the turtle in the right direction `t.right(360 / n) = 10 degrees`, with the same forward distance `t.forward(0.8)`.
```python
    for i in range(int((3 * n) / 4)):
        t.forward(0.8)
        t.right(360 / n)
```
![](https://github.com/Sid672/Breakfast_plate/blob/main/bk_5.PNG?raw=true)
![](https://media.giphy.com/media/26uf6qaxqHpYXgjWU/giphy.gif)
# Idea
![yPTTOQMtuzthM5xKX](https://media.giphy.com/media/oyPTTOQMtuzthM5xKX/giphy.gif)

We should move turtle up! Then it will move in a circular path.
```python 
t.left(10)
t.forward(25)
```
![](https://github.com/Sid672/Breakfast_plate/blob/main/bk_6.PNG?raw=true)

##  Change color of pen
Change of colour is very important for this j variable is used as an index of col = ["red","orange","yellow","light green","blue","purple"]. Since, j cannot be greater than 6 because list contains 7 elements only. So, by using `if (j >= 6 ): j = 0` condtion j will again equal to 0. Colour changes from red, orange, yellow, light green, blue, purple like in rainbow.
```python
    t.pencolor(col[j])
    j = j + 1
    if (j >= 6 ):
        j = 0

turtle.done()
```

![colors](https://github.com/Sid672/Breakfast_plate/blob/main/colors.PNG)
# Your code looks like:
After completing all steps code looks like this.
```python

import turtle
s = turtle.Screen()
t = turtle.Turtle()
#color of background
turtle.bgcolor("black")
#color of pen
col = ["red","orange","yellow","light green","blue","purple"]
j = 0
t.pencolor("purple")
n = 36
t.right(270)
t.forward(25)
for i in range(n):
   for i in range(int((3 * n) / 4)):
       t.forward(0.8)
       t.left(360/ n)
   t.forward(25)
   for i in range(int((3 * n) / 4)):
        t.forward(0.8)
        t.right(360/ n)
   t.left(10)
   t.forward(25)
   t.pencolor(col[j])
   j = j + 1
   if (j >= 6 ):
      j = 0

turtle.done()

```
# Run code:
Click the green "Run" button on the top of the repl.it windows. A screen will be shown on the right side displaying the turtle graphics that you coded. If you face any errors, try commenting out each portion of the code and making only a certain section work. This generally helps to figure out the error.
Run your code and watch the turtle how it moves...
![breakfast2](https://github.com/Sid672/Breakfast_plate/blob/main/breakfast2.PNG)

Your output will be:
![breakfast1](https://github.com/Sid672/Breakfast_plate/blob/main/breakfast1.PNG)


# Enjoy breakfast
## Greatwork you made it!
![nJ2PObJA3EVgc](https://media.giphy.com/media/nJ2PObJA3EVgc/giphy.gif)

# Links of all demos
### Complete breakfast_plate
[Link to the demo and code.](https://repl.it/@Siddharthsing13/testpy#main.py)
### simple pattern
[Link2 to the demo and code.](https://repl.it/@Siddharthsing13/demobreakfast2#main.py)
### stair pattern
[Link3 to the demo and code.](https://repl.it/@Siddharthsing13/demobreakfast3#main.py)


# Happy Hacking:
We all can make beautiful projects with python turtle, but first, try a rough figure with pen and paper because these are the basics of drawing anything. Keep enjoy hacking!

# Some cool examples are:
These projects are hand-made, the turtle screen act's like a canvas that can be used to draw diagrams, patterns like these pictures.

![1536865435321_bd598138637586247b2433a96371534d](https://storage.googleapis.com/replit/images/1536865435321_bd598138637586247b2433a96371534d.pn)
![1536865448102_a542f76811f1df3d35a97ffd613c3e39](https://storage.googleapis.com/replit/images/1536865448102_a542f76811f1df3d35a97ffd613c3e39.pn)

To draw both diagrams use this code.

[Link to the code](https://repl.it/@Siddharthsing13/Coolproject1#main.py)
