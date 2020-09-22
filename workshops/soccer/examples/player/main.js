var player

function setup() {
  createCanvas(250, 500)

  player = createSprite(125, 400, 50, 50)
}

function draw() {
  background(255, 240, 220)
  drawSprites()
}
