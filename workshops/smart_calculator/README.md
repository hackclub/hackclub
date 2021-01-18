---
name: 'Smart Calculator'
description: 'Build a human-like calculator that responds to text prompts using Python'
author: '@iamsid47'
img: 'https://cloud-p6k9fe5b9.vercel.app/0smart-calc.png'
---

In this workshop, we are going to make a calculator which can add, multiply, divide and subtract two numbers. But the catch is that instead of just adding those two numbers, we input a line in which we ask the program to either add, subtract, multiply, divide.

For example: *Hey calc, can you give me the lcm of 9 and 3* and it will provide you with the LCM (least common multiple) of those two numbers.

![How it works](https://github.com/iamsid47/hangman-pics/blob/main/how-calc-works.png)

[Final Product and Code](https://repl.it/@iamsid47/calc#main.py)

## Getting Started

We're going to be using [Repl.it](https://repl.it), a free, online code editor, to write our project. To get started, go to [repl.it/languages/python3](https://repl.it/languages/python3). Your coding environment will spin up instantly! Once your coding environment is ready, let's get started.

The exciting part about this calculator is that it acts somewhat like a human. So, it should not just output numbers—it should welcome the user when they run it, and if it doesn't understand a prompt it should respond accordingly. Let's create some of these responses.

In your `main.py` file, create an array of responses, like so:

```python
response=['Welcome to smart calculator','My name is Calc', 
    'Thanks for using me!','Sorry, this is beyond my ability'] 
```

## Writing the mathematical operations

Let's think about all the mathematical operations we want our calculator to be able to do. Here's what I came up with:

1. Addition
2. Subtraction
3. Multiplication
4. Division
5. LCM (least common multiple)
6. HCF (highest common factor. this is also called GCF, or greatest common factor)
7. Remainder

Let's create all of the functions that will complete these operations. Because Python can do math, these functions will be pretty simple. For example, here's what the `add()` function will look like:

```python
def add(a,b): 
  return a+b 
```

With this in mind, can you write the rest of the functions that perform the simple operations? Here's what they all look like:

```python
# Addition
def add(a,b):
  return a+b

# Subtraction
def sub(a,b):
  return a-b

# Multiplication 
def mul(a,b): 
  return a*b 

# Division 
def div(a,b): 
  return a/b 

# Remainder 
def mod(a,b): 
  return a%b 
```

LCM and HCF are a bit of a different story. Because there's no single operator that calculates these in Python, we'll have to write some more complicated functions to calculate them. Keeping in mind what you remember about how to calculate LCM and HCF, can you write these two functions? Here's what they look like (add these two functions at the bottom of your Python file):

```python
# LCM
def lcm(a,b):
  L=a if a>b else b
  while L<=A*b:
    if L%a==0 and L%b==0:
      return L
    L+=1

def hcf(a,b):
  H=a if a<b else b
  while H>=1:
    if a%H==0 and b%H==0:
      return H
    H-=1
```

And with that, we've finished writing all of the operations our calculator will do!

## Making it human

Now comes the fun part: we want to be able to parse human-like prompts and extract an operation that we can feed into our calculator. How can we do this?

Well, let's break an example prompt down:

```
Hey calculator, can you add 5 and 9 for me
```

We can easily identify some keywords that indicate what we want the calculator to do. The word `add` means that we want to add, and later on we see the numbers `5` and `9`. So, we can write a program that just extracts these 3 keywords and ignores everything else, which will give the impression that our calculator is super smart!

Let's write a function that will extract the numbers we want from the statement. At the bottom of your `main.py` file, add a function called `extract_from_text`:

```python
def extract_from_text(text):
  l=[]
  
  for t in text.split(' '):
    try:
      l.append(float(t))
    except ValueError:
      pass
      
  return l
```

- First, we make an empty array called `l`, which we will populate with the keywords we want to extract
- Then, we [split](https://www.w3schools.com/python/ref_string_split.asp) the text the user entered, turning it into an array of words, and we loop through each word
- We use a [try/except block](https://www.w3schools.com/python/python_try_except.asp) to append the character to the list if it is a number. This works because [`float()`](https://www.programiz.com/python-programming/methods/built-in/float) attempts to turn a string into a number, so if it fails to do so, we `pass`—AKA move on to the next word—and don't add that word to the array.
- Once the for loop is completed, we return our array.

So now, we've written a function that extracts the numbers we need to perform an operation on. But we still aren't extracting the operation we want to perform on these numbers. To fix this, let's first start by thinking of as many valid operation keywords as we can and creating a list that binds each one to the proper function. Add this code at the bottom of your `main.py` file:

```python
operations = {
  'ADD': add,
  'PLUS': add,
  'SUM': add,
  'ADDITION': add,
  'SUB': sub,
  'SUBTRACT': sub,
  'MINUS': sub,
  'DIFFERENCE': sub,
  'LCM': lcm,
  'HFC': hfc,
  'PRODUCT': mul,
  'MULTIPLY': mul,
  'MULTIPLICATION': mul,
  'DIVISION': div,
  'MOD': mod,
  'REMAINDER': mod,
  'MODULAS': mod
}
```

While we're making lists of keywords, let's also make a list of some other valid commands:

```python
commands = {
  'NAME': myname,
  'EXIT': end,
  'END': end,
  'CLOSE': end
}
```

And let's also add the `myname` and `end` functions that we reference in this list. You can put these anywhere you want, but I recommend adding them near the operation functions so that the code looks neater:

```python
def myname(): 
  print(response[1])
  
def end(): 
  print(response[2]) 
  input('press enter key to exit') 
  exit()
```

And finally, let's add a simple startup message that the calculator will greet you with when you run the program. At the bottom of the `main.py` file, not as part of any function or loop or anything, add:

```
print(response[0])
print(response[1])
```

## Making it work

All of the building blocks are in place. Now, let's make it work!

Python has a cool way to run a piece of code continuously. It's called `while True:`. If you put code inside this while loop, it will run code continuously. We want to run the main part of our code continuously because we want to continuously ask the user for input as long as the program is running. So, at the bottom of the `main.py`, file, add:

```python
while True:
  text=input('enter your queries:')
```

In Python, `input()` is a function that waits for user input in the console. So right now, this code will print out 'enter your queries:' and then wait for the user to say something before running the rest of the code. Try it out yourself! Click the green "Run" button and see what happens.

But we don't want to just allow for user input; we want to respond to it too! Inside of the `while True` loop, add:

```python
while True:
  text=input('enter your queries:')
  for word in text.split(' '):
    if word.upper() in operations.keys():
      try:
        l = extract_from_text(text)
	r = operations[word.upper()] (l[0], l[1])
	print(r)
      except:
        print('something went wrong and i couldnt parse your input, plz enter again!!')
      finally:
        break

    elif word.upper() in commands.keys():
      commands[word.upper()]()
      break
    
    else:
      print(response[3])
```

- First, we again split the user input into an array of words and loop through the words.
- If it finds a word that is in our list of operations, it extracts the two numbers using the `extract_from_text()` function we wrote earlier, and runs the corresponding operation function on those two numbers. Then, it prints the result.
- If it finds a word that it recognizes as a command, it executes the corresponding function for that command.
- If it can't find a word that it recognizes as an operation or a command, it prints the last response we added in the array we wrote at the beginning of this workshop.

## Voila! You did it!

![Mission Accomplished](https://media.giphy.com/media/MAzunB1Ru6zAYlYgPD/giphy.gif)

That's it! You did it! Click the green "Run" button at the top of the page to see the result. The program should ask you for an input, and if you enter something with a valid operation word and two numbers, it should calculate that for you!

## Hack It ;)

Here are a few things you can do to expand this project:

- At the beginning of this workshop, we came up with a few basic operations—but there are many, many more operatinos you can do, both simple and very complex. Squaring, square roots, solving an equation with one variable, etc.
- There are some edge cases that we didn't solve. For example, what happens if you include multiple operation or command words? Or an operation word _and_ a command word? You can make the UX better by solving for these edge cases
- Add more responses! Give this calculator some personality! We only added 4 basic responses at the beginning—you can go wild, and find funny places to insert more random responses

### Demos

Here are a few ways I expanded this project:

- Here, I made a very simple GUI [version](https://repl.it/@iamsid47/calc-demo1) of a normal calculator.
- This is a more advanced [version](https://repl.it/@iamsid47/calc-demo2) of the GUI calculator as this can calculate sin, cos, tan and even square root.
- This one is like a modular [version](https://repl.it/@iamsid47/calc-demo3) because, here it asks the user if they want to add, subtract, multiply or divide and then asks to input numbers and finally gives the result.

Happy Hacking!
