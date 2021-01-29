let backgroundColor, player1X, player1Y, player2X, player2Y;
let player1V, player2V; 
let hit, hit2, hit3, hit4;
let x, y, xVelocity, yVelocity
let puckX, puckY, score, score2;

function setup () {
   
  let cnv = createCanvas(500, 300);
  cnv.mousePressed(canvasPressed);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 50;
  puckX = width/2;
  puckY = height - 50;
  player1X = 50;
  player1Y = 150;
  player1D = 40
  player2X = 450
  player2Y = 150
  player2D = 40
  x = width/2
  y = height/2
  xVelocity = 0
  yVelocity = 0
  player1V = 4
  player2V = 4
  score = 0;
  score2 = 0;
  gameIsOver = false;

}

function draw (){
  background(backgroundColor);
  fill(0)
  ellipse (x, y, 12)
  strokeWeight(3)
  fill(120, 80, 80);
  ellipse(player1X, player1Y, player1D);
  ellipse (player2X, player2Y, player2D)
  noFill()
  strokeWeight(11)
  rect (0,0,500,300)
  strokeWeight(2)
  line (250,0,250,300)
  noFill()
  ellipse(width/2, height/2, 60)
//goal 1
  strokeWeight(7)
  stroke(360)   
  line(4,110,4,190)
//goal 2
  strokeWeight(7)
  line(496,110,496,190)
  stroke(0)
  displayScores();
  checkGoal();

 
  x += xVelocity
  y += yVelocity
  handleCollision()

  if (x + 24 > width) {
    xVelocity = (-1)*xVelocity
  }
  if (x - 24 < 0 ) {
  xVelocity = (-1)*xVelocity
  }
  if (y + 24 > height) {
    yVelocity = (-1)*yVelocity
  }
  if (y - 24 < 0) {
    yVelocity = (-1)*yVelocity
  }
    // Player 1 Movement
  if (!gameIsOver) {
    if (keyIsDown(LEFT_ARROW)) {
      player2X -= player2V;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      player2X += player2V;
    }
    if (keyIsDown(DOWN_ARROW)) {
      player2Y += player2V;
    }
    if (keyIsDown(UP_ARROW)) {
      player2Y -= player2V;
    }

    // Player 2 Movement
    if (keyIsDown(65)) {
      player1X -= player1V;
    }
    if (keyIsDown(68)) {
      player1X += player1V;
    }
    if (keyIsDown(87)) {
      player1Y -= player1V;
    }
    if (keyIsDown(83)) {
      player1Y += player1V
    }
  }
}
   
function handleCollision() {
  hit = collideCircleCircle(player1X, player1Y, player1D, x, y, 24)
    if (hit == true) {
      (xVelocity = (-1)*xVelocity)
    }
  hit2 = collideCircleCircle(player1X, player1Y, player1D, x, y, 24)
    if (hit2 == true) {
      (yVelocity = (-1)*yVelocity)
    }
  hit3 = collideCircleCircle(player2X, player2Y, player2D, x, y, 24)
    if (hit3 == true) {
      (xVelocity = (-1)*xVelocity)
    }
  hit4 = collideCircleCircle(player2X, player2Y, player2D, x, y, 24)
    if (hit4 == true) {
      (yVelocity = (-1)*yVelocity)
    }

}

function displayScores () {
  textSize(14);
  fill(200);
  textAlign(LEFT)
  text(`Player 1 : ${score}`, 10, 20);
  text(`Player 2 : ${score2}`, 380, 20);
    if (score == 5) {
    gameIsOver = true
    textAlign(CENTER)
    text(200)
    text(`Player 1 wins`, 250, 250);
  }
    if (score2 == 5) {
    gameIsOver = true
    textAlign(CENTER)
    text(200)
    text(`Player 2 wins`, 250, 250);
  }
}

function checkGoal() {
  hit = collideLineCircle(4,110,4,190, x, y, 32);
  if (hit){
    score2 += 1
    xVelocity = 0
    yVelocity = 0
    x = width/2
    y = height/2
  }
  hit2 = collideLineCircle(496,110,496,190, x, y, 32);
  if (hit2){
    score += 1
    xVelocity = 0
    yVelocity = 0
    x = width/2
    y = height/2
  }
}

function canvasPressed() {
  if (!gameIsOver) {
    console.log("in preload")
    xVelocity = 5;
    yVelocity = 5;
    console.log("leaving preload");
  }
}