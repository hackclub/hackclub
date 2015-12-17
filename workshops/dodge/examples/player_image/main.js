var player;

function setup() {
  createCanvas(300, 500);

  player = createSprite(150, 470);
  var playerImage = loadImage("https://cdn.rawgit.com/hackedu/hackedu/d44ce82f4bff5d9a083b5ee18d0aae6f4acf2bed/workshops/dodge/img/cube.png");
  player.addImage(playerImage);
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
