---
name: 'Hangman'
description: 'Create the Hangman game!'
author: '@JakeGerber'
img: 'https://cloud-pyase6wua.vercel.app/0screenshot__1414_.png'
---

In this workshop we are going to be creating Hangman using Python and the turtle library.

<img src="https://cloud-pyase6wua.vercel.app/0screenshot__1414_.png" width="400" alt="Hangman Example">

Oh the classic game of Hangman! It's fun to have your friends guess the word you're thinking! Well, if you don't have friends around at the moment, why not create a digital version?

<img src="https://cloud-lj0em9l0r.vercel.app/0screenshot__1415_.png" width="400" alt="Hangman Enter Letter Example">

[Here's a demo of what we're going to make!](https://repl.it/@CosmicSnowman/Hangman-Workshop#drawing.py)

<img src="https://media.tenor.com/images/d86646ec4acbb11c68c0e101b090a74d/tenor.gif" width="380" alt="Kazoo Kid Gif">

## Repl.it Setup

We're going to use [Repl.it](https://repl.it/~), a free, online coding editor, to create the project. Get started by visiting [repl.it/languages/python3](https://repl.it/languages/python3).

<img src="https://cloud-mjiiaypmb.vercel.app/0screenshot__1416_.png" width="600" alt="Python Repl">

## Initial Statements

These initial statements are pretty nice (aka you need them or your program doesn't work). Put them at the top.
<img src="https://media3.giphy.com/media/8y8NVqFqhTQVa/200.gif" width="380" alt="Ratatouille Gif">

```py
import random
import drawing
```
- We are importing the [random library](https://docs.python.org/3/library/random.html) for randomness when we pick a new word. 
- The drawing statement is not a built in library, but we will create a class that has functions for it later on.

This code goes right underneath the import statements.
```py
words = ["apple", "train", "shirt", "fork", "chair"]

wordsType = {
  "apple": "fruit",
  "train": "vehicle",
  "shirt": "clothing",
  "fork" : "dining",
  "chair" : "furniture"
}
```
- Here's a list of words that can be picked. Feel free to add any other words you'd like, or you can even take out words you dislike.
- Create a [dictionary](https://www.w3schools.com/python/python_dictionaries.asp) and map every word in the list of words to another string. This other string will be the catergory the word fits into so the user is not blindly guessing. Is it a fruit, vehicle, clothing? 

## More Initial Statements

This goes right under the code we wrote.
```py
word = random.choice(words)
guess = ""
for letter in word:
  guess+= "*"
strikes = 0
```
- Assign a random word from our list of words to the `word` string.
- Create an empty string named `guess`. Guess what. This will be our user's guess, I guess.
- Add an asterisk (\*) for each letter of the word the user will guess. We do not want to reveal any letters if the user has not guessed them.
= Create an integer named `strikes` and setting it to 0 to represent the incorrect user guesses.

This goes right below what we wrote.
```py
drawing.hangman(0, 0, strikes)
drawing.drawText(-20, -80, guess)
drawing.drawText(-30, 80, wordsType[word])
```
We are calling some drawing functions that we will create later, so do not worry about their function for now! Just make sure to add them.

## User Guessing
The user has to guess a letter! It's Hangman after all.

<img src="https://media4.giphy.com/media/d31vIfZXjpQXJukE/giphy.gif" width="380" alt="South Park Gif">

Put this code right underneath everything we're written.
### User Input
```py
while(True):
  while(True):
    letterGuess = input("Guess a letter: ").lower()
    if (len(letterGuess) == 1):
      break
```
- Create two while loops. The first is for the user to keep inputting letters, and the second is for the input. 
- We are then making sure the user is inputting a single letter, and we are converting that letter to lower case. If the user does input a single letter, then break out the while loop. This makes the user input complete.

### Comparing Input to Word

Put this code within the first while loop and right under the second while loop we just wrote.
```py
while(True):
  #What we just wrote would be here.
      
  tempAnswer = ""
  tempIndex = 0
  letterHere = False
```
Create an empty string, integer that equals 0, and a boolean that is false. They will be used in a moment.

Put this right under what we just wrote.
```py
while(True):
  #What we just wrote would be here.
      
  for letter in word:
```
We want to use a for-each loop to go through each letter in the word to check if it is equal to the user input.

Put this code right under what we just wrote.
```py
while(True):
  #What we just wrote would be here.
      
  for letter in word:
    if (letterGuess == letter):
      tempAnswer += letter
      letterHere = True
```
If the letter guessed is the current letter being checked, then add the letter to the tempAnswer string and set letterHere to true.

```py
while(True):
  #What we just wrote would be here.
      
  for letter in word:
    if (letterGuess == letter):
      tempAnswer += letter
      letterHere = True
    elif (guess[tempIndex] == "*"):
      tempAnswer += "*"
    else:
      tempAnswer += guess[tempIndex]
    tempIndex+=1
```
- Else if the guess at the index is an asterisk (meaning it is not guessed yet), add it to the tempAnswer string. 
- Else, the user's guess is already guessed (whether by them inputting the same thing again or it starting with a letter) so add their guess to the tempAnswer string.

This is right under our for loop.
```py
while(True):
  #What we just wrote would be here.
      
  guess = tempAnswer
  if (letterHere == False):
    strikes+=1
```
Set the guess to tempAnswer. If the `letterHere` boolean is false, meaning that the word does not contain the user's letter, then add a strike.

### Ending Statements

This code is within our while loop but after everything we already wrote.
```py
while(True):
  #What we already wrote.
  drawing.hangman(0, 0, strikes)
  drawing.drawText(-20, -80, guess)
  drawing.drawText(-30, 80, wordsType[word])
```
We are drawing our hangman and text. We will create these functions in a moment.

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
End the game by displaying a win or lose message and breaking out of the while loop. If the user has more than or equal to six strikes, they lose. If they guessed the word, they win.

## Drawing
Let's draw a stick figure to represent our man (don't worry he's fine).

<img src="https://media4.giphy.com/media/VhtSLWxOQOGdFfGTTa/source.gif" width="380" alt="Kid Drawing Gif">

### Creating the File
Create a file and name it `drawing.py`.

<img src="https://cloud-qgmcvvz08.vercel.app/0screenshot__1419_.png" width="380" alt="drawing.py example">

### Hangman Function

```py
import turtle
```
Make sure to add this statement at the top of the file so we can use the [turtle library](https://docs.python.org/3/library/turtle.html).

#### Initial Statements
<img src="https://media4.giphy.com/media/XcAa52ejGuNqdb5SFQ/giphy-downsized-medium.gif" width="380" alt="Hedgehog Gif">

This goes right below our import statement.
```py
def hangman(x, y, strikes):
  turtle.clearscreen()
  turtle.speed(0)
  turtle.hideturtle()
  turtle.goto(x, y)
  turtle.down()
```
- Clear the screen when we draw the hangman. This prevents what we previopusly drew to be displayed.
- Set the speed to 0 so the turtle draws instantly. This makes us draw instantly.
- Hide the turtle's cursor because nobody wants to see it!
- Go to the coordinates specified in the function's parameters.
- Set the turtle down so it will draw when moved. 

#### Strike 1
Only one strike.

This goes right below what we just wrote.
```py
def hangman(x, y, strikes):
  #What we just wrote would be here.

  if (strikes < 1):
    turtle.up()
  turtle.circle(20)
 ```

If the user has at least 1 strike then we draw the head (a circle). If the user has less than 1 strike, we make our turtle go up so it will stop drawing for the rest of the function.

#### Strike 2
Two strikes is pushing it.

This goes right below what we just wrote.
```py
def hangman(x, y, strikes):
  #What we just wrote would be here.
  if (strikes < 2):
    turtle.up()
  turtle.right(90)
  turtle.forward(20)
  turtle.backward(10)
  ```
If the user has at least 2 strikes then we draw the body. The turtle goes forward for the drawn body and back to the middle of it to prepare of the arms being drawn. If they have less than 2 strikes, make the turtle go up. (prepare to hear something similar for every strike).

#### Strike 3
Three strikes and you're out!

This goes right below what we just wrote.
```py
def hangman(x, y, strikes):
  #What we just wrote would be here.
  if (strikes < 3):
    turtle.up()
  turtle.left(90)
  turtle.forward(10)
```
If the user has at least 3 strikes then we draw the first arm. We are going in the proper direction and moving forward. Once again, make the turtle go up if the user has less than 3 strikes.

#### Strike 4
Nevermind I mean four.

This goes right below what we just wrote.
```py
def hangman(x, y, strikes):
  #What we just wrote would be here.
  if (strikes < 4):
    turtle.up()
  turtle.backward(20)
  turtle.forward(10)
  turtle.right(90)
  turtle.forward(10)
```
If the user has at least 4 strikes then we draw the second arm. Move the turtle forward to the other side to draw the second arm, and then move back to the center to prepare for drawing the legs. If there are less than 4 strikes then make the turtle go up.

#### Strike 5
Nevermind again I mean five.

This goes right below what we just wrote.
```py
def hangman(x, y, strikes):
  #What we just wrote would be here.
  if (strikes < 5):
    turtle.up()
  turtle.left(30)
  turtle.forward(20)
  turtle.backward(20)
```
If the user has at least 5 strikes then we draw the first leg. We are moving at a 30 degree angle from the body and going forward and back again. This becomes a lot more clearer when you see it visually. If there are less than 5 strikes, move the turtle up.

#### Strike 6
Wait I meant six.

This goes right below what we just wrote.
```py
def hangman(x, y, strikes):
  #What we just wrote would be here.
  if (strikes < 6):
    turtle.up()
  turtle.right(60)
  turtle.forward(20)
```
If the user has at least 6 strikes then we draw the second leg. Turn 60 degrees to the other leg position and go forward. You have now finished drawing the stickman. If the user has less than 6 strikes, make the turtle go up.

### Drawing Text Function
Let's allow text to be drawn to the screen.

Add this function right below the other function we just wrote.
```py
def drawText(x, y, text):
  turtle.hideturtle()
  turtle.up()
  turtle.goto(x, y)
  turtle.write(text, font=("Arial", 16, "normal"))
```
- This function takes in x and y coordinates, along with the text that we want drawn.
- Hide the turtle's cursor and make the turtle go up so changing locations doesn't draw anything.
- Go to the specified location that the parameter gives and write the specified text. The font we are choosing is Arial and the size is 16, but you can change that if you want.

## Final Source Code
You're done! Have fun! Here's the final code we wrote!

Happy Hacking!

<img src="https://media1.tenor.com/images/ee23f257055a69a5a27d13c23c39e55d/tenor.gif?itemid=18635064" width="380" alt="Cr1tikal Gif">

<details>

<summary> main.py </summary>

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

</details>



<details>

<summary> drawing.py </summary>

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

</details>

## Hacking
Here are some ways to expand upon the code!

- [Option to Play Again](https://repl.it/@CosmicSnowman/Hangman-Workshop-Extended-1#main.py)
- [Change the Drawing](https://repl.it/@CosmicSnowman/Hangman-Workshop-Extended-2#main.py)
- [Add Color](https://repl.it/@CosmicSnowman/Hangman-Workshop-Extended-3#drawing.py)
