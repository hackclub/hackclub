---
name: 'Breakfast_plate'
description: 'Making breakfast with python turtle!'
author: 'Sid672'
---
# Your plate will looks like
![breakfast](https://github.com/Sid672/Breakfast_plate/blob/main/breakfast.PNG)'
## Breakfast_plate : Based on python turtle
[Link to the demo and code.](https://repl.it/@Siddharthsing13/testpy#main.py)
### Program to draw 36 pattern design.
![358eazWwzOU6c](https://media.giphy.com/media/358eazWwzOU6c/giphy.gif)
### Functions used:
| Method          | Parameter                              | Description                                                                      |
| --------------- | -------------------------------------- | ---------------------------------------------------------------------------------| 
| turtle()        | None                                   | Creates and returns a new turtle object                                          | 
| right()         | value of angle is degree               | Turns the turtle clockwise                                                       | 
| left()          | value of angle is degree               | Turns the turtle counter clockwise                                               |
| forward()       | distance – a number (integer or float) | Moves the turtle forward by the specified amount                                 | 
| pencolor()      | Color name                             | Changes the color of the turtle’s pen                                            | 
| bgcolor()       | Color name                             | Changes the color of the background                                              |
| done()          | None                                   | This function is used to starts event loop – calling Tkinter’s main loop function| 

### Let's start
Create a new Python project on repl.it by visiting https://repl.it/languages/python3

![KRiymXy9LEKXwQMUGv](https://media.giphy.com/media/KRiymXy9LEKXwQMUGv/giphy.gif)


## 5 Steps to draw breakfast plate:
Follow each step correctly and it's easy to draw this!
### 1) Install python turtle 
PythonTurtle strives to provide the lowest-threshold way to learn Python. Students command an interactive Python shell (similar to the IDLE development environment) and use Python functions to move a turtle displayed on the screen.
```pyhton 
pip install PythonTurtle
```
### 2) Import python turtle and set screen and turtle name
Now import turtle and set up screen. So in this case screen name is s and turtle name is t.
You can change the name like screen name is display or view and turtle name is pet, it depends on you which name you like.
```python
import turtle
s = turtle.Screen()
t = turtle.Turtle()
```
### 3) Set color of background and pen
For setting background color we are using bgcolor() I am using black color here, for the pen we can use multiple colors like here red, orange, yellow, light green etc.
You can choose your favorite colors also.
```python
#color of background
turtle.bgcolor("black")
#color of pen
col = ["red","orange","yellow","light green","blue","purple"]
j = 0
t.pencolor("purple")
```
### 4) Movement of turtle begin
36 used here because (360 / 10 = 36) each part is at 10 degree shift from other part. right(270) will point turtle like ^ and then turtle move 25 pixels.
```python
#n = 36 means repeat same pattern 36 times.
n = 36
t.right(270)
t.forward(25)
```
#### 4.1)Main loop to draw 36 pattern
This loop will repeat 36 times because n = 36.
```python
for i in range(n):
```
#### 4.2)Loop to draw 1st small circle
Loop will repeat 27 times because 27 = (3 * 36 / 4), it is always better to write this in varible form because it helps in calculation. Like here 3 / 4 of circle is drawn.
turtle will move 0.8 pixel then turn 10 degree (27 times).Then a straight 25 pixel to join second circle.
```python
//nested loop
 for i in range(int((3 * n) / 4)):
        t.forward(0.8)
        t.left(360/ n)
 t.forward(25)
```
It draws a small 3/4 circle which looks like:
![firstcircle](https://github.com/Sid672/Breakfast_plate/blob/main/firstcircle.PNG)
#### 4.3)Loop to draw 2nd small circle
Similarly this loop will draw second circle but in right direction.
```python
    for i in range(int((3 * n) / 4)):
        t.forward(0.8)
        t.right(360/ n)
```
The Second circle looks like this and soo on remaining circle will be drawn. 
![2ndcircle](https://github.com/Sid672/Breakfast_plate/blob/main/2ndcircle.PNG)
### 5) Change color of pen
Change of color is very important for this j varible is used as an index of col = ["red","orange","yellow","light green","blue","purple"]. Since, j cannot be greater than 6. So, by using if condtion j will again equal to 0.
```python
    t.pencolor(col[j])
    j = j + 1
    if (j >= 6 ):
        j = 0
    t.left(10)
    t.forward(25)

turtle.done()
```
![3ohhwFujpZQL6TzxBK](https://media.giphy.com/media/3ohhwFujpZQL6TzxBK/giphy.gif)

Color changes from red, orange, yellow, green, blue, purple like in rainbow.

![colors](https://github.com/Sid672/Breakfast_plate/blob/main/colors.PNG)
# Your code looks like:
After completing all steps code seems like this
```python
#2)Import python turtle and set screen and turtle name

import turtle
s = turtle.Screen()
t = turtle.Turtle()

#3) Set color of background and pen

#color of background
turtle.bgcolor("black")
#color of pen
col = ["red","orange","yellow","light green","blue","purple"]
j = 0
t.pencolor("purple")


#4) Movement of turtle begin

#n = 36 means repeat same pattern 36 times.
n = 36
t.right(270)
t.forward(25)

#Main loop to draw 36 pattern
for i in range(n):

# Loop to draw 1st small circle
  for i in range(int((3 * n) / 4)):
      t.forward(0.8)
      t.left(360/ n)
  t.forward(25)

# Loop to draw 2nd small circle
  for i in range(int((3 * n) / 4)):
      t.forward(0.8)
      t.right(360/ n)


# 5) Change color of pen

  t.pencolor(col[j])
  j = j + 1
  if (j >= 6 ):
      j = 0
  t.left(10)
  t.forward(25)

turtle.done()
```
# Run code:
Click the green "Run" button on the top of the repl.it windows. A screen will be shown on the right side displaying the turtle graphics that you coded. If you face any errors, try commenting out each portion of the code and making only a certain section work. This generally helps to figure out the error.
Run your code and watch turtle how it moves...
![breakfast2](https://github.com/Sid672/Breakfast_plate/blob/main/breakfast2.PNG)

Your output will be:
![breakfast1](https://github.com/Sid672/Breakfast_plate/blob/main/breakfast1.PNG)


# Enjoy breakfast
## Greatwork you made it!
![nJ2PObJA3EVgc](https://media.giphy.com/media/nJ2PObJA3EVgc/giphy.gif)

# Links of all demos
### Complete 
[Link to the demo and code.](https://repl.it/@Siddharthsing13/testpy#main.py)
### simple circle
[Link2 to the demo and code.](https://repl.it/@Siddharthsing13/demobreakfast2#main.py)
### spiral
[Link3 to the demo and code.](https://repl.it/@Siddharthsing13/demobreakfast3#main.py)
You will like this demo code it will give you a nice pattern!


## Happy Hacking:
We all can make beutiful projects with python turtle and enjoy coding.
### Some cool examples are:
![turtle-star](https://docs.python.org/3/_images/turtle-star.png)
![1536865435321_bd598138637586247b2433a96371534d](https://storage.googleapis.com/replit/images/1536865435321_bd598138637586247b2433a96371534d.pn)
![1536865448102_a542f76811f1df3d35a97ffd613c3e39](https://storage.googleapis.com/replit/images/1536865448102_a542f76811f1df3d35a97ffd613c3e39.pn)
