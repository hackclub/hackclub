---
name: 'Hangman'
description: 'Create the hangman game!'
author: '@JakeGerber'
image: 'https://cloud-pyase6wua.vercel.app/0screenshot__1414_.png'
---

In this workshop we are going to be creating Hangman using Python and the turtle library.

<img src="https://cloud-pyase6wua.vercel.app/0screenshot__1414_.png" width="900" alt="Hangman Example">
<img src="https://cloud-lj0em9l0r.vercel.app/0screenshot__1415_.png" width="900" alt="Hangman Enter Letter Example">

<img src="https://media.tenor.com/images/d86646ec4acbb11c68c0e101b090a74d/tenor.gif" width="380" alt="Kazoo Kid Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE!

Create a new repl and use Python as the language.

<img src="https://cloud-mjiiaypmb.vercel.app/0screenshot__1416_.png" width="600" alt="Python Repl">

# Initial Statements

Let's Begin!
<img src="https://media3.giphy.com/media/8y8NVqFqhTQVa/200.gif" width="380" alt="Ratatouille Gif">

```py
import random
import drawing


words = ["apple", "train", "shirt", "fork", "chair"]

wordsType = {
  "apple": "fruit",
  "train": "vehicle",
  "shirt": "clothing",
  "fork" : "dining",
  "chair" : "furniture"
}
```

- We are importing the random library for randomness and drawing class which we will create later.
- We are creating a list of words that can be picked, and then we are creating a dictionary to hold their category.

# More Initial Statements
```py
#What we just wrote.
word = random.choice(words)
guess = ""
for letter in word:
  guess+= "*"
strikes = 0

drawing.hangman(0, 0, strikes)
drawing.drawText(-20, -80, guess)
drawing.drawText(-30, 80, wordsType[word])
```
- We are assigning a random word to the "word" string and creating an empty string named "guess".
- We are adding an asterisk (*) for each letter of the word the user will guess.
- We are creating an integer named "strikes" and setting it to 0 to represent the incorrect user guesses.
- We are calling some drawing functions that we will create later.

# User Guessing
We will be creating this block of code.
<img src="https://media4.giphy.com/media/d31vIfZXjpQXJukE/giphy.gif" width="380" alt="South Park Gif">

```py
#What we already wrote.
while(True):
  while(True):
    letterGuess = input("Guess a letter: ").lower()
    if (len(letterGuess) == 1):
      break

  tempAnswer = ""
  tempIndex = 0
  letterHere = False
  for letter in word:
    if (letterGuess == letter):
      tempAnswer += letter
      letterHere = True
    elif (guess[tempIndex] == "*"):
      tempAnswer += "*"
    else:
      tempAnswer += guess[tempIndex]
    tempIndex+=1
  guess = tempAnswer
  if (letterHere == False):
    strikes+=1

  drawing.hangman(0, 0, strikes)
  drawing.drawText(-20, -80, guess)
  drawing.drawText(-30, 80, wordsType[word])

  if (strikes >= 6):
    drawing.drawText(-60, -120, "YOU LOSE!")
    break

  if (word == guess):
    drawing.drawText(-60, -120, "YOU WIN!")
    break
```
Don't worry! Let's break it down!

## User Input
```py
#What we already wrote.
while(True):
  while(True):
    letterGuess = input("Guess a letter: ").lower()
    if (len(letterGuess) == 1):
      break
```
- We are making sure the user is inputting a single letter and converting it to lower case.

## Comparing Input to Word
```py
while(True):
  #What we just wrote.
  tempAnswer = ""
  tempIndex = 0
  letterHere = False
  for letter in word:
    if (letterGuess == letter):
      tempAnswer += letter
      letterHere = True
    elif (guess[tempIndex] == "*"):
      tempAnswer += "*"
    else:
      tempAnswer += guess[tempIndex]
    tempIndex+=1
  guess = tempAnswer
  if (letterHere == False):
    strikes+=1
```
In this part of the code, we are checking if our guessed letter matches up with any letters of the word we are guessing. If it does we are changing our guess string, but if does not we are adding another strike.

## Ending Statements
```py
while(True):
  #What we already wrote.
  drawing.hangman(0, 0, strikes)
  drawing.drawText(-20, -80, guess)
  drawing.drawText(-30, 80, wordsType[word])

  if (strikes >= 6):
    drawing.drawText(-60, -120, "YOU LOSE!")
    break

  if (word == guess):
    drawing.drawText(-60, -120, "YOU WIN!")
    break
```

We are drawing our hangman and text, and ending the game and displaying a win or lose message.

# Drawing

<img src="https://media4.giphy.com/media/VhtSLWxOQOGdFfGTTa/source.gif" width="380" alt="Kid Drawing Gif">

## Creating the File
Create a file and name it drawing.py

<img src="https://cloud-qgmcvvz08.vercel.app/0screenshot__1419_.png" width="380" alt="drawing.py example">

## Hangman Function

```py
import turtle
```
Make sure to add this statement at the top so we can use the turtle library.

### Initial Statements
<img src="https://media4.giphy.com/media/XcAa52ejGuNqdb5SFQ/giphy-downsized-medium.gif" width="380" alt="Hedgehog Gif">

```py
def hangman(x, y, strikes):
  turtle.clearscreen()
  turtle.speed(0)
  turtle.hideturtle()
  turtle.goto(x, y)
  turtle.down()
```
We want to clear the screen and reset our position each time we draw the hangman.

### Strike 1
```py
def hangman(x, y, strikes):
  #What we already wrote.
  if (strikes < 1):
    turtle.up()
  turtle.circle(20)
 ```

If the user has at least 1 strike then we draw the head.

### Strike 2
```py
def hangman(x, y, strikes):
  #What we already wrote.
  if (strikes < 2):
    turtle.up()
  turtle.right(90)
  turtle.forward(20)
  turtle.backward(10)
  ```
If the user has at least 2 strikes then we draw the body.

### Strike 3
```py
def hangman(x, y, strikes):
  #What we already wrote.
  if (strikes < 3):
    turtle.up()
  turtle.left(90)
  turtle.forward(10)
```
If the user has at least 3 strikes then we draw the first arm.

### Strike 4
```py
def hangman(x, y, strikes):
  #What we already wrote.
  if (strikes < 4):
    turtle.up()
  turtle.backward(20)
  turtle.forward(10)
  turtle.right(90)
  turtle.forward(10)
```
If the user has at least 4 strikes then we draw the second arm.

### Strike 5
```py
def hangman(x, y, strikes):
  #What we already wrote.
  if (strikes < 5):
    turtle.up()
  turtle.left(30)
  turtle.forward(20)
  turtle.backward(20)
```
If the user has at least 5 strikes then we draw the first leg.

### Strike 6
```py
def hangman(x, y, strikes):
  #What we already wrote.
  if (strikes < 6):
    turtle.up()
  turtle.right(60)
  turtle.forward(20)
```
If the user has at least 6 strikes then we draw the second leg.

## Drawing Text Function
Put this function below the previous one.

```py
def drawText(x, y, text):
  turtle.hideturtle()
  turtle.up()
  turtle.goto(x, y)
  turtle.write(text, font=("Arial", 16, "normal"))
```
This draws the text at the specified coordinate with the Arial font.

# Final Source Code
Here's the final code we wrote!
<img src="https://media1.tenor.com/images/ee23f257055a69a5a27d13c23c39e55d/tenor.gif?itemid=18635064" width="380" alt="Cr1tikal Gif">

## main.py
```py
import random
import drawing


words = ["apple", "train", "shirt", "fork", "chair"]

wordsType = {
  "apple": "fruit",
  "train": "vehicle",
  "shirt": "clothing",
  "fork" : "dining",
  "chair" : "furniture"
}


word = random.choice(words)
guess = ""
for letter in word:
  guess+= "*"
strikes = 0

drawing.hangman(0, 0, strikes)
drawing.drawText(-20, -80, guess)
drawing.drawText(-30, 80, wordsType[word])



while(True):
  while(True):
    letterGuess = input("Guess a letter: ").lower()
    if (len(letterGuess) == 1):
      break

  tempAnswer = ""
  tempIndex = 0
  letterHere = False
  for letter in word:
    if (letterGuess == letter):
      tempAnswer += letter
      letterHere = True
    elif (guess[tempIndex] == "*"):
      tempAnswer += "*"
    else:
      tempAnswer += guess[tempIndex]
    tempIndex+=1
  guess = tempAnswer
  if (letterHere == False):
    strikes+=1

  drawing.hangman(0, 0, strikes)
  drawing.drawText(-20, -80, guess)
  drawing.drawText(-30, 80, wordsType[word])

  if (strikes >= 6):
    drawing.drawText(-60, -120, "YOU LOSE!")
    break

  if (word == guess):
    drawing.drawText(-60, -120, "YOU WIN!")
    break
```
## drawing.py
```py
import turtle

def hangman(x, y, strikes):
  turtle.clearscreen()
  turtle.speed(0)
  turtle.hideturtle()
  turtle.goto(x, y)
  turtle.down()

  if (strikes < 1):
    turtle.up()
  turtle.circle(20)

  if (strikes < 2):
    turtle.up()
  turtle.right(90)
  turtle.forward(20)
  turtle.backward(10)

  if (strikes < 3):
    turtle.up()
  turtle.left(90)
  turtle.forward(10)

  if (strikes < 4):
    turtle.up()
  turtle.backward(20)
  turtle.forward(10)
  turtle.right(90)
  turtle.forward(10)

  if (strikes < 5):
    turtle.up()
  turtle.left(30)
  turtle.forward(20)
  turtle.backward(20)
  
  if (strikes < 6):
    turtle.up()
  turtle.right(60)
  turtle.forward(20)

def drawText(x, y, text):
  turtle.hideturtle()
  turtle.up()
  turtle.goto(x, y)
  turtle.write(text, font=("Arial", 16, "normal"))
```

# More You Can Do
[Original Program](https://repl.it/@CosmicSnowman/Hangman-Workshop#drawing.py)
[Option to Play Again](https://repl.it/@CosmicSnowman/Hangman-Workshop-Extended-1#main.py)
[Change the Drawing](https://repl.it/@CosmicSnowman/Hangman-Workshop-Extended-2#main.py)
[Add Color](https://repl.it/@CosmicSnowman/Hangman-Workshop-Extended-3#drawing.py)
