var player;
var enemy;

function setup() {
  createCanvas(300, 500);
  player = createSprite(150, 470);
  var playerImage = loadImage("https://cdn.rawgit.com/hackedu/hackedu/d44ce82f4bff5d9a083b5ee18d0aae6f4acf2bed/workshops/dodge/img/cube.png");
  player.addImage(playerImage);

  enemy = createSprite(150, 0, 8, 64);
}

function draw() {
  background(255, 240, 220);

  if (keyDown(LEFT_ARROW)) {
    player.position.x = player.position.x - 8;
  }
  if (keyDown(RIGHT_ARROW)) {
    player.position.x = player.position.x + 8;
  }

  enemy.position.y = enemy.position.y += 18;

  drawSprites();
}
