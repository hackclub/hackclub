//===================================
// 1

function setup() {
  createCanvas(800,800);

}

function draw() {
  background(255, 100, 100);
  drawSprites();
}

//===================================
// 2

var maze;

function setup() {
  createCanvas(800,800);
  maze = createSprite(300, 300);
}

function draw() {
  background(255, 100, 100);
  drawSprites();
}

//===================================
// 3

var maze;
var mazeImage

function setup() {
  createCanvas(800,800);

  maze = createSprite(300, 300);
  mazeImg = loadImage("http://i.imgur.com/ImtI8zi.png");
  maze.addImage(mazeImg);
}

function draw() {
  background(255, 100, 100);
  drawSprites();
}


//===================================
// 4

var maze;
var mazeImg;

function setup() {
  createCanvas(800,800);

  maze = createSprite(300, 300);
  mazeImg = loadImage("http://i.imgur.com/ImtI8zi.png");
  maze.addImage(mazeImg);
}

function draw() {
  background(255, 100, 100);
  drawSprites();

  if(maze.overlapPixel(touchX, touchY)){
    maze.remove();
  }
}
