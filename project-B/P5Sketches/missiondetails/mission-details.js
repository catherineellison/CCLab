let string = `
You are the movie's main character, Chihiro, about to embark on a magical and wonderful adventure. 

After your parents ate the spirits' food, they turned into pigs! 

Explore the world of Spirited Away and find your 
parents while making new friends along the way...                                  `;

// Which character in the string are we up to on the typewriter
let currentCharacter = 0;
let pageMargin = 0;
let isPlaying = false;


function setup() {
    let canvas = createCanvas(700, 400);
    canvas.parent("canvasContainer")
   

}

function draw() {
  background(0);
  if (mouseX > width || mouseY > height) {
    isPlaying=false
  }
  if (mouseX < width-700 || mouseY < height-400){
    isPlaying=false
  }

  if (isPlaying) {
    //initiating
    let currentString = string.substring(0, int(currentCharacter));
    
    // typing effect
    push();
    textSize(21);
    textFont(`Courier`);
    textAlign(LEFT);
    fill(255)
    text(currentString, pageMargin + 10, pageMargin + 10, width - pageMargin*2, height - pageMargin);
    pop();
    
    //typing pace
    currentCharacter += 0.5;
    
    // Reset the sketch when the full text is displayed
    if (currentCharacter >= string.length) {
      currentCharacter = 0;
      isPlaying = false;
    }
  } else {
    // Display a message to start the sketch
    push();
    textSize(28);
    textFont(`Courier`);
    textAlign(CENTER);
    fill(255)
    text("MISSION DETAILS", width/2, height/2);
    pop();
    push()
    fill(255)
    textSize(18)
    textAlign(CENTER)
    textFont('Courier')
    text("Click to start", width/2, height/2+40)
    pop()
  }
}

function mousePressed() {
  isPlaying = true;
}

