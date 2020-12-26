---
name: 'Fibonacci'
description: 'A Fibonacci Sequence Generator!'
author: '@iamsid47'
img: https://github.com/iamsid47/hangman-pics/blob/main/hangman.png
---

Hi Everyone! In this workshop, we will walkthrough how to build a **Fibonacci Sequence Generator!**

![Fibonacci](https://github.com/iamsid47/hangman-pics/blob/main/fibo%20-%20main.png)

### What is the Fibonacci Sequence?

The Fibonacci Sequence is a peculiar series of numbers from classical mathematics that has found applications in advanced mathematics, nature, statistics, computer science, and Agile Development.

The Fibonacci sequence is a series of numbers where a number is the addition of the last two numbers, starting with 0, and 1.
The Fibonacci Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…

Written as a rule, the expression is:
  ***Xn = Xn-1 + Xn-2***
  
So, we are going to create a generator for this sequence using Python!

You can see this project live on Repl.it by clicking [THIS](https://repl.it/@iamsid47/fibonacci#main.py) link.

## Files & Libraries

We will just need one file for our python code to run. We will name it as `main.py` There are no external libraries required!

## Let's Get Started!

![Create a repl](https://github.com/iamsid47/hangman-pics/blob/main/fibo-repl.png)

So, we are creating a program which can display us the sequence to the **n***th* number. Meaning, if we gave the input as 10, it will generate the sequence till 10th number.

Let's head over to Repl.it and create a *repl*. Choose the language as Python and then name your repl.

Now the first thing we want is that how many terms the user wants the program to generate. Thus, we take a `int` input from the user to get these terms.

```python
nterms = int(input("How many terms? "))
```

Next, in this sequence, the first and second number need to be defined. So, let's define them!

```python
n1, n2 = 0, 1
count = 0
```

Now, we need to first check if the input which is entered (the number of terms) is valid or not. Thus, let's create a conditional here. The first condition will be that if the input entered is not postive, we throw and error message. We actually `print` it though.

```python
if nterms <= 0:
   print("Please enter a positive integer")
```

There is also a possibility that the number of terms is equal to **1**. If so, let's create an `elif` statement.

```python
elif nterms == 1:
   print("Fibonacci sequence upto",nterms,":")
   print(n1)
```

If both the conditions do not occcur then we move over to the final and the most important condition. That is the fibonacci sequence generation.

```python
else:
   print("Fibonacci sequence:")
   while count < nterms:
       print(n1)
       nth = n1 + n2
       # update values
       n1 = n2
       n2 = nth
       count += 1
```

This calculation is in accordance to the Fibonacci Sequential formula.

## Voila!

![You did it](https://media.giphy.com/media/3ohhwMUC7YRqk7mVsk/giphy.gif)

You just created the history's most amazing generator application for mathematics!

## Hack It ;)

You can easily customize this generator to something other. For an example, tweak with the logical formula a bit.

Instead of printing the whole sequence, you can just print the number on the **n***th* place. Meaning the sequential number on 18th place would be?

It is also possible to the Fibonacci sequence in a backward direction. Meaning that we start from infinite and then head over to one and finally zero. This is a bit hypothetical but it would be pretty cool to get answers from the generator like **infinite + x/n**. 

## How it looks?

![fibonaci 1](https://github.com/iamsid47/hangman-pics/blob/main/fibo%20-h%20-%201.png)

![fibonaci 2](https://github.com/iamsid47/hangman-pics/blob/main/fibo%20h%202.png)

![fibonaci 3](https://github.com/iamsid47/hangman-pics/blob/main/fibo%20h%203.png)
