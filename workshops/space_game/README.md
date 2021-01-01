---
name: 'Space Bar Games'
description: 'Make two games where you press the space bar as fast as possible!'
author: '@JakeGerber'
image: 'https://cloud-ny55iopyv.vercel.app/0screenshot__1446_.png'
---

# Create Space Bar Games!
In this workshop, we will be creating a two space bar games. In the first you have to press 100 times as fast as possible, and in the second you have to press has much as possible in 5 seconds.

<img src="https://cloud-ny55iopyv.vercel.app/0screenshot__1446_.png" width="580" alt="Space Game 1 Example">

<img src="https://cloud-bmo725iv9.vercel.app/0screenshot__1449_.png" width="580" alt="Space Game 2 Example">

<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eab6cc47-e9ea-4310-88ed-ba829f8f32f1/d9ocrek-b38472b3-ed5c-48fd-b4b8-43e0fe790afd.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZWFiNmNjNDctZTllYS00MzEwLTg4ZWQtYmE4MjlmOGYzMmYxXC9kOW9jcmVrLWIzODQ3MmIzLWVkNWMtNDhmZC1iNGI4LTQzZTBmZTc5MGFmZC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.0EL41U6STfj0sg5f6JPVu8fK_P0vw9_uOPPA7oPtErk" width="380" alt="Saitama Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE, meaning that it allows us to write code from the Repl.it website!

Create a new repl and use Python as the language.

<img src="https://cloud-2lezn57vs.vercel.app/0screenshot__1450_.png" width="600" alt="Python Repl">

# Importing Libraries
Let's begin by importing the turtle and math libraries.

```python
import time
import turtle
```

We will be drawing to the screen using the turtle library! Turtle allows us to draw to the screen like a whiteboard. More information [here](https://www.geeksforgeeks.org/turtle-programming-python/). The time library will be used for time!

# Initial Statements
<img src="https://media2.giphy.com/media/H4iFSugbzV4cIobri3/200.gif" width="380" alt="Start Gif">

```csharp
import time
import turtle


turtle.hideturtle()
turtle.up()
turtle.goto(-150,0)

start = 0
spacePress = 0
turtle.write("Press Left for Space Game 1 Right for Space Game 2", font=("Arial", 8, "normal"))
```
- This does some initial turtle statements which hide the cursor, make it go up, and going to a specified location,
- Start and spacePress variables are initialized, and the turtle writes to the screen how to start the games.

# Initial Booleans
```csharp
import time
import turtle


turtle.hideturtle()
turtle.up()
turtle.goto(-150,0)

start = 0
spacePress = 0
turtle.write("Press Left for Space Game 1 Right for Space Game 2", font=("Arial", 8, "normal"))

game1Playing = False
game1end = False

game2Playing = False
game2end = False
timerActive = False
```
These booleans are initialized. They will make more sense later on.

# Left Arrow Press Function
<img src="https://media1.tenor.com/images/b1742ad02258b00eeda5afd92407e2f2/tenor.gif?itemid=5145967" width="380" alt="Left Gif">

Game 1 is the game where we will be pressing the space bar as fast as possible for 100 times.
```csharp
//The code we already wrote would be here.

def left():
  global game1Playing
  global start
  game1Playing = True
  start = time.time()
  turtle.clear()
  turtle.goto(-100,0)
  turtle.write("Click Space as Much as Possible", font=("Arial", 10, "normal"))
```
- Add this function after the code we already wrote.
- This code will occur when the user presses the left arrow key to start the game, which we will handle later on.
- The code says that Game 1 is playing, clears the screen, gets the start time, goes to a specified location, and tells the user the directions.

# Right Arrow Press Function
<img src="https://media3.giphy.com/media/fAJSjAn1auJ1HjxKh0/giphy.gif" width="380" alt="Right Gif">

Game 2 is the game where we will be pressing the space bar as much as possible in 5 seconds.
```csharp
def right():
  global game2Playing
  game2Playing = True
  turtle.clear()
  turtle.goto(-100,0)
  turtle.write("Click Space as Much as Possible", font=("Arial", 10, "normal"))
```
- Add this function right under the "left" function we just wrote.
- This code will occur when the user presses the right arrow key to start the game, which we will handle later on.


# Activate Timer
This code will be used for Game 2, and the function will be called later in the program. It will make more sense then.
```csharp
def TimerActivate():
  global game2end
  timeVal = 5
  for i in range(timeVal):
    turtle.clear()
    turtle.goto(-100,0)
    turtle.write("Seconds Remaining: " + str(timeVal - i), font=("Arial", 10, "normal"))
    time.sleep(1)
  game2end = True
```
- Add this function right below our "right" function.
- This function tells the user how much time they have left to press the space bar before the game ends.
- The "time.sleep(1)" line will wait one second before running the for loop again.
- The game2end boolean is set to true.

# Space Bar
<img src="https://media0.giphy.com/media/3o6nV0O3Df8yh9oGpq/giphy.gif" width="380" alt="Space Bar Gif">

This code will play when the user presses space. This is where it will check what game is currently being played and have code for both games.

## Initial Variables
```csharp
def space():
  global game1Playing
  global spacePress
  global timerActive
  global game2Playing
  spacePressAmt = 100
```
Add this function right below our previous functions. Add these global statements so we can use our booleans. The spacePressAmt integer is set to 100 because the user will have to press the space bar 100 times in Game 1.

## Game 1
<img src="https://media1.giphy.com/media/ToMjGpC87kZY6cihIju/giphy.gif" width="380" alt="Game 1 Gif">

The following code will be for Game 1.
### Initial Statements
```csharp
def space():
  global game1Playing
  global spacePress
  global timerActive
  global game2Playing
  spacePressAmt = 100
  if (game1Playing):
    spacePress+=1
    turtle.clear()
    end = time.time()
    turtle.goto(-50,0)
    turtle.write(str(spacePress) + "/" + str(spacePressAmt) + " presses", font=("Arial", 10, "normal"))
```
We are incrementing the spacePress amount, updating the end variable, and telling the user how much of the way they are on the space count.

### Ending the Game
```csharp
def space():
  global game1Playing
  global spacePress
  global timerActive
  global game2Playing
  spacePressAmt = 100
  if (game1Playing):
    spacePress+=1
    turtle.clear()
    end = time.time()
    turtle.goto(-50,0)
    turtle.write(str(spacePress) + "/" + str(spacePressAmt) + " presses", font=("Arial", 10, "normal"))

    if (spacePress >= spacePressAmt):
      end = time.time()
      print(end-start)
      turtle.clear()
      turtle.goto(-50,0)
      turtle.write("Time is " + str(round(end-start,2)) + " seconds!", font=("Arial", 10, "normal"))
      game1Playing = False
```
If spacePress is greater than or equal to spacePressAmt, then we are updating the end time, writing how long it took the user to complete by subtracting the start from the end, and setting game1Playing to false.

## Game 2
<img src="https://media3.giphy.com/media/3oEjHYlwvUK5p9AIbm/giphy.gif" width="380" alt="Game 2 Gif">

The following code will be for Game 2.
### Initial Statements
```csharp
def space():
  global game1Playing
  global spacePress
  global timerActive
  global game2Playing
  spacePressAmt = 100
  if (game1Playing):
    spacePress+=1
    turtle.clear()
    end = time.time()
    turtle.goto(-50,0)
    turtle.write(str(spacePress) + "/" + str(spacePressAmt) + " presses", font=("Arial", 10, "normal"))

    if (spacePress >= spacePressAmt):
      end = time.time()
      print(end-start)
      turtle.clear()
      turtle.goto(-50,0)
      turtle.write("Time is " + str(round(end-start,2)) + " seconds!", font=("Arial", 10, "normal"))
      game1Playing = False
  elif (game2Playing):
    spacePress+=1
    if (timerActive == False):
      timerActive = True
      TimerActivate()
```
If Game 2 is being played, increment spacePress and if this is your first time enterig the statement, then set the timer as active by calling the "TimerActive" function.


### Ending the Game
```csharp
def space():
  global game1Playing
  global spacePress
  global timerActive
  global game2Playing
  spacePressAmt = 100
  if (game1Playing):
    spacePress+=1
    turtle.clear()
    end = time.time()
    turtle.goto(-50,0)
    turtle.write(str(spacePress) + "/" + str(spacePressAmt) + " presses", font=("Arial", 10, "normal"))

    if (spacePress >= spacePressAmt):
      end = time.time()
      print(end-start)
      turtle.clear()
      turtle.goto(-50,0)
      turtle.write("Time is " + str(round(end-start,2)) + " seconds!", font=("Arial", 10, "normal"))
      game1Playing = False
  elif (game2Playing):
    spacePress+=1
    if (timerActive == False):
      timerActive = True
      TimerActivate()
    if (game2end):
      turtle.clear()
      turtle.goto(-15,0)
      turtle.write(str(spacePress) + " Presses!", font=("Arial", 10, "normal"))
      game2Playing = False
```
If game2end is true, then let the user know how many presses they got and set game2playing to false. 

# Ending Statements
```csharp
//Everything we already wrote would be here.
turtle.onkey(space, "space")
turtle.onkey(left, "Left")
turtle.onkey(right, "Right")

turtle.listen()
turtle.mainloop()
```
- These listeners listen for the space bar, left arrow key, and right arrow key, and they call the respective functions.
- The listen statement allows for the turtle to listen for these key presses.

# Final Code
<img src="https://cdn.pixilart.com/photos/orginal/3147e5b7f0ee4c7.gif" width="380" alt="Kermit Happy Gif">

```csharp
import time
import turtle


turtle.hideturtle()
turtle.up()
turtle.goto(-150,0)

start = 0
spacePress = 0
turtle.write("Press Left for Space Game 1 Right for Space Game 2", font=("Arial", 8, "normal"))

game1Playing = False
game1end = False

game2Playing = False
game2end = False
timerActive = False

def left():
  global game1Playing
  global start
  game1Playing = True
  start = time.time()
  turtle.clear()
  turtle.goto(-100,0)
  turtle.write("Click Space as Much as Possible", font=("Arial", 10, "normal"))

def right():
  global game2Playing
  game2Playing = True
  turtle.clear()
  turtle.goto(-100,0)
  turtle.write("Click Space as Much as Possible", font=("Arial", 10, "normal"))


def TimerActivate():
  global game2end
  timeVal = 5
  for i in range(timeVal):
    turtle.clear()
    turtle.goto(-100,0)
    turtle.write("Seconds Remaining: " + str(timeVal - i), font=("Arial", 10, "normal"))
    time.sleep(1)
  game2end = True



def space():
  global game1Playing
  global spacePress
  global timerActive
  global game2Playing
  spacePressAmt = 100
  if (game1Playing):
    spacePress+=1
    turtle.clear()
    end = time.time()
    turtle.goto(-50,0)
    turtle.write(str(spacePress) + "/" + str(spacePressAmt) + " presses", font=("Arial", 10, "normal"))

    if (spacePress >= spacePressAmt):
      end = time.time()
      print(end-start)
      turtle.clear()
      turtle.goto(-50,0)
      turtle.write("Time is " + str(round(end-start,2)) + " seconds!", font=("Arial", 10, "normal"))
      game1Playing = False
  elif (game2Playing):
    spacePress+=1
    if (timerActive == False):
      timerActive = True
      TimerActivate()
    if (game2end):
      turtle.clear()
      turtle.goto(-15,0)
      turtle.write(str(spacePress) + " Presses!", font=("Arial", 10, "normal"))
      game2Playing = False




turtle.onkey(space, "space")
turtle.onkey(left, "Left")
turtle.onkey(right, "Right")

turtle.listen()
turtle.mainloop()
```

# More You Can Create
- [Original Program](https://repl.it/@CosmicSnowman/Space-Game#main.py)
- [Randomize Background Color](https://repl.it/@CosmicSnowman/Space-Game-Expanded-1#main.py)
- [User Input for Time and Space Amount](https://repl.it/@CosmicSnowman/Space-Game-Expanded-2#main.py)
- [Win or Lose Scenarios](https://repl.it/@CosmicSnowman/Space-Game-Expanded-3#main.py)
