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
var cFace;
var hFace;
var lFace;
var yFace;


function preload(){
  bg = loadImage ("Scene1.jpeg")
  cFace = loadImage ("chihiroface.png")
  hFace = loadImage ("hakuface.png")
  lFace = loadImage ("linface.png")
  yFace = loadImage ("yubabaface.png")
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
  
  line(w, h - 145, w + 200, h - 145);

  line(w - 125, h - 125, w - 125, h);
  
  line(w - 125, h, w + 10, h);
  
  line(w - 50, h - 75, w + 125, h - 75);
  line(w + 125, h + 60, w + 125, h - 75);
  line(w - 125, h + 75, w + 10, h + 75);
  line(w + 10, h + 75, w + 10, h + 150);
  line(w - 75, h + 200, w - 75, h + 150);
 
  line(w + 200, h + 125, w + 80, h + 125);
  line(w - 200, h - 50, w - 125, h - 50);
  pop()

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
  if (distanceY < chihiro.diameter / 2 + 10) { 
    yubabaMessage.push(new YubabaMessage(width / 2, height / 2, 30));
  }

  // Display yubaba message
  for (let i = 0; i < yubabaMessage.length; i++) {
    yubabaMessage[i].display();
  }
  
  // Check if Chihiro moves away from yubaba
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
    this.x = width / 2-160 ;
    this.y = height / 2-200 ;
    this.diameter = 1476/23
  }

  display() {
    push();
    imageMode (CENTER);
    noStroke();
    image(cFace, this.x, this.y, this.diameter, this.diameter)
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
    this.x = width/3-30
      this.y  = height/2-70
  }
  
  display () {
    push()
    noStroke ()
    image (hFace, this.x, this.y, 1464/25, 1464/25)
    pop()
  }
  
}
class HakuMessage {
  constructor(x, y) {
    this.x = width/2;
    this.y = height/2;
  }

  display() {
   push()
   fill(0, 0, 0, 200)
   rectMode(CENTER)
   rect(this.x, this.y, 400, 100)
   pop()
   
    push();
    fill(255)
    textAlign(CENTER)
    textSize(18)
    textFont('Courier')
    text("HAKU:", this.x, this.y-30)
    text("Not everyone is who ", this.x, this.y);
    text("they say they are...", this.x, this.y+25)
    pop();
  }
}

class Lin {
  constructor () {
    this.x = width/1.2-35
    this.y  = height/2-40
    
  }
  
  display () {
    push()
    
    noStroke()
    image(lFace, this.x, this.y, 1068/16, 1068/16)
    pop()
  }
  
}
 
class LinMessage {
  constructor(x, y) {
    this.x = width/2;
    this.y = height/2;
  }

  display() {
    push()
    fill(0, 0, 0, 200)
    rectMode(CENTER)
    rect(this.x, this.y, 300, 100)
    pop()
    
     push();
     fill(255)
     textAlign(CENTER)
     textSize(18)
     textFont('Courier')

     text("LIN:", this.x, this.y-30)
     text("I'll show you the ropes,", this.x, this.y);
     text("but it's hard work!", this.x, this.y+25);
     pop();
  }
}

class Yubaba {
  constructor () {
    this.x = width/1.5-20
    this.y= height-115
  }
  
  display () {
    push ()
    fill (0, 0, 255)
    noStroke()
    image(yFace, this.x, this.y, 2017/30, 1527/30 )
    pop()
  }

}

class YubabaMessage {
   constructor(x, y) {
    this.x = width/2;
    this.y = height/2;
  }

  display() {
    push()
    fill(0, 0, 0, 200)
    rectMode(CENTER)
    rect(this.x, this.y, 400, 100)
    pop()
    
     push();
     fill(255)
     textAlign(CENTER)
     textSize(18)
     textFont('Courier')

     text("YUBABA:", this.x, this.y-30)
     text("Work for me, and I'll tell you", this.x, this.y);
     text("where your parents are.", this.x, this.y+25)
     pop();
  }
  
}

//todo
// - make sure cannot hit walls
// ending scene