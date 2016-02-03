var player;

function setup() {
  createCanvas(300, 500);

  player = createSprite(150, 450);
}

function draw() {
  background(255, 240, 220);

  if (keyDown(LEFT_ARROW)) {
    player.position.x = player.position.x - 8;
  }
  if (keyDown(RIGHT_ARROW)) {
    player.position.x = player.position.x + 8;
  }

  drawSprites();
}
