---
name: Turtle Stars
description: Use the Turtle module in Python to draw shapes
author: '@LinusS1'
---
Here you'll learn how to draw shapes with Turtle, in Python! 

At the end, here's what you'll end up with this 👇

![Screenshot of finished project](https://cloud-24wvawo2v.vercel.app/screen_shot_2020-09-21_at_8.37.11_pm.png)

We'll use Turtle and repl.it to create this!

[DELETE LATER: Time spent 6 HOUR]
TODO: ADD ALT TEXT

## Get the repl setup

To run the program, we need to set up a repl at [repl.it](https://repl.it/languages/python_turtle) if you create it yourself, be sure to select Python **with Turtle**.
![Screenshot of setup dialog, with the option "Python with Turtle" selected](https://cloud-p930s814w.vercel.app/screen_shot_2020-09-21_at_5.56.29_pm.png)


To check that everything's working nicely, go ahead and run `print("Hello, World!")` in the console.
![Screenshot of the repl](https://cloud-3vcq6wyzy.vercel.app/screen_shot_2020-09-21_at_6.09.02_pm.png)

## Starting with Turtle

First, in the code editor we'll start by importing the Turtle module. This lets us create the window, and control the turtle. 
```python
import Turtle
```
After we've imported the Turtle module, we should draw a line. To do this we instansiate a turtle object and assign it to the variable `t`. 
```python
t = turtle.Turtle()
```
Then we'll draw a line with `t.forward(30)`. This tells the turtle module to draw a line in the way the turtle is facing, with 30 being the distance it travels!

Click the `Run` button to run your code and see the result!
![Screenshot of the repl, with the run button circled, and the result from the code shown.](https://cloud-kccy5wgvf.vercel.app/screen_shot_2020-09-21_at_6.13.05_pm.png)


## Seeing Stars

Now we'll draw some shapes!
Go ahead an delete the `t.forward(30)` line, we don't need it anymore.

Now we'll make a square! The only new thing that's needed is `t.left(90)` to turn the turtle left 90 degrees, or `t.right(90)` to turn the turtle right 90 degrees.
So to draw a line and turn right, we have:
```python
t.forward(50)
t.right(50)
```
Repeat that 3 more times, and we have a square!
![](https://cloud-6mmavpebo.vercel.app/screen_shot_2020-09-21_at_6.15.31_pm.png)

Repeating the same lines of code becomes very tedious! To fix this, we can use a `for` loop. A `for` loop runs the code inside of it repeatedly for a specified number of times. To create a `for` loop that repeats 4 times in Python you use:
```python
for i in range(0,4):
	<code>
```
Let's use that to make our square:
![Screenshot of the code to make a square, with the result.](https://cloud-75mldtd4g.vercel.app/screen_shot_2020-09-21_at_6.17.16_pm.png)

Time to make a 5 pointed star! To make a star, all we need to change are how far the "turtle" travels, the angle, and how many times the code repeats.
![Screenshot of the code to make a star, with the resullt.](https://cloud-2knfvvxkr.vercel.app/screen_shot_2020-09-21_at_6.20.38_pm.png)

⚠️ If you want to make your turtle less slow, add `t.speed(9)` right after `t = turtle.Turtle()`.

You can also make other types of stars like this crazy one: Repeating 37 times, and turning 175 degrees left.
![Screenshot of the code and result of a star.](https://cloud-gzydlayz2.vercel.app/screen_shot_2020-09-21_at_6.24.33_pm.png)

Here's another "star":
![Screenshot of the code and result of a star.](https://cloud-rkgq9t6p3.vercel.app/screen_shot_2020-09-21_at_6.30.36_pm.png)

Go ahead and try adjusting the angle of the star, and the number of times it loops!

### Introducion to functions

All this code is so far is good, but what if you want to make a star multiple times? What if you want to make many different stars, each with a different number of angles? It gets hard to continuously copy and paste.

To help with this, we can use functions. Functions are an easy way to reuse code. A function in Python looks like this:
```python
def function_name(parameter1, parameter2):
	<Function code>
```
A function takes inputs which are parameters and gives an output.
Our square function looks simple:
```python
def draw_square(side_length):
	for i in range(0,4):
		t.forward(side_length)
		t.right(90)
```

We can also make a star function. The parameters would be the side length, the angle, and the total number of times it should repeat.
```python
def draw_star(side_length, angle, repeat):
	for i in range(0, repeat):
		t.forward(side_length)
		t.right(angle)
```
When you want to use a function, you call it. To call the `draw_star` function, we would use `draw_star(50, 175, 37)`

This is what our code looks like now:
![Screenshot of the code seperated into functions, with the result shown.](https://cloud-i4jwchvoi.vercel.app/screen_shot_2020-09-21_at_6.34.23_pm.png)

You can learn more about functions on [learnpython.org](https://www.learnpython.org/en/Functions)

## Collect stars
For the final section, we'll make a collection of stars. We can use the `penup()` function of the `turtle` module to stop drawing, but still move the turtle. To start drawing again, we can use the `pendown()` function.

For example, what if we wanted to draw a square then move to the left and draw a 5 pointed star?
Here we use `t.backward(200)`. It's the same as `t.foward(200)`, except it moves the turtle backward.
![Screenshot of code with a star on the left, and a square on the right.](https://cloud-b217yt8jh.vercel.app/screen_shot_2020-09-21_at_6.37.57_pm.png)

What if we wanted to draw 3 stars in a row?
![Screenshot of 3 stars drawn in a row.](https://cloud-1xrc8fcl6.vercel.app/screen_shot_2020-09-21_at_6.41.18_pm.png)

What about a big square with 4 stars in it?
![Screenshot of a big square drawn around 4 stars](https://cloud-rfus6gb6n.vercel.app/screen_shot_2020-09-21_at_6.53.57_pm.png)
As you can see, the possiblities are endless. Go ahead and create your own collection, and try some of the extra things below!

## What's next?
1. Draw more shapes using turtle, and add them to your collection! Be sure to make them functions. 
2. Make the shapes colored! You can find how to do that in the [Python turtle docs.](https://docs.python.org/3/library/turtle.html#turtle.color)
3. [Learn about the random module](https://docs.python.org/3/library/random.html?#functions-for-integers): and make the collection random. For example, you can randomize which shapes are drawn, what colors are choosen, and how far apart they are!

You can find all my code, including the extras [on GitHub.](https://gist.github.com/LinusS1/42aafd0b4c9f74c8907df92570e5d088)

🐢⭐️ *Thanks for doing my workshop! If you have any questions, I'm @Linus on the Hack Club Slack!* ⭐️🐢
