var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var redGroup;
var arrowGroup

var gameState = "PLAY";

var score = 0;

function preload(){
  
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
  backgroundImage = loadImage("background0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  redGroup = new Group();

  arrowGroup = new Group();

  //criar um plano de fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criar um arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(400);

  if (gameState === "PLAY") {
    // mover o chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
    //mover o arco
    bow.y = World.mouseY
  
    // soltar a flecha quando a tecla espaço for pressionada
    if (keyDown("space")) {
    createArrow();
    } 

    //mude o valor do balão aleatório para 4
    var select_balloon = Math.round(random(1,4));
  
    if (World.frameCount % 100 == 0) {
    switch(select_balloon){
    case 1: redBalloon()
    break;
    case 2: blueBalloon()
    break;
    case 3: greenBalloon()
    break;
    case 4: pinkBalloon()
    break;
    }
   }

   if (arrowGroup.isTouching(redGroup)) {
    redGroup.destroyEach();

    gameState = "END";
   }
  }
  
  if (gameState === "END") {
    scene.velocityX = 0
    bow.destroy
  }
  drawSprites();

  text("Pontuação: " + score, 10, 20);
}


// criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);

}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redGroup.add(red);

}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;

}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;

}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;

}
