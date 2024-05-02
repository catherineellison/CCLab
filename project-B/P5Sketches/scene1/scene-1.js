let w;
let h;
let haku;
let lin;
let yubaba;

let hakuMessage = [];
let linMessage = [];
let yubabaMessage = [];

let chihiro;

var bg;

function preload(){
  bg = loadImage ("Scene1.jpeg")
}

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("canvasContainer")

  chihiro = new Chihiro();
  haku = new Haku()
  lin = new Lin()
  yubaba = new Yubaba()
  
  w = width / 2;
  h = height / 2;
}

function draw() {
  background(bg);
  push()
  fill(0, 0, 0, 100)
  noStroke()
  rect(0,0, 500, 500)
  pop()
  
  // Border
  push();
  stroke(255);
  strokeWeight(2);
  line(w - 200, h - 200, w - 200, h + 200); // Left
  line(w + 200, h - 200, w - 125, h - 200); // Top
  line(w + 125, h + 200, w - 200, h + 200); // Bottom
  line(w + 200, h - 200, w + 200, h + 200); // Right
  pop();

  // Middle
  push();
  stroke(255);
  strokeWeight(2);

  line(w, h - 135, w + 200, h - 135);
  line(w - 125, h - 125, w - 125, h);
  line(w - 125, h, w + 10, h);
  line(w - 50, h - 75, w + 125, h - 75);
  line(w + 125, h + 75, w + 125, h - 75);
  line(w - 125, h + 75, w + 10, h + 75);
  line(w + 10, h + 75, w + 10, h + 150);
  line(w - 75, h + 200, w - 75, h + 150);
  line(w + 200, h + 125, w + 75, h + 125);
  line(w - 200, h - 50, w - 125, h - 50);
  pop();

  // Move the chihiro based on arrow key presses
  chihiro.update();
  chihiro.display();
  
  //display characters
  haku.display();
  lin.display ();
  yubaba.display();

  
  // Check for collision with haku
  let distance = dist(chihiro.x, chihiro.y, haku.x, haku.y);
  if (distance < chihiro.diameter / 2 + 15) { // 15 is half the diameter of haku
    hakuMessage.push(new HakuMessage(width / 2, height / 2, 30));
  }

  // Display haku message
  for (let i = 0; i < hakuMessage.length; i++) {
    hakuMessage[i].display();
  }
  
  // Check if Chihiro moves away from Haku
if (distance > chihiro.diameter / 2-50) {
  // Find the index of the HakuMessage object to remove
  let indexToRemove = -1;
  for (let i = 0; i < hakuMessage.length; i++) {
    if (hakuMessage[i].x === width / 2 && hakuMessage[i].y === height / 2) {
      indexToRemove = i;
      break;
    }
  }

  // Remove the HakuMessage object from the array
  if (indexToRemove !== -1) {
    hakuMessage.splice(indexToRemove, 1);
  }
}
    // Check for collision with lin
  let distanceL = dist(chihiro.x, chihiro.y, lin.x, lin.y);
  if (distanceL < chihiro.diameter / 2 + 15) { // 15 is half the diameter of haku
    linMessage.push(new LinMessage(width / 2, height / 2, 30));
  }

  // Display lin message
  for (let i = 0; i < linMessage.length; i++) {
    linMessage[i].display();
  }
  
  // Check if Chihiro moves away from lin
if (distanceL > chihiro.diameter / 2-50) {
  // Find the index of the LinMessage object to remove
  let indexToRemove = -1;
  for (let i = 0; i < linMessage.length; i++) {
    if (linMessage[i].x === width / 2 && linMessage[i].y === height / 2) {
      indexToRemove = i;
      break;
    }
  }

  // Remove the linMessage object from the array
  if (indexToRemove !== -1) {
    linMessage.splice(indexToRemove, 1);
  }
}
  
  // Check for collision with yubaba
  let distanceY = dist(chihiro.x, chihiro.y, yubaba.x, yubaba.y);
  if (distanceY < chihiro.diameter / 2 + 15) { // 15 is half the diameter of haku
    yubabaMessage.push(new YubabaMessage(width / 2, height / 2, 30));
  }

  // Display yubaba message
  for (let i = 0; i < yubabaMessage.length; i++) {
    yubabaMessage[i].display();
  }
  
  // Check if Chihiro moves away from lin
if (distanceY > chihiro.diameter / 2-50) {
  // Find the index of the YubabaMessage object to remove
  let indexToRemove = -1;
  for (let i = 0; i < yubabaMessage.length; i++) {
    if (yubabaMessage[i].x === width / 2 && yubabaMessage[i].y === height / 2) {
      indexToRemove = i;
      break;
    }
  }

  // Remove the yubabaMessage object from the array
  if (indexToRemove !== -1) {
    yubabaMessage.splice(indexToRemove, 1);
  }
}

}

class Chihiro {
  constructor() {
    this.x = width / 2-165 ;
    this.y = height / 2-200 ;
    this.diameter = 50;
  }

  display() {
    push();
    ellipse(this.x, this.y, this.diameter);
    pop();
  }

  update() {
    // Move the circle based on arrow key presses
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 2;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 2;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= 2;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 2;
    }
  }
}

class Haku {
  constructor () {
    this.x = width/3
      this.y  = height/2-40
  }
  
  display () {
    push()
    fill (255, 0, 0)
    ellipse(this.x, this.y, 30)
    pop()
  }
  
}
class HakuMessage {
  constructor(x, y) {
    this.x = width/2;
    this.y = height/2;
  }

  display() {
    push();
    text("Haku Message", this.x, this.y);
    pop();
  }
}

class Lin {
  constructor () {
    this.x = width/1.2
    this.y  = height/2 + 50
    
  }
  
  display () {
    push()
    fill (0, 255, 0)
    ellipse(this.x, this.y, 30)
    pop()
  }
  
}
 
class LinMessage {
  constructor(x, y) {
    this.x = width/2;
    this.y = height/2;
  }

  display() {
    push();
    text("Lin Message", this.x, this.y);
    pop();
  }
}

class Yubaba {
  constructor () {
    this.x = width/1.5
    this.y= height-90
  }
  
  display () {
    push ()
    fill (0, 0, 255)
    ellipse (this.x, this.y, 30)
    pop()
  }

}

class YubabaMessage {
   constructor(x, y) {
    this.x = width/2;
    this.y = height/2;
  }

  display() {
    push();
    text("Yubaba Message", this.x, this.y);
    pop();
  }
  
}

//todo
// - make sure cannot hit walls
// - make text prettier
// - replace circles with character images in html, background image
// - make sure arrow keys do not move entire window