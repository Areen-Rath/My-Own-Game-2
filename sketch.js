var backgroundScene, backgroundImg;

var boy, boyAnim;
var obstacle, obstacle1, obstacle2, obstacle3, obstaclesGroup;

var gameState = 1;

function preload(){
  backgroundImg = loadImage("background.jpg");

  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");

  boyAnim = loadAnimation("1.png", "2.png", "3.png", "4.png");
}

function setup(){
  createCanvas(displayWidth - 100, displayHeight - 150);
  
  backgroundScene = createSprite(1050, 375, 10, 10);
  backgroundScene.addImage(backgroundImg);
  backgroundScene.velocityX = -8;
  backgroundScene.scale = 3;

  boy = createSprite(70, height - 100);
  boy.addAnimation("walk", boyAnim);
  boy.scale = 0.8;
  boy.mirrorX(boy.mirrorX() * -1);

  obstaclesGroup = new Group();
}

function draw(){
  background("white");

  if(backgroundScene.x < 275){
    backgroundScene.x = 1000
  }

  spawnObstacles();

  drawSprites();
}

function spawnObstacles(){
  if(frameCount % 120 === 0){
    obstacle = createSprite(width + 50, height - 60);
    obstacle.velocityX = -5;

    var rand = Math.round(random(1, 3));

    switch(rand){
      case 1:
        obstacle.scale = 0.7;
        obstacle.addImage(obstacle1);
        break;
      case 2:
        obstacle.scale = 0.6
        obstacle.addImage(obstacle2);
        break;
      case 3:
        obstacle.y = height - 40;
        obstacle.addImage(obstacle3);
        break;
    }
    obstaclesGroup.add(obstacle);
  }
}

function spawnBooks(){

}