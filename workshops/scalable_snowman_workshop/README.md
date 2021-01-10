---
name: 'Scalable Snowman'
description: 'Create your own scalable snowman!'
author: '@JakeGerber'
image: 'https://cloud-81lsm6jyf.vercel.app/0screenshot__1406_.png'
---

# Create a Scalable Snowman!

<img src="https://cloud-81lsm6jyf.vercel.app/0screenshot__1406_.png" width="900" alt="Snowman Example">
Create your own scalable snowmen to move around the screen!

<img src="https://i.pinimg.com/originals/69/3c/5e/693c5ec302f67ef040ad65f21bb25684.gif" width="380" alt="Snoopy Winter Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE!

Create a new repl and use Python as the language.

<img src="https://cloud-3jkz47rpl.vercel.app/0screenshot__1408_.png" width="600" alt="Python Repl">

# Initial Statements

Let's Begin!

<img src="https://media4.giphy.com/media/l4JzhRSnaIsShvsxW/giphy.gif" width="380" alt="Frosty the Snowman Gif">

```py
import turtle

radius1 = float(input("What radius for the first circle?: "))
radius2 = float(input("What radius for the second circle?: "))
radius3 = float(input("What radius for the third circle?: "))

turtle.speed(0)
turtle.hideturtle()
turtle.bgcolor("black")
```

- Import the [turtle library](https://www.geeksforgeeks.org/turtle-programming-python/). We will be using this to draw to the screen.
- Get the user input for the radius for each snowman body part.
- Set the turtle speed to zero (so it draws instantly), hide the cursor, and make the background black.
- [Here are the turtle colors to choose from.](https://trinket.io/docs/colors) 

# Snowman Function

<img src="https://media3.giphy.com/media/odRLFiZRTm3vi/giphy.gif" width="380" alt="Snowman Gif">

## Initial Statements
Put the function under what we just wrote.

```py
#What we already wrote.
def Snowman(x, y, radius1, radius2, radius3):
  turtle.goto(x, y)
  turtle.color("lightblue")
```

- We are creating the Snowman function with parameters of the x and y coordinates (where the head will be) and the three radii.
- Inside the function we are going to the coordinate and setting the color of the turtle as light blue.

## Head and Body Pieces

<img src="https://cloud-52dbjvw3n.vercel.app/0screenshot__1409_.png" width="380" alt="Snowman Head and Body">

```py
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
```

- When drawing circles, turtle starts at the bottom of the circle and creates it [upwards](https://www.geeksforgeeks.org/draw-circle-in-python-using-turtle/).
- We are starting with the head piece and filling in a circle with the radius of the "radius1" variable, as noted with the beginning and end fill statements that surround it.
```py
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
```
- For the first body piece, we are going to the correct location so the circles are right next to each other but do not overlap.
- We are then drawing another filled in circle but using radius2.

```py
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
```
- We are then doing the same thing as the first body part, but moving right under the first body piece instead of the head.
- We are then drawing in a filled circle like the other pieces, but we are using radius3.

## Drawing the Eyes

<img src="https://cloud-br53tx54x.vercel.app/0screenshot__1410_.png" width="380" alt="Snowman Eyes">

```py
def Snowman(x, y, radius1, radius2, radius3):
  #What we just wrote.
  
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

- We are going up to halfway up head piece.
- We are changing the turtle color to blue for the eyes (or to whatever color you want).
- We are then going halfway across the head piece and creating the first eye with a radius of 1/6 of the head's radius.
- We are then doing the same for the other eye but going across to the other side.
- Don't get intimidated! A lot of the turtle statements are only for correct spacing.

## Drawing the Nose

<img src="https://cloud-f9je61z3w.vercel.app/0screenshot__1411_.png" width="380" alt="Snowman Nose">

```py
def Snowman(x, y, radius1, radius2, radius3):
  #What we wrote.
  
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

- We are going back to halfway across the head.
- We are then turning to face down.
- We are setting the color to orange (or any color you want).
- We are then starting a fill and going forward 1/2 of the head's radius and turning left 120 degrees until we create a triangle.
- This allows the nose to have it's point facing outwards like a snowman nose in real life!

## Drawing the Buttons

<img src="https://cloud-a2mh1goji.vercel.app/0screenshot__1413_.png" width="380" alt="Snowman Buttons">

```py
def Snowman(x, y, radius1, radius2, radius3):
  #What we wrote.

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
- We are setting our direction to down (`turtle.setheading(270)`) and going to the top of the first body part.
- We are creating a for loop three times for the three buttons.
- In the loop, we are moving forward half the radius of the first body part and creating a circle with 1/6 the radius of the head. This will create the correct spacing to fit the buttons, as the user can scale the body sizes.

# Calling the Snowman Function
This draw function will allow the snowmen to be drawn to the screen.
```py
#What we already wrote.
def draw():
  turtle.tracer(0, 0)
  Snowman(x, y, radius1, radius2, radius3)
  Snowman(x+120, y, radius1, radius2, radius3)
  Snowman(x+-120, y, radius1, radius2, radius3)
  turtle.update()
```
- Right underneath what we already wrote add this function.
- This function draws three snowmen with variables that we will create later, along with our radii.
- The tracer function and update function surrounding the snowmen calls will make it so the drawing will happen after all the snowmen are complete, instead of it happening after each draw statement. If we did not have this, the snowmen would keep refreshing before being completed, slowing down the drawing process.

# Movement
```py
#What we already wrote.
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
```
- Put these functions right under what we already wrote.
- These functions increase of decrease the x variable, clear the screen, and draw the snowmen again.
- If you want to move right, the x value has to be increased, and if you want to go left, the x value has to be decreased.

# Final Statements
```py
#Everything we already wrote.
x = 0
y = 0
draw()

turtle.onkeypress(left, "a")
turtle.onkeypress(right, "d")

turtle.listen()
turtle.mainloop()
```
- Add these statements after all the code we already wrote.
- These statements initialize the variables, initially draw the snowmen, and listen in for keyboard input to move them left and right.
 
# Final Code

<img src="https://media1.tenor.com/images/cb8ccb4cb181cd2ddefa8c6e604938db/tenor.gif?itemid=7915750" width="380" alt="Snoopy Gif">

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
