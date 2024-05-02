let rag;
let bucket;
let scent;
let wave;

let dirt = [];
let dirtCount = 30;

let flower = []
let flowerCount = 5
let fs = []
let fx = []
let fy = []
let fSpeed = []




function setup() {
 let canvas = createCanvas(500, 500);
  canvas.parent("canvasContainer")


  rag = new Rag();
  bucket = new Bucket();
  scent = new Scent();
  wave = new Wave ();

  // Initialize dirt array
  for (let i = 0; i < dirtCount; i++) {
    dirt.push({
      x: random(0, width),
      y: random(height / 2, height),
      size: 15
    });
  }
  
  //Initialize flower array
 for (let i = 0; i < flowerCount; i++) {
     fs[i] = 100;
     fx[i] = random(width);
     fy[i] = random(height);
     fSpeed[i] = random(0.05, 0.1);
   }
}

function draw() {
  background(220);

  rag.display();
  rag.update();

  bucket.display();
  bucket.update();

  scent.display();
  scent.update();

  // Clean effect
  // Draw the dirt particles and check dist
  for (let i = dirt.length - 1; i >= 0; i--) {
    if (dist(rag.x, rag.y, dirt[i].x, dirt[i].y) < dirt.length) {
      dirt.splice(i, 2);  // Remove the dirt particle from the array
    } else if (rag.y > height) {
      dirt.splice(i, dirt.length);  // Remove remaining dirt particles
    } else {
      push();
      ellipseMode(CENTER);
      fill(62, 59, 43, 100);
      noStroke();
      rect(dirt[i].x, dirt[i].y, dirt[i].size);
      pop();
    }
  }
  //start wave with bucket
  if (key === 'b' || key === 'B') {
  wave.display ()
  }
  
  for (let i = 0; i < flowerCount + 5; i++) {
  if (scent.initiated == true) {
    push();
    translate( fx[i], fy[i]); // Translate to the flower position
    rotate(radians(i * 72)); // Rotate 72 degrees for each petal
    
    // Draw the petals
    fill(255, 192, 203); // Pink petals
    for (let j = 0; j < 5; j++) {
      noStroke ()
      circle(0+80, 0, sin(frameCount * fSpeed[i]) * 67 + 3);
      rotate(radians(72)); // Rotate 72 degrees for each petal
    }
    
    // Draw the flower center
    fill(255, 229, 153);
    circle(0, 0, sin(frameCount * fSpeed[i]) * 67 + 3);
    
    pop();
  }
}
    
  }
  

function keyPressed() {
  if (key === 'R' || key === 'r') {
    rag.isMoving = true;
  }
  if (key === 'B' || key === 'b') {
    bucket.isMoving = true;
}
  if (key === 'S' || key === 's') {
    scent.initiated = true
  }
}

class Rag {
  constructor() {
    this.x = width / 2;
    this.y = height / 2 - 200;
    this.speedX = 3;
    this.speedY = 0.5;
    this.isMoving = false;
  }

  display() {
    push();
    rectMode(CENTER);
    fill(255, 0, 0);
    rect(this.x, this.y, 30);
    pop();
  }

  update() {
    if (this.isMoving) {
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;

      if (this.x >= width || this.x <= 0) {
        this.speedX = -this.speedX;
      }
    }
  }
}

class Bucket {
constructor() {
    this.x = width / 2 + 50;
    this.y = height / 2 - 200;
    this.size = 30;
    this.angle = 0; // Angle of rotation
    this.rotationSpeed = 0.05; // Speed of rotation
    this.isMoving = false;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rectMode(CENTER);
    fill(0, 255, 0);
    rect(0, 0, this.size, this.size);
    pop();


  }

  update() {
    if (this.isMoving == true) {
    this.angle += this.rotationSpeed;
    if (this.angle > PI/3) {
      this.isMoving = false; //how to make it go opposite way and stop
    }
  }
  
}
}

class Wave {
  constructor () {
    
this.waveRate = 0
this.waveHeight = 10
this.waveOffset = 0.1
this.waveRate = 0.5
this.waveOffsetSpeed = 1

   
  }
  display () {
  push();
    noStroke();
    fill(159, 197, 232, 150);
    for (let x = 0; x < width; x++) {
      let angle = this.waveRate + x * 0.01;
      let y;
      y = map(sin(angle), -this.waveHeight, this.waveHeight, height - this.waveHeight, height - this.waveOffset);
      rect(x, y, 1, height - y);
    } //make go opposite way
    
    this.waveRate += 0.1;
    this.waveOffset += this.waveOffsetSpeed;
    pop();
    
  }
  
  
  update () {
  
  
    
  }
}


class Scent {
  constructor() {
    this.x = width / 2 - 50;
    this.y = height / 2-200;
    this.initiated = false
  }

  display() {
    push();
    rectMode(CENTER);
    fill(0, 0, 255);
    rect(this.x, this.y, 30);
    pop();
  }

  update() {
    
  }
}


//make wave go down when over half of screen
//make bucket return to first position
//ADD TEXT !!! FOR KEYS
// make a flower class??