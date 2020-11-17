var monkey,monkeyrunning
var back1
var bananasGroup,Banana
var stonesGroup,Stone
var PLAY = 1
var gameState = PLAY;
var END = 0;
score = 0;
function preload(){
 
  monkeyrunning = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png");
  
  Back1 = loadImage("jungle.jpg");
  
  Banana = loadImage("banana.png");
  
  Stone = loadImage("stone.png");

 
  
}


function setup() {
  createCanvas(600, 200);
   
  back1 = createSprite(300,100,600,200);
  back1.addImage(Back1);
  
  monkey = createSprite(50,100,20,50);
  monkey.addAnimation("runnng",monkeyrunning);
  monkey.scale=0.1;
  
  invisibleGround = createSprite(300,200,600,20);
   invisibleGround.visible = false;
  
    bananaGroup=new Group();
  stoneGroup=new Group();
  
  
   score = 0;
}

function draw() {
  background("white");
  
 
  
    if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
 monkey.velocityY = monkey.velocityY + 0.8

   monkey.collide(invisibleGround);
  
   
    if(stoneGroup.isTouching(monkey)){
        gameState = END;
    }
  
  if(gameState===END){
    
  if(monkey.isTouching(stoneGroup)){
    stoneGroup.destroyEach();
    monkey.scale = monkey.scale-0.02
  }
    
    
  }
  
 if(bananaGroup.isTouching(monkey)){
   score = score + 1;
  bananaGroup.destroyEach();
   monkey.scale = monkey.scale+0.0050;
 }
  
  spawnbanana();
  spawnstone();

  drawSprites();
   text("Score: "+ score, 500,50);
  
  
  
}
  
  
function spawnbanana() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,80,40,10);
    banana.y = Math.round (random(10,80));
    banana.addImage(Banana);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    bananaGroup.add(banana);
 
  }
  
}
  
  
function spawnstone() {
  if (frameCount % 100 === 0) {
    var stone = createSprite(600,80,40,10);
    stone.y = Math.round (random(160,170));
    stone.addImage(Stone);
    stone.scale = 0.080;
    stone.velocityX = -5.5;
    
     //assign lifetime to the variable
    stone.lifetime = 200;
    stoneGroup.add(stone);
   
  }
 
}
