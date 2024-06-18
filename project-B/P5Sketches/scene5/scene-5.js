let bg;
let showTextWin = false;
let showTextLose = false;
let winner;

let pig1, pig2, pig3;

let pig1i, pig2i, pig3i;
let final

// let confetti = []

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
  background(bg);

  let t = frameCount / 60; // update time


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
    // confetti.update(t); // update confetti position
    // confetti.display(); // draw confetti

  }
  if (showTextLose == true) {
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(28);
    textFont('Courier')
    text("Oops! Try again", width / 2, height / 2 - 100);

  }
}


function mousePressed() {
  // check if mouse is over any of the pigs
  if (dist(mouseX, mouseY, pig1.x, pig1.y) < pig1.size) {
    if (pig1 === winner) {
      showTextWin = true;
      showTextLose = false;
      // confetti.display()
    } else {
      showTextWin = false;
      showTextLose = true;
    }
  } else if (dist(mouseX, mouseY, pig2.x, pig2.y) < pig2.size) {
    if (pig2 === winner) {
      showTextWin = true;
      showTextLose = false;
      // confetti.display()
    } else {
      showTextWin = false;
      showTextLose = true;
    }
  } else if (dist(mouseX, mouseY, pig3.x, pig3.y) < pig3.size) {
    if (pig3 === winner) {
      showTextWin = true;
      showTextLose = false;
      // confetti.display()
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

// class Confetti {
//   constructor(){
//     // initialize coordinates
//     this.posX = 0;
//     this.posY = random(-50, 0);
//     this.initialangle = random(0, 2 * PI);
//     this.size = random(2, 10);

//     // radius of confetti spiral
//     // chosen so the confetti are uniformly spread out in area
//     this.radius = sqrt(random(pow(width / 2, 2)));
//     this.color = color(random(255), random(255), random(255));
//   }

//   update(time) {
//     // x position follows a circle
//     let w = 0.6; // angular speed
//     let angle = w * time + this.initialangle;
//     this.posX = width / 2 + this.radius * sin(angle);

//     // different size confetti fall at slightly different y speeds
//     this.posY += pow(this.size, 0.5);

//     // delete confetti if past end of screen
//     if (this.posY > height) {
//       let index = confetti.indexOf(this);
//       confetti.splice(index, 1);
//     }
//   }

//   display() {
//     fill(this.color);
//     ellipse(this.posX, this.posY, this.size);
//   };
// }

//new scene for clicking on the winner ??
