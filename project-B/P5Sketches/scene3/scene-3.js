let p1
let p2
let p3
let p4
let p5
let p6

function preload () {
p1 = loadImage("piece1.png")
p2= loadImage("piece2.png")
p3= loadImage("piece3.png")
p4 = loadImage("piece4.png")
p5 = loadImage("piece5.png")
p6 = loadImage("piece6.png")

}


function setup () {
    let canvas = createCanvas(600, 600);
    canvas.parent("canvasContainer")

    // canvas.mousePressed(mousePressed);
    // canvas.mouseDragged(mouseDragged);
    // canvas.mouseReleased(mouseReleased);

lt = new LT()
rt = new RT ()
lm = new LM ()
rm = new RM ()
lb = new LB ()
rb = new RB ()

}

function draw () {
background(235)
imageMode(CENTER)

lt.display()
rt.display()
lm.display()
rm.display()
lb.display()
rb.display()


}

function mousePressed() {
    // Check if the mouse is over the  object
    if (lt.isMouseOver()) {
      lt.startDrag();
    }
    if (rt.isMouseOver()) {
        rt.startDrag();
      }
      if (lm.isMouseOver()) {
        lm.startDrag();
      }
      if (rm.isMouseOver()) {
        rm.startDrag();
      }
      if (lb.isMouseOver()) {
        lb.startDrag();
      }
      if (rb.isMouseOver()) {
        rb.startDrag();
      }
  }
  
  function mouseDragged() {
    // Update the object's position while dragging
    lt.drag();
    rt.drag();
    lm.drag();
    rm.drag();
    lb.drag();
    rb.drag();
  }
  
  function mouseReleased() {
    // Stop dragging the  object
    lt.stopDrag();
    rt.stopDrag();
    lm.stopDrag();
    rm.stopDrag();
    lb.stopDrag();
    rb.stopDrag();
  }



class LT {
    constructor () {
    this.w = 500 / 2.5;
    this.h = 327 / 2.5;
    this.x = random(50, width-50);
    this.y = random(50, height-50);
    this.isDragging = false;
    this.mouseDragOffsetX = 0;
    this.mouseDragOffsetY = 0;

    }
    display () {    
        image(p1, this.x, this.y, this.w,  this.h )

    }
 
        isMouseOver() {
            // Check if the mouse is over the LT object
            return (
              mouseX >= this.x - this.w / 2 &&
              mouseX <= this.x + this.w / 2 &&
              mouseY >= this.y - this.h / 2 &&
              mouseY <= this.y + this.h / 2
            );
          }
        
          startDrag() {
            // Start dragging the LT object
            this.isDragging = true;
            this.mouseDragOffsetX = mouseX - this.x;
            this.mouseDragOffsetY = mouseY - this.y;
          }
        
          drag() {
            // Update the LT object's position while dragging
            if (this.isDragging) {
              this.x = mouseX - this.mouseDragOffsetX;
              this.y = mouseY - this.mouseDragOffsetY;
            }
          }
        
          stopDrag() {
            // Stop dragging the LT object
            this.isDragging = false;
          }
        }

    

class RT {
    constructor () {
        this.w = 500/2.5
        this.h = 327/2.5
        this.x = random(50, width-50);
        this.y = random(50, height-50);
        this.mouseDragOffsetX = 0;
    this.mouseDragOffsetY = 0;


    }
    display () {   
        
    image(p2, this.x, this.y, this.w,  this.h )

 

    }
    isMouseOver() {
        // Check if the mouse is over the  object
        return (
          mouseX >= this.x - this.w / 2 &&
          mouseX <= this.x + this.w / 2 &&
          mouseY >= this.y - this.h / 2 &&
          mouseY <= this.y + this.h / 2
        );
      }
    
      startDrag() {
        // Start dragging the  object
        this.isDragging = true;
        this.mouseDragOffsetX = mouseX - this.x;
        this.mouseDragOffsetY = mouseY - this.y;
      }
    
      drag() {
        // Update the  object's position while dragging
        if (this.isDragging) {
          this.x = mouseX - this.mouseDragOffsetX;
          this.y = mouseY - this.mouseDragOffsetY;
        }
      }
    
      stopDrag() {
        // Stop dragging the  object
        this.isDragging = false;
      }
    }

class LM {
    constructor () {
        this.w = 500/2.5
        this.h = 327/2.5
        this.x = random(50, width-50);
        this.y = random(50, height-50);
        this.mouseDragOffsetX = 0;
    this.mouseDragOffsetY = 0;


    }
    display () {    
        image(p3, this.x, this.y, this.w,  this.h )
     
    }
    isMouseOver() {
        // Check if the mouse is over the  object
        return (
          mouseX >= this.x - this.w / 2 &&
          mouseX <= this.x + this.w / 2 &&
          mouseY >= this.y - this.h / 2 &&
          mouseY <= this.y + this.h / 2
        );
      }
    
      startDrag() {
        // Start dragging the  object
        this.isDragging = true;
        this.mouseDragOffsetX = mouseX - this.x;
        this.mouseDragOffsetY = mouseY - this.y;
      }
    
      drag() {
        // Update the  object's position while dragging
        if (this.isDragging) {
          this.x = mouseX - this.mouseDragOffsetX;
          this.y = mouseY - this.mouseDragOffsetY;
        }
      }
    
      stopDrag() {
        // Stop dragging the  object
        this.isDragging = false;
      }
}
class RM {
    constructor () {
        this.w = 500/2.5
        this.h = 327/2.5
        this.x = random(50, width-50);
        this.y = random(50, height-50);
        this.mouseDragOffsetX = 0;
    this.mouseDragOffsetY = 0;


    }
    display () {    
         image(p4, this.x, this.y,  this.w,  this.h )
    

    }
    isMouseOver() {
        // Check if the mouse is over the  object
        return (
          mouseX >= this.x - this.w / 2 &&
          mouseX <= this.x + this.w / 2 &&
          mouseY >= this.y - this.h / 2 &&
          mouseY <= this.y + this.h / 2
        );
      }
    
      startDrag() {
        // Start dragging the  object
        this.isDragging = true;
        this.mouseDragOffsetX = mouseX - this.x;
        this.mouseDragOffsetY = mouseY - this.y;
      }
    
      drag() {
        // Update the  object's position while dragging
        if (this.isDragging) {
          this.x = mouseX - this.mouseDragOffsetX;
          this.y = mouseY - this.mouseDragOffsetY;
        }
      }
    
      stopDrag() {
        // Stop dragging the  object
        this.isDragging = false;
      }
}
class LB {
    constructor () {
        this.w = 500/2.5
        this.h = 327/2.5
        this.x = random(50, width-50);
        this.y = random(50, height-50);
        this.mouseDragOffsetX = 0;
    this.mouseDragOffsetY = 0;


    }
    display () {    
        image(p5, this.x, this.y,  this.w,  this.h )
   

    }
    isMouseOver() {
        // Check if the mouse is over the  object
        return (
          mouseX >= this.x - this.w / 2 &&
          mouseX <= this.x + this.w / 2 &&
          mouseY >= this.y - this.h / 2 &&
          mouseY <= this.y + this.h / 2
        );
      }
    
      startDrag() {
        // Start dragging the  object
        this.isDragging = true;
        this.mouseDragOffsetX = mouseX - this.x;
        this.mouseDragOffsetY = mouseY - this.y;
      }
    
      drag() {
        // Update the  object's position while dragging
        if (this.isDragging) {
          this.x = mouseX - this.mouseDragOffsetX;
          this.y = mouseY - this.mouseDragOffsetY;
        }
      }
    
      stopDrag() {
        // Stop dragging the  object
        this.isDragging = false;
      }
}

class RB {
    constructor () {
        this.w = 500/2.5
        this.h = 327/2.5
        this.x = random(50, width-50);
        this.y = random(50, height-50);
        this.mouseDragOffsetX = 0;
    this.mouseDragOffsetY = 0;



    }
    display () {    
         image(p6, this.x, this.y,  this.w,  this.h )
    }
    isMouseOver() {
        // Check if the mouse is over the  object
        return (
          mouseX >= this.x - this.w / 2 &&
          mouseX <= this.x + this.w / 2 &&
          mouseY >= this.y - this.h / 2 &&
          mouseY <= this.y + this.h / 2
        );
      }
    
      startDrag() {
        // Start dragging the  object
        this.isDragging = true;
        this.mouseDragOffsetX = mouseX - this.x;
        this.mouseDragOffsetY = mouseY - this.y;
      }
    
      drag() {
        // Update the  object's position while dragging
        if (this.isDragging) {
          this.x = mouseX - this.mouseDragOffsetX;
          this.y = mouseY - this.mouseDragOffsetY;
        }
      }
    
      stopDrag() {
        // Stop dragging the  object
        this.isDragging = false;
      }
}

//add detection of when complete
// add when completed, dark overlay and yubaba congratulating chihiro and leading her to next sketch

