#Welcome to Processing.js
[Processing](http://processing.org/) is a programming language [started in 2001 by a couple of MIT graduate students](http://en.wikipedia.org/wiki/Processing_(programming_language)). Their goal was to create a programming language for non-programmers that features tons of visual feedback. In this tutorial, you'll be learning about it's web port, [processing.js](http://processingjs.org/).

##Why processing.js?
Processing.js is really easy to start with. It's great as a first programming language because you can get into all the standard computer science and programming fun while making cool-looking visual programs. It's straightforward to learn, feeds into lots of other languages (particularly java and javascript), and lets you make things you can show to everyone on anything that has a browser.

##Goals
You'll learn the things you'll need to know to get up and running making your own programs in processing.js. You'll be able to draw, animate, and interact with programs before you're done and hopefully be eager to get further into programming.

##Prerequisites
This guide will assume you know math up to pre-algebra. No prior programming experience is required.

##(No) Setup
Go to https://www.khanacademy.org/cs/new to see KhanAcademy's processing.js editor. It executes your code as you type it, lets you publish your programs with ease, and most importantly requires you no setup. Make an account if you want, it'll let you ask questions on the site, keep your programs in one place, and recieve points. If you're not familiar with KhanAcademy, it's a website for free videos on math, science, the arts, economics, and computing.

#What's programming?
Programming is writing code that computers read and execute. Computers only do what they're told- they follow steps. When a programmer writes code, they're writing the steps that a computer will wind up going through.

Programming is everywhere. It's in your fridge, in movies, in games, in robots, in cars and websites and anything that ever needed a computer at any point.

#Let's start drawing
Navigate over to https://www.khanacademy.org/cs/new where we'll begin to program. If you'd like to, sign in so you can keep programs saved to your account. 

On this page you'll notice a few things. A box for the name of the program is near the top. Underneath it, on the left, is where you enter code, and on the right of that is where the fruit of your labor (the program) shows up. Below that, there's a reference for processing.js.

##rect
Change the name of the program from "New Program" to "rect" and type in the following code. Watch for capitalization, spelling and punctuation - it matters. Luckily, if you mess up KhanAcademy's Oh Noes Guy/Error Buddy will tell you what you did wrong - capitalize the second 'rect' or remove the semicolon and you'll see him come up.
```
// draws a rectangle using the 'rect(x, y, width, height)' command
rect(100, 100, 100, 100);
```

We just drew a square!

Now try sliding the numbers around. Click on the first 100 and there'll be a popup thet'll let you change the number, moving the square left and right. This is because the x, the 'pixel column' the square's left side is in, is changing. Sliding around the second 100 will let move the square up and down. This is because the y, in this case the 'pixel row' the square's top side is in, is changing. 

The size of the canvas you draw on is 400 pixels wide by 400 pixels high. This means (0, 0), aka x=0 y=0, is the top left corner (y is the row, x is the column) and (399, 399), aka x=399 y=399, is the bottom right. You probably find it funny that we start with 0 instead of one. Doing this saves space. 

Keep sliding the numbers around, I'll wait. Try messing with the width and height, too. Maybe try breaking the code and seeing what errors pop up.
...
..
. .
.
 ..
 .
  .

So lets take a quick peek at what the computer's doing behind the scenes. When it sees the code `rect(100, 100, 100, 100);` it sees you're want some set of code named 'rect' to do something with the numbers (100, 100, 100, 100). This code you're "calling" is called a _function_, it's a set of instructions for the computer. The numbers are called _parameters_. If a function draws a shape, like rect does, it needs parameters that tell it the location and size of the shape. Any function that needs data to work will take them in as parameters.

Alright, here's a challenge: make a program that prints out a football goal post with four calls to rect. When you're done move on to the next section.
|_|
 |

