let BubbleWand = [];
let bubbles = [];

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("p5-canvas-container");

}

function draw() {
  background(129, 210, 255);

  // cap
  push();
  noStroke();
  fill(255, 255, 144);
  rectMode(CENTER);
  rect(width / 9, height / 1.7, 60, 40, 10);
  pop();

  // bottle
  push();
  noStroke();
  fill(207, 95, 235);
  rectMode(CENTER);
  rect(width / 9, height / 1.3, 100, 200, 20);
  pop();

  // label
  push();
  noStroke();
  fill(255, 255, 144);
  rectMode(CENTER);
  rect(width / 9, height / 1.3, 100, 50);
  pop();

  // text
  push();
  fill(0);
  textFont("Courier New");
  textSize(12);
  textAlign(CENTER);
  text("Blow", width / 9, height / 1.3);
  text("Bubbles!", width / 9, height / 1.27);
  pop();

  // Draw bubbles
  for (let i = 10; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].update();

    // Remove bubbles
    if (bubbles[i].y < -50 || bubbles[i].y > height + 50 || bubbles[i].x < -50 || bubbles[i].x > width + 50) {
      bubbles.splice(i, 1);
    }
  }

  // Draw bubble wand
 for (let i = 0; i < BubbleWand.length; i++) {
    push();
    stroke(255, 255, 144);
    strokeWeight(8);
    fill(0, 0, 0, 0);
    line(mouseX, mouseY, mouseX, mouseY - 80);
    ellipse(mouseX, mouseY- 100, 40);
    pop();
  }

    // Create bubbles
    if (mouseIsPressed) {
      bubbles.push(new Bubble(mouseX, mouseY - 100));
    
  }
}

function mousePressed() {
  if (mouseX < 150 && mouseX > 0 && mouseY < 600 && mouseY > 300) {
    BubbleWand.push(mouseX, mouseY);
  }
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(20, 60);
    this.speedx = random(1, 3);
    this.speedy = random(-3, 3);
  }

  display() {
    push();
    stroke(37, 176, 255, 100);
    fill(196, 234, 255, 150);
    circle(this.x, this.y, this.size);
    pop();
  }

  update() {
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;
  }
}