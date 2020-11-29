---
name: 'Hangman'
description: 'Create the hangman game!'
author: '@JakeGerber'
---

# Create Hangman!

<img src="https://cloud-pyase6wua.vercel.app/0screenshot__1414_.png" width="900" alt="Hangman Example">
<img src="https://cloud-lj0em9l0r.vercel.app/0screenshot__1415_.png" width="900" alt="Hangman Enter Letter Example">

<img src="https://media.tenor.com/images/d86646ec4acbb11c68c0e101b090a74d/tenor.gif" width="380" alt="Kazoo Kid Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE!

Create a new repl and use Python as the language.

<img src="https://cloud-mjiiaypmb.vercel.app/0screenshot__1416_.png" width="600" alt="Python Repl">

# Initial Statements

Let's Begin!

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
