/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new BMO(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

class BMO {
// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
constructor(startX, startY) {
  this.x = startX;
  this.y = startY;
  // add properties for your dancer here:
  this.legAngle = 0;
  this.legSpeed = 1;
  this.legAngle2 = 0;
  this.legSpeed2 = 0.9;

  this.armAngle1 = 0;
  this.armSpeed1 = 0.5;
  this.armAngle2 = 0;
  this.armSpeed2 = 0.5;

  this.bodyAngle = 0;
  this.bodySpeed = 0.4;
  this.bodyOffset = 20;
  
} 

update() {
  // update properties here to achieve
  // your dancer's desired moves and behaviour
  this.legAngle += this.legSpeed;
  if (this.legAngle >= 20 || this.legAngle <= -10) {
    this.legSpeed *= -1;
  }
  this.legAngle2 += this.legSpeed2;
  if (this.legAngle2 >= 10 || this.legAngle2 <= -10) {
    this.legSpeed2 *= -1;
  }
  this.armAngle1 += this.armSpeed1;
  if (this.armAngle1 >= 20 || this.armAngle1 <= -8) {
    this.armSpeed1 *= -1;
  }
  this.armAngle1 += this.armSpeed1;
  if (this.armAngle1 >= 20 || this.armAngle1 <= -8) {
    this.armSpeed1 *= -1;
  }
  this.armAngle2 += this.armSpeed2;
  if (this.armAngle2 >= 20 || this.armAngle2 <= -8) {
    this.armSpeed2 *= -1;
  }
  this.bodyAngle += this.bodySpeed;
  if (this.bodyAngle >= 20 || this.bodyAngle <= -8) {
    this.bodySpeed *= -1;
  }
  this.y2 = height/2 + sin(radians(this.bodyAngle)) * this.bodyOffset;
  this.x = width / 2 + sin(radians(this.bodyAngle)) * this.sideToSideOffset
}

display() {
  
  push();
  translate(this.x, this.y);

  //left arm elbow
  push();
  noStroke();
  fill(93, 170, 175);
  rotate(radians(100));
  rectMode(CENTER);
  rotate(radians(this.armAngle2));
  rect(43, 65, 10, 20, 100);
  pop();

  //left arm base
  push();
  noStroke();
  fill(93, 170, 175);
  rotate(radians(20));
  rectMode(CENTER);
  rotate(radians(this.armAngle2));
  rect(-50, 40, 10, 35, 100);
  pop();

  //left leg
  push();
  noStroke();
  fill(79, 123, 133);
  rectMode(CENTER);
  rotate(radians(this.legAngle));
  rect(-20, 90, 10, 50, 100);
  pop();

  //left foot
  push();
  noStroke();
  fill(79, 123, 133);
  rectMode(CENTER);
  rotate(radians(this.legAngle));
  rect(-25, 110, 20, 10, 100);
  pop();

  //right leg
  push();
  noStroke();
  fill(79, 123, 133);
  rectMode(CENTER);
  rotate(radians(this.legAngle2));
  rect(20, 90, 10, 50, 100);
  pop();

  //right foot
  push();
  noStroke();
  fill(79, 123, 133);
  rectMode(CENTER);
  rotate(radians(this.legAngle2));
  rect(15, 110, 20, 10, 100);
  pop();

  //body base
  push();
  fill(93, 186, 153);
  strokeWeight(1);
  rectMode(CENTER);
  rotate(radians(this.bodyAngle));
  rect(this.y2/100, 0, 120, 150, 20);
  pop();

  //face base
  push();
  fill(210, 254, 220);
  strokeWeight(1);
  rectMode(CENTER);
  rotate(radians(this.bodyAngle))
  rect(this.y2/100, -30, 100, 60, 20);
  pop();

  //left eye
  push();
  fill(0);
  rotate(radians(this.bodyAngle))
  ellipse(-20, -40, 5);
  pop();

  //right eye
  push();
  fill(0);
  rotate(radians(this.bodyAngle))
  ellipse(20, -40, 5);
  pop();

  //mouth
  push();
  fill(44, 129, 58);
  rotate(radians(this.bodyAngle))
  arc(0, -30, 30, 32, 0, PI, CHORD);
  pop();

  //buttons on body
  push();
  fill(7, 44, 33);
  rectMode(CENTER);
  rotate(radians(this.bodyAngle))
  rect(-20, 10, 55, 5);
  pop();

  push();
  fill(11, 6, 120);
  rotate(radians(this.bodyAngle))
  ellipse(40, 10, 5);
  pop();

  push();
  fill(248, 222, 47);
  noStroke();
  rectMode(CENTER);
  rotate(radians(this.bodyAngle))
  rect(-25, 30, 7, 20);
  rect(-25, 30, 20, 7);
  pop();

  push();
  fill(21, 230, 223);
  rotate(radians(this.bodyAngle))
  triangle(35, 33, 20, 33, 27, 23);
  pop();

  push();
  fill(15, 253, 48);
  rotate(radians(this.bodyAngle))
  ellipse(45, 30, 10);
  pop();

  push();
  fill(239, 0, 85);
  rotate(radians(this.bodyAngle))
  ellipse(35, 45, 15);
  pop();

  push();
  fill(5, 9, 97);
  rectMode(CENTER);
  rotate(radians(this.bodyAngle))
  rect(-35, 60, 20, 5, 20);
  rect(-10, 60, 20, 5, 20);
  pop();

  //right arm
  push();
  noStroke();
  fill(93, 170, 175);
  rotate(radians(-20));
  rectMode(CENTER);
  rotate(radians(this.armAngle2));
  rect(55, 40, 10, 35, 100);
  pop();

  //right arm elbow
  push();
  noStroke();
  fill(93, 170, 175);
  rotate(radians(100));
  rectMode(CENTER);
  
  rotate(radians(this.armAngle2));
  rect(20, -70, 10, 20, 100);
  pop();

  pop();
}
drawReferenceShapes() {
  noFill();
  stroke(255, 0, 0);
  line(-5, 0, 5, 0);
  line(0, -5, 0, 5);
  stroke(255);
  rect(-100, -100, 200, 200);
  fill(255);
  stroke(0);
}
  }

/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/