var maze;
var mazeImg;

function setup() {
  createCanvas(200, 200);

  maze = createSprite(100, 100);
  mazeImg = loadImage("https://surrogate.hackedu.us/i.imgur.com/7xDfW51.png");
  maze.addImage(mazeImg);
}

function draw() {
  background(255, 255, 255);
  drawSprites();

  if (maze.overlapPixel(mouseX, mouseY)) {
    maze.remove();
  }
}
