---
name: 'Game Lab: Dino Jump'
description: 'Make a Game in the Hack Club Game Lab'
author: '@leomcelroy'
img: "https://user-images.githubusercontent.com/27078897/153313648-ee21e62f-638d-41be-81a0-00c903b9ad12.png"
---

Let's make a [game](http://gamelab.hackclub.com/?id=0ebcff384feebe3393f4d275359843a0) in the [Hack Club Game Lab](https://www.gamelab.hackclub.com)!

[
![IMAGE OF GAME LAB](https://user-images.githubusercontent.com/27078897/153313648-ee21e62f-638d-41be-81a0-00c903b9ad12.png)
](https://www.gamelab.hackclub.com)

## Walkthrough

Start by creating a new project. It's the first button on the left in the button menu.

Initialize your engine like so:

```js
const e = createEngine(gameCanvas, 300, 300);

// your code goes in here

e.start();
```

We are then going to add a character.

First we need to make a sprite asset in the sprite editor.

Click "Add Sprite".

We can add our character by using the `add` property on the engine.

You'll have to rename the sprite to match the name in the game script 
on the line that looks like `sprite: player`.

![GIF_MAKING_SPRITE](https://user-images.githubusercontent.com/27078897/153313678-649d619a-6de9-4ab5-8e0d-94edc1ab7b4d.gif)

```js

e.add({
  sprite: player,
  scale: 4, // we can size up the sprite with scale
  x: 40, // position it with x and y
})
```

![Screen Shot 2022-02-09 at 6 51 18 PM](https://user-images.githubusercontent.com/27078897/153313723-0f10a49c-c37b-47c3-a75a-9cdc132dbe64.png)

`add` takes a lot of optional parameters which you can find in the reference pop-out.

We want our sprite to fall so let's add some gravity. We can do so by adding an update function which will execute each step in the game loop. 

```js

e.add({
  sprite: player,
  scale: 4, // we can size up the sprite with scale
  x: 40, // position it with x and y
  update: (me) => { // this will run each step in the game loop
    me.vy += 1; // velocity changing every frame is acceleration
  }
})
```

![GIF_SPRITE_FALLING_OBLIVION](https://user-images.githubusercontent.com/27078897/153313761-8c613a4f-9fb2-40e2-990b-1334fb323c45.gif)

Now our character just falls into oblivion. Let's prevent that by adding a floor.

Create a floor sprite like we did before with our player sprite and add it to the game script.

```js
e.add({
  sprite: player,
  scale: 4, // we can size up the sprite with scale
  x: 40, // position it with x and y
  update: (me) => { // this will run each step in the game loop
    me.vy += 1; // velocity changing every frame is acceleration
  }
})

e.add({
  sprite: floor,
  scale: 15,
  x: 0,
  y: 284,
})
```

![GIF_FALLING_THROUGH_FLOOR](https://user-images.githubusercontent.com/27078897/153313796-1b793a75-fcd0-4627-83f3-343896ee7220.gif)

We've got a floor now but our character falls through it? We need to let the engine know that the player and the floor should not be able to pass through each other. We can do that with the `solid` property.

```js
e.add({
  solid: true,
  sprite: player,
  scale: 4, // we can size up the sprite with scale
  x: 40, // position it with x and y
  update: (me) => { // this will run each step in the game loop
    me.vy += 1; // velocity changing every frame is acceleration
  }
})

e.add({
  solid: true,
  sprite: floor,
  scale: 15,
  x: 0,
  y: 284,
})
```

![GIF_HITTING_FLOOR](https://user-images.githubusercontent.com/27078897/153313827-a326f03b-7bc1-4b38-8eb6-1c8e557e22fe.gif)

Let's give our player the ability to jump.

We can do this with the `pressedKey` property of the engine. We'll check if the key was pressed in the updated loop of the player.

```js
e.add({
  solid: true,
  sprite: player,
  scale: 4, // we can size up the sprite with scale
  x: 40, // position it with x and y
  update: (me) => { // this will run each step in the game loop
    me.vy += 1; // velocity changing every frame is acceleration

    if (e.pressedKey(" ")) { // if the space key was pressed
      me.vy -= 20; // we jump
    }
  }
})
```

![GIF_SPRITE_JUMPING](https://user-images.githubusercontent.com/27078897/153313845-89bbb86d-af56-400b-af89-dbcfb60a3398.gif)

Now that we've got a character and some controls let's create some obstacles.

We can draw an obstacle sprite like we did before and pop it into the game script.

```js
e.add({
  sprite: obstacle,
  scale: 3,
  x: 250,
  y: 225
})
```

![IMAGE OF OBSTACLE ON SCREEN](https://user-images.githubusercontent.com/27078897/153313856-ab6c6e07-d048-4431-b70a-e88949d32ac9.png)

We want this obstacle to move to the left so let's give it some velocity.

```js
e.add({
  sprite: obstacle,
  scale: 3,
  x: 250,
  y: 225,
  vx: -3
})
```

![GIF_OBSTACLE_MOVING](https://user-images.githubusercontent.com/27078897/153313888-2b1b1604-0b57-444a-bbbb-cb51b95acc9d.gif)

When we hit the player the game should end. To do that let's add a `collides` handler to the player object. To check what we collided with we'll need to add a tag to the obstacle.

```js
e.add({
  solid: true,
  sprite: player,
  scale: 4, // we can size up the sprite with scale
  x: 40, // position it with x and y
  update: (me) => { // this will run each step in the game loop
    me.vy += 1; // velocity changing every frame is acceleration

    if (e.pressedKey(" ")) { // if the space key was pressed
      me.vy -= 20; // we jump
    }
  },
  collides: (me, them) => {
    if (them.hasTag("obstacle")) { // did we hit the obstacle
      e.end(); // then end the game
    }
  }
})

e.add({
  tags: ["obstacle"],
  sprite: obstacle,
  scale: 3,
  x: 250,
  y: 225,
  vx: -3
})
```

![GIF_GAME_OVER_NO_TEXT](https://user-images.githubusercontent.com/27078897/153315111-760b91f4-7438-45e9-b215-d5e713698610.gif)

While we are at it let's add some text to spruce up the game ending.

```js
e.add({
  solid: true,
  sprite: player,
  scale: 4, // we can size up the sprite with scale
  x: 40, // position it with x and y
  update: (me) => { // this will run each step in the game loop
    me.vy += 1; // velocity changing every frame is acceleration

    if (e.pressedKey(" ")) { // if the space key was pressed
      me.vy -= 20; // we jump
    }
  },
  collides: (me, them) => {
    if (them.hasTag("obstacle")) { // did we hit the obstacle
      e.end(); // then end the game

      // place "GAME OVER" in the center of the screen
      e.addText("GAME OVER", e.width/2, e.height/2, { size: 32 });
    }
  }
})
```

![GIF_GAME_OVER_TEXT](https://user-images.githubusercontent.com/27078897/153313939-337e0346-efb3-4660-b35f-40d56cd97c59.gif)

But if we jump over the obstacle then we need to remove it.

```js
e.add({
  tags: ["obstacle"],
  sprite: obstacle,
  scale: 3,
  x: 250,
  y: 225,
  vx: -3,
  update: (me) => {
    // if my right side is off the
    // left hand side of the screen
    if (me.x + me.width < 0) { 
      e.remove(me); // remove me from the game
    }
  }
})
```

But we also need a new obstacle so let's wrap the whole obstacle adding into a function. We'll also need to call it to initialize our obstacles.

```js
const addObstacle = () => {
  e.add({
    tags: ["obstacle"],
    sprite: obstacle,
    scale: 3,
    x: e.width,
    y: 225,
    vx: -3,
    update: (me) => {
      // if my right side is off the
      // left hand side of the screen
      if (me.x + me.width < 0) { 
        e.remove(me); // remove me from the game
        addObstacle(); // add a new obstacle
      }
    }
  })
}

addObstacle() // start the obstacles
```

![GIF_MULTIPLE_OBSTACLES](https://user-images.githubusercontent.com/27078897/153313960-7c345b6d-b2b3-4216-816f-aafcd608245f.gif)

This game would get boring because the obstacles are always the same. Let's add some randomness to make it more interesting.

```js
const addObstacle = () => {

  // generate a random number between 2 and 5
  const speed = Math.random()*(5-2)+2;
  
  e.add({
    tags: ["obstacle"],
    sprite: obstacle,
    scale: 3,
    x: e.width,
    y: 225,
    vx: -speed,
    update: (me) => {
      // if my right side is off the
      // left hand side of the screen
      if (me.x + me.width < 0) { 
        e.remove(me); // remove me from the game
        addObstacle(); // add a new obstacle
      }
    }
  })
}

addObstacle() // start the obstacles
```

Let's add a score to keep track of how many obstacles we've cleared.

We'll initialize it below the engine declaration.

```js
const e = createEngine(gameCanvas, 300, 300);

let score = 0;
let scoreText = e.addText(score, 279, 32, { size: 20 });
```

![IMAGE OF SCORE IN GAME](https://user-images.githubusercontent.com/27078897/153313983-ccf772f1-411a-4d40-8202-70e66f94a504.png)

Every time we clear an obstacle let's increment and redraw the score.

```js
const addObstacle = () => {

  // generate a random number between 2 and 5
  const speed = Math.random()*(5-2)+2;
  
  e.add({
    tags: ["obstacle"],
    sprite: obstacle,
    scale: 3,
    x: e.width,
    y: 225,
    vx: -speed,
    update: (me) => {
      // if my right side is off the
      // left hand side of the screen
      if (me.x + me.width < 0) { 
        e.remove(me); // remove me from the game
        addObstacle(); // add a new obstacle

        score = score + 1; // add one to the score
        scoreText.text = score; // reset the score text
      }
    }
  })
}
```

![GIF_INCREASING_SCORE](https://user-images.githubusercontent.com/27078897/153314002-ed8c2ed2-cd7b-4b87-9d16-a6e07678c8d8.gif)

Let's add some sound effects to the game as well.

We can create a tune in the asset editor.

![CREATING_TUNE](https://user-images.githubusercontent.com/27078897/153314010-59244d21-8aac-46ae-a460-846e15e89e6d.gif)

To add it to the game we can use either `loopTune` or `playTune`.

Let's start the background music with the game.

```js
const e = createEngine(gameCanvas, 300, 300);

// I'm assigning it to a variable so I can stop this later
const music = loopTune(backgroundMusic);

let score = 0;
let scoreText = e.addText(score, 279, 32, { size: 20 });
```

When the game ends let's stop the background music and play a game over noise.

```js
e.add({
  solid: true,
  sprite: player,
  scale: 4, // we can size up the sprite with scale
  x: 40, // position it with x and y
  update: (me) => { // this will run each step in the game loop
    me.vy += 1; // velocity changing every frame is acceleration

    if (e.pressedKey(" ")) { // if the space key was pressed
      me.vy -= 20; // we jump
    }
  },
  collides: (me, them) => {
    if (them.hasTag("obstacle")) { // did we hit the obstacle
      e.end(); // then end the game

      // place "GAME OVER" in the center of the screen
      e.addText("GAME OVER", e.width/2, e.height/2, { size: 32 });

      // stop the background music
      music.end();

      // play a game over sound effect
      playTune(gameoverTune);
    }
  }
})
```

## Complete Game

This is what it looks like all together. You can [click here](http://gamelab.hackclub.com/?id=0ebcff384feebe3393f4d275359843a0) to play the game and see the assets.

And here is the complete code.

```js
const e = createEngine(gameCanvas, 300, 300);

const music = loopTune(backgroundMusic);

let score = 0;
let scoreText = e.addText(score, 279, 32, { size: 20 })

e.add({
  sprite: player,
  scale: 4,
  x: 24,
  solid: true,
  collides: (me, them) => {
    if (them.hasTag("obstacle")) {
      e.end();
      e.addText("GAME OVER", e.width/2, e.height/2, { size: 32 });
      music.end();
      playTune(gameover);
    }
  },
  update: (me) => {
    me.vy += 1;

    if (e.pressedKey(" ")) {
      me.vy -= 20;
    }
  }
})

e.add({
  sprite: floor,
  scale: 15,
  x: 0,
  y: 284,
  solid: true
})

const addObstacle = () => {

  const speed = Math.random()*(5-2)+2;
  
  e.add({
    tags: ["obstacle"],
    sprite: obstacle,
    scale: 3,
    x: e.width,
    y: 225,
    vx: -speed,
    update: (me) => {
      if (me.x + me.width < 0) {  
        e.remove(me);
        score = score + 1;
        scoreText.text = score;
        addObstacle();
      }
    }
  })
}

addObstacle();

e.start();
```

## Extensions

- Can you make the character only jump on the ground?
- Can you add sound effects to the jump?
- Can you turn it into a "Flappy Birds" style game?

## Help with Game Lab Development

The Hack Club Game Lab is all [open-source](https://www.github.com/hackclub/gamelab) and is actively developed by the Hack Club community. We welcome pull requests, bug reports, and feedback! If you want to join the conversation head over to the [#gamelab-dev](https://app.slack.com/client/T0266FRGM/C02UN35M7LG) channel on the Hack Club Slack.

## Share Your Game

Learning is best when we make and SHARE things. So we strongly encourage sharing and we would love to see what you made. You can check out what other people have done in the [Game Lab Arcade on Scrapbook](https://scrapbook.hackclub.com/r/gamelab/). If you'd like to submit to the Game Lab Arcade just send your share link to the [#scrapbook](https://app.slack.com/client/T0266FRGM/C01504DCLVD) channel on Slack. You'll have to join the Hack Club Slack to do so. If you don't want to share publicly we'd still love to see what you cooked up and you can pop the share link in the input box below.
