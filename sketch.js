//creating variable

var ball;
var game;
var ballImg;
function preload(){
  //load images, animations and sound in var

  //ballImg = loadImage("");
}

function setup() {
  createCanvas(1200,400);

  //create sprites
  ball = createSprite(200,200,10,20);
  ball.velocityX = 5;

  game = createEdgeSprites();


}

function draw() {
  background(30);

  //logic(if conditions, loops)
  ball.bounceOff(game)

  drawSprites();
}



