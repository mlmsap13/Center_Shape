var f;
var m;
var shape;

function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB);
  background(0,0,0);
  rectMode(CENTER);
  f = 0;
  shape = 1;
}

function keyTyped(){
  if(key == ' '){
    shape *= -1;
  }
}

function draw() {
  ///color changer
  m = frameCount;
  f = 188*cos(0.009*m)+172;
  if(f>346 && f<0)
  {m += 200}
  
  fill(f,100,100);
  if(shape === 1){
  ellipse(windowWidth/2,windowHeight/2,mouseX,mouseY);
  }else{
  rect(windowWidth/2,windowHeight/2,mouseX,mouseY);
  }
}

function keyPressed(){
  if(value == 's')
  {saveCanvass('myCanvas','png')}
}