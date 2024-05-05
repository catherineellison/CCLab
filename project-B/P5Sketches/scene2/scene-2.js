let rag;
let bucket;
let scent;
let wave;

let dirt = [];
let dirtCount = 30;

let bubble = []
let bubbleCount = 10
let fs = []
let fx = []
let fy = []
let fSpeed = []
let bubbleCreationTime = 0;
let bubbleLifetime = 3000;



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
  
  //Initialize bubble array
 for (let i = 0; i < bubbleCount; i++) {
     fs[i] = 100;
     fx[i] = random(50, width-100);
     fy[i] = random(50, height-100);
     fSpeed[i] = random(0.05, 0.1);
   }
   stopTime = millis();
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

  // bubbles
  if (scent.initiated) {
    if (millis() - bubbleCreationTime < bubbleLifetime) {
      for (let i = 0; i < bubbleCount; i++) {
        push();
        noStroke();
        translate(fx[i], fy[i]);
        fill(147, 206, 255, 100);
        circle(0, 0, sin(frameCount * fSpeed[i]) * 67 + 3);
        pop();
      }
    } else {
      bubbleCreationTime = 0; // Reset the bubble creation time
    }
  }


  }
  

function keyPressed() {
  if (key === 'R' || key === 'r') {
    rag.isMoving = true;
    this.angle += this.rotationSpeed;
      if (this.angle > PI / 3) {
        this.isMoving = false;
        this.isReturning = false; // Set the flag to true when the bucket reaches the maximum angle
      }

  }
  if (key === 'B' || key === 'b') {
    bucket.isMoving = true;
    if (bucket.angle > PI / 3) {
      bucket.isMoving = false;
      bucket.isReturning = false;
}
  }
  if (key === 'S' || key === 's') {
    scent.initiated = true
    bubbleCreationTime = 0
  }
}

function keyReleased () {
  if (key === 'B' || key === 'b') {
bucket.isReturning = true;
   if (this.isReturning || keyReleased === 'b') {
    this.angle -= this.rotationSpeed;
    if (this.angle <= 0) {
      this.isReturning = true; // Reset the flag when the bucket returns to its original position
      this.isMoving = false;
    }
  }
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
    this.isReturning = false;
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
    if (this.isMoving) {
      this.angle += this.rotationSpeed;
      if (this.angle > PI / 3) {
        this.isMoving = false;
        this.isReturning = false; // Set the flag to true when the bucket reaches the maximum angle
      }
    }
   if (this.isReturning || keyReleased === 'b' || keyReleased === 'B') {
      this.angle -= this.rotationSpeed;
      if (this.angle <= 0) {
        this.isReturning = false; // Reset the flag when the bucket returns to its original position
        this.isMoving = false;
      }
    }

  }
}

class Wave {
  constructor () {
    
this.waveRate = 0
this.Direction = 10
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
      y = map(sin(angle), -this.Direction, this.Direction, height - this.Direction, height - this.waveOffset);

      rect(x, y, 1, height - y);

   


    } 
    
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
//keep pressing S for bubbles?
//ADD TEXT !!! FOR KEYS
// add images
// add clean bathhouse scene and Lin instructions

