---
name: 'Flappy Learning'
description: 'Make fun self-learn Flappy Bird
how to fly and survive longer'
author: '@ImBIOS'
img: 'https://cloud-qswnyhek4.vercel.app/0thumb.png'
---
# Flappy Learning

Only in easy and simple 32 lines of code, We will learn how to use Neuroevolution.js and Flappy-Bird game to learn how Machine Learning works.

This Flappy-Learning workshop is a workshop to show how to make a flappy bird game that works with Neuroevolution.js for a complete beginner.

![Result Preview GIF](https://cloud-215dmw1tc.vercel.app/0preview.gif)

_^ Cool, huh? not enough cool? Now we are going to make it in an easy and fun coding workshop_

![Get Ready GIF](https://media.giphy.com/media/3o7btXJQm5DD8ApubC/giphy.gif)

Ok, now we ready to code it. We will use the NeuroEvolution.js library and a starter flappy bird game for ease.

Cause we are focus on Machine Learning, I will provide the flappy bird javascript template from my other workshop. It' time for _Magic Lea_... I mean.. Machine Learning.

Here is the [starter project](https://repl.it/@iMega/flappy-learning-starter#code.js).

![Blank Project Pict](https://cloud-r8tk4yxo7.vercel.app/0blank_project.png)

_^ You will see something like this._

## NeuroEvolution Initialization
Let's begin our coding! We start from our first variable declaration for the Neuroevolution, let's give it a name, like Neuvol and game variable for the game function. Then we initialize the start function.

```js
var Neuvol;
var game;
var start = function(){

}
```

Inside of the start function, we will execute the Neuroevolution.js and initializing its needed options variable.

```js
var start = function(){
    Neuvol = new Neuroevolution({options});
}
```

Then we will create a neuron preceptor network. And we will set the population of the baby bird to learn to 50. You can tweak the network of course, but I recommending it as [2, [2], 1] or [4, [4], 1].

```js
var start = function(){
    Neuvol = new Neuroevolution({
        population:50,
        network:[2, [2], 1],
    });
}
```

We need to call the game to create a new Game() object then start, update, and show the graphical UI at the beginning of the game. We will call it below our Neuvol variable.

```js
var start = function(){
    Neuvol = new Neuroevolution({
        population:50,
        network:[2, [2], 1],
    });

    game =  new Game();
    game.start();
    game.update();
    game.display();
}
}
```

_^ Owh, where do these functions come from?_

These functions are some function already coded and it is included in the NeuroEvolution.js and game.js.

Let's move into the game initialization after before we were coded the NeuroEvolution initialization and tweaking.

## Game Initialization

The only function we write is the Game.prototype.start initialization and a few line of code inside it. Cool, huh?

```js
Game.prototype.start = function(){}
```

Easy. Then we initialize the time (this is must be zero in beginning), the score (of course everyone starts from zero, hackers too), the number of pipes already spawned... We don't want the pipes is overpowered so the array is still empty, and the last is the birds also in an empty set. 

```js
this.interval = 0;
this.score = 0;
this.pipes = [];
this.birds = [];
```

With some math, now we will make the birds spawning in the beginning and if all the birds in a generation are dead.

```js
this.gen = Neuvol.nextGeneration();
for(var i in this.gen){
    var b = new Bird();
    this.birds.push(b)
}
```

To memorize the amount of generation spawned. We will use the increment.

```js
this.generation++;
```

The last one is to understand how many birds still alive

```js
this.alives = this.birds.length;
```

## Final Code

Tada! Now you can start your Self-Learning Flappy Bird. Feels like being a hacking-Saiyan, huh? Me too.

![Awesome GIF](https://media.giphy.com/media/mXz3v0UdjrNTO/giphy.gif)

```js
// Initialize the Neuroevolution
var Neuvol;
var game;
var start = function(){
    Neuvol = new Neuroevolution({
        population:50,
        network:[2, [2], 1],
    });
    game = new Game();
    game.start();
    game.update();
    game.display();
}

// Initialize the Game start
Game.prototype.start = function(){
this.interval = 0;
this.score = 0;
this.pipes = [];
this.birds = [];

// Spawn first or next Generation
this.gen = Neuvol.nextGeneration();
for(var i in this.gen){
    var b = new Bird();
    this.birds.push(b)
}
//Increase the generation count
this.generation++;
// Number of alive birds
this.alives = this.birds.length;
}
```

## Hacking Further

Wanna be an ultimate super-Saiyan hacker? Let's go further!

You can play through this Flappy Learning by editing the NeuroEvolution Option variables. And even if you already a super-Saiyan or a pro, then you could understand the Neuroevolution.js and the game.js, you can tweak the default settings inside its script.

Example of Further Hack:

- Funny Hack, the bird will never fly, even it is never understanding how to use the flap function, [check it out](https://repl.it/@iMega/flappy-learning-funny).
- Expert understanding that the game.js have speed() function to control its iteration, [go here](https://repl.it/@iMega/flappy-learning-speed-selector).
- Ultimate speed of iteration!!! [Ultimate Skill](https://repl.it/@iMega/flappy-learning-ultimate).

I truly hope you enjoyed this workshop, happy hacking! Keep spirit to create some cool hack!