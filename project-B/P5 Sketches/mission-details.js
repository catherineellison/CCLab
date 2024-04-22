let string = `
You are the movie's main character, Chihiro, about to embark on a magical and wonderful adventure. 

After your parents ate the spirits' food, they turned into pigs! 

Explore the world of Spirited Away and find your 
parents while making new friends along the way...`;

// Which character in the string are we up to on the typewriter
let currentCharacter = 0;
let pageMargin = 0;
let isPlaying = false;

function setup() {
    let canvas = createCanvas(700, 400);
    canvas.parent('mission-details');
}

function draw() {
  background(0);
  
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
    currentCharacter += 0.2;
    
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
  }
}

function mousePressed() {
  isPlaying = true;
}
function windowResized() {
    resizeCanvas(700,400);
}