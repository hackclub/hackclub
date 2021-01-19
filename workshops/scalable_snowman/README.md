---
name: 'Scalable Snowman'
description: 'Create your own scalable snowman using Python Turtle!'
author: '@JakeGerber'
img: 'https://cloud-3nwmqnf9y.vercel.app/0image.png'
---

<img src="https://cloud-81lsm6jyf.vercel.app/0screenshot__1406_.png" width="900" alt="Snowman Example">

Have you ever had a dream where you used Python's turtle library to draw snowmen to your computer screen that you can control with your keyboard? Probably not (it would be really weird if you did) but who cares because that's what we're going to make today! It's cool I swear. Let's create your own scalable snowmen to move around the screen!

<img src="https://i.pinimg.com/originals/69/3c/5e/693c5ec302f67ef040ad65f21bb25684.gif" width="380" alt="Snoopy Winter Gif">

[Final Demo and Code](https://repl.it/@CosmicSnowman/Scalable-Snowman-Workshop#main.py)

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE! Think of it as writing code and running it on a website.

Create a new Python project by going to [repl.it/languages/python3](https://repl.it/languages/python3).

## Initial Statements

Let's Begin! Here are some initial statements that we want to add for our program.

<img src="https://media4.giphy.com/media/l4JzhRSnaIsShvsxW/giphy.gif" width="380" alt="Frosty the Snowman Gif">

*Note: all the following code should be added in the `main.py` file.*

```py
import turtle
```

Import the [turtle library](https://www.geeksforgeeks.org/turtle-programming-python/). We will be using this to draw to the screen.

```py
radius1 = float(input("What radius for the first circle?: "))
radius2 = float(input("What radius for the second circle?: "))
radius3 = float(input("What radius for the third circle?: "))
```

Ask the user for three radii for each part of the snowman using [`input()`](https://www.w3schools.com/python/ref_func_input.asp). Take their response, convert the string to a [float](https://www.programiz.com/python-programming/methods/built-in/float) (AKA a number), and set them to radius variables.

```py
turtle.speed(0)
turtle.hideturtle()
turtle.bgcolor("black")
```

- Set the turtle speed to zero (so it draws instantly), hide the cursor, and make the background black (or any color you want).
- [Here are the turtle colors to choose from.](https://trinket.io/docs/colors) 

## Snowman Function

<img src="https://media3.giphy.com/media/odRLFiZRTm3vi/giphy.gif" width="380" alt="Snowman Gif">

### Initial Statements
We will be writing the initial statements for our snowman drawing function.

```py
def Snowman(x, y, radius1, radius2, radius3):
```

Create a function called `Snowman` that takes in x and y coordinates, and the three radii. This will be where everything is drawn.

```py
def Snowman(x, y, radius1, radius2, radius3):
  turtle.goto(x, y)
  turtle.color("lightblue")
```

Inside the function, use [`turtle.goto()`](https://docs.python.org/3/library/turtle.html#turtle.goto) to go to the x and y coordinates that will be inputted into the function. Then, set the color to light blue.

### Head and Body Pieces

Okay! Now we're ready to start drawing the parts of the snowman.

<img src="https://cloud-52dbjvw3n.vercel.app/0screenshot__1409_.png" width="380" alt="Snowman Head and Body">

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
- Whenever we want to fill in a circle or another shape, we have to surround the code we use to draw with `begin_fill()` and `end_fill()` statements. For the head, we are drawing a circle with our first radius variable, and we are making our turtle go up afterwards.

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

Once again, use the `begin_fill()` and `end_fill()` statements to surround our circle drawing. Then, draw the circle with our second radius variable. Finally, put the turtle back up again.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the previous code we wrote.
  
  #body piece 2
  turtle.right(90)
  turtle.forward(radius3*2)
  turtle.left(90)
```

The code for the second body piece will look a lot like the code for the first body piece. For the second body piece, we are going down to the bottom of where the body piece is because it is drawn upwards. We are then repositioning ourselves back to the original orientation.

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

Finally, surround our drawing statement with `begin_fill()` and `end_fill()` statements so it will be filled in, and draw a circle with our third radius variable.

### Drawing the Eyes

<img src="https://cloud-br53tx54x.vercel.app/0screenshot__1410_.png" width="380" alt="Snowman Eyes">

Yay! We've completed the head and body pieces! Now, we are going to draw the eyes of the snowman. Remember, Frosty the snowman has two eyes made out of coal.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the code for body piece 2
  
  #eyes
  turtle.color("blue")
  turtle.left(90)
  turtle.forward(radius3*2+radius2*2+radius1)
```

Set the turtle's color to blue, or any other color you want. This will be the color of the snowman's eyes. Then, position the turtle halfway up the head piece.

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

Position yourself a quarter of the way across the head piece.

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

Surround the drawing statement with the `begin_fill()` and `end_fill()` statements and draw the eye. The eye will be 1/6 the radius of the head piece.

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

Surround the drawing statement with the `begin_fill()` and `end_fill()` statements and draw the eye, just like the previous eye. The eye will be 1/6 the radius of the head piece.

### Drawing the Nose

<img src="https://cloud-f9je61z3w.vercel.app/0screenshot__1411_.png" width="380" alt="Snowman Nose">

We are going to draw the nose! Unfortunately, we can't import a carrot through the computer screen, so an orange triangle will have to do.

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

Create the `begin_fill()` and `end_fill()` statements. Leave a space between them because we're going to add code in between them.

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
Go forward 1/2 of the head's radius and turn left 120 degrees until you create a triangle. Once this is complete, the nose will be filled in!

### Drawing the Buttons

<img src="https://cloud-a2mh1goji.vercel.app/0screenshot__1413_.png" width="380" alt="Snowman Buttons">

Let's draw the three buttons of the snowman. It's almost like the snowman is wearing an invisible coat.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the previous code we wrote.
  
  #buttons
  turtle.setheading(270)
  turtle.forward(radius1)
```

Set the direction to down (270 degrees). Then, go to the top of the first body part. This is to position ourselves for the for loop where the buttons will be drawn.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #Under the previous code we wrote.
  
  #buttons
  turtle.setheading(270)
  turtle.forward(radius1)
  
  for x in range(3):

```
Create a for loop that will run three times. Inside this for loop is where the three buttons will be drawn.

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

In the for loop, go forward half of the body piece's radius. Then, create a filled in circle that is 1/6 the radius size of the head's radius. Finally, outside of the for loop, reposition the turtle.

## Calling the Snowman Function

Yay! We've written the function to build our snowman! Now it's time to write the function that will actually do the drawing.

```py
def Snowman(x, y, radius1, radius2, radius3):
  #PREVIOUS CODE

def draw():
```

Add the `draw()` function after all the code we wrote. This is where we will be calling the `Snowman()` funciton.

```py
def draw():
  turtle.tracer(0, 0)
  Snowman(x, y, radius1, radius2, radius3)
  Snowman(x+120, y, radius1, radius2, radius3)
  Snowman(x+-120, y, radius1, radius2, radius3)
  turtle.update()
```

- This function draws three snowmen with variables that we will create later, along with our radii.
- The `tracer()` function and `update()` function surrounding the snowmen calls will make it so the drawing will happen after all the snowmen are complete, instead of it happening after each draw statement. If we did not do this, the snowmen would keep refreshing before being completed, slowing down the drawing process.

## Movement

These special snowman can be controlled with your keyboard (oooh magic). Let's add that functionality.

### The `left()` function

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

We are accessing a global variable called `x`, which we will create later. Then, we are clearing the screen, subtracting 10 from the x variable, and then calling the draw function.

### The `right()` function

```py
def left():
  #Code we wrote.

def right():
  global x
  turtle.clear()
  x+=10
  draw()
```

The `right()` function is the same as the left but instead of decreasing x by 10, we are increasing x by 10. This makes us move to the right instead of the left.

## Final Statements

We will write some final statements for our program. You're sooooooo close to finishing!

```py
def right():
  #PREVIOUS CODE

x = 0
y = 0
draw()
```

Initialze x and y variables we accessed earlier, and call the initial `draw()` function. We want the snowmen to be drawn to the screen even before any user input is recognized.

```py
#Under everything we wrote.

turtle.onkeypress(left, "a")
turtle.onkeypress(right, "d")

turtle.listen()
turtle.mainloop()
```

Almost done! We are calling `onkeypress()` functions that will recognize user input. Is "a" is pressed, we want to call the left function, and if "d" is pressed, we want to call the right function.

The `listen()` function then listens for user input instead of ending the program.

Finally, `mainloop()` tells the window to wait for the user to do something.

## Final Code

<img src="https://media1.tenor.com/images/cb8ccb4cb181cd2ddefa8c6e604938db/tenor.gif?itemid=7915750" width="380" alt="Snoopy Gif">

You are done. Congrats! Now you're an expert at creating snowmen, and you are fully equipped to create an army of snowmen.

<details>

<summary> Final code: </summary>

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

</details>

## Hacking

Here are some examples of ways you can take this project further:

- [Random Colors](https://repl.it/@CosmicSnowman/Scalable-Snowman-Workshop-Expanded-1#main.py)
- [Random Sizes](https://repl.it/@CosmicSnowman/Scalable-Snowman-Workshop-Expanded-2#main.py)
- [Adding Trees](https://repl.it/@CosmicSnowman/Scalable-Snowman-Workshop-Expanded-3#main.py)
