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

lt = new LT()
rt = new RT ()
lm = new LM ()
rm = new RM ()
lb = new LB ()
rb = new RB ()

}

function draw () {
background(255)
imageMode(CENTER)

lt.display()
rt.display()
lm.display()
rm.display()
lb.display()
rb.display()


}

function mousePressed() {
    if (dist(mouseX, mouseY, lt.x, lt.y, lt.w, lt.h) < lt.w) {
        lt.x = mouseX
        lt.y= mouseY
     
    } 
  }



class LT {
    constructor () {
    this.w = 500 / 2.5;
    this.h = 327 / 2.5;
    this.x = random(50, width-50);
    this.y = random(50, height-50);
    this.isDragging = false;
    this.mouseDragOffsetX = 1;
    this.mouseDragOffsetY = 0;

    }
    display () {    
        image(p1, this.x, this.y, this.w,  this.h )

    }
    update () {
        if (this.isDragging) {
            this.x = mouseX - this.mouseDragOffsetX;
            this.y = mouseY - this.mouseDragOffsetY;
          }
        } 

    }

class RT {
    constructor () {
        this.w = 500/2.5
        this.h = 327/2.5
        this.x = random(50, width-50);
        this.y = random(50, height-50);

    }
    display () {   
        
    image(p2, this.x, this.y, this.w,  this.h )

 

    }
    update () {

    }
}
class LM {
    constructor () {
        this.w = 500/2.5
        this.h = 327/2.5
        this.x = random(50, width-50);
        this.y = random(50, height-50);

    }
    display () {    
        image(p3, this.x, this.y, this.w,  this.h )
     
    }
    update () {

    }
}
class RM {
    constructor () {
        this.w = 500/2.5
        this.h = 327/2.5
        this.x = random(50, width-50);
        this.y = random(50, height-50);

    }
    display () {    
         image(p4, this.x, this.y,  this.w,  this.h )
    

    }
    update () {

    }
}
class LB {
    constructor () {
        this.w = 500/2.5
        this.h = 327/2.5
        this.x = random(50, width-50);
        this.y = random(50, height-50);

    }
    display () {    
        image(p5, this.x, this.y,  this.w,  this.h )
   

    }
    update () {

    }
}

class RB {
    constructor () {
        this.w = 500/2.5
        this.h = 327/2.5
        this.x = random(50, width-50);
        this.y = random(50, height-50);


    }
    display () {    
         image(p6, this.x, this.y,  this.w,  this.h )
    }
    update () {

    }
}

//add when completed, dark overlay and yubaba congratulating chihiro and leading her to next skethc