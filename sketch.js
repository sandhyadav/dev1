var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background("white");
  maze()
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function maze(){
  rect(0,10,400,1)
  rect(0,30,200,1)
  rect(220,30,1,100)
}
