---
name: 'Breakfast Plate'
description: 'Making breakfast with python turtle!'
author: 'Sid672'
image: 'https://github.com/Sid672/Breakfast_plate/blob/main/breakfast.PNG'
---
# Breakfast Plate
Every day we all eat yummy food in the morning, and if it's too special, we post some stories on Insta that make us feel special.
Beautiful plate make food looks more yummy! Let's make your own plate design so that you have your own dish for breakfast, lunch, and dinner.


![breakfast](https://github.com/Sid672/Breakfast_plate/blob/main/breakfast.PNG)

[Demo Link](https://repl.it/@Siddharthsing13/breakfast#main.py)

# Let's start
Let me introduce " repl. it " to you, its an online platform that runs code in all languages. It's a friendly platform to test and show code.  
Create a new Python project on [repl.it](https://repl.it/languages/python3)

![KRiymXy9LEKXwQMUGv](https://media.giphy.com/media/KRiymXy9LEKXwQMUGv/giphy.gif)

# Functions
These are some functions used in the program. So at least once, go through it. For a better understanding of code, you will need these keywords.


| Method          | Parameter                              | Description                                                                      |
| --------------- | -------------------------------------- | ---------------------------------------------------------------------------------| 
| turtle()        | None                                   | Creates and returns a new turtle object                                          | 
| right()         | value of angle is degree               | Turns the turtle clockwise                                                       | 
| left()          | value of angle is degree               | Turns the turtle counter clockwise                                               |
| forward()       | distance – a number (integer or float) | Moves the turtle forward by the specified amount                                 | 
| pencolor()      | Color name                             | Changes the color of the turtle’s pen                                            | 
| bgcolor()       | Color name                             | Changes the color of the background                                              |
| done()          | None                                   | This function is used to starts event loop – calling Tkinter’s main loop function| 

Good, now you know keywords!


#  Steps to draw:
First, we need a python turtle library so, import turtle library to draw shapes and patterns.

```python
import turtle
```

# Set up screen and turtle
A screen is required to draw, the screen is like your canvas, and the turtle is your pen.

Here `s = turtle.Screen()` means `s` variable is screen name, which gives a white screen. `t = turtle.Turtle()`  `t` is  turtle name, which gives a small black triangle.` turtle.done()` is used to maintain the screen (written in the last line of code).

```python
s = turtle.Screen()
t = turtle.Turtle()
turtle.done()
```

![](https://github.com/Sid672/Breakfast_plate/blob/main/bk_1.PNG?raw=true)

#  Set background-color
To set background colour `turtle.bgcolor("black")` is used, you can choose black colour in background.The col is a list of different colours `col = ["red","orange","yellow","light green","blue","purple"]` from the list colour of turtle will be changed. j is used to denote index value of col list, initial j = 0 means col[0] = red color. `pencolor()` is used to give color to the turtle `t.pencolor("purple")` , initial pen color of turtle (t) is purple.

```python
#color of background
turtle.bgcolor("black")
#color of pen
col = ["red","orange","yellow","light green","blue","purple"]
j = 0
t.pencolor("purple")
```

![](https://github.com/Sid672/Breakfast_plate/blob/main/bk_2.PNG?raw=true)

## Let's draw
Before code, you need to understand the pixel and angle.
- Pixel is the smallest measurable unit on screen. 
- Angle is used to change the angle of a turtle.

- Nested loop
```example - 
Outer loop:
   Inner loop:
     #body
```
Variable `n = 36` is used to repeat the pattern ![](https://github.com/Sid672/Breakfast_plate/raw/main/firstcircle.PNG) 36 times. `t.right(270)` here angle of turtle changes to 270 degrees at this position turtle will be facing up. Line `t.forward(25)` moves the turtle 25 pixels forward in an upward direction.

```python
n = 36                                          
t.right(270)
t.forward(25)
```
![](https://github.com/Sid672/Breakfast_plate/blob/main/bk_7.PNG?raw=true)


- `Tip: Before drawing anything on python turtle you should draw it on paper.`

![](https://media.giphy.com/media/hmRzYbArCq1i6rFfmo/giphy.gif)

These are my rough diagram to draw a breakfast Plate. Don't worry if you are not good at drawing; it's ok. The rough figure is basically used for calculations of length (in pixels) and angle (in degrees).

![](https://github.com/Sid672/Breakfast_plate/blob/main/bk_9.PNG?raw=true)
![](https://github.com/Sid672/Breakfast_plate/blob/main/bk_10.PNG?raw=true)

Let's understand for loop, it will repeat 36 times because n = 36, next for loop repeat `int((3 * n) / 4) = 21 times`.
Then `t.forward(0.8)`means turtle will move 0.8 pixel , `t.left(360/ n)` turn left 10 degrees because `360/ n = 10 degrees` and turtle move forward 25 pixels.

```Python
for i in range(n):
   #nested loop
   for i in range(int((3 * n) / 4)):
       t.forward(0.8)
       t.left(360/ n)
   t.forward(25)
```
![](https://github.com/Sid672/Breakfast_plate/blob/main/bk_3.PNG?raw=true)
## Second Loop
Since the pattern is not the same as the breakfast plate, we need another loop to turn the turtle to move in a circular path, not a  path like the above picture. 

To do this move the turtle in the right direction `t.right(360 / n) = 10 degrees`, with the same forward distance `t.forward(0.8)`.

```python
    for i in range(int((3 * n) / 4)):
        t.forward(0.8)
        t.right(360 / n)
```
![](https://github.com/Sid672/Breakfast_plate/blob/main/bk_5.PNG?raw=true)

The turtle starts drawing a breakfast Plate pattern but in a straight path, not in a circular one. To move in a circle, we need `t.left(10)` and `t.forward(25)`.

```python 
t.left(10)
t.forward(25)
```
![](https://github.com/Sid672/Breakfast_plate/blob/main/bk_6.PNG?raw=true)

##  Change pen color
Change of colour is very important for this `j` is used as an index of col = ["red","orange","yellow","light green","blue","purple"]. Since, `j` cannot be greater than 6 because list contains 7 elements only. So, by using `if (j >= 6 ): j = 0` condtion `j` will equal to 0. Colour changes from red, orange, yellow, light green, blue, purple like in rainbow.

```python
    t.pencolor(col[j])
    j = j + 1
    if (j >= 6 ):
        j = 0

turtle.done()
```

![](https://github.com/Sid672/Breakfast_plate/blob/main/bk_8.PNG?raw=true)
# Your code looks like this:
After completing all steps, the code looks like this.
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
Click the green "Run" button on the top of the ``repl. it`` windows. A screen will be shown on the right side, displaying the turtle graphics you coded. If you face any errors, try commenting out each portion of the code and making only a certain section work. It generally helps to figure out the error.

Run your code and watch the turtle how it moves

![breakfast2](https://github.com/Sid672/Breakfast_plate/blob/main/breakfast2.PNG)

Your output will be:
![breakfast1](https://github.com/Sid672/Breakfast_plate/blob/main/breakfast1.PNG)


# Enjoy breakfast
## Great work, you made it!
![nJ2PObJA3EVgc](https://media.giphy.com/media/nJ2PObJA3EVgc/giphy.gif)

# Links of all demos
### Complete Breakfast plate
[Code Link](https://repl.it/@Siddharthsing13/breakfast#main.py)
### Simple pattern
[Code Link](https://repl.it/@Siddharthsing13/demobreakfast2#main.py)
### Stair pattern
[Code Link](https://repl.it/@Siddharthsing13/demobreakfast3#main.py)

# Cool examples:
These are some enjoyable projects, where the turtle screen act's like a canvas and can be used to draw diagrams and patterns like these pictures.

![1536865435321_bd598138637586247b2433a96371534d](https://storage.googleapis.com/replit/images/1536865435321_bd598138637586247b2433a96371534d.pn)
![1536865448102_a542f76811f1df3d35a97ffd613c3e39](https://storage.googleapis.com/replit/images/1536865448102_a542f76811f1df3d35a97ffd613c3e39.pn)

To draw both diagrams, use the code link.

[Code Link](https://repl.it/@Siddharthsing13/Coolproject1#main.py)

# Happy Hacking:
Now it's your turn to make your lunch and dinner plate. You can share your design on [Link](https://hackclub.slack.com/archives/C01504DCLVD). I would love to see your creation. Keep enjoying, keep hacking!
