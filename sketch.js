var path,boy, leftBoundary,rightBoundary, energydrink, powerup;
var pathImg,boyImg,drinkImg, powerImg;

var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  drinkImg = loadImage("energyDrink.png");
  powerImg = loadImage("power.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
energydrink = createSprite(70,140,30,30);
energydrink.scale = 0.2
energydrink.addImage("Energy_Drink",drinkImg);
energydrink.velocityY = 4;

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  energydrink.collide(leftBoundary);
  energydrink.collide(rightBoundary);
  
  //code to reset the background

  /*if(path.y > 400 ){
    path.y = height/2;
  }*/

  if(path.y > 400 ){
   
  path.y = height/2;

  }

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  

    

  drawSprites();
}
