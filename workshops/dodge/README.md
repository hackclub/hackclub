# Dodge

Short link to this workshop: https://workshops.hackclub.com/dodge

-------------------------------------------------------------------------------

In this workshop we're going to build a simple yet addictive game using JavaScript. Previously when we've done web development projects, we've used HTML elements and things of that ilk to build what we see in the browser. Today we're going to do things a little differently and use some new tools-- JavaScript, along with two great libraries called p5js and p5play, to build our game.

p5js is a library for making stuff in conjunction with HTML canvas. It is a JS port of Processing, a (library? language? framework?) for making pictures and such.
p5play is made by a really cool game company called [Molleindustria](http://www.molleindustria.org/), and builds on p5js to add easy to use functionality that comes in handy in building games.

## Table of contents:

- [Part I: Setup](#part-i-setup)
- [Part II: The External JS File](#part-ii-the-external-js-file)
- [Part III: Code Cleanup](#part-iii-code-cleanup)
- [Part IV: Publishing and Sharing](#part-iv-publishing-and-sharing)
- [Part V: Hacking](#part-v-hacking)

## Part I. Setup

Though we're not using many HTML elements today, in order to display our game on a website, we need a web page, and for that we need an HTML file. Our HTML file will have several crucial elements, in addition to the standard base template you've seen before:

```html
<script src="http://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.12/p5.js"></script>
<script src="https://cdn.rawgit.com/molleindustria/p5.play/master/lib/p5.play.js"></script>
<script src="game.js"></script>
```

The first line grabs the p5js library from where it's hosted on Cloudflare. The second grabs the p5play library that we'll need to build our game. And the third tells our HTML file about the external JS file where we'll write our game.

Create a new file named `index.html` in your directory, and throw those `<script>` tags in the `<body>`. Spin up the live preview and prepare to be blown away ... by nothing.

That's it for the HTML page! Next we'll create that external JS file we just referred to.

## Part II. The External JS File

### Set up
Create a new file named `game.js` in your directory, and open it up. P5js works by calling two special functions: `setup()` and `draw()`. Let's add them to our file.

```
function setup() {
}
function draw() {
}
```

If you refresh your page, you'll notice nothing has changed. It's still blank.  
Well. Everything in due time, don't worry.

So how `setup()` and `draw()` work is that `setup()` is run once, upon page load. `draw()` on the other hand, is called repeatedly after `setup()` finishes.

Let's add something for `setup()` to set up.

```
function setup() {
  createCanvas(500,500);
}
```

`createCanvas()` is a function that takes two arguments (two numbers for width and height, respectively) and creates a canvas (i.e., the thing that will house your project) of that size.

Now we'll add something for the `draw()` function to do as well. Let's start by having it paint the background a dark blue color every frame.

```
function draw() {
  background(0,0,100);
}
```

`background()` is a function that sets the appearance of the background. Here we're using three arguments to define the RGB values of a color, which will be the background color of our canvas. You can use background in some more ways, though, which are detailed in documentation [here](https://p5js.org/reference/#/p5/background).

Now that we've finished setting up, it's time to add the most important thing to our game-- the player.
 
### Adding the Player

So where should we create the player? Well, we definitely want to have it when we load the game, so it might make sense to put player creation in setup().
Let's declare the existence of the player with

```
var player;
```

And now let's define it into existence. We'll need to decide where to place it, and how big it is. How about at the bottom, in the middle of the canvas, and say, a 50x50 square?

```
function setup() {
  createCanvas(500,500);
  player = createSprite(width/2,height,50,50);
}
```

[`createSprite()`](http://p5play.molleindustria.org/docs/classes/p5.play.html#method-createSprite) makes a placeholder for an image (meaning you can customize with your own!), and takes four arguments (horizontal and vertical coordinates, and width and height of sprite, respectively).

Here it might make sense to mention that the coordinate system of p5js is not like the traditional one you may have seen in your maths classes. P5js has its origin (0,0) at the upper left corner of the canvas, with the x and y values increasing rightward and downward.

Okay, so it looks like we've added our player-- wait. No, it doesn't. Turns out that while we've created a player, we haven't shown it on our canvas anywhere.

```
function draw() {
  background(0,0,100);
  drawSprites();
}
```

Fortunately, the p5play library also offers a really simple function for displaying sprites, namely, `drawSprites()`.

Et voilà. Now we can view our sprite. It looks like it's cut off, though. Guess we have to adjust the y-position. Let's modify that in our initial creation of the player, in `setup()`.

```
function setup() {
  createCanvas(500,500);
  player = createSprite(width/2,height-25,50,50);
}
```

Now we've bumped the y-position up by half the sprite's height, and it sits at the bottom of our canvas.

### Adding Motion

It's not very compelling having a static player just sitting there. Why doesn't it move?

Oh yes, because we haven't added that code yet. We will do that now.

Our sprite has a property called `position`, and we can shift the position in order to create motion. The `position` property itself has two properties: `x` and `y`, which describe placement along the x and y axes, respectively. Since we want to move the player horizontally, we'll be changing the x value. We can access it like so:

```
player.position.x = player.position.x + 1
```

So why does the block keep moving, if we are only changing the x-position by 1? Well, you'll remember that the `draw()` function is called repeatedly, so each time, the x-position is set to 1 greater than what it was when the `draw()` function was called last.

If you play around with this, you'll note that substituting `1` with a larger number will make the player move faster to the right. And what happens if you substitute `1` with a smaller number? 0.5, or -1?

Now that we've introduced motion into our game, it's time to put some restrictions on that motion. For example, we don't want our player to always be moving (only when we tell it to!), and we don't want it to move off the screen entirely.

### Adding Controls

We only want the player to move when we press the controls. P5js gives us a way to detect when keys are being pressed, namely with the function `keyDown()`. This function takes an argument that represents a key. For our purposes, we'll be needing `LEFT_ARROW` and `RIGHT_ARROW`, which are preset to correspond to the left and right arrow keys, respectively.

Let's wrap the line about incrementing x-position by 1 in a conditional, so that it only happens on the condition that the right arrow key is pressed:

``` 
if (keyDown(RIGHT_ARROW)) {
  player.position.x = player.position.x + 1;
}
```

And we'll have corresponding behavior assigned to the left arrow key, except that we'll decement the position by 1:

```
if (keyDown(LEFT_ARROW)) {
  player.position.x = player.position.x - 1;
}
```

### Keeping the Player within Bounds

[fluff: we don't want the player to move off the canvas, because then we won't be able to see it; and also that could be used as cheating. maybe you could add this as a bonus secret unlock code to your game.]

We'll prevent the player's x-position from going past the limits of the screen, i.e., it should never dip below 0, or above width.

```
if (keyDown(RIGHT_ARROW) && player.position.x < width) {
  player.position.x = player.position.x + 1;
}
```

There, that should keep it from moving unless there's space to move. We've added an additional condition to move. Not only must the right arrow key be pressed, but also the current x-pos must be less than a certain amount, in order for the player to move rightward. If either condition is not satisfied, the player will not move.

We'll add the corresponding one for moving leftward.

```
if (keyDown(LEFT_ARROW) && player.position.x > 0) {
  player.position.x = player.position.x - 1;
}
```

But what's this? Looks like we're off by half the player width again. For those of you who avoided this, propz for paying attention. The foreshadowing for this was in our creation of the player. We set the initial position there, and since passing it the initial x-position of width/2 placed it directly in the center, that was a hint that the sprite's position coordinate is in its center, and the reason why we have to offset by half the player width for both boundaries.

So we'll make changes accordingly:

```
if (keyDown(RIGHT_ARROW) && player.position.x < (width-25)) {
  player.position.x = player.position.x + 1;
}

if (keyDown(LEFT_ARROW) && player.position.x > 25) {
  player.position.x = player.position.x - 1;
}
```

So the `draw()` function looks like this now:

```
function draw() {
  background(0,0,100);

  if (keyDown(RIGHT_ARROW) && player.position.x < (width-25)) {
    player.position.x = player.position.x + 1;
  }

  if (keyDown(LEFT_ARROW) && player.position.x > 25) {
    player.position.x = player.position.x - 1;
  }

  drawSprites();
}

```

### Adding the Enemy

Now we add enemy sprite. This is like how we added the player sprite. First we declare it, and then we use `createSprite()` to actually create it. All we have to do now is decide the size and position of our enemy.

```
var enemy;

function setup() {
  createCanvas(500,500);
  player = createSprite(width/2,height-25,50,50);
  enemy = createSprite(width/2,0,10,30);
}
```

And to display it, guess what? That's already covered by our familiar friend, `drawSprites()`.

### Moving the Enemy

Much like how we made the player move by changing its position incrementally, we'll modifying the position of the enemy within the `draw()` function.

Let's make it come towards the player, and have it drop down to the bottom of the canvas.

```
enemy.position.y = enemy.position.y + 1;
```

Instead of modifying `position.x`, we're modifying `position.y`, because we want the enemy to move vertically. We're incrementing the value, because we want the position to move downward. Remember, in the coordinate system in p5js, the y values increase in the downward direction.

I'm going to make my enemy a bit faster than my player.

Now our code looks like this:

```
function draw() {
  background(0,0,100);

  if (keyDown(RIGHT_ARROW) && player.position.x < (width-25)) {
    player.position.x = player.position.x + 1;
  }

  if (keyDown(LEFT_ARROW) && player.position.x > 25) {
    player.position.x = player.position.x - 1;
  }

  enemy.position.y = enemy.position.y + 3;

  drawSprites();
}
```

Let's check out what we've got. Looks great, except that the enemy is a pretty minor threat if it only shows up once and then leaves the canvas forever. We're gonna have to bring it back once it passes the bottom of the canvas. We can set up a check for this, and when it happens, bring it back to the top.

```
if (enemy.position.y > height) {
  enemy.position.y = 0;
}
```

If we add this right under the line where we increment the position, we can see that now the enemy forms a sort of dashed barrier. This isn't very exciting, as we don't have to do  much dodging. We could just leave our player in one spot and always avoid the enemy. To make things more interesting, we'll reset the x-position of the enemy each time it moves past the bottom. And to make it even more interesting, we'll randomize this value. So now there will be no premeditated escape possible!

```
if (enemy.position.y > height) {
  enemy.position.y = 0;
  enemy.position.x = random(5,width-5);
}
```

Here we're using the function `random()`, provided for us by p5js. `random()` is a neat function that can accept different numbers of arguments. You can check out its documentation [here](http://p5js.org/reference/#p5/random).

For our purposes we are passing in two numerical arguments to `random()`, with which it will give us a random value between the two numbers. Thanks to our previous run-ins with dealing with the edges of the canvas, we've experienced enough to know that we need a 5-pixel buffer on each side.

Et voilà! Our enemy now shows up randomly across the top of the canvas! And drops down like bullets onto our player who is forced to frantically dodge!! Perfect!

### Collision

Well, if you've failed to dodge the enemy at least once, you'll realize that the player is not forced to frantically dodge after all... the enemy doesn't attack it at all.

Let's make it a real threat by recognizing when the enemy and player collide. P5play provides the `overlap()` method on our sprites for doing just that.

```
if (enemy.overlap(player)) {
  gameOver();
}
```

This is our lose condition. Now we can punish the user for losing in this `gameOver()` function.

### Game Over

Even though it may feel like we've been writing all of our code in these two special p5js functions to make stuff in the canvas, we musn't forget that we are still just writing JavaScript. So let's define our own function, `gameOver()`, the way we would any other JS function. We'll place it underneath the `draw()` function.

```
function gameOver() {
}
```

And let's display a Game Over screen.

```
function gameOver() {
  background(0);
  textAlign(CENTER);
  text("Game Over!",width/2,height/2);
}
```

We're drawing a background for our Game Over screen, and then placing text over it. I'm sure you can guess what `textAlign(CENTER)` does, but [here's the documentation](http://p5js.org/reference/#p5/textAlign) for more detail. We've inserted the text "Game Over!" at the center of the screen using [`text()`](http://p5js.org/reference/#/p5/text).

Hm, looks like the `draw()` function just keeps on drawing the game, even after the game ends.

How are we going to get our `draw()` function to stop displaying our game, and instead display our game over screen for more than a fraction of a second?

Well, one way is to split it into two modes: game over, and game not over, and say "if the game has ended, then show game over screen, otherwise, show the gameplay screen," and we can do this with a flag that keeps track of whether or not the game has ended.

Let's add in a flag, initialize it in `setup()`, and edit our `draw()` function. We'll also be exchanging out calling `gameOver()` directly when enemy and player collide, for a switch of the flag instead.

```
var isGameOver;

...

function setup() {
  ...
  var isGameOver = false;
  ...
}

function draw() {
  if (isGameOver) {
    gameOver();
  } else {
    ...
    if (enemy.overlap(player)) {
      isGameOver = true;
    }
    ...
  }
}
```

(For the sake of readability, I'm only including the changes, and not the entire code up to this point.) 

We'll initialize this variable with the value `false`, because the game is not yet over at the beginning. Then we'll set up a conditional in `draw()`, to check if the game is over, in which case we'll run `gameOver()`. In the `else` block, we'll put what we've written for gameplay so far. Remember to change the body of the conditional that checks for collision. We want to update the flag, instead of calling `gameOver()` directly. By updating the flag, we're redirecting the `draw()` function to the Game Over screen, so to speak.

Great! It seems to be working nicely now. But how can we allow the player to try again?

### Restart Game

Let's have the user be able to restart the game by clicking the canvas upon seeing the Game Over screen.

First, we have to let the user know that this is available to them. We'll make use of the `text()` function, and instruct the user to click the canvas to restart the game. Let's add a line to the Game Over screen.

```
function gameOver() {
  background(0);
  textAlign(CENTER);
  text("Game Over!",width/2,height/2);
  text("Click anywhere to try again",width/2,3*height/4);
}
```

And second, we have to detect the user's click and restart the game on detection.

P5js has a handy mechanism for this! There is a built-in function that will execute when a click is registered on the canvas, called [`mouseClicked`]. We just have to define the body of this function and specify what to do when the user clicks.

```
function mouseClicked() {
}
```

Well, we have to draw the gameplay again, which means telling the `draw()` function to switch modes. We can do this easily by setting `isGameOver` to false.

```
function mouseClicked() {
  isGameOver = false;
}
```

Hmm, why does the canvas display the game only for a moment before switching back to the Game Over screen?

Of course, our player and enemy are still intersecting, because we never reset the positions!

```
function mouseClicked() {
  isGameOver = false;
  player.position.x = width/2;
  player.position.y = height-25;
  enemy.position.x = width/2;
  enemy.position.y = 0;
}
```

There, that should do it.

### Error Handling

What happens if we're in the middle of playing and accidentally click? The player and enemy suddenly teleport to the initial position. That's no good. We should only reset the game if the game has already ended, i.e., if `isGameOver` is true.

```
function mouseClicked() {
  if (isGameOver) {
    isGameOver = false;
    player.position.x = width/2;
    player.position.y = height-25;
    enemy.position.x = width/2;
    enemy.position.y = 0;
  }
}

```

Now we're in business. Mouse clicks will only reset the game if the game has ended, i.e., only on the Game Over screen.

### Spicing it up

You'll notice that these things are all sprites, which means you can substitute in your own images!

P5js has a function called `loadImage()` into which you can pass the URL of an image as an argument. P5play sprites have the method `addImage()` that you can then pass the loaded image into.

```
var playerImage = loadImage("http://i.imgur.com/m0kHDqN.png");
player.addImage(playerImage);
```

We can add those two lines right after the line where we create the player. And now our player has a bit more personality, and is more relatable. Try customizing the enemy as well!

## Part III. Code Cleanup

So we've used the various widths several times throughout our program, but it's almost impossible to tell by looking at the code, seeing as we never labeled them as such! What we have instead are these seemingly arbitrary numbers like "25" and "5" floating around. It's important to write code that's as clear and maintainable as possible, so that you (in the future) and others can quickly get up to speed and be able to make changes and improvements.

We can get rid of these "magic numbers" by storing them as constants. First, we'll declare the existence of these constants, as we did our player and enemy:

```
var PLAYER_WIDTH, PLAYER_HEIGHT;
var ENEMY_WIDTH, ENEMY_HEIGHT;
```

I've used all capitals and underscores, which is the convention for naming constants (that is, values intended to remain constant throughout the program).

Next, we'll initialize them to values of our choice in `setup()`, and replace them in our creation of player and enemy, as well as in the `draw()` function.

```
function setup() {
  createCanvas(500,500);
  PLAYER_WIDTH = 50;
  PLAYER_HEIGHT = 50;
  ENEMY_WIDTH = 10;
  ENEMY_HEIGHT = 30;
  player = createSprite(width/2,height-(PLAYER_HEIGHT/2),PLAYER_WIDTH,PLAYER_HEIGHT);
  enemy = createSprite(width/2,0,ENEMY_WIDTH,ENEMY_HEIGHT);
}
```

What's great about storing these values in constants is that if you want to make a change,  you only need to make that change in one place.

We could clean up our code in a few other places as well. Always remember, simplify only after the function is correct. Get your code working, and then make it elegant.

```
var PLAYER_WIDTH, PLAYER_HEIGHT, ENEMY_WIDTH, ENEMY_HEIGHT;
var isGameOver, player, enemy;

function setup() {
    createCanvas(400,400);
    PLAYER_WIDTH = 50;
    PLAYER_HEIGHT = 50;
    ENEMY_WIDTH = 10;
    ENEMY_HEIGHT = 30;
    isGameOver = false;
    player = createSprite(width/2,height-(PLAYER_HEIGHT/2),PLAYER_WIDTH,PLAYER_HEIGHT);
    var playerImage = loadImage("http://i.imgur.com/H20lRKU.png");
    player.addImage(playerImage);
    enemy = createSprite(width/2,0,ENEMY_WIDTH,ENEMY_HEIGHT);
}

function draw() {
    if (isGameOver) {
        gameOver();
    } else {
        background(0,0,100);
        
        if (keyDown(LEFT_ARROW) && player.position.x > PLAYER_WIDTH/2) {
            player.position.x -= 1; //(player.position.x - 1)%width;
        }
        if (keyDown(RIGHT_ARROW) && player.position.x < (width - PLAYER_WIDTH/2)) {
            player.position.x += 1;
        }
    
        enemy.position.y += 3;
        if (enemy.position.y > height) {
            enemy.position.y = 0;
            enemy.position.x = random(ENEMY_WIDTH/2,width-(ENEMY_WIDTH/2));
        }
        
        if (enemy.overlap(player)) {
            isGameOver = true;
        }
        
        drawSprites();
    }
}

function gameOver() {
    background(0)
    textAlign(CENTER);
    text("Game Over!", width/2, height/2);
    text("Click anywhere to try again",width/2,3*height/4);
}

function mouseClicked() {
    if (isGameOver) {
        isGameOver = false;
        background(0,0,100);
        player.position.x = width/2;
        player.position.y = height-PLAYER_HEIGHT/2;
        enemy.position.x = width/2;
        enemy.position.y = 0;
    }
}
```

## Part IV. Publishing and Sharing

Don't forget to share your beautiful creation by adding it to your website and sharing it on the Slack on the [`#shipit`](https://starthackclub.slack.com/messages/shipit) channel!

## Part V. Hacking

Isn't it a bit sad that there's a lose condition, but no win condition? Not even a score counter for number of enemies dodged?  
Speaking of that, what if the objective of the game was to catch all the enemies instead of dodging them?  
What if the enemies didn't drop straight down, but instead bounced around the screen?  
What if there were levels in which they got faster, and the player got faster?  
Did you find it hard to restart the game because you had to switch from clicking to frantically mashing arrow keys to dodging the first enemy? Might it be better instead to use a key to restart the game? Or, might it be better to randomize the initial position to better your chances of survival? (Hint, we've already used the relevant functions in this workshop!)

Infinite possibilities await you! [P5js documentation](http://p5js.org/reference/) is a great resource, and can help you fulfill all of your wildest ambitions for this game!
