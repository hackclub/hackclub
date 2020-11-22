// This code is a fork of mHesby's
// http://jsbin.com/xebiki/edit?js,output

var player1
var player2
var ball
var goal1
var goal2
var p1Score = 0
var p2Score = 0

function setup() {
  createCanvas(800, 400)

  player1 = createSprite(125, height / 2, 35, 35)
  player2 = createSprite(625, height / 2, 35, 35)
  ball = createSprite(width / 2, height / 2, 25, 25)
  goal1 = createSprite(width - 5, height / 2, 10, height / 4)
  goal2 = createSprite(5, height / 2, 10, height / 4)
}

function draw() {
  // Player 1 Controls
  if (keyDown('a')) {
    player1.position.x -= 3
  }
  if (keyDown('d')) {
    player1.position.x += 3
  }
  if (keyDown('w')) {
    player1.position.y -= 3
  }
  if (keyDown('s')) {
    player1.position.y += 3
  }

  // Player 2 Controls
  if (keyDown(LEFT_ARROW)) {
    player2.position.x -= 4.5
  }
  if (keyDown(RIGHT_ARROW)) {
    player2.position.x += 4.5
  }
  if (keyDown(UP_ARROW)) {
    player2.position.y -= 4.5
  }
  if (keyDown(DOWN_ARROW)) {
    player2.position.y += 4.5
  }

  // Setup Collisions
  player2.collide(player1)
  player1.displace(ball)
  player2.displace(ball)

  // Scoring
  if (ball.overlap(goal1)) {
    p1Score += 1
    ball.position.x = width / 2
    ball.position.y = height / 2
  }
  if (ball.overlap(goal2)) {
    p2Score += 1
    ball.position.x = width / 2
    ball.position.y = height / 2
  }

  // Draw Game
  background(100, 240, 220)
  drawSprites()
  text('Player 1 Score: ' + p1Score, 100, 20)
  text('Player 2 Score: ' + p2Score, 600, 20)
}
