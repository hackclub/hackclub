//=========================================
// Blank Canvas

function setup() {
  createCanvas(250, 500);
}

function draw() {
  background(255, 240, 220);
  drawSprites();
}

//=========================================
// Add Sprite

var player;

function setup() {
  createCanvas(250, 500);

  player = createSprite(125, 400, 50, 50);
}

function draw() {
  background(255, 240, 220);
  drawSprites();
}

//=========================================
// Player Follow

var player;

function setup() {
  createCanvas(250, 500);

  player = createSprite(125, 400, 50, 50);
}

function draw() {
  background(255, 240, 220);
  drawSprites();

  player.position.x = mouseX;
  player.position.y = mouseY;
}

//=========================================
// Player Follow - MOBILE

var player;

function setup() {
  createCanvas(250, 500);

  player = createSprite(125, 400, 50, 50);
}

function draw() {
  background(255, 240, 220);
  drawSprites();

  player.position.x = touchX;
  player.position.y = touchY;
}
//=========================================
// Ball - Dribbling

var player;
var ball;

function setup() {
  createCanvas(250, 500);

  player = createSprite(125, 400, 50, 50);
  ball = createSprite(125, 250, 25, 25);
}

function draw() {
  background(255, 240, 220);
  drawSprites();

  player.position.x = mouseX;
  player.position.y = mouseY;

  ball.bounce(player);
}

//=========================================
// Soccer - Add Goal

var player;
var ball;
var goal;

function setup() {
  createCanvas(250, 500);

  player = createSprite(125, 400, 50, 50);
  ball = createSprite(125, 250, 25, 25);
  goal = createSprite(125, 5, 100, 25);
}

function draw() {
  background(255, 240, 220);
  drawSprites();

  player.position.x = mouseX;
  player.position.y = mouseY;

  ball.bounce(player);

  if(ball.overlap(goal)) {
    ball.remove();
  }
}


//=========================================
// Hockey - Add Puck Velocity

var player;
var ball;
var goal;

function setup() {
  createCanvas(250, 500);

  player = createSprite(125, 400, 50, 50);
  ball = createSprite(125, 250, 25, 25);
  goal = createSprite(125, 5, 100, 25);

  player.immovable = true;
  ball.velocity.x = 2;
  ball.velocity.y = 2;
}

function draw() {
  background(255, 240, 220);
  drawSprites();

  player.position.x = mouseX;
  player.position.y = mouseY;

  ball.bounce(player);

  if(ball.overlap(goal)) {
    ball.remove();
  }
}













//=========================================
// 2 Player Soccer

var player1;
var player2;
var ball;

function setup() {
  createCanvas(250, 500);

  player1 = createSprite(125, 400, 50, 50);
  player2 = createSprite(125, 30, 50, 50);

  ball = createSprite(125, 250, 25, 25);

  player1.immovable = true;
  player2.immovable = true;

  ball.velocity.x = 1;
  ball.velocity.y = 1;
}

function draw() {
  background(255, 240, 220);
  drawSprites();

//   if (touches[0]) {
    player1.position = {x: mouseX, y: mouseY} // touches[0];
//   }
  if (touches[1]) {
    player2.position = touches[1];
  }

  ball.bounce(player1);
  ball.bounce(player2);

//   player1.bounce(ball);
//   player2.bounce(ball);
}

// document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });
