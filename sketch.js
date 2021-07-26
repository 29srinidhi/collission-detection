var movingRect,fixedRect


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(400,200,80,30);

  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
}

function draw() {
  background("white"); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
    {
movingRect.shapeColor="blue";
fixedRect.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
    
  }
  drawSprites();
}