let hakuX;
let hakuSpeed;
let speedX;
let y;
let speedY;
let clouds = [];
let cloudSpacing = 600; // Adjust this value to control the spacing between clouds
let gameOver = false;
let lastCloud = false;
let gameStart = false

let bg
let dragon
let cloudi

function preload() {
  bg = loadImage ("scene4-bg.png")
  dragon = loadImage ("scene4-haku.png")
  cloudi = loadImage("cloud.png")
}


function setup() {
  createCanvas(800, 400);

  x = width + 100;
  speedX = -6;
  y = height / 2;
  speedY = 0;
  hakuSpeed = 3;
  hakuX = constrain(mouseX, 10, 0);

  // Create object
  for (let i = 0; i < 15; i++) {
    clouds.push({
      x: x + i * cloudSpacing, // Spread out the starting x-position
      y: random(height / 2 - 100, height / 2 + 100),
      size: 30,
    });
  }
}

function draw() {
  background(bg);
if(gameStart) {
  // Haku

  push();
  y = constrain(mouseY, 50, height - 150);
  image(dragon, hakuX, y, 1538/5, 395/5)
  imageMode (CENTER)
  // rect(hakuX, y, 175, 50);
  pop();

  if (lastCloud == true) {
    hakuX += hakuSpeed;
  } else {
    hakuX = constrain(mouseX, 10, 0);
  }

  // Draw clouds
  for (let i = 0; i < 10; i++) {
    push();

    image (cloudi , clouds[i].x, clouds[i].y, 1815/15, 1124/15);
    pop();

    // Move clouds from right to left
    clouds[i].x += speedX;

    // Reset cloud position if it goes off-screen
    if (clouds[i].x < -clouds[i].size-100) {
      clouds[i].y = random(height / 2 - 100, height / 2 + 100);
    }

    // if (
    //   clouds[i].x <= hakuX + 154 &&
    //   clouds[i].x >= hakuX - 154 &&
    //   clouds[i].y >= y - 40 &&
    //   clouds[i].y <= y + 40
    // ) {
    //   gameOver = true;
    // }
    let distance = dist(hakuX, y, clouds[i].x, clouds[i].y);
    if (distance <= 80) {
      gameOver = true;
    }
  }

    if (gameOver === true) {
      speedX = 0;
      push()
      fill(255)
      textFont('Courier')
      textSize(50);
      text("TRY AGAIN", width / 2 - 100, height / 2);

      pop()
    }
  }

  if (clouds[9].x <= 0 && lastCloud === false) {
    lastCloud = true;
    hakuX = width/4;
  }

if(hakuX>width-50) {
  push()
  textFont('Courier')
  fill (255)
  textSize(24)
  text("You made it safely to the stable!", width/2-200, height/2)
  pop()
} 

}

// function mousePressed() {
//   gameOver = false;
//   x = width + 100;
//   y = height / 2;
//   speedX = -6;
//   for (let i = 0; i < clouds.length; i++) {
//     clouds[i].x = x + i * cloudSpacing;
//     clouds[i].y = random(height / 2 - 100, height / 2 + 100);
//   }
// }

function mousePressed() {
  if (!gameStart) {
    gameStart = true;
    gameOver = false;
    x = width + 100;
    y = height / 2;
    speedX = -6;
    for (let i = 0; i < clouds.length; i++) {
      clouds[i].x = x + i * cloudSpacing;
      clouds[i].y = random(height / 2 - 100, height / 2 + 100);
    }
  }
  }


