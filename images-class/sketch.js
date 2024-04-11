let img
let cam
// let x = 0
let n = 15
function preload (){
img = loadImage("assets/hokusai.jpg")
}
function setup() {
  let canvas = createCanvas(600, 480);
  canvas.parent("p5-canvas-container");
  cam = createCapture(VIDEO);
  cam.hide();
  background(255);

}


function draw() {

  // image(img, 0,0, x, 0)
  cam.loadPixels ();
  // image(cam, 0, 0,x, 0)
  // x = x+2
  // if (x>width) {
  //   x= 0
  // }
//   for (let n = 0; n < 10; n++ ) {
//   let x = random(width)
//   let y = random (height)
//   let c= img.get (x, y);
//   fill (c)
// noStroke()
//   circle (x,y, random(1,10));
//   }

// for (let n = 0; n < 10; n++){
//   let x = random(width)
//   let y = random (height)
//   let c = cam.get (x,y)
// fill (c)
// noStroke()
// circle (x, y, random(1,10))
// }

for(let x= 0; x< cam.width; x=x+n){
  for ( let y = 0; y< cam.height; y=y+n){
    let index = (x + y*cam.width)*4;
let r = cam.pixels[index+0]
let g = cam.pixels[index+1]
let b = cam.pixels[index+2]
fill(r,g,b)
noStroke()
  rect(x,y, n)
  }
}
}