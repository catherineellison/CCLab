let hakuX;
let hakuSpeed;
let speedX;
let y;
let speedY;
let clouds = [];
let cloudSpacing = 400; // Adjust this value to control the spacing between clouds
let gameOver = false
let lastCloud = false

function setup() {
  createCanvas(800, 400);
  
  x = width + 100;
  speedX = -6;
  y = height / 2;
  speedY = 0;
  hakuSpeed = 3
  
  
  // Create 10 clouds
  for (let i = 0; i < 15; i++) {
    clouds.push({
      x: x + i * cloudSpacing, // Spread out the starting x-position
      y: random(height/2-100, height/2+100),
      size: 30
    });
  }
}

function draw() {
  background(230);
  
  // Haku
  
  push();
  rectMode(CENTER);    
  hakuX = constrain(mouseX, 175, 0);
  y = constrain (mouseY, 100, height-150)
    rect(hakuX, y, 175, 50);
    pop ()
  
  if (lastCloud == true) {
    hakuX= width/2 
    hakuX+= hakuSpeed } else {
      hakuX = constrain(mouseX, 175, 0);
    }
    
 
  
  // Draw clouds
  for (let i = 0; i < 15; i++) {
    push();
    ellipse(clouds[i].x, clouds[i].y, clouds[i].size);
    pop();
    
    // Move clouds from right to left
    clouds[i].x += speedX;
    
    // Reset cloud position if it goes off-screen
    if (clouds[i].x < -clouds[i].size) {
      clouds[i].y = random(height/2-100, height/2+100);
    }
    
    if (clouds[i].x <= hakuX + 87.5 && clouds[i].x >= hakuX - 87.5 && clouds[i].y >= y - 25 && clouds[i].y <= y + 25) {
      gameOver= true
      
      if (i === clouds.length -1 ) {
        lastCloudOffScreen = true;
      }
      
     }
    
    if (gameOver === true) {
      speedX = 0;
      text ("TRY AGAIN", width/2-50, height/2)
      textSize (30)
    }
    
    
  } 
  
  
} 

function mousePressed () {
  gameOver= false;
  x = width + 100;
    y = height / 2;
    speedX = -6
   for (let i = 0; i < clouds.length; i++) {
      clouds[i].x = x + i * cloudSpacing;
      clouds[i].y = random(height/2-100, height/2+100);
   }
}

//make haku fly off screen once all clouds are away
  //dont forget to show haku transform in a dragon
