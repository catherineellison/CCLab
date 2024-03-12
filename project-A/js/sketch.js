let s = 60;
var x = [];
var y = [];
var size = [];
let Sx = [];
let Sy = [];
let Wx = [];
let Wy = [];
let Qx = [];
let Qy = [];
let Ax;
let Ay;
let AspeedX = 0;
let AspeedY = 0;
let targetX;
let targetY;
let freq;
let rate = 0.1;
let dia;
let amp;
let r1, g1, b1;
let r2, g2, b2;
let r3, g3, b3;
let prevR = [];
let prevG = [];
let prevB = [];
let circleRadius = 60;
let SUx;
let SUy;
let distance1;
let distance2;
let distance3;
let transp;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container")
  background(255, 238, 188);

  x[0] = random(60, 80);
  x[1] = random(60, width - 60);
  x[2] = random(width - 80, width - 60);

  y[0] = random(60, height - 60);
  y[1] = random(60, 100);
  y[2] = random(60, height - 60);

  size[0] = random(60, 80);
  size[1] = random(60, 80);
  size[2] = random(60, 80);

  Ax = width / 2;
  Ay = height / 2;

  dia = 20;

  r1 = 255;
  g1 = 0;
  b1 = 0;

  r2 = 255;
  g2 = 0;
  b2 = 255;

  r3 = 255;
  g3 = 255;
  b3 = 0;

  transp = 255;
}

function draw() {
  background(255, 238, 188);

  //algae overlay
  push();
  noFill();
  stroke(65, 129, 60, 40);
  strokeWeight(4);
  for (let i = 0; i < width; i += s) {
    for (let j = 0; j < height; j += s) {
      for (let f = 5; f < width; f += s) {
        ellipse(i, j, s * f, s * f);
      }
    }
  }
  pop();

  //work on sea urchins !

  //sea urchins
  push();
  fill(0);
  ellipse(x[0], y[0], size[0]);
  ellipse(x[1], y[1], size[1]);
  ellipse(x[2], y[2], size[2]);
  let distance1 = dist(Ax, Ay, x[0], y[0]);
  let distance2 = dist(Ax, Ay, x[1], y[1]);
  let distance3 = dist(Ax, Ay, x[2], y[2]);
  if (distance1 < 100 || distance2 < 100 || distance3 < 100) {
    r1 = 65;
    r2 = 65;
    r3 = 65;
    g1 = 129;
    g2 = 129;
    g3 = 129;
    b1 = 60;
    b2 = 60;
    b3 = 60;
    transp = 100;
  } else if (distance1 > 100 || distance2 > 100 || distance3 > 100) {
    r1 = 255;
    g1 = 0;
    b1 = 0;

    r2 = 255;
    g2 = 0;
    b2 = 255;

    r3 = 255;
    g3 = 255;
    b3 = 0;

    transp = 255;
  }

  pop();

  //sea urchins spikes
  push();
  fill(0);
  strokeWeight(5);
  for (let l = 0; l < 10; l++) {
    let angle = map(l, 0, 10, 0, 360);
    let SUx = x[0] + cos(angle) * circleRadius;
    let SUy = y[0] + sin(angle) * circleRadius;
    line(x[0], y[0], SUx, SUy); //0
  }
  pop();

  push();
  fill(0);
  strokeWeight(5);
  for (let l = 0; l < 10; l++) {
    let angle = map(l, 0, 10, 0, 360);
    let SUx = x[1] + cos(angle) * circleRadius;
    let SUy = y[1] + sin(angle) * circleRadius;
    line(x[1], y[1], SUx, SUy); //1
  }
  pop();

  push();
  fill(0);
  strokeWeight(5);
  for (let l = 0; l < 10; l++) {
    let angle = map(l, 0, 10, 0, 360);
    let SUx = x[2] + cos(angle) * circleRadius;
    let SUy = y[2] + sin(angle) * circleRadius;
    line(x[2], y[2], SUx, SUy); //2
  }
  pop();

  // sugar food
  for (let i = 0; i < Sx.length; i++) {
    fill(255);
    rectMode(CENTER);
    rect(Sx[i], Sy[i], 50);
    let distance = dist(Ax, Ay, Sx[i], Sy[i]);
    if (distance < 50) {
      Sx.splice(i, 1);
      Sy.splice(i, 1);
      rate += 0.05;
    }
  }

  // water food
  for (i = 0; i < Wx.length; i++) {
    fill(21, 154, 255);
    circle(Wx[i], Wy[i], 50);
    let distance = dist(Ax, Ay, Wx[i], Wy[i]);
    if (distance < 50) {
      Wx.splice(i, 1);
      Wy.splice(i, 1);
      dia += 3;
      amp += 10;
    }
  }

  // salt food
  for (i = 0; i < Qx.length; i++) {
    fill(255);
    ellipse(Qx[i] + 20, Qy[i], 20);
    ellipse(Qx[i], Qy[i] + 20, 20);
    ellipse(Qx[i] + 25, Qy[i] + 25, 20);
    let distance = dist(Ax, Ay, Qx[i], Qy[i]);
    if (distance < 50) {
      Qx.splice(i, 1);
      Qy.splice(i, 1);
      r1 = random(0, 255);
      g1 = random(0, 255);
      b1 = random(0, 255);
      r2 = random(0, 255);
      g2 = random(0, 255);
      b2 = random(0, 255);
      r3 = random(0, 255);
      g3 = random(0, 255);
      b3 = random(0, 255);
    }
  }

  //title text
  push();
  fill(0);
  textFont("Courier New");
  textSize(20);
  textAlign(CENTER);
  text("sugar", 200, 475);
  text("water", width / 2, 475);
  text("salt", 575, 475);
  push();

  drawSugar(x, y);
  drawWater(x, y);
  drawSalt(x, y);

  //little text
  push();
  fill(0);
  textFont("Courier New");
  textSize(15);
  textAlign(CENTER);
  text("Press S", 200, 490);
  text("Press W", width / 2, 490);
  text("Press Q", 575, 490);
  pop();

  dx = targetX - Ax;
  dy = targetY - Ay;

  AspeedX = dx / 10;
  AspeedY = dy / 10;

  if (targetX) {
    Ax += AspeedX;
    Ay += AspeedY;
  }
  freq = frameCount * rate;
  drawAmphi(Ax, Ay);
}

//sugar
function drawSugar(x, y) {
  push();
  translate(width / 2, 425);
  fill(255);
  rectMode(CENTER);
  rect(-200, 0, 50);
  pop();
}

//water
function drawWater(x, y) {
  push();
  translate(width / 2, 425);
  fill(21, 154, 255);
  ellipse(0, 0, 50);
  pop();
}

//salt
function drawSalt(x, y) {
  push();
  translate(width / 2, height / 2);
  fill(255);
  ellipse(180, 165, 20);
  ellipse(165, 185, 20);
  ellipse(190, 190, 20);
  pop();
}

//amphi
function drawAmphi(circleX, circleY) {
  amp = 15;
  let sinValue = sin(freq) * amp;
  let cosValue = cos(freq) * amp;

  translate(circleX, circleY);

  // Red
  push();
  strokeWeight(0.5);
  fill(r1, g1, b1, transp);
  ellipse(0, 0 + sinValue, dia);

  // Pink
  fill(r2, g2, b2, transp);
  ellipse(0 + cosValue, 0, dia);

  // Yellow
  fill(r3, g3, b3, transp);
  ellipse(0 + cosValue, 0 + sinValue, dia + 10);
  pop();
}

function storePos() {
  targetX = mouseX;
  targetY = mouseY;
}

function mousePressed() {
  storePos();
}

//elements appear
function keyPressed() {
  if (key == "S" || key == "s") {
    let x2 = random(100, width - 100);
    let y2 = random(100, height - 100);
    Sx.push(x2);
    Sy.push(y2);
  }
  if (key == "W" || key == "w") {
    let Wx2 = random(100, width - 100);
    let Wy2 = random(100, height - 100);
    Wx.push(Wx2);
    Wy.push(Wy2);
  }
  if (key == "Q" || key == "q") {
    let Qx2 = random(100, width - 100);
    let Qy2 = random(100, height - 100);
    Qx.push(Qx2);
    Qy.push(Qy2);
  }
}
