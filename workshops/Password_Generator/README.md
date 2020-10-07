---
name: 'Password Generator'
description: 'Generate your own secure passwords'
author: '@Bentechy66'
---

# Password Generator
Passwords are a hot topic right now! Let's right our own generator for them in Python, learning about programming concepts along the way!

## Prerequisites
To embark on our adventure today, you'll need:
 - A beginner understanding of Python 3

## Setup

### repl.it
[Repl.it](https://repl.it) is an online code editor. You could also use the [Python IDLE](https://docs.python.org/3/library/idle.html) or a [local Python installation](https://www.python.org/downloads/), but I find repl more approachable for beginners. To get started, head over to [this page](https://repl.it/languages/python3) which should create an empty Python project for you to work with. Awesome!

## Let's get coding!
Let's start by figuring out what we need to do. Our project is going to:
 - Ask the user how long their password should be
 - Generate a random password that long
 - Display it to the user

Let's start with the first point.
We can get the user's input in python through the [`input()`](https://www.w3schools.com/python/ref_func_input.asp) function:
```py
password_length = input("How long do you want your password to be?")
```

Awesome! Our program asks the user how long their password should be. Let's start generating the password now.
First, we'll need to import the [`random`](https://docs.python.org/3/library/random.html) module so we can choose randomly from a list of characters. Place this at the top of your file to import the random module:
```py
import random
```

The way we'll generate this is by creating a string, then adding a random character to it in a for loop. Here's the finished code:
```py
import random

password_length = int(input("How long do you want your password to be?"))

password = ""
for i in range(password_length):
    password += random.choice("abcdefghijklmnopqrstuvwxyz")

print(password)
```
Here's a line by line breakdown!
 - `import random`: This line imports the Python Random module so we can use it later on in line 7 to choose a random character.
 - `password_length = int(input("How long do you want your password to be?"))`: This line asks the user how long they want their password to be. Observant users might notice the use of the `int` call to get the user input as an integer, rather than a string. This is necessary since the `range` function used later on uses the variable as a number.
 - `password = ""`: This line creates and initializes a variable called password, and sets it to an empty string. We add characters to it later!
 - `for i in range(password_length):`: This line runs the for loop however many times the user set their password length to, using Python's [`range()`](https://www.w3schools.com/python/ref_func_range.asp) function.
 - `password += random.choice("abcdefghijklmnop")`: This line adds a character to the password. The character is chosen by `random.choice()` from the list of characters given (`abcdefghijklmnop`)
 - `print(password)`: This line prints the generated password once the generation is done.

But there's a problem. This program only outputs lowercase letters! That isn't very secure at all. Let's make the program decide to randomly change the case of some of the letters:
```py
for i in range(password_length):
    to_add = random.choice("abcdefghijklmnopqrstuvwxyz")
    if random.randint(1, 2) == 1:
        to_add = to_add.upper()
    password += to_add
```
Here we're giving each character a 50% chance to become upper case. See if you can figure out how to change the chance of this happening!

## Wrapping up
Awesome! You've just created a secure password generator in Python. Hungry for more challenge? Check out my ideas to improve the project below:
 - Add checks to see if the input given is valid, and ask again if it isn't. [Demo & Code](https://repl.it/@BenjaminGRIFFIT/PassGen-InputCheck)
 - Add more characters to the password generation [Demo & Code](https://repl.it/@BenjaminGRIFFIT/PassGen-MoreChars)
 - Warn the user if they ask for a short password [Demo & Code](https://repl.it/@BenjaminGRIFFIT/PassGen-ShortCheck)
