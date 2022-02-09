---
name: 'Game Lab: Crappy Birds'
description: 'Make a Game in the HacK Club Game Lab'
author: '@leomcelroy'
img: ""
---

Start by initializing your engine.

```js
const e = createEngine(gameCanvas, 300, 300);

e.start();
```

We are then going to add a character.

First we need to make a sprite asset in the sprite editor.

Click "Create Sprite".

We can add our bird by using the `add` property on the engine.

```js

e.add({
  sprite: birdy,
  scale: 2.4,
  x: 10,
  y: 30,
})
```

`add` takes a lot of optional parameters which you can find in the reference pop-out.


```js
const e = createEngine(gameCanvas, 300, 300);

const bgTune = loopTune(backgroundTune);

const randInRange = (min, max) => Math.floor(Math.random()*(max - min) + min);

let score = 0;
const scoreText = e.addText(score, 268, 31, { size: 28 })

const gameover = () => {
  e.end();
  e.addText("GAME OVER", e.width/2, e.height/2, { size: 36})
  bgTune.end();
  playTune(gameoverTune);
}

e.add({
  sprite: birdy,
  scale: 2.4,
  x: 10,
  y: 30,
  collides: (me, them) => {
    if (them.hasTag("wall")) {
      gameover();
    }
  },
  update: (me) => {
    me.vy += .6;

    if (e.pressedKey(" ")) {
      me.vy -= 15;
    }

    if (me.y < 0) {
      gameover();
    }

    if (me.y + me.height > e.height) {
      gameover();
    }
  }
})

const addWall = (x, y, gap) => {
  e.add({
    tags: ["wall"],
    sprite: wall,
    scale: 7,
    x: x,
    y: y-gap,
    vx: -4,
    update: (me) => {
      if (me.x + me.width < 0) {
        e.remove(me);
        addWall(e.width, randInRange(170, 270), randInRange(374, 409))

        score = score + 1;
        scoreText.text = score;
      }
    }
  })
  
  e.add({
    tags: ["wall"],
    sprite: wall,
    scale: 7,
    x: x,
    y: y,
    vx: -4,
  })
}

addWall(e.width, randInRange(170, 270), randInRange(374, 409));

e.start();
```
