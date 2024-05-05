let haku;
let lin;
let yubaba;
let maze;

let hakuMessage = [];
let linMessage = [];
let yubabaMessage = [];

let chihiro;

function setup() {
  createCanvas(500, 500);
  chihiro = new Chihiro();
  haku = new Haku();
  lin = new Lin();
  yubaba = new Yubaba();
  maze = new Maze();
}

function draw() {
  background(43, 160, 159, 200);

  maze.display();

  // Move the chihiro based on arrow key presses
  chihiro.update();
  chihiro.display();

  //display characters
  haku.display();
  lin.display();
  yubaba.display();

  // Check for collision with haku
  let distance = dist(chihiro.x, chihiro.y, haku.x, haku.y);
  if (distance < chihiro.diameter / 2 + 15) {
    // 15 is half the diameter of haku
    hakuMessage.push(new HakuMessage(width / 2, height / 2, 30));
  }

  // Display haku message
  for (let i = 0; i < hakuMessage.length; i++) {
    hakuMessage[i].display();
  }

  // Check if Chihiro moves away from Haku
  if (distance > chihiro.diameter / 2 - 50) {
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
  if (distanceL < chihiro.diameter / 2 + 15) {
    // 15 is half the diameter of haku
    linMessage.push(new LinMessage(width / 2, height / 2, 30));
  }

  // Display lin message
  for (let i = 0; i < linMessage.length; i++) {
    linMessage[i].display();
  }

  // Check if Chihiro moves away from lin
  if (distanceL > chihiro.diameter / 2 - 50) {
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
  if (distanceY < chihiro.diameter / 2 + 15) {
    // 15 is half the diameter of haku
    yubabaMessage.push(new YubabaMessage(width / 2, height / 2, 30));
  }

  // Display yubaba message
  for (let i = 0; i < yubabaMessage.length; i++) {
    yubabaMessage[i].display();
  }

  // Check if Chihiro moves away from lin
  if (distanceY > chihiro.diameter / 2 - 50) {
    // Find the index of the YubabaMessage object to remove
    let indexToRemove = -1;
    for (let i = 0; i < yubabaMessage.length; i++) {
      if (
        yubabaMessage[i].x === width / 2 &&
        yubabaMessage[i].y === height / 2
      ) {
        indexToRemove = i;
        break;
      }
    }

    // Remove the yubabaMessage object from the array
    if (indexToRemove !== -1) {
      yubabaMessage.splice(indexToRemove, 1);
    }
  }

  // Check if Chihiro touches maze walls
  for (let i = 0; i < maze.walls.length; i++) {

    let wallX1 = maze.walls[i][0]
    let wallX2 = maze.walls[i][2]

    let wallY1 = maze.walls[i][1]
    let wallY2 = maze.walls[i][3]

    if (
      (wallX1 <= chihiro.x || chihiro.x <= wallX2) ||
      (wallX2 >= chihiro.x || chihiro.x >= wallX2) ||
      (wallY1 <= chihiro.y || chihiro.y <= wallY2) ||
      (wallY1 >= chihiro.y || chihiro.y >= wallY2)
    ) {
      console.log("HEREEREERER")
    }


  }
  let distanceM = dist(chihiro.x, chihiro.y, maze.x, maze.y);
  if (distanceM < chihiro.diameter / 2 + 10) {
    chihiro.x += 2;
  }
}

class Maze {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.walls = []
  }

  display() {
    this.walls = [
      // border
      [this.x - 200, this.y - 200, this.x - 200, this.y + 200],
      [this.x + 200, this.y - 200, this.x - 125, this.y - 200],
      [this.x + 125, this.y + 200, this.x - 200, this.y + 200],
      //  Bottom
      [this.x + 200, this.y - 200, this.x + 200, this.y + 200],
      // Middle
      [this.x, this.y - 135, this.x + 200, this.y - 135],
      [this.x - 125, this.y - 125, this.x - 125, this.y],
      [this.x - 125, this.y, this.x + 10, this.y],
      [this.x - 50, this.y - 75, this.x + 125, this.y - 75],
      [this.x + 125, this.y + 75, this.x + 125, this.y - 75],
      [this.x - 125, this.y + 75, this.x + 10, this.y + 75],
      [this.x + 10, this.y + 75, this.x + 10, this.y + 150],
      [this.x - 75, this.y + 200, this.x - 75, this.y + 150],
      [this.x + 200, this.y + 125, this.x + 75, this.y + 125],
      [this.x - 200, this.y - 50, this.x - 125, this.y - 50]
    ];

    // Border
    push();
    stroke(255);
    strokeWeight(2);
    line(this.x - 200, this.y - 200, this.x - 200, this.y + 200); // Left
    line(this.x + 200, this.y - 200, this.x - 125, this.y - 200); // Top
    line(this.x + 125, this.y + 200, this.x - 200, this.y + 200); //

    //  Bottom
    line(this.x + 200, this.y - 200, this.x + 200, this.y + 200); // Right
    pop();

    // Middle
    push();
    stroke(255);
    strokeWeight(2);

    line(this.x, this.y - 135, this.x + 200, this.y - 135);
    line(this.x - 125, this.y - 125, this.x - 125, this.y);
    line(this.x - 125, this.y, this.x + 10, this.y);
    line(this.x - 50, this.y - 75, this.x + 125, this.y - 75);
    line(this.x + 125, this.y + 75, this.x + 125, this.y - 75);
    line(this.x - 125, this.y + 75, this.x + 10, this.y + 75);
    line(this.x + 10, this.y + 75, this.x + 10, this.y + 150);
    line(this.x - 75, this.y + 200, this.x - 75, this.y + 150);
    line(this.x + 200, this.y + 125, this.x + 75, this.y + 125);
    line(this.x - 200, this.y - 50, this.x - 125, this.y - 50);
    pop();
  }
}

class Chihiro {
  constructor() {
    this.x = width / 2 - 165;
    this.y = height / 2 - 200;
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
  constructor() {
    this.x = width / 3;
    this.y = height / 2 - 40;
  }

  display() {
    push();
    fill(255, 0, 0);
    ellipse(this.x, this.y, 30);
    pop();
  }
}
class HakuMessage {
  constructor(x, y) {
    this.x = width / 2;
    this.y = height / 2;
  }

  display() {
    push();
    text("Haku Message", this.x, this.y);
    pop();
  }
}

class Lin {
  constructor() {
    this.x = width / 1.2;
    this.y = height / 2 + 50;
  }

  display() {
    push();
    fill(0, 255, 0);
    ellipse(this.x, this.y, 30);
    pop();
  }
}

class LinMessage {
  constructor(x, y) {
    this.x = width / 2;
    this.y = height / 2;
  }

  display() {
    push();
    text("Lin Message", this.x, this.y);
    pop();
  }
}

class Yubaba {
  constructor() {
    this.x = width / 1.5;
    this.y = height - 90;
  }

  display() {
    push();
    fill(0, 0, 255);
    ellipse(this.x, this.y, 30);
    pop();
  }
}

class YubabaMessage {
  constructor(x, y) {
    this.x = width / 2;
    this.y = height / 2;
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
// - replace circles with character images in html
// - make sure arrow keys do not move entire window
