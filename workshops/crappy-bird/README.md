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

Click "Create Sprite" and draw your character.

<img width="1346" alt="Screen Shot 2022-02-09 at 1 52 20 PM" src="https://user-images.githubusercontent.com/27078897/153272367-af4f5891-7f2c-4fd1-8086-fae9f9a17dd7.png">

We can add our bird by using the `add` property on the engine.

```js

e.add({
  sprite: birdy,
  scale: 2.4,
  x: 10,
  y: 30,
})
```

<img width="1345" alt="Screen Shot 2022-02-09 at 1 52 37 PM" src="https://user-images.githubusercontent.com/27078897/153272449-40e14687-d69e-4a16-b84a-309d89322c85.png">

`add` takes a lot of optional parameters which you can find in the "Reference" pop-out (the question mark button).

We use `scale` to size up the sprite.

Next let's add some walls.

```js
e.add({
  sprite: wall,
  scale: 7,
  x: 100,
  y: 500,
})

e.add({
  sprite: wall,
  scale: 7,
  x: 100,
  y: 200,
})
```

That should result in something that looks like this.

<img width="375" alt="Screen Shot 2022-02-09 at 1 52 54 PM" src="https://user-images.githubusercontent.com/27078897/153272793-15ce11e2-cf40-4fb5-a77e-7f315dab5207.png">

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
