//============================================
//============================================
// Sebastian Puettker
// 26/05/2020
// inspired by Daniel Shiffman (Coding Train)
// https://thecodingtrain.com/beginners/p5js/3.2-bouncing-ball.html

// based on bouncingball
// changed to OOP style
//============================================
//============================================


// declare variables/arrays
//==========================
let changeX = [];
let changeY = [];
let ball = [];
let ballColor = [];
let white = [];

// set up the canvas
//==================
function setup() {
  createCanvas(400, 400);

  // random x and y variation
  //=============================
  for (let i = 0; i < 70; i++) {
    white[i] = false;
    changeX[i] = random(-1, 1);
    changeY[i] = random(-1, 1);
    ball[i] = new Ball(random(100, 300), random(100, 300), 30);
    ballColor[i] = [255, 255, 255];
  }
}

function mousePressed() {
  for (i = 0; i < ball.length; i++) {
    white[i] = ball[i].turnWhite(mouseX, mouseY);
  }
}

// draw colored lines at the border
// change color of the circle if circle hits wall
//==================================================
function draw() {
  background(250, 250, 100);

  strokeWeight(10);
  stroke(50, 250, 50);
  line(0, 0, width, 0);

  strokeWeight(10);
  stroke(0, 0, 255);
  line(width, 0, width, height);

  strokeWeight(10);
  stroke(40, 40, 40);
  line(0, height, width, height);

  strokeWeight(10);
  stroke(255, 0, 0);
  line(0, 0, 0, height);

  // loop through each ball and check if ball was clicked and has not reached yet another border
  //=================================================

  for (let i = 0; i < ball.length; i++) {

    if (white[i] == true) {
      ballColor[i] = [255, 255, 255];
    }


    // check if individual balls reach the borders
    // if yes, change direction and color
    //================================================

    if (ball[i].x < ball[i].diam / 2 + 7) {
      white[i] = false;
      changeX[i] = changeX[i] * -1;
      // changeX[i] = random(0, 2);
      ballColor[i] = [255, 0, 0];
    } else if (ball[i].x > width - ball[i].diam / 2 - 7) {
      white[i] = false;
      changeX[i] = changeX[i] * -1;
      // changeX[i] = random(-2, 0);
      ballColor[i] = [0, 0, 255];
    }

    if (ball[i].y < ball[i].diam / 2 + 7) {
      white[i] = false;
      changeY[i] = changeY[i] * -1;
      // changeY[i] = random(0, 2);
      ballColor[i] = [50, 250, 50];
    } else if (ball[i].y > height - ball[i].diam / 2 - 7) {
      white[i] = false;
      changeY[i] = changeY[i] * -1;
      // changeY[i] = random(-2, 0);
      ballColor[i] = [40, 40, 40];
    }

    // Finally: move balls and show them in correct color    
    //====================================================  

    ball[i].move(changeX[i], changeY[i]);
    ball[i].show(ballColor[i]);
  }
}