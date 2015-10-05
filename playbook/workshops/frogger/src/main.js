var frog, enemy1, enemy2;

var gameOverSound = new Audio("http://themushroomkingdom.net/sounds/wav/smb/smb_mariodie.wav");
var winSound = new Audio("http://themushroomkingdom.net/sounds/wav/smb/smb_stage_clear.wav");

function setup() {
  createCanvas(600, 400);

  frog = createSprite(300, 350, 60, 60);
//   var frogImage = loadImage("http://i.imgur.com/cMxEBMz.gif");
//   frog.addImage(frogImage);

  enemy1 = createSprite(150, 250, 100, 60);
  enemy2 = createSprite(450, 100, 200, 60);
}

function draw() {
  background(255,240,255);

  if (keyDown(RIGHT_ARROW)) {
    frog.position.x += 5;
  }
  else if (keyDown(LEFT_ARROW)) {
    frog.position.x -= 5;
  }
  if (keyDown(DOWN_ARROW)) {
    frog.position.y += 5;
  }
  else if (keyDown(UP_ARROW)) {
    debugger
    frog.position.y -= 5;
  }

  enemy1.position.x -=7;
  if (enemy1.position.x < 0) {
    enemy1.position.x = 600;
  }

  enemy2.position.x +=6;
  if (enemy2.position.x > 600) {
    enemy2.position.x = 0;
  }

  frog.collide(enemy1);
  frog.collide(enemy2);

  if (frog.position.x < 0 || frog.position.x > 600) {
    gameOverSound.play();
    alert("Game Over!");
    frog.position.x = 300;
    frog.position.y = 350;
  }

  if (frog.position.y < 0) {
    winSound.play();
    alert("Win!");
    frog.position.x = 300;
    frog.position.y = 350;
    frog.velocity.y = 0;
  }

  drawSprites();
}
