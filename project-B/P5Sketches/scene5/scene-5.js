let bg;
let showTextWin = false;
let showTextLose = false;
let winner;

let pig1, pig2, pig3;

let pig1i, pig2i, pig3i;
let final

let sceneIndex = 0 

function preload() {
  bg = loadImage("scene5-bg.png");
  pig1i = loadImage ("pig1.png")
  pig2i = loadImage ("pig2.png")
  pig3i = loadImage ("pig3.png")
  final = loadImage ("finalscene.png")
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
  if (sceneIndex=== 0) {
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
    textSize(28);
    textFont('Courier')
    text(`You found them!`, width / 2, height / 2 - 100);
    
  }
  if (showTextLose == true) {
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(28);
    textFont('Courier')
    text("Oops! Try again", width / 2, height / 2 - 100);

  }
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
    this.x = width / 2 - 350;
    this.y = height / 2-100;
    this.size = 200;
  }

  display() {
    image (pig1i, this.x, this.y, this.size, this.size)
  }
}

class Pig2 {
  constructor() {
    this.x = width / 2-100;
    this.y = height / 2-100;
    this.size = 200;
  }

  display() {
    image (pig2i, this.x, this.y, this.size, this.size)

  }
}

class Pig3 {
  constructor() {
    this.x = width / 2 + 150;
    this.y = height / 2-100;
    this.size = 200;
  }

  display() {
    image (pig3i, this.x, this.y, this.size, this.size)
  }
}

//new scene for clicking on the winner ??
//