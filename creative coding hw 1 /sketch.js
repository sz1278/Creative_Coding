
var x = 0; 
var y = 0; 

function setup() {
  createCanvas(800, 600);
  background(0);
  stroke(255, 204,111,10);
  fill(255, 201,111);
  x = random(width);
  y = random(height);
}

function draw() {
  ellipse(x, y, 1, 1);
  var dx = mouseX-x;
  var dy = mouseY-y;
  var negOrPos = [-1, 1];
  
    x = x+ random(negOrPos)*random(1,2)*dx + random(-1, 1);
    y = y+ random(negOrPos)*random(1,2)*dy + random(-1, 1);
  
  if(x>width) x = mouseX;
  if(y>height) y = mouseY;
  if(x<0) x=width;
  if(y<0) y=height;
}


function keyPressed()
{
  background(0);
  x = random(width);
  y = random(height);
  
}

