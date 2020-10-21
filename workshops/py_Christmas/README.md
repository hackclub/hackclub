

| name | description | author |
|---|---|---|
| PyChristmas | Christmas Greetings with turtle graphics | @raz8153 |
  
# PyChristmas 

This workshop is meant to help python newbies try out a fun library called "[turtle](https://docs.python.org/3/library/turtle.html)".
			
In this, we make a Christmas greeting using turtle graphics !!
Try out and leave a feedback.
[Link to the demo code.](https://repl.it/@raz8153/ThankfulFirsthandScandisk) 

# Getting Started

Let me give a brief idea of what we are going to do. We are going to make a greeting card with a maroon-ish background with a text written on it saying ***"Merry Christmas"***.We are going to add a Christmas tree above the greeting. That is, we need a green tree with a brown stem, a yellow/golden star on top, and tiny red balls on either side of the tree.

![alt completed_output_pic](https://cloud-4ipo9natc.vercel.app/3merry_christmas.png) 

To break it down a bit more, we have made the leaves and stem out of multiple boxes or rectangles, with tiny circles on either end of the rectangle. Finally, a star on top of the center.
![alt tree_without_color_filled](https://cloud-4ipo9natc.vercel.app/1image2.png)
# Shall we start coding ? 

Create a new [repl.it](https://repl.it) project and select **Python** as the language from the drop-down menu on the right.
We are gonna make 2 python files. (Writing on a single page may make it a bit too complicated for a beginner)
1.  ******Figures.py****** - A python file in which we code the functions that we will use to create the boxes/rectangles, the tiny circles, and the star.
2.  ******main.py****** - A python file in which we call the functions of boxes, circles and star to make a Christmas tree. And finally, we will add a greeting on the bottom of the screen as you saw above


# Let's code Figures.py first.

Using the coding space on the left create a file and name it 'Figures.py' (most probably a main.py file will already be created, don't use that).
Now in the coding window :

First, let's import the turtle library :
```python
import turtle
```

Next, let's make a function to draw a rectangle 

```python
def box1 (turtle, color, x, y, width, height):
    turtle.penup()
    turtle.color(color)
    turtle.fillcolor(color)
    turtle.goto(x,y)
    turtle.pendown()
    turtle.begin_fill()
    for i in range(2):
        turtle.forward(width)
        turtle.left(90)
        turtle.forward(height)
        turtle.left(90)

    turtle.end_fill()
    turtle.setheading(0)

```
   Was that a bit too much to take in? No worries,I will  break it down for you. 
```python
def box1 (turtle, color, x, y, width, height):
```
First we create the function definition with parameters:
1. Color of the rectangle (color).
2. Postion of the turtle/where to start drawing the rectangle from (x and y and coordinates).
3. Width and height of the box/rectangle.

```python
    turtle.penup()
    turtle.color(color)
    turtle.fillcolor(color)
    turtle.goto(x,y)
    turtle.pendown()
```
We use `penup()` and `pendown()` function to move the turtle without drawing anything (just like lifting the pen from the paper and keeping back on paper).
`goto(x,y)` decides the position of the turtle.
```python
for i in range(2):
        turtle.forward(width)
        turtle.left(90)
        turtle.forward(height)
        turtle.left(90)
```
The code above is the one that draws the rectangle. This code moves the turtle to one side by the same distance as the width mentioned. Then, turns it to left (left of the turtle) and moves it to a distance same as the height. This process is repeated twice as it is put in a loop twice. Now we have a complete rectangle. 
Are you still with me? 

Let's make the star now shall we? Check the code below and see if you understand.

```python
def star(turtle, color, x, y, size):
    turtle.penup()
    turtle.color(color)
    turtle.fillcolor(color)
    turtle.goto(x, y)
    turtle.pendown()
    turtle.begin_fill()
    for i in range (5):
        turtle.forward(size)
        turtle.right(144)
        turtle.forward(size)

    turtle.end_fill()
    turtle.setheading(0)
```
I guess you would've understood atleast 90% of the above code easily. A brief description is given below.
The ******size****** parameter decides the length of the edges of the star.
Here, we move the turtle forward by a distance same as that of the size mentioned. Now, we turn the turtle to right by 144 degrees and move it by the same distance. Repeat the above steps 5 times and you will have a star. Got it? 

Last function in this file to make the tiny balls on either sides of the boxes (green part) of the Christmas tree.
Go through the code. You will probably understand it pretty easily.
```python
def balls(turtle, color, x, y, radius):
    turtle.penup()
    turtle.color(color)
    turtle.fillcolor(color)
    turtle.goto(x, y)
    turtle.pendown()
    turtle.begin_fill()
    turtle.circle(radius)

    turtle.end_fill()
    turtle.setheading(0)

``` 
Yes, ******turtle****** library has a circle function. Made our job pretty easy, didn't it? 

 Our functions to make the figures is ready. Let's take a look at the whole code.

```python
import turtle
def box1 (turtle, color, x, y, width, height):
    turtle.penup()
    turtle.color(color)
    turtle.fillcolor(color)
    turtle.goto(x,y)
    turtle.pendown()
    turtle.begin_fill()
    for i in range(2):
        turtle.forward(width)
        turtle.left(90)
        turtle.forward(height)
        turtle.left(90)

    turtle.end_fill()
    turtle.setheading(0)



def star(turtle, color, x, y, size):
    turtle.penup()
    turtle.color(color)
    turtle.fillcolor(color)
    turtle.goto(x, y)
    turtle.pendown()
    turtle.begin_fill()
    for i in range (5):
        turtle.forward(size)
        turtle.right(144)
        turtle.forward(size)

    turtle.end_fill()
    turtle.setheading(0)


def balls(turtle, color, x, y, radius):
    turtle.penup()
    turtle.color(color)
    turtle.fillcolor(color)
    turtle.goto(x, y)
    turtle.pendown()
    turtle.begin_fill()
    turtle.circle(radius)

    turtle.end_fill()
    turtle.setheading(0)
``` 
All good ? 

# Now, lets move on to the next file : main.py


Now open the main.py file. 

In this page, we are going to make a brown rectangle which will serve as the tree stem. Then, we are going to make multiple green rectangles stacked above each other. If each rectangle is smaller than the one below it, the whole image will have a Christmas tree like appearance.
Shall we begin?

```python
from turtle import *
from Figures import *
from random import randint

```
Here, we import all fuctions from 'turtle' library, all functions from 'Figures' file (which we just created) and finally 'randint' function from 'random' library so that we can use it to generate a random integer.
Why do we need a random integer? We'll see .


```python
speed(0)

bg = turtle.Screen()
bg.bgcolor("#99004D") #Setting back ground color

y = -100
width = 240

```
`speed()` function determines the speed of the turtle, ie, the speed in which the figures get drawn on the screen. When we set that to zero it moves as fast as it can. 
Next, we set the background color to maroon using hexcode (#99004D).
Find the right value for ******y******, through trial and error. Set some random value first and then, iterate to find the right value which brings your turtle to the center.
For ******width******, provide any value you desire. 

```python
# Constructing the tree
box1(turtle, "#4F4553", -15, y - 40, 30, 40) #Stem of the tree
```
Now we make a make a stem for the tree by passing desired values for each parameter. Color will be a shade of brown (#4F4553) and the rest as you see above. 
![alt tree_stem_completed](https://cloud-4ipo9natc.vercel.app/4image3.png) 


Next thing we are gonna make is the tree leaves with tiny balls on either sides.
It is as easy as it sounds. See if the code is understandable.

```python
while width > 20 :
    width = width - 20
    height = randint(20,30)
    x = 0 - width/2
    box1(turtle, "#05A167", x, y, width, height) # Box for the leaves of tree
    balls(turtle, "#fc045b", x, y, 5) # Decorative balls
    balls(turtle, "#fc045b", -x, y, 5) # Decorative balls
    y = y + height

```
Not too difficult, is it? Let's break this down.

```python
width = width - 20
height = randint(20,30)
```
In each iteration, the width of the next rectangle gets reduced to a smaller size so that in the end we get a triangle kind of look for the entire leaf part (green portion). We assign a random value for the height as that helps to give the tree an irregular shape rather than a giving same height for all the rectangles. If you would like, you could reduce the width by a random integer too. 

```python
x = 0 - width/2
```
This is just to set the starting 'x' coordinate.

```python
box1(turtle, "#05A167", x, y, width, height) # Box for the leaves of tree
```
Now we draw one complete green color filled box for first layer of leaves.
![alt One_layer_of_leaves](https://cloud-4ipo9natc.vercel.app/5image4.png) 

```python
balls(turtle, "#fc045b", x, y, 5) # Decorative balls
```
This statement draws a small ball of radius 5 with a shade of red (#fc045b) filled in it. 
![alt one_ball_completed](https://cloud-4ipo9natc.vercel.app/6image5.png) 
Now we need one more tiny ball on the right end of the christmas tree, right ? 

```python
balls(turtle, "#fc045b", -x, y, 5)
```
So we draw another ball with the same dimentions but we pass a different value for x coordinate. We pass ******-x****** instead of ******x******. This helps to position the ball on the right end instead of the left. 
![alt both_balls_completed](https://cloud-4ipo9natc.vercel.app/7image6.png) 
```python
y = y + height
```
Finally, the above line helps to move the turtle up to the top of each rectangle so that the next rectangle it draws will be stacked on top of the one before it. 
Repeating the above step over and over again will give us rectangles stacked on top of each other such that the ones on top are slightly smaller then the one directly under it. We also have tiny red balls on either side.
![alt tree_and _balls_completed](https://cloud-4ipo9natc.vercel.app/8image7.png) 

Next,  Lets create a star on top of the tree.
Note that once the rectangle drawing is done, the turtle is already on top of the tree. 
```python
#Star on the top 
star(turtle, "#e5f614", 0.4, y, 20)
```
The above code will draw a yellow star on top of the tree. You can tweak the parameters to see how the positioning and size varies. 
![alt star_completed](https://cloud-4ipo9natc.vercel.app/9image8.png) 

Wow ! The tree is done. Now for the final touch, the greetings. 

```python
#Christmas wishes
penup()
color("#ff59ac")
goto(-250, -250)
write("Merry Christmas !!!", font=("Calibri", 50, "bold"))
```
I believe the code above is pretty self explanatory. We used the `write()` method to have a text be written on the screen.
Try changing the parameters of the `goto()` , `color()` and `write()` function to see the differences. 


```python

hideturtle()

turtle.done()
```
The `hideturtle()` function hides the turtle from the screen. And the `turtle.done()` function tells that the turtles task is done.

![alt completed_greeting](https://cloud-4ipo9natc.vercel.app/0image1.png) 
Well, guess what? We are done. 

One look at the whole code?
```python
# Now we use the figures we have defined to create the CHRISTMAS TREE
from turtle import *
from Figures import *
from random import randint

speed(0)

bg = turtle.Screen()
bg.bgcolor("#99004D") #Setting back ground color

y = -100
width = 240

# Constructing the tree
box1(turtle, "#4F4553", -15, y - 40, 30, 40) #Stem of the tree


# Tree
while width > 20 :
    width = width - 20
    height = randint(20,30)
    x = 0 - width/2
    box1(turtle, "#05A167", x, y, width, height) # Box for the leaves of tree
    balls(turtle, "#fc045b", x, y, 5) # Decorative balls
    balls(turtle, "#fc045b", -x, y, 5) # Decorative balls
    y = y + height

#Star on the top 
star(turtle, "#e5f614", 0.4, y, 20)

#Christmas wishes
penup()
color("#ff59ac")
goto(-250, -250)
write("Merry Christmas !!!", font=("Calibri", 50, "bold"))

hideturtle()

turtle.done()

```

Now, let's run the code. 
# Running the code
Click the green "Run" button on the top of the repl.it windows. A screen will be shown on the right side displaying the turtle graphics that you coded. 
If you face any errors, try commenting out each portion of the code and making only a certain section work. This generally helps to figure out the error.
![alt repl_screen](https://cloud-4ipo9natc.vercel.app/2image9.jpeg) 

# One last thing

   Did you find this fun ? If yes, try out some of your own designs. 
You can basically draw almost anything with this. 
A few suggestions would be:
1. Try changing the `speed()` function to '1' (or other values) to see the difference in speed. Try changing color of the parameters in the code. You can use [this link](https://www.color-hex.com/) to find the right hexcode you want.
2. Try adding some more additions into this code, like, maybe a few giftboxes on the bottom of the tree. For this you could use the same rectangle function. 
You could also try adding a few more decorative stuff into the tree or the back ground
3. Try making an entirely different design. Maybe a pet animal or a house or literally anything you wish. The picture given below is a 'Flower Carpet'. A friend of mine coded this flower carpet design using turtle. It is a bit complicated, but super fun.
![alt flower_carpet_turtle](https://github.com/FossMec/Code-a-pookalam/blob/master/Nikita%20Menon/FinalPookalam.png)
[Code for the flower carpet made using turtle](https://github.com/FossMec/Code-a-pookalam/tree/master/Nikita%20Menon)
4. Now, I would suggest to try out some other turtle functions that you may find interesting.    
   [This link](https://runestone.academy/runestone/books/published/StudentCSP/CSPTurtleDecisions/turtleFP.html) provides details of most functions available in turtle.

Alright! Congratulations on completing the workshop. Will you do me a small favour, now? Next time you try out a design, send me the output via twitter (@raz8153) or on hack club slack channel ( send as direct message to @Razz).
I would Love to see your work.

****Thanks A Lot for sticking till the end and Happy hacking !!!**** 






