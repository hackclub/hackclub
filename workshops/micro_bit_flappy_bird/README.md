---
name: 'micro:bit Flappy Bird'
description: 'Create a basic Flappy Bird Game using BBC micro:bit'
author: '@giridhar7632'
img: 'https://cloud-ak4m6yygi.vercel.app/0final_output.gif'
---

Have you ever heard about the popular BBC micro:bit? In this workshop we are going to work with BBC micro:bit and create a basis **Flappy Bird Game** using it. Check out the final project.

[![Final Project](https://cloud-kifx081bh.vercel.app/0flappy_bird.png)](https://makecode.microbit.org/_i6g2xLFeTTfP)

Here's the [demo/code](https://makecode.microbit.org/_i6g2xLFeTTfP).

## How to play...

The objective is to direct a flying bird :bird: which is moving continuously to the right, between sets of obstacles. If the player touches an obstacle, they lose. You can check the original Flappy Bird Game [here](https://flappybird.io/).

## Prerequisites

Extremely basic knowledge of any programming language. We are going to use JavaScript to code our micro:bit.

If you don't have the hardware, don't worry we'll use a stimulator in this workshop. [Makecode's](https://makecode.microbit.org) micro:bit simulator was excellent!

## Getting Started

A micro bit is a tiny piece of hardware with many features. It a pocket-size computer which performs what you say. We have to write a computer program and upload it to the micro:bit what to do. A micro USB cable is used to transfer the code from PC to micro:bit.

![micro:bit](https://cloud-kifx081bh.vercel.app/1microbit.jpg)

A micro:bit can only do what you tell it to do. You can use different programming languages to write programs like [Makecode](https://makecode.microbit.org/), which you can use to code in code blocks or JavaScript. You can also use [Python](https://python.microbit.org/v/2) to program a micro:bit.

On the front face, it has 25 LEDs which we will use to display our game.

These are the main parts of a micro:bit:point_down:

![micro:bit parts](https://cloud-kifx081bh.vercel.app/2microbitparts.jpg)

Learn more about micro:bit [here](https://microbit.org/get-started/user-guide/overview/).

## Setup

Open [Makecode](https://makecode.microbit.org/) and click on :heavy_plus_sign:`New Project`.

![Setup](https://cloud-kifx081bh.vercel.app/3setup.png)

Give it a name.

![naming project](https://cloud-kifx081bh.vercel.app/4name_your_roject.png)

You should see something like this. 

![Project created](https://cloud-kifx081bh.vercel.app/5preview.png)

Once you finish setting up, let's get going:rocket:

## JavaScript

By default, MakeCode open's a project with code blocks. At top of the window, switch to JavaScript.

![JavaScript](https://cloud-kifx081bh.vercel.app/6javascript.png)

The MakeCode programming environment uses JavaScript along with the Static [TypeScript](https://www.typescriptlang.org/) language. Don't worry about TypeScript. It is super similar to JavaScript. We will use most of the micro:bit’s built-in JavaScript functions. For example, the `showString()` function displays a string on the LED screen. It will scroll to the left if it’s bigger than the screen.

Try displaying your name. Here's mine: 😊

```js
basic.showString("Giridhar!")
```

![name](https://cloud-kifx081bh.vercel.app/7name.gif)

## Step-1

Let's start with adding the bird. We just have 25 LEDs. Don't expect more. We have to assume a blinking LED as a bird😂

Don't mind about the previously existing code. 

Create a new LED sprite pointing to the right. A sprite is like a little LED creature you can tell what to do.

```js
let bird: game.LedSprite = null
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
```

A variable `bird` is declared in TypeScript. The syntax of declaring a varible in TypeScript is: `let identifier:data-type = value;`

The `game.createSprite(x,y)` creates a sprite(our bird) in position (x, y) on the 5x5 grid of LEDs. Then we set our bird to blink every 300 milliseconds.

You can see our bird flying like this:point_down:

![blinking LED](https://cloud-70aevdanf.vercel.app/0bird.gif)

## Step-2

Now let's create some controls.  We’ll control the bird by pressing the A button to go up or the B button to go down.

Micro:bit has built-in [event handlers](https://makecode.microbit.org/reference/event-handler) that are associated with a particular event, such as "button A pressed".  `.onButtonPressed` handler works when button A or B is pressed, or A and B together. They are just like event listeners in JavaScript but with custom events.

```js
input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
```

Now when button any is pressed, the position of the bird should change by 1 unit(up or down).

![controls](https://cloud-70aevdanf.vercel.app/1controls.gif)

## Step-3

Let's create some randomly generated obstacles for the bird to crash💥

We’ll keep all obstacles inside an array. All obstacles will have a single hole for the bird to fly through.

First, create an array of `obstacles` that will hold all of the obstacle sprites.

```js
let obstacles: game.LedSprite[] = []
```

Now let's generate vertical obstacles consisting of 4 sprites and 1 random hole. Create a variable `emptyObstacleY` and store a random number between 0 and 4 in it. The function `randint(a,b)` creates a random number between `a` and `b`.

```js
let emptyObstacleY = 0
let obstacles: game.LedSprite[] = []

emptyObstacleY = randint(0, 4)
```

Using the `for` loop, iterate from 0 to 4. For every coordinate not equal to `emptyObstacleY` create and add obstacle sprites to the end of the obstacles array using the `push()` method.

```js
let emptyObstacleY = 0
let obstacles: game.LedSprite[] = []

emptyObstacleY = randint(0, 4)
for (let index = 0; index <= 4; index++) {
    if (index != emptyObstacleY) {
        obstacles.push(game.createSprite(4, index))
    }
}
```

Now with every micro:bit restart you should see different autogenerated vertical obstacles.

![random obstacles](https://cloud-70aevdanf.vercel.app/2random_obstacles.gif)

Before continuing, make sure that obstacles are generated randomly and that the bird is moving up and down.

## Step-4

Let's make the obstacles move towards the bird. We have to make them move forever. The code inside `basic.forever()` keep running in the background. 

Inside `forever()` access each obstacle using a `for` loop (iterate over the obstacles array) and decrease the obstacle `X` coordinate by `1`.

```js
let obstacles: game.LedSprite[] = []

basic.forever(() => {
    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    basic.pause(1000)
})
```

Here, `basic.pause()` pauses the program for 1000 milliseconds(i.e., 1 second). Now obstacles should move towards the left every second.

![moving obstacles](https://cloud-70aevdanf.vercel.app/3moving_onstacles.gif)

## Step-5

Now let's make obstacles disappear after reaching the leftmost corner. Iterate over all obstacles, delete the obstacle sprites where the `X` coordinate equals `0`, and remove them from the `obstacles` array. `get(property: LedSpriteProperty)` is used to know about the properties of a sprite.

```js
let obstacles: game.LedSprite[] = []

basic.forever(() => {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }

    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    basic.pause(1000)
})
```

Now you see that when the obstacle reaches the bird it will just disappear.

![disappearing obstacle](https://cloud-70aevdanf.vercel.app/4disappearing_obstacles.gif)

## Step-6

At the moment, our code generates just one vertical obstacle at a time. We need to put obstacle generation code into the `forever` loop so that it keeps generating more and more obstacles.

```js
let emptyObstacleY = 0
let obstacles: game.LedSprite[] = []

basic.forever(() => {
    // all the previous code
    
    emptyObstacleY = randint(0, 4)
    for (let index = 0; index <= 4; index++) {
        if (index != emptyObstacleY) {
            obstacles.push(game.createSprite(4, index))
        }
    }
    basic.pause(1000)
})
```

Now our screen is full of moving obstacles like this :point_down:

![multiple obstacles](https://cloud-70aevdanf.vercel.app/5multiple_obs.gif)

Let's create some spaces between generated obstacles. Create a new variable `ticks` to count how many iterations the forever loop has done and execute obstacle creation only `if` ticks is divisible by `3`.

```js
let ticks = 0        
let emptyObstacleY = 0
let obstacles: game.LedSprite[] = []

basic.forever(() => {
    // all the previous code
    
    if (ticks % 3 == 0) {           
        emptyObstacleY = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != emptyObstacleY) {
                obstacles.push(game.createSprite(4, index))
            }
        }
    }
    ticks += 1
    basic.pause(1000)
})
```

Now you can see obstacles created with spaces and moving towards the left.

![Moving left](https://cloud-70aevdanf.vercel.app/6crashing_obstacles.gif)

## Step-7

We are now in the last part of creating the Flappy Bird game. 

Right now nothing happens when the bird is hit by an obstacle. We should end the game when the bird crashes into an obstacle. The built-in function `gameover()` ends the game and show some cool animations. 

To do this, we have to iterate over the `obstacles` array and checking if any `obstacle` sprite coordinate equals the `bird` coordinate. Then we call `gameover()` function.

```js
let bird: game.LedSprite = null
let ticks = 0
let emptyObstacleY = 0
let obstacles: game.LedSprite[] = []

basic.forever(() => {
    // all the previous code

    for (let obstacle of obstacles) {
        if (obstacle.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }

    ticks += 1
    basic.pause(1000)
})
```

Now the game ends when the bird is hit by an obstacle.

![Game over](https://cloud-70aevdanf.vercel.app/7game_over.gif)

Our Final will be:

```js
let ticks = 0
let emptyObstacleY = 0
let obstacles: game.LedSprite[] = []
let index = 0
let bird: game.LedSprite = null
input.onButtonPressed(Button.A, () => {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, () => {
    bird.change(LedSpriteProperty.Y, 1)
})
index = 0
obstacles = []
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(() => {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle2 of obstacles) {
        obstacle2.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstacleY = randint(0, 4)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 != emptyObstacleY) {
                obstacles.push(game.createSprite(4, index2))
            }
        }
    }
    for (let obstacle3 of obstacles) {
        if (obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})
```

## Step-8

If you are using hardware, click on the `Download` button and follow the instructions.

You're all set. Now you can just play the game.

![game](https://cloud-ak4m6yygi.vercel.app/0final_output.gif)

That's it! You created a simple Flappy Bird game on a micro:bit. 

![well done](https://cloud-70aevdanf.vercel.app/8well_done.gif)

## Hacking 

It's time for you to take charge.


- Try to count and show the game score. We have a built-in function `score()` for counting score. Learn more [here](https://makecode.microbit.org/reference/game/score).

- Try to make the obstacles move faster every time an obstacle is passed.

- We can play music using the micro:bit. You can explore it [here](https://makecode.microbit.org/reference/music/play-tone). Try to add sound when the bird is hit by an obstacle.

- As said, micro:bit is wonderful. It has so many built-in sensors. An accelerometer can check how the micro:bit is moving. Try to control the bird by tilting the micro:bit. You can use the `input.rotate()` function to find how much the micro:bit is tilted in different directions. You can learn more [here](https://makecode.microbit.org/reference/input/rotation).

## Inspiration

These are some examples from the makers of the micro:bit to inspire you.


- Adding score: [Simple clicking game](https://makecode.microbit.org/_gmtb8R03YU6e)- Press button `A` as much as possible to increase the score. Press `B` to display the score and reset the score.

- Using accelerometer: [micro:bit leveler](https://makecode.microbit.org/_6c4DEwFq7ftg) and [Egg and Spoon Race](https://makecode.microbit.org/_9Cr8duiXqhAd)

- Playing music: [Simple tilt alarm](https://makecode.microbit.org/_K4x1HtAccTPu)

PS: I'm [@Giridhar](https://hackclub.slack.com/team/U013E6KE9UJ) on Slack!


