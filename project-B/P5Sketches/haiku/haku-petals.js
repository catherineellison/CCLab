let petals = [];
let numPetals = 30; // Number of petals to create
let revealText = false;
let textX = 50;
let textY = 50;
let textS = 32;

var bg;

function preload(){
  bg = loadImage("HakuFinal.jpg")
}

function setup() {
  let canvas = createCanvas(900, 500);
  canvas.parent("canvasContainer")

}

function draw() {
  background(bg);

  // Draw petals
  for (let i = 0; i < petals.length; i++) {
    petals[i].update();
    petals[i].display();

    // Check if petal touches the text area
    if (!revealText && petals[i].x > width/2+100) {
      revealText = true;
    }

    // Remove petals
    if (petals[i].y < -50 || petals[i].y > height + 50 || petals[i].x > width + 50) {
      petals.splice(i, 1);
    }
  }

  // Create petals
  if (mouseIsPressed && petals.length === 0) {
    for (let i = 0; i < numPetals; i++) {
      petals.push(new Petal(width/2-70, height/2-50));
    }
  }

  // Display text if revealed
  if (revealText) {
    push();
    fill(255);
    textSize(21);
    textFont('Courier')
    text("Directed by Hayao Miyazaki (2001),", width/2-25, height/2-100)
    text("this movie is known for its", width/2-25, height/2-75)
    text("visuals, imaginative storytelling,",  width/2-25, height/2-50)
    text("capturing the magic of childhood, ", width/2-25, height/2-25) 
    text("it's a timeless classic that ", width/2-25, height/2)
    text("continues to inspire and captivate ",width/2-25, height/2+25) 
    text("audiences of all ages", width/2-25, height/2+50)


    pop();
  }
}

function mousePressed() {
  // No need for this function anymore
}

class Petal {
  constructor(x, y) {
    this.x = x + random(-50, 50);
    this.y = y + random(-50, 50);
    this.width = random(10, 30);
    this.height = random(5, 30);
    this.speedx = random(1, 3);
    this.speedy = random(0, 0.5);
  }

  display() {
    push();
    stroke(255,205,221)
    fill(255,241,245);
    ellipse(this.x, this.y, this.width, this.height);
    pop();
  }

  update() {
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;
  }
}

// todo
// - input image
// - change text and font to reveal correct message