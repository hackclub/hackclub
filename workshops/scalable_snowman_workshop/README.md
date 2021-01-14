---
name: 'Scalable Snowman'
description: 'Create your own scalable snowman!'
author: '@JakeGerber'
image: 'https://cloud-81lsm6jyf.vercel.app/0screenshot__1406_.png'
---

# Create a Scalable Snowman!

<img src="https://cloud-81lsm6jyf.vercel.app/0screenshot__1406_.png" width="900" alt="Snowman Example">
Have you ever had a dream where you used Python's turtle library to draw snowmen to your computer screen that you can control with your keyboard? Probably not (it would be really weird if you did) but who cares because that's what we're going to make today! It's cool I swear. Let's create your own scalable snowmen to move around the screen!

<img src="https://i.pinimg.com/originals/69/3c/5e/693c5ec302f67ef040ad65f21bb25684.gif" width="380" alt="Snoopy Winter Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE! Think of it as writing code and running it on a website.

Create a new repl and use Python as the language.

<img src="https://cloud-3jkz47rpl.vercel.app/0screenshot__1408_.png" width="600" alt="Python Repl">

# Initial Statements

Let's Begin! Here are some initial statements that we want to add for our program.

<img src="https://media4.giphy.com/media/l4JzhRSnaIsShvsxW/giphy.gif" width="380" alt="Frosty the Snowman Gif">
This will be some initial statements to help us get started.

```py
import turtle
```
Import the [turtle library](https://www.geeksforgeeks.org/turtle-programming-python/). We will be using this to draw to the screen.

```py
radius1 = float(input("What radius for the first circle?: "))
radius2 = float(input("What radius for the second circle?: "))
radius3 = float(input("What radius for the third circle?: "))
```
Ask the user for three radius for each part of the snowman. Take their response, convert the string to a float, and set them to radius variables. (I really hope you remember what a radius is. Think back to elementary school math!)

```py
turtle.speed(0)
turtle.hideturtle()
turtle.bgcolor("black")
```

- Set the turtle speed to zero (so it draws instantly), hide the cursor, and make the background black (or any color you want).
- [Here are the turtle colors to choose from.](https://trinket.io/docs/colors) 

# Snowman Function

<img src="https://media3.giphy.com/media/odRLFiZRTm3vi/giphy.gif" width="380" alt="Snowman Gif">

## Initial Statements
We will be writing the initial statements for our snowman drawing function.
```py

def Snowman(x, y, radius1, radius2, radius3):
```
Create a "Snowman" function that takes in x and y coordinates, and the three radii. This will be where everything is drawn.

```py
def Snowman(x, y, radius1, radius2, radius3):
  turtle.goto(x, y)
  turtle.color("lightblue")
```
Inside the function we are going to the coordinate and setting the color of the turtle as light blue. Let's focus on just the "Snowman" function for the time being.

## Head and Body Pieces

<img src="https://cloud-52dbjvw3n.vercel.app/0screenshot__1409_.png" width="380" alt="Snowman Head and Body">

Snowmen have head and body pieces (two body pieces and one head piece). We're making a traditional snowman that you would see!

```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the previous code we wrote.
  
  #head
  turtle.begin_fill() 
  turtle.circle(radius1) 
  turtle.end_fill() 
  turtle.up()
```
- When drawing circles, turtle starts at the bottom of the circle and creates it [upwards](https://www.geeksforgeeks.org/draw-circle-in-python-using-turtle/).
- Whenever we want to fill in a circle or another shape, we have to surround the draw function with begin and end fill statements. For the head, we are drawing a circle with our first radius variable, and we are making our turtle go up afterwards.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the previous code we wrote.
  
  #body piece 1
  turtle.right(90)
  turtle.forward(radius2*2)
  turtle.left(90)
```
For the first body piece, we are going down to the bottom of where the body piece is because it is drawn upwards. We are then repositioning ourselves back to the original orientation.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #body piece 1
  turtle.right(90)
  turtle.forward(radius2*2)
  turtle.left(90)
  turtle.begin_fill() 
  turtle.circle(radius2) 
  turtle.end_fill() 
  turtle.up()
```
Once again, use the begin and end fill statements to surround our circle drawing. Then, draw the circle with our second radius variable. Finally, put the turtle back up again.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the previous code we wrote.
  
  #body piece 2
  turtle.right(90)
  turtle.forward(radius3*2)
  turtle.left(90)
```
For the second body piece, we are going down to the bottom of where the body piece is because it is drawn upwards. We are then repositioning ourselves back to the original orientation.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #body piece 2
  turtle.right(90)
  turtle.forward(radius3*2)
  turtle.left(90)
  turtle.begin_fill() 
  turtle.circle(radius3) 
  turtle.end_fill() 
```
Finally, surround our drawing statement with begin and end fill statements so it will be filled in, and draw a circle with our third radius variable.

## Drawing the Eyes

<img src="https://cloud-br53tx54x.vercel.app/0screenshot__1410_.png" width="380" alt="Snowman Eyes">

We are going to draw the eyes of the snowman! Remember, Frosty the snowman has two eyes made out of coal.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the previous code we wrote.
  
  #eyes
  turtle.color("blue")
  turtle.left(90)
  turtle.forward(radius3*2+radius2*2+radius1)
```
Set the turtle's color to blue, or any other color you want. This will be the color of the snowman's eyes. Then, we are positioning our turtle halfway up head piece.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the previous code we wrote.
  
  #eyes
  turtle.color("blue")
  turtle.left(90)
  turtle.forward(radius3*2+radius2*2+radius1)
  
  turtle.left(-90)
  turtle.forward(radius1/2)
```
We are positioning ourselves a quarter of the way across the head piece.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the previous code we wrote.
  
  #eyes
  turtle.color("blue")
  turtle.left(90)
  turtle.forward(radius3*2+radius2*2+radius1)
  
  turtle.left(-90)
  turtle.forward(radius1/2)
  turtle.begin_fill() 
  turtle.circle(radius1/6) 
  turtle.end_fill()
```
Surround the drawing statement with the begin and end fill statements and draw the eye. The eye will be 1/6 the radius of the head piece.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the previous code we wrote.
  
  #eyes
  turtle.color("blue")
  turtle.left(90)
  turtle.forward(radius3*2+radius2*2+radius1)
  
  turtle.left(-90)
  turtle.forward(radius1/2)
  turtle.begin_fill() 
  turtle.circle(radius1/6) 
  turtle.end_fill()
  
  turtle.left(180)
  turtle.forward(radius1)
  turtle.right(180)
```
Position the turtle to 3/4 across the head piece to the other eye location.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the previous code we wrote.
  
  #eyes
  turtle.color("blue")
  turtle.left(90)
  turtle.forward(radius3*2+radius2*2+radius1)
  
  turtle.left(-90)
  turtle.forward(radius1/2)
  turtle.begin_fill() 
  turtle.circle(radius1/6) 
  turtle.end_fill()
  
  turtle.left(180)
  turtle.forward(radius1)
  turtle.right(180)
  turtle.begin_fill() 
  turtle.circle(radius1/6) 
  turtle.end_fill()
```
Surround the drawing statement with the begin and end fill statements and draw the eye. The eye will be 1/6 the radius of the head piece.

## Drawing the Nose

<img src="https://cloud-f9je61z3w.vercel.app/0screenshot__1411_.png" width="380" alt="Snowman Nose">

We are going to draw the nose! We can't import a carrot through the computer screen so an orange triangle will have to do.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the previous code we wrote.
  
  #nose
  turtle.forward(radius1/2)
  turtle.right(90)
  turtle.color("orange")
```
We are positioning ourselves to draw the nose in a way where it will look like it's sticking out, like a real snowman nose would! We are also changing the turtle's color to orange to represent the nose color.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the previous code we wrote.
  
  #nose
  turtle.forward(radius1/2)
  turtle.right(90)
  turtle.color("orange")

  turtle.begin_fill()
  
  turtle.end_fill()
```
Create begin and end fill statements. We want to fill in the nose after all.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the previous code we wrote.
  
  #nose
  turtle.forward(radius1/2)
  turtle.right(90)
  turtle.color("orange")

  turtle.begin_fill()
  turtle.forward(radius1/2)
  turtle.left(120)
  turtle.forward(radius1/2)
  turtle.left(120)
  turtle.forward(radius1/2)
  turtle.end_fill()
```
We are going forward 1/2 of the head's radius and turning left 120 degrees until we create a triangle. Once it is complete it will be filled in!


## Drawing the Buttons

<img src="https://cloud-a2mh1goji.vercel.app/0screenshot__1413_.png" width="380" alt="Snowman Buttons">

Let's draw the three buttons of the snowman. It's almost like the snowman is wearing an invisible coat.
```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the previous code we wrote.
  
  #buttons
  turtle.setheading(270)
  turtle.forward(radius1)
```
We are setting our direction to down (`turtle.setheading(270)`) and going to the top of the first body part. This is to position ourselves for the for loop where the buttons will be drawn.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the previous code we wrote.
  
  #buttons
  turtle.setheading(270)
  turtle.forward(radius1)
  
  for x in range(3):

```
We are creating a for loop that will run three times. This is where the three buttons will be drawn.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the previous code we wrote.
  
  #buttons
  turtle.setheading(270)
  turtle.forward(radius1)
  
  for x in range(3):
    turtle.forward(radius2/2)
    turtle.begin_fill() 
    turtle.circle(radius1/6) 
    turtle.end_fill()
  
  turtle.left(90)
```
In the for loop, we are going forward half of the body piece's radius. We then creating a filled in circle that is 1/6 the radius size of the head's radius. Finally, outside of the for loop, we are repositioning ourself.

# Calling the Snowman Function
This draw function will allow the snowmen to be drawn to the screen. If we didn't tell any snowman to be drawn, then nothing would show up! Nobody wants that.
```py
#Initial Statements
def Snowman(x, y, radius1, radius2, radius3):
  #PREVIOUS CODE

def draw():
```
Add the draw function after all the code we wrote. This is where we will be calling the snowman funciton.

```py
#Under what we already wrote.

def draw():
  turtle.tracer(0, 0)
  Snowman(x, y, radius1, radius2, radius3)
  Snowman(x+120, y, radius1, radius2, radius3)
  Snowman(x+-120, y, radius1, radius2, radius3)
  turtle.update()
```
- This function draws three snowmen with variables that we will create later, along with our radii.
- The tracer function and update function surrounding the snowmen calls will make it so the drawing will happen after all the snowmen are complete, instead of it happening after each draw statement. If we did not have this, the snowmen would keep refreshing before being completed, slowing down the drawing process.

# Movement
These special snowman can be controlled with your keyboard (oooh magic). Let's add that functionality.

```py
def draw():
  #PREVIOUS CODE

def left():
```
Add this left function with no parameters right under the draw function. This will handle the movement of the snowmen when a key is pressed.

```py
def left():
  global x
  turtle.clear()
  x-=10
  draw()
```
We are accessing our x variable we will create later. We are clearing the screen, subtracting 10 from the x variable, and then calling the draw function.

```py
def left():
  #Code we wrote.

def right():
  global x
  turtle.clear()
  x+=10
  draw()
```
The right function is the same as the left but instead of decreasing x by 10, we are increasing x by 10. This makes us move to the right instead of the left.

# Final Statements
We will write some final statements for our program. You're sooooooo close to finishing!

```py
def right():
  #PREVIOUS CODE

x = 0
y = 0
draw()
```
Initialze x and y variables, and call the initial draw function. We want the snowmen to be drawn to the screen even before any user input is recognized.

```py
#Under everything we wrote.

turtle.onkeypress(left, "a")
turtle.onkeypress(right, "d")

turtle.listen()
turtle.mainloop()
```
We are calling "onkeypress" functions that will recognize user input. Is "a" is pressed, we want to call the left function, and if "d" is pressed, we want to call the right function. The listen statements listen for user input instead of ending the program.

# Final Code

<img src="https://media1.tenor.com/images/cb8ccb4cb181cd2ddefa8c6e604938db/tenor.gif?itemid=7915750" width="380" alt="Snoopy Gif">

You are done. Congrats! Now you're an expert at creating snowmen. Create one, or an entire snowman army!

```py
import turtle

radius1 = float(input("What radius for the first circle?: "))
radius2 = float(input("What radius for the second circle?: "))
radius3 = float(input("What radius for the third circle?: "))

turtle.speed(0)
turtle.hideturtle()
turtle.bgcolor("black")

def Snowman(x, y, radius1, radius2, radius3):
  turtle.goto(x, y)
  turtle.color("lightblue")

  #head
  turtle.begin_fill() 
  turtle.circle(radius1) 
  turtle.end_fill() 
  turtle.up()

  #body piece 1
  turtle.right(90)
  turtle.forward(radius2*2)
  turtle.left(90)
  turtle.begin_fill() 
  turtle.circle(radius2) 
  turtle.end_fill() 
  turtle.up()

  #body piece 2
  turtle.right(90)
  turtle.forward(radius3*2)
  turtle.left(90)
  turtle.begin_fill() 
  turtle.circle(radius3) 
  turtle.end_fill() 

  #eyes
  turtle.color("blue")
  turtle.left(90)
  turtle.forward(radius3*2+radius2*2+radius1)

  turtle.left(-90)
  turtle.forward(radius1/2)
  turtle.begin_fill() 
  turtle.circle(radius1/6) 
  turtle.end_fill() 

  turtle.left(180)
  turtle.forward(radius1)
  turtle.right(180)
  turtle.begin_fill() 
  turtle.circle(radius1/6) 
  turtle.end_fill()

  #nose
  turtle.forward(radius1/2)

  turtle.right(90)
  turtle.color("orange")

  turtle.begin_fill()
  turtle.forward(radius1/2)
  turtle.left(120)
  turtle.forward(radius1/2)
  
  turtle.left(120)
  turtle.forward(radius1/2)
  
  turtle.end_fill()

  #buttons
  turtle.setheading(270)
  turtle.forward(radius1)
  for x in range(3):
      turtle.forward(radius2/2)

      turtle.begin_fill() 
      turtle.circle(radius1/6) 
      turtle.end_fill()
  turtle.left(90)


def draw():
  turtle.tracer(0, 0)
  Snowman(x, y, radius1, radius2, radius3)
  Snowman(x+120, y, radius1, radius2, radius3)
  Snowman(x+-120, y, radius1, radius2, radius3)
  turtle.update()

def left():
  global x
  turtle.clear()
  x-=10
  draw()

def right():
  global x
  turtle.clear()
  x+=10
  draw()

x = 0
y = 0
draw()

turtle.onkeypress(left, "a")
turtle.onkeypress(right, "d")

turtle.listen()
turtle.mainloop()
```

# More You Can Do + Source Code
- [Original Program](https://repl.it/@CosmicSnowman/Scalable-Snowman-Workshop#main.py)
- [Random Colors](https://repl.it/@CosmicSnowman/Scalable-Snowman-Workshop-Expanded-1#main.py)
- [Random Sizes](https://repl.it/@CosmicSnowman/Scalable-Snowman-Workshop-Expanded-2#main.py)
- [Adding Trees](https://repl.it/@CosmicSnowman/Scalable-Snowman-Workshop-Expanded-3#main.py)
