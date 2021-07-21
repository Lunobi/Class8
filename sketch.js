var ball, wall, edges, greenball, deaths, rect;

function setup(){
  createCanvas(400, 400);
  
  deaths = 0;
  
  wall1 = createSprite(190, 120, 250, 3);
  wall2 = createSprite(190, 260, 250, 3);
  wall3 = createSprite(67, 145, 3, 50);
  wall4 = createSprite(67, 235, 3, 50);
  wall5 = createSprite(313, 145, 3, 50);
  wall6 = createSprite(313, 235, 3, 50);
  wall7 = createSprite(41, 170, 50, 3);
  wall8 = createSprite(41, 210, 50, 3);
  wall9 = createSprite(337, 210, 50, 3);
  wall10 = createSprite(337, 170, 50, 3);
  wall11 = createSprite(18, 190, 3, 40);
  wall12 = createSprite(361, 190, 3, 40);
  
  ball1 = createSprite(100, 130, 10, 10);
  ball1.shapeColor = "red";
  ball1.velocityY = 8;
  ball2 = createSprite(215, 130, 10, 10);
  ball2.shapeColor = "red";
  ball2.velocityY = 8;
  ball3 = createSprite(165, 250, 10, 10);
  ball3.shapeColor = "red";
  ball3.velocityY = -8;
  ball4 = createSprite(270, 250, 10, 10);
  ball4.shapeColor = "red";
  ball4.velocityY = -8;
  
  greenball = createSprite(40, 190, 15, 15);
  greenball.shapeColor = "green"
  

  edges = createEdgeSprites();
}

function draw(){
  background("white");
  
  fill("blue");
  text("Deaths: " +deaths, 200, 110);
  
  ball1.bounceOff(wall1);
  ball1.bounceOff(wall2);
  ball2.bounceOff(wall1);
  ball2.bounceOff(wall2);
  ball3.bounceOff(wall1);
  ball3.bounceOff(wall2);
  ball4.bounceOff(wall1);
  ball4.bounceOff(wall2);
  
  if (keyDown("left")){
    greenball.x = greenball.x-2;
  }
  if (keyDown("right")){
    greenball.x = greenball.x+2;
  }
  if (greenball.isTouching(ball1) || greenball.isTouching(ball2) || greenball.isTouching(ball3) || greenball.isTouching(ball4)){
    greenball.x = 40;
    greenball.y = 190;
    
    deaths = deaths+1;
  }

  fill("lightblue");
  rect(19, 170, 50, 40);
  
  fill("beige");
  rect(310, 170, 50, 40);
  
  drawSprites();
}