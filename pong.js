// Variables
var playerHeight = 80
var playerWidth = 20
var playerSpeed = 8
var playerL = 200
var playerR = 200;

var scoreL = 0;
var scoreR = 0;

var ballX = 300;
var ballY = 200;
var ballSize = 20;
var ballXSpeed = 4;
var ballYSpeed = -2;
var mySound;

function preload() {
  mySound = loadSound("snowfall.mp3");
}


function draw() {
  if (mySound.isPlaying()) {
    background(240);
  } else {
    background(120);
  }
}

function keyPressed() {
  mySound.play();
}


function setup() {
  createCanvas(600, 400);
}

function draw() {
 colorMode(HSB);
 background(30, 20, 55, 55);
  
  // draw left player
  noStroke();
  fill(25, 25, 80, 80)
  rect(0, playerL, playerWidth, playerHeight);
  
  // draw right player
  rect(width-playerWidth, playerR, playerWidth, playerHeight);
  
  // draw ball
  noStroke();
  ellipse(ballX, ballY, ballSize)
  
  
  /* User Input */
  // 'W' key
  if (keyIsDown(87)) {
    playerL = playerL - playerSpeed
  }
  // 'S' key
  if (keyIsDown(83)) {
    playerL = playerL + playerSpeed
  }
  
  if (keyIsDown(UP_ARROW)) {
    playerR = playerR - playerSpeed
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerR = playerR + playerSpeed
  }
  
  /* Game logic */
  if (playerL <= 0) {
    playerL = 0;
  }
  if (playerL > height - playerHeight) {
    playerL = height - playerHeight;
  }
  
  if (playerR <= 0) {
    playerR = 0;
  }
  if (playerR > height - playerHeight) {
    playerR = height - playerHeight;
  }
  
  ballX = ballX + ballXSpeed
  ballY = ballY + ballYSpeed
  
  // Bounce off top wall
  if (ballY < 0) {
    ballY = 0;
    ballYSpeed = -ballYSpeed;
  }

  // Bounce off bottom wall
  if (ballY > height) {
    ballY = height;
    ballYSpeed = -ballYSpeed;
  }
  
  //bounce off left wall
  if (ballX < 0){
    ballXSpeed = -ballXSpeed;
}
  
  //bounce off right wall
  if (ballX > width) {
    ballX = width;
    ballXSpeed = -ballXSpeed;
}
  
  // bounce off right player
  if (ballX > width - playerWidth && ballY >= playerR && ballY <= playerR + playerHeight) {
    ballX = width - playerWidth
    ballXSpeed = -ballXSpeed
  }
  
  //bounce off left player
  if (ballX < playerWidth && ballY >= playerL && ballY <= playerL + playerHeight){
    ballX = playerWidth
    ballXSpeed = -ballXSpeed
}
  
  // playerL scores!
  if (ballX > width) {
    ballX = width/2
    ballY = height/2
    scoreL = scoreL + 1
    ballXSpeed = - ballXSpeed 
  }
  
  // playerR scores!
  if (ballX > width){
    ballX = width/2
    ballY = height/2
    scoreR = scoreR + 1
    ballXSpeed = -ballXSpeed
  }
}
