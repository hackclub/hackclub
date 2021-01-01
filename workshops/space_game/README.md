---
name: 'Space Bar Games'
description: 'Make two games where you press the space bar as fast as possible!'
author: '@JakeGerber'
image: 'https://cloud-r8adu66vb.vercel.app/0screenshot__1391_.png'
---

# Create Space Bar Games!
In this workshop, we will be creating a two space bar games. In the first you have to press 100 times as fast as possible, and in the second you have to press has much as possible in 5 seconds.

<img src="https://cloud-r8adu66vb.vercel.app/0screenshot__1391_.png" width="580" alt="Drawing Example">

<img src="https://thumbs.gfycat.com/FantasticFaintAmurminnow-small.gif" width="380" alt="Nice Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE, meaning that it allows us to write code from the Repl.it website!

Create a new repl and use Python as the language.

<img src="https://cloud-2ojs193ra.vercel.app/0screenshot__1396_.png" width="600" alt="Python Repl">

# Importing Libraries
Let's begin by importing the turtle and math libraries.

```python
import time
import turtle
```

We will be drawing to the screen using the turtle library! Turtle allows us to draw to the screen like a whiteboard. More information [here](https://www.geeksforgeeks.org/turtle-programming-python/). The time library will be used for time!

# Initial Statements
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

# Game2
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

# Space
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


## Game 2

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

# Ending Statements
```csharp
//Everything we already wrote would be here.
turtle.onkey(space, "space")
turtle.onkey(left, "Left")
turtle.onkey(right, "Right")

turtle.listen()
turtle.mainloop()
```

# Final Code
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
