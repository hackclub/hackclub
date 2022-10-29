---
name: 'Sprig Dodging Game'
description: 'Doge falling obstacles. Learn how to make it using Sprig!'
author: '@SamDev-7'
img: 'TODO'
---

In this workshop, we'll be building a dodging game using [Sprig](https://sprig.hackclub.com). The player will have to doge the falling obstacles to score points. Sprig is a JavaScript game engine that makes it easy for beginners and masters to make games, all in your browser.

Basic JavaScript knowledge is recommended for this workshop.
If you're not familar with Sprig, you can check out the [Getting Started Guide](https://github.com/hackclub/sprig/blob/main/docs/GETTING_STARTED.md) to learn the basics. 

Here's what your game could end up looking like:
![TODO: Add a gif of the game]()
[Live Demo](TODO: Add a link to the live demo)

## 1. Getting Started

Open up the [Sprig Editor](https://editor.sprig.hackclub.com). Create a new game (`file` > `new game`). This is where we'll be coding our game.

We won't be using the default Sprig game, so let's delete everything except the orange comments at the top. We'll be starting from scratch.

Your file should look something like this:

```js
/*
@title: crashing_rhyhorn
@author: your_name
*/
```

Let's make it ours. Set the `@title` to the name of your game, in this case `dodging_game` and set the `@author` to your name.

Mine looks something like this:

```js
/*
@title: dodging_game
@author: sam liu
*/
```

Let's start programming!

## 2. Making the sprites

We have to tell Sprig what our characters, players, and objects are. This is possible with sprites.

### a) Defining the sprites

In our game, we'll be using two sprites: the player and the obstacles.
Each sprite has a key, this is a single character that tells Sprig which sprite is which.

```js
const player = "p";
const obstacle = "o";
```

> `p` and `o` are assigned to our sprites, `player` and `obsatcle`, respectively. 

### b) Making art for the sprites

Add the following to your code.

```js
setLegend(
    [player, bitmap`...`],
    [obstacle, bitmap`...`]
);
```

> `setLegend()` will tell Sprig what image to display for each sprite.

Click on the green `bitmap` text to open the pixel editor. Select colors and tools on the right to draw your sprites in the 16x16 area. Be creative with your design.

![TODO: Add a gif of the pixel editor]()
> The bitmap is stored as a string. You can click on the arrow next to the line number to expand or hide it. <br> Each character represents a pixel and its color.

<details>
<summary>Here's what I came up with.</summary>

```js
setLegend(
    [player, bitmap`
................
................
................
.....00000......
....0.....0.....
....0.0.0.0.....
....0.....0.....
....0.000.0.....
....0.....0.....
.....00000......
.......0........
.....00000......
.......0........
.......0........
......0.0.......
.....0...0......`],
    [obstacle, bitmap`
.......66.......
........6.......
.....66.6.6.....
....66.66.66....
....666666.6....
...6699999966...
...69999999966..
..669999999996..
..669933339996..
..699333333996..
..699333333996..
...69333333996..
...69333333996..
...6993333996...
....66999996....
.....666666.....`]
);
```

> Your design probably will be different. <br> I tried my best, my art skills are not the best.

</details>

Hit the run button to load the legend. Nothing will show up yet but This will allow us to make our map in the next step.

## 3. Making the level

Levels are the easiest way to tell Sprig what to display on the screen. We'll only be having one level.

The following code can be used to make and set the level map.

```js
setMap(map`.`);
```

Similar to sprites, click on the green `map` text to open up the map editor. Use the `+` and `-` signs on the edges to expand ot shrink the map. We want to create a 8x8 map.

Our map will only contain the player. We will write code later to spawn in the obstacles.

It should look something like this.
![TODO: Add a img of the map editor]()

The code after expanding should be similar to this.

```js
setMap(map`
........
........
........
........
........
........
........
...p....`);
```

> Similar to the sprites, each character represents a sprite. <br> The `.` represents an empty tile.

## 5. Adding controls

A game is no fun if you cannot interact with it. We'll be adding controls to our game so the player can move. Sprig allows for the use of `wasd` and `ijkl` keys. We'll be using `w` and `d` to move the player left and right.

```js
onInput("a", () => {
  getFirst(player).y -= 1;
});
```

> `onInput()` will run the code of the function when the key is pressed. <br> `getFirst()` will get the first sprite of that type. <br> We decrement its x position to move it left.

This is similar to the code for moving right.

```js
onInput("d", () => {
  getFirst(player).y += 1;
});
```

> We increment its x position to move it right.

In Sprig, the top left is `(0, 0)`.

Run your game! We're now able to control the player with the `a` and `d` keys.

## 6. Spawning in obstacles

