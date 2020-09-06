var fixedRect,movingRect; 

function setup() { 

  createCanvas(1200,800); 

  fixedRect=createSprite(400,200,60,80); 
  fixedRect.shapeColor="green"; 
  fixedRect.velocityX = 5;

  movingRect=createSprite(600,200,40,60); 
  movingRect.shapeColor="green"; 
  movingRect.velocityX = -5;
} 
  
  function draw() { 
    background(255,255,255) 
     

    if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
    &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2) {
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    } 
    if(movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2 
    &&fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2){ 
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
  
  } 
    drawSprites(); 
  }
