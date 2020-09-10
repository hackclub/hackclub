---
name: Reaction Time Calculator
description: Calculate your reaction time with a Circuit Playground Microcontroller & CircuitPython
author: '@sampoder'
---

# Building a Reaction Time Calculator with a Circuit Playground
**This workshop requires a Circuit Playground Microcontroller, or the use of a simulator**

![Animated image of the Circuit Playground Express Board and it's Neopixels](https://cloud-9jybt8qho.vercel.app/ezgif.com-gif-maker.gif)

_Meet the Circuit Playground Express Board_

This workshop will guide you through creating your first project with CircuitPython. We're make a program that uses the built in Neopixels and buttons to find the user's reaction speed.

## What is CircuitPython?

Ever wanted to program a microcontroller with Python? That's what CircuitPython is for! It's a programming language based off Python that adds hardware support. It's primarily targeted towards use on low cost microcontrollers and has wide support. The best part, in my opinion, is that you can use all of Python's modules and packages.

## How can we set up our environment?

<details>
  <summary>I have a Circuit Python Express</summary>
  <ol>
    <li>Install CircuitPython onto your board, <a href="https://learn.adafruit.com/adafruit-circuit-playground-express/circuitpython-quickstart">here's how.</a></li>
    <li>Set up Mu Editor, this editor has in-built support for CircuitPython, <a href="https://learn.adafruit.com/adafruit-circuit-playground-express/installing-mu-editor">here's how</a></li>
  </ol>
</details>

<details>
  <summary>I don't have a Circuit Python Express</summary>
  <ol>
    <li><a href="https://code.visualstudio.com/download">Install Visual Studio Code</a></li>
    <li><a href="https://marketplace.visualstudio.com/items?itemName=ms-python.devicesimulatorexpress">Install this VSCode extension</a>, instructions are on the page.</li>
  </ol>
</details>

## Turning on the Neopixels

To start, here's some starter code, copy and paste it into your editor:

```python
from adafruit_circuitplayground import cp

while True:
    # Write some code here
```

We'll write all our code, in the `while` loop, this runs continuously whilst the board is powered.

The first thing we want to do is turn on an LED. Place the following code block into your `while` loop.

```python
cp.pixels[0] = (25, 0, 0)
```

What colour does your first Neopixel turn? That's right: RED! These colours are being inputted as RGB codes, this means that the value is `(RED_VALUE, GREEN_VALUE, BLUE_VALUE)`. Using this information, try turning the Neopixel blue.

<br />

![Image of a singular Neopixel lit up in red](https://cloud-58zrl3sh6.vercel.app/screenshot_2020-09-10_at_11.58.40_pm.png)

<br />
You may also be wondering why our first Neopixel is set using `cp.pixels[0]` and not `cp.pixels[1]`. That's because computers count from 0 and not 1.

## Adding a bit of randomness!

If we want to test reactions, people can't just expect what is going to happen! It's time to randomize it!

To generate a random number we can use the random library in Python. _(see why CircuitPython is great?)_

To add the library, add this just below where we imported the Circuit Playground library. We're also adding the `choice` library for later.

```python
from adafruit_circuitplayground import cp
from random import randint, choice # <- add this
``` 

`randint` is a function that returns a random integer. Add the following to your `while` loop, just above

```python
while True:
    random = randint(1, 7) # <- add this
    cp.pixels[0] = (25, 0, 0)
```

This creates a variable, and it assigns it a random value between 1 and 7. However, it doesn't effect our program.

Let's make it so that if the random number is 1, we show a blue light otherwise we show a red light. Let's make our `while` function look a bit like this.

```python
while True:
    random = randint(1, 7)
    if random == 1:
        cp.pixels[0] = (0, 0, 25)
    else:
        cp.pixels[0] = (25, 0, 0)
```

When you run it do you see the occasional blue light? You might, but it is all happening super quickly. Let's add the Time library and give our program some time to rest

```python
from adafruit_circuitplayground import cp
from random import randint, choice 
from time import sleep # <- add this
``` 

Now, at the end of our while function add:

```python
sleep(2)
```
This will make our program sleep for 2 seconds before changing LED colour. Is it easier to see the colour changing now?

## Adding more colours and Neopixels!

Let's jazz up this project a bit more :)

First off, more Neopixels! For ergonomic reasons, we're going to be using half of the Neopixels. This will make it easier to hold when using the device.

This quite simple, to do we just need to add a line for each Neopixel like this:

```python
while True:
    random = randint(1, 7)
    if random == 1:
        cp.pixels[0] = (0, 0, 25)
        cp.pixels[1] = (0, 0, 25)
        cp.pixels[2] = (0, 0, 25)
        cp.pixels[3] = (0, 0, 25)
        cp.pixels[4] = (0, 0, 25)
    else:
        cp.pixels[0] = (25, 0, 0)
        cp.pixels[1] = (25, 0, 0)
        cp.pixels[2] = (25, 0, 0)
        cp.pixels[3] = (25, 0, 0)
        cp.pixels[4] = (25, 0, 0)
    sleep(2)
```

Let's randomize the colours as well! We'll create an array of colours, just like: 

```python
from adafruit_circuitplayground import cp
from random import randint, choice 
from time import sleep
colours = [(25, 0, 0), (0, 25, 0), (0, 0, 25)] # <- add this
``` 

What we'll be doing is that, either there will be all 5 Neopixels with the same random colour or 5 Neopixels each with their own random colour.

This is where we use the `choice` function! If we add `choice(colours)` it will chose a random colour from our array.

Let's adapt our `while` loop to add this:

```python
while True:
    random = randint(1, 7)
    if random == 1:
        colour = choice(colours)
        cp.pixels[0] = colour
        cp.pixels[1] = colour
        cp.pixels[2] = colour
        cp.pixels[3] = colour
        cp.pixels[4] = colour
    else:
        cp.pixels[0] = choice(colours)
        cp.pixels[1] = choice(colours)
        cp.pixels[2] = choice(colours)
        cp.pixels[3] = choice(colours)
        cp.pixels[4] = choice(colours)
    sleep(2)
```

Now you should be seeing more colours and more Neopixels lighting up!

<br />

![Image of 5 Neopixels lit up in random colours](https://cloud-av6xy9ome.vercel.app/screenshot_2020-09-11_at_12.03.33_am.png)

<br />

## Calculating reaction speed

Now for the moment you've all been waiting for.... calculating the reaction speed!

What we want to happen is that when all the Neopixels are the same colour, the user must click the button. We'll then see how long it takes them to do so and provide that amount.

First we need to know whether the button is clicked or not, calling `cp.button_b` will return a boolean (true or false). If it is True, the button is being pushed down.

To find the time taken to press the button, let's use this function:

```python
timePassed = 0

while cp.button_b == False:

    sleep(0.001)

    timePassed+=0.001
```

We should add this to the end of our if statement, after `cp.pixels[4] = colour`. What it does is it first declares a variable, this value will tick up as time passes. We then have a `while` loop, this will continue to run until the value of `cp.button_b` isn't false, AKA the button has been pressed. In this while loop it is adding, 0.001 seconds to the timePassed variable for every 0.001 seconds that passes. This also means that our device is accurate up until milliseconds.

Now we need to display the data, we can do this by printing just like in normal python. CircuitPython will send this via Serial communication to your programming machine. Add this after the above code, not in the `while` loop though.

```python
print("Your reaction speed was " + str(timePassed) + " seconds.")
```

![Terminal log saying 'Your reaction speed was 0.06500000000000004 seconds.'](https://cloud-lbewgjm9s.vercel.app/screenshot_2020-09-11_at_12.16.46_am.png)

Here's what I got how about you? Maybe share you could share this on your #scrapbook!

We've done it! Epic work!

## Challenges

We're only getting started!!! The Circuit Playground Express is feature rich board and there are endless possibilities. Here are some challenges for you:

1. Allow the device to be turned on and off, look into using the switch on your board. Plugging things in and out isn't a fun way to power off. ([Sample code](https://github.com/hackclub/hackclub/blob/main/workshops/cpx_reaction_time/src/switch.py))
2. Add sound effects, look into [this article](https://learn.adafruit.com/circuitpython-made-easy-on-circuit-playground-express/play-tone)! ([Sample code](https://github.com/hackclub/hackclub/blob/main/workshops/cpx_reaction_time/src/sound.py))
3. Our little project has a flaw, what if the rare event of all 5 Neopixels each have the same randomized colour. How can we solve that? ([Sample code](https://github.com/hackclub/hackclub/blob/main/workshops/cpx_reaction_time/src/edge-case.py))

I'm leaving the project into your hands now, have fun with it! (p.s I think adding multiplayer support to this would be super fun!)
