var box
var ball
function setup() {
  createCanvas(400,400);
  box = createSprite(350,100,50,75)
box.addImage("ball",ball)
box.scale=0.05
}
function preload (){
ball=loadImage("1200px-Basketball_Clipart.svg (1).png")
}
function draw() 
{

  background(30);
  drawSprites()
  
  if (keyIsDown (LEFT_ARROW)){
box.position.x = box.position.x  -2
  }
if (keyIsDown (RIGHT_ARROW)){
  box.position.x=box.position.x +2
}
if (keyDown (DOWN_ARROW)){
  box.position.y = box.position.y +2
}
if (keyDown (UP_ARROW)){
  box.position.y = box.position.y -2
}



}
