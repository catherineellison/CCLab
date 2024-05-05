let bg;
let showTextWin = false;
let showTextLose = false;
let winner;

let pig1, pig2, pig3;

function preload() {
  bg = loadImage("scene5-bg.png");
}

function setup() {
  let canvas = createCanvas(800, 400);
  canvas.parent("canvasContainer");

  pig1 = new Pig1();
  pig2 = new Pig2();
  pig3 = new Pig3();

  // Randomly select the winning pig
  winner = random([pig1, pig2, pig3]);
}

function draw() {
  background(bg);

  // overlay
  push();
  rectMode(CENTER);
  noStroke();
  fill(0, 0, 0, 150);
  rect(0, 0, 2000, 800);
  pop();

  // display
  pig1.display();
  pig2.display();
  pig3.display();

  // display text if showText is true
  if (showTextWin == true) {
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(20);
    text(`You found them!`, width / 2, height / 2 - 100);
  }
  if (showTextLose == true) {
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(20);
    text("Oops! Try again", width / 2, height / 2 - 100);
  }
}

function mousePressed() {
  // check if mouse is over any of the pigs
  if (dist(mouseX, mouseY, pig1.x, pig1.y) < pig1.size) {
    if (pig1 === winner) {
      showTextWin = true;
      showTextLose = false;
    } else {
      showTextWin = false;
      showTextLose = true;
    }
  } else if (dist(mouseX, mouseY, pig2.x, pig2.y) < pig2.size) {
    if (pig2 === winner) {
      showTextWin = true;
      showTextLose = false;
    } else {
      showTextWin = false;
      showTextLose = true;
    }
  } else if (dist(mouseX, mouseY, pig3.x, pig3.y) < pig3.size) {
    if (pig3 === winner) {
      showTextWin = true;
      showTextLose = false;
    } else {
      showTextWin = false;
      showTextLose = true;
    }
  } 
}

class Pig1 {
  constructor() {
    this.x = width / 2 - 200;
    this.y = height / 2;
    this.size = 150;
  }

  display() {
    ellipse(this.x, this.y, this.size);
  }
}

class Pig2 {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 150;
  }

  display() {
    ellipse(this.x, this.y, this.size);
  }
}

class Pig3 {
  constructor() {
    this.x = width / 2 + 200;
    this.y = height / 2;
    this.size = 150;
  }

  display() {
    ellipse(this.x, this.y, this.size);
  }
}

//new scene for clicking on the winner