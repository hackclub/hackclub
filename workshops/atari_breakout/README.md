---
name: 'Atari Breakout'
description: 'Build the classic Atari Breakout game using p5.js'
author: '@shayanhalder'
img: 'https://cloud-lmpjifksy.vercel.app/0atari_breakout_workshop_cover_image.png'
---

In this workshop, we'll be making the classic Atari Breakout game! This workshop is aimed towards anyone who wants an introduction to basic game development in JavaScript. Game development is one of the best ways to learn coding-- it strengthens your problem solving skills in a rewarding and exciting way!

This is what we'll build by the end of the workshop:       

![GIF Demo of Atari Breakout Game](https://cloud-ac6sditv8.vercel.app/0atari_breakout_workshop_gif.gif)    

[Live Demo](https://atari-breakout.shayanhalder1.repl.co/)    
[Full Code](https://repl.it/@shayanhalder1/Atari-Breakout#script.js) 

*This workshop will take about 45 minutes to complete.*

### Prerequisites

You should have a basic understanding of JavaScript to understand this workshop, but it shouldn't be too hard to follow along if you're coming from another programming language. We'll also be using the p5.js library but don't worry if you've never used it before-- p5.js is super intuitive to use and we'll be learning its features as we go.     

Let's begin!   

# Repl.it
We'll be using [repl.it](repl.it) to make this project. Head on over to [https://repl.it/languages/HTML](https://repl.it/languages/HTML) to start coding. It's suggested that you make an account so you don't lose your code. 

## Loading p5.js  
To load p5.js into our repl via a CDN, start by copying the following between the `<head></head>` tags in your `index.html` file:    
```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.1.9/lib/p5.js"></script>    
```     

[*What's a CDN?*](https://www.sitepoint.com/what-is-a-cdn-and-how-does-it-work/)

To learn about everything that p5.js has to offer, check out the [documentation](https://p5js.org/). That's it! Now we can start building our game.  

## Reference Table  
I've included a reference table below of all the p5.js functions that we'll use in this workshop. As always, make sure to reference the official [documentation](https://p5js.org/) for more in-depth information on these functions.   

| Function | Description | Official Documentation | 
| -------- | ----------- | ---------------------- | 
| setup()  | A function that is called only once when the program starts. Defines initial environment properties | [setup()](https://p5js.org/reference/#/p5/setup) |
| draw() | A function called directly after `setup()`, which continuously runs until the program is stopped. Used to animate objects on screen. | [draw()](https://p5js.org/reference/#/p5/draw) |
| createCanvas(w, h) | Adds a `<canvas>` element to the document with a width of `w` and height of `h`. | [createCanvas()](https://p5js.org/reference/#/p5/createCanvas) | 
| fill(value) | Sets the color used to fill shapes. `value` can be a string of a color name.  | [fill()](https://p5js.org/reference/#/p5/fill) |
| rect(x, y, w, h) | Draws a rectangle at point `(x, y)` with a width of `w` and height of `h`. | [rect()](https://p5js.org/reference/#/p5/rect) |
| noStroke() | Disables the automatic outline given to shapes. | [noStroke()](https://p5js.org/reference/#/p5/noStroke) |
| keyPressed() | A function called everytime a key is pressed. Uses the `keyCode` variable to store the key that was pressed. | [keyPressed()](https://p5js.org/reference/#/p5/keyPressed) |
| keyReleased() | A function called everytime a key is released. Uses the `keyCode` variable to store the key that was released. | [keyReleased()](https://p5js.org/reference/#/p5/keyReleased) | 
| circle(x, y, d) | Draws a circle at point `(x, y)` with a diameter of `d`. | [circle()](https://p5js.org/reference/#/p5/circle) |
| textAlign(horizAlign) | Sets current alignment for drawing text to `horizAlign`, which can be either LEFT, CENTER, or RIGHT. | [textAlign()](https://p5js.org/reference/#/p5/textAlign) |
| textSize(size) | Sets the current font size to `size`. | [textSize()](https://p5js.org/reference/#/p5/textSize) |
| text(str, x, y) | Draws text to the screen at point `(x, y)` with the text being `str`. | [text()](https://p5js.org/reference/#/p5/text) |   

## Getting Started
Navigate to the `script.js` file, we'll be writing code in it for the rest of the workshop. Firstly, we'll store the dimensions of our screen in some variables. This game will be 600 x 400, but feel free to change it around. Note: Add each code segement to your `script.js` file as you go through the workshop. 

```javascript
const windowWidth = 600;
const windowHeight = 400;
```
We also want to store the number of rows and columns of bricks that we want for later reference. We'll be using 6 rows and 10 columns.   

```javascript
const rows = 6;
const cols = 10;
```
When we press the arrow keys to move our paddle, we need to let our program know if a key is currently being pressed down so we can move it accordingly. We should also keep track of when we have lost the game so we can display a "game over" screen. We can represent this in some boolean variables, which will be used later.   
```javascript
let rightDown = false; // Right arrow key.
let leftDown = false; // Left arrow key.
let alive = true; 
```
We can use our window dimensions and our numbers of rows and columns to calculate the width and height of our bricks.   
```javascript
const brickWidth = Math.round(windowWidth / cols - 4);
const brickHeight = Math.round((windowHeight * 1/3) / rows - 10);
```
Our brick width would simply be the width of our canvas divided by the number of columns that we want, but we also subtract a bit from that so we can have some gap between each brick. We do the same for the height, except we only want a third of the total window height to be available for the bricks so there's some space for the ball to travel from the paddle.    

Because the bricks will be destroyed when the ball hits them, we should keep track of the bricks that still exist in an array. We'll also keep track of the score, which is simply the number of times that the ball has hit a brick.    
```javascript
let bricks = [];
let score = 0;
```   
Lastly, we need objects to store the positions of our padddle and ball. We'll horizontally center the paddle by dividing the window width by 2 and subtracting half of the paddle's width from it. We want the paddle to be at the bottom of the screen, so we set its y-value to a little bit above the height of the window. The width is 100px and height is 10px, but feel free to change it around.   
```javascript
let paddle = {
  x: windowWidth / 2 - 50,
  y: windowHeight - 15,
  width: 100,
  height: 10
}
```
For the ball, we'll position it right next to the paddle so it lets the player get started without worrying that they'll miss the ball. We set the x and y speed of the ball both to 6 and the diameter to 15px.   
```javascript
let ball = {
  x: paddle.x - 25,
  y: paddle.y - 50,
  speedX: 6,
  speedY: 6,
  diameter: 15,
}
```

## Building the Bricks   
p5.js has two special functions: `setup()` and `draw()`. The `setup()` function runs only once right when the program starts. It's meant to set up properties such as screen size and background color. The `draw()` function will automatically run over and over again after the `setup()` function, which will let us animate our paddle and ball. We'll be implementing `draw()` a bit later. Note that `setup()` and `draw()` do not need to be called, p5.js automatically runs them in the background.    

We can use `setup()` to create a canvas for us to draw on, as well as to generate the bricks:     

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  generateBricks(); // We'll implement this function later. 
}
```
`createCanvas()` is a p5.js function that simply creates a canvas element in the document and sets its dimensions to the arguments in the function. Now we can start generating the bricks.   

Create a new function named `generateBricks()`. We need to use two nested `for` loops to draw our bricks. The outer loop will represent each row, while the inner loop will represent the brick within each column that resides in the current row that is being iterated.   
```javascript
function generateBricks() {
  for(let i = 0; i < rows; i++) { // Rows
    for(let j = 0; j < cols; j++) { // Columns
      let brickData = {
        x: j * (brickWidth + 2) + 10, // "+ 10" => 10px left margin from the left border. 
        y: i * (brickHeight + 2) + 30, // "+ 30" => 30px top margin from the top border. 
        width: brickWidth,
        height: brickHeight
      }
      bricks.push(brickData); // Add the object to array of bricks.
    }
  }
}
```
We made a `brickData` object that stores the position and dimensions of each brick. The x-coordinate of each brick is determined by multiplying the brick width by `j`, which represents each column. We add 2px to the width so there's a small gap between each brick. We also add 10px at the end so the bricks in the first column (when `j` is zero) will have a 10px left margin. The same applies to the y-coordinate. We also set the width and height of each brick to the constants that we defined previously.   

We push the `brickData` object to the `bricks` array, giving us an array full of the positions and dimensions of every brick, which will allow us to efficiently display them on the screen.     

So far, we've just generated an array of positions and dimensions of the bricks that we have. We need a function to actually draw them to the screen, which we'll name `drawBricks()`. The `.forEach()` method can be applied to an array to call a function to each element in the array. 

```javascript
function drawBricks() {
  bricks.forEach(brick => {
    fill('red');
    rect(brick.x, brick.y, brick.width, brick.height);
    noStroke();
  })
}
```
We use p5.js `fill()` function to make the fill color of our bricks red. We draw the bricks to the screen using the p5.js `rect()` function. The first two arguments are the x and y coordinates and the last two arguments are the width and height. Lastly, we use `noStroke()` to disable the black outline, which is automatically applied to shapes. This makes the edges of our bricks look sharp.   

Now we can display this on the screen! Create the p5.js `draw()` function, set the background to black using `background()`, and display the bricks if we're alive. 

```javascript
function draw() {
  background("black"); 
  if(alive) {
    drawBricks();
    // We'll implement these functions later, uncomment them when we finish writing each function.     
    // drawPaddle(); 
    // drawBall();
    // displayScore();
  }
}
```
`background()` can take in many different formats to display color, which can be found in the [documentation](https://p5js.org/reference/#/p5/background). We also added 3 more functions which we'll implement later. If you run the program now, you should see 6 rows and 10 columns of red bricks as seen below:   

![Image of Bricks](https://cloud-7n2ffoi70.vercel.app/0atari_breakout_workshop_ex_1.png)    

## Input Handling   
p5.js has two functions specifically tailored for handling input: `keyPressed()` and `keyReleased()`. As the name might suggest, `keyPressed()` is automatically run whenever any key is pressed while `keyReleased()` is run whenever any key is released.   

Create the `keyPressed()` function. p5.js stores whatever key was just pressed in the `keyCode` variable, which is specifically reserved for p5.js. There's a reference in the [documentation](https://p5js.org/reference/#/p5/keyPressed) that has variables reserved for the keycodes, which correspond to various keys. For example, keycode 32 represents the spacebar.  

```javascript
function keyPressed() {
  if(keyCode === RIGHT_ARROW) { // Right arrow pressed. 
    rightDown = true;
  }
  if(keyCode === LEFT_ARROW) { // Left arrow pressed.
    leftDown = true;
  }
}
```
We set the `rightDown` and `leftDown` booleans to `true` whenever the right or left arrow is pressed, which will let us move the paddle later. When we lose the game, the spacebar will be used to restart the game and reposition all the objects when we see the "Game Over" screen. Add the following code to the `keyPressed()` function.

```javascript
// Restart game using the spacebar when the player loses the game.
  if(keyCode === 32 && !alive) { // Keycode 32 => Spacebar. 
    alive = true;
    paddle.x = windowWidth / 2 - 50,
    ball.x = paddle.x - 25,
    ball.y = paddle.y - 50,
    ball.speedX = 6;
    ball.speedY = 6;
    bricks.splice(0, bricks.length); // Clean the array of bricks    
    score = 0;
    generateBricks();
  }
```
We check to make sure that we're not alive and that the spacebar has been pressed. If so, we recenter the paddle and ball, reset the ball's original speed, clean the array of bricks using the `.splice()` method, reset the score to 0, and generate all the bricks for the next game. We also set `alive` to true so our game will display all the objects on the screen again. 

Since we set `rightDown` and `leftDown` to true, we must use the `keyReleased()` function to set those booleans to `false` if the arrow keys are released. 

```javascript
function keyReleased() {
  if(keyCode === RIGHT_ARROW) {
    rightDown = false;
  }
  if(keyCode === LEFT_ARROW) {
    leftDown = false;
  }
}
```
We simply implement the `keyReleased()` in the same way as the `keyPressed()` function except we set `rightDown` and `leftDown` to false. This prevents our paddle from traveling in one direction forever after we press the arrow keys. 

## Animating the Paddle   

Now that we've finished input handling, we can now animate the paddle. Create a new function named `drawPaddle()`. We'll be making the paddle green with the `fill()` function, but feel free to change it to your liking. Like we did for the bricks, we'll use the `rect()` function to actually draw the paddle to the canvas. We can then increment or decrement the paddle's `x` value if either `rightDown` or `leftDown` are true. NOTE: make sure to uncomment the `drawPaddle()` function from the `draw()` function. 

```javascript
function drawPaddle() {
  fill('green');
  rect(paddle.x, paddle.y, paddle.width, paddle.height);
  if(rightDown) { // Right key pressed. 
    paddle.x += 10;
  }
  if(leftDown) { // Left key pressed. 
    paddle.x -= 10;
  }
}
```
If you run the game, you'll be able to move the paddle with the arrow keys until you realize that the paddle can go off screen! We have to account for this in our `if` statement and make sure that the paddle is between the dimensions of the canvas.  

```javascript
function drawPaddle() {
  fill('green');
  rect(paddle.x, paddle.y, paddle.width, paddle.height);
  if(rightDown && paddle.x + paddle.width < windowWidth) { 
    paddle.x += 10;
  }
  if(leftDown && paddle.x > 0) {
    paddle.x -= 10;
  }
}
```
We adjust the `if` statements to make sure that the paddle is within the canvas dimensions so it's not able to go off screen. Note: We check if `paddle.x + paddle.width < windowWidth` so it compares the paddle's top right corner with the right border instead of the paddle's top left corner.    

At this point, your game should look like this:     

![Moving Paddle](https://cloud-qbd1awcy5.vercel.app/0atari_breakout_workshop_ex_2.gif)    

## Animating The Ball   

Create a new function named `drawBall()`. We'll make it white using `fill()` and will simply draw it to the canvas using the `circle()` function. The first two arguments are the x and y position of the circle, and the third argument is the diameter of the circle. We also move our ball using its speed at the end of this function so we can see it move on the screen. NOTE: make sure to uncomment the `drawBall()` function from the `draw()` function. 

```javascript
function drawBall() {
  fill('white');
  // Draw the ball on the canvas. 
  circle(ball.x, ball.y, ball.diameter);
  // Move the ball.
  ball.x += ball.speedX;
  ball.y += ball.speedY;
}  
```
If we run this program now, you'll see the ball for a slight moment before it runs off the screen. Let's implement some collision to make sure that doesn't happen.   

## Border Collisions    

If the ball hits the ceiling, we want it to bounce off, so we'll reverse its `speedY`.   

```javascript
// collision on top of screen
function drawBall() {
  fill('white');
  circle(ball.x, ball.y, ball.diameter);
  if(ball.y - ball.diameter / 2 <= 0) { // A y-value of zero corresponds to the top of the screen. 
    ball.speedY = -ball.speedY; // Inverse the y-speed of the ball so it bounces off the ceiling. 
  }  
  ball.x += ball.speedX;
  ball.y += ball.speedY;  
}
```
We check that the top of the ball is not exiting the screen by subtracting the ball's radius from its y value, which is located in the center of the ball. Note that we change the ball's position at the very end of the function so it reflects the ball's most recent speed, which accounts for any possible collisions it may have had.   

If the paddle misses the ball and hits the bottom of the screen, then the player will lose the game. 

```javascript
function drawBall() {
  fill('white');
  circle(ball.x, ball.y, ball.diameter);
  // Bounce the ball off the top of the screen.
  if(ball.y - ball.diameter / 2 <= 0) { 
    ball.speedY = -ball.speedY; 
  }
  // Bounce the ball off the bottom of the screen.
  if(ball.y + ball.diameter / 2 >= windowHeight) { // windowHeight corresponds to the bottom of the screen.
    alive = false;  
  }
  // Change the position of the ball using its speed. 
  ball.x += ball.speedX;
  ball.y += ball.speedY;
}
```   

The `windowHeight` corresponds to the bottom of our screen, so we set `alive` to `false` if the bottom of the ball exceeds that y-value. We represent the bottom of the ball by adding the radius to the ball's y-value rather than subtracting it.    

To make the ball bounce off the sides of the screen, we'll use similar logic. If the x-value of the ball's falls below or equal to zero, we'll inverse its x speed. We'll do the same if the ball's x-value exceeds the width of the canvas.  

```javascript
// Collision on left and right of screen.
  if(ball.x - ball.diameter / 2 <= 0  || ball.x + ball.diameter / 2 >= windowWidth) {
    ball.speedX = -ball.speedX;
  }
```
We subtract the radius from the ball's x-position to make sure we're comparing the left side of the ball to the left side of the window. Likewise, we add the radius to the ball's x-position to make sure we're that comparing the right side of the ball to the right side of the window.    

## Paddle Collision    

When the ball hits our paddle, we want it to be reflected back according to where it lands on the paddle and its direction. If the ball lands on the left half of the paddle and was moving towards the right, then we want it to be reflected back left. If the ball lands on the right half and was moving towards the right, then we want it to be reflected towards the right, and vice versa.    

```javascript
// Ball collision for the first half of the paddle.
  if(ball.y + ball.diameter / 2 >= paddle.y && ball.x >= paddle.x && ball.x < paddle.x + paddle.width / 2) {
    ball.speedY = -ball.speedY;
    if(ball.speedX > 0) {
      ball.speedX = -ball.speedX;
    }    
  }
```
Our `if` statement checks if the ball is touching the left half of the paddle by making sure that its x-position is between the paddle's x-position and the paddle's center, which is its width divided by 2. We also make sure that the ball's y-position is greater than or equal to the paddle's y-position. If this is the case, we reverse the ball's y-speed, as well as its x-speed if it was going towards the right.    

The same logic applies for the second half of the paddle.   

```javascript
// Ball collision for the second half of the paddle.
  if(ball.y + ball.diameter / 2 >= paddle.y && ball.x >= paddle.x + paddle.width / 2 && ball.x < paddle.x + paddle.width) {
    ball.speedY = -ball.speedY;
    if(ball.speedX < 0) {
      ball.speedX = -ball.speedX;
    }    
  }
```
We check to make sure the ball is between the middle of the paddle, `paddle.width / 2`, and the end of the paddle, which is `paddle.x + paddle.width`. The ball's y-speed is then reversed, as well as it's x-speed if it was going left. If you run the game now, you should be able to reflect the ball with the paddle and see it bounce off the borders of the screen.  

## Brick Collision    

The last thing we have to add to our `drawBall()` function is brick collision. We'll use the `.forEach()` method to iterate over our `bricks` array to check if the ball collided with it. If it did, we'll reverse the ball's y-speed and remove that specific brick from the array using `.splice()`.   

```javascript
// Brick collision.
  bricks.forEach((brick, index) => {
    if(ball.y - ball.diameter / 2 <= brick.y + brick.height && ball.x >= brick.x && ball.x <= brick.x + brick.width) {
      ball.speedY = -ball.speedY;
      bricks.splice(index, 1); // Remove brick from array. 
      score++; // Increase score.
      if(bricks.length === 0) alive = false; // End the game if we broke all the bricks.
    }
  }); 
```
In the `.forEach()` method, `brick` represents every brick element in the `bricks` array while `index` represents the index of the current brick element that is being iterated. We check if top of the ball, `ball.y - ball.diameter / 2`, is less than or equal to the bottom of the brick, `brick.y + brick.height`, and we know that it has collided with the brick if the ball's x-position is in between the brick.   

We then use `.splice()` to remove the brick from the `bricks` array. The first argument makes the splicing start at `index`, which is the location of the brick in the `bricks` array, and the second argument specifies how many elements we want to delete from there, which is only 1.   

If you run the game now, you'll see that we have a fully-working Atari Breakout game! All we need now is to display the score and implement a "Game Over" screen.  

## Finishing Touches   

Let's make a function to display our score on the screen, which you can add at the end of your `script.js` file. NOTE: make sure to uncomment `displayScore()` in the `draw()` function. 

```javascript
function displayScore() {
  fill("white");
  textAlign(CENTER);
  textSize(20)
  text(`Score: ${score}`, windowWidth / 2, 22); // Draw score to the top-middle of the screen. 
}
```
We set the text color to white using `fill('white')` and make sure that p5.js aligns our text using `textAlign(CENTER)`. We set the text size to 20 and draw it to the canvas using the `text()` function. The first argument is the text, and the last two are the x and y positions of the text box.   

We're using a template literal to represent our score, which is a formating tool that lets us combine strings and variables. Anything between the backticks is a string, and if a variable is needed, it can be placed between the curly braces with a dollar sign in front. Our coordinates place the text in the top-middle of the screen.   

Create a `endScreen()` function to show either the "GAME OVER" or "You Win!" screen. It'll take in a `message` parameter which will be the string that will be displayed in the message. To be consistent, keep the text white and align it in the center.    

```javascript
function endScreen(message) {
  fill('white');
  textAlign(CENTER);
  textSize(38);
  text(message, 300, 170);
  text('Press Spacebar To Restart Game', 300, 225);
  text(`Score: ${score}`, 300, 280);
}
```
We position each of the textboxes such that they are aligned in the center of the canvas.   

Lastly, we have to update our `draw()` function with these new functions.    

```javascript
function draw() {
  background("black");
  if(bricks.length === 0) {
    endScreen("You Win!");
  }
  if(!alive && bricks.length != 0) endScreen("GAME OVER");
  if(alive) {
    drawBricks();
    drawPaddle();
    drawBall();
    displayScore();
  }
}
```
If there aren't any bricks left, we display "You Win!" on the screen using the `endScreen()` function that we just made. However, if we're not alive and there are still bricks left, then we display "GAME OVER" using `endScreen()`.    

Your final product should look like this:   

![GIF Demo of Atari Breakout Game](https://cloud-ac6sditv8.vercel.app/0atari_breakout_workshop_gif.gif)      

Congratulations, you just built Atari Breakout in JavaScript!  

## Extending the Project   
Now it's your turn to apply what you know to make this game even more fun! I've linked some resources that you can use below which provide further depth into basic game development with JavaScript. Here's some creative ways to extend this game!     

### Bullets and Powerups    
In this version, a powerup apple ocassionally moves across the screen. You can use the spacebar to shoot bullets at the powerup. If they hit, your paddle and ball size will be doubled for 9 seconds.    

- [Code](https://repl.it/@shayanhalder1/Atari-Breakout-Extended-Version-1#script.js)
- [Live Demo](https://atari-breakout-extended-version-1.shayanhalder1.repl.co/)
 
### Targets and Trajectory    
In this version, the trajectory of the ball will randomly change every time it hits a wall, making the game much more challenging. An occasional target region on the paddle will appear, which will act as a powerup. If the player positions the paddle such that the ball lands in the target region, then the paddle's width will be tripled for 8 seconds.   

- [Code](https://repl.it/@shayanhalder1/Atari-Breakout-Extended-Version-2#script.js)
- [Live Demo](https://atari-breakout-extended-version-2.shayanhalder1.repl.co/)

### Magnet Paddle
In this version, the paddle will act as a magnet to the ball. The trajectory of the ball will be constantly adjusted such that it will be impossible for the paddle to miss the ball.    

- [Code](https://repl.it/@shayanhalder1/Atari-Breakout-Extended-Version-3#script.js)
- [Live Demo](https://atari-breakout-extended-version-3.shayanhalder1.repl.co/)   

I hope that this workshop has provided some insight into basic game development in JavaScript. We've only used a mere fraction of everything p5.js has to offer, and I highly recommend that you try to play around with its other features. Happy hacking!    

## Supplemental Resources   
- [Free Code Camp's JavaScript Game Development Course](https://www.youtube.com/watch?v=lhNdUVh3qCc)    
- [The Coding Train](https://www.youtube.com/user/shiffman)   
- [p5.js Official Documentation](https://p5js.org/)  
- [p5.js Web Editor](https://editor.p5js.org/)  
