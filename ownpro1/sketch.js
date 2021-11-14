var bg,bgImg;
var player, shooterImg, shooter_shooting,playerdeathImage;
var graound,bullet,bulletImg;
var zombie,zombieimg,zombiedeathImage;
var bla;
var h1,h2,h3,bli,h1img,h2img,h3img;
var uwin,uwinimg,ulose,ulsoeimg;
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  explosion=loadSound("assets/explosion.mp3")
zombieimg=loadImage("assets/zombie.png");
bulletImg=loadImage("assets/bullet.png");
playerdeathImage= loadImage("assets/zombiedeath.png")
zombiedeathImage=loadImage("assets/blood.png");
h1img= loadImage("assets/h1.png");
h2img= loadImage("assets/h2.png");
h3img= loadImage("assets/h3.png");
uwinimg= loadImage("assets/win.png");
uloseimg= loadImage("assets/lose.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
h1=createSprite(displayWidth-1250, displayHeight-700, 50, 50);
h1.addImage(h1img);
h1.scale=0.2;
h2=createSprite(displayWidth-1250, displayHeight-700, 50, 50);
h2.addImage(h2img);
h2.scale=0.2;
h3=createSprite(displayWidth-1250, displayHeight-700, 50, 50);
h3.addImage(h3img);
h3.scale=0.2;
h2.visible=false;
h1.visible=false;
uwin=createSprite(displayWidth-800, displayHeight-400, 50, 50);
uwin.addImage(uwinimg);
uwin.visible=false;
ulose=createSprite(displayWidth-800, displayHeight-400, 50,50);
ulose.addImage(uloseimg);
ulose.visible=false;
bli=createSprite(displayWidth-1290, displayHeight-200,50,50);
bli.visible=false;
bla = createSprite(displayWidth-60, displayHeight-425, 50, 700);
bla.visible = false;
//creating the player sprite
player = createSprite(displayWidth-1250, displayHeight-200, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
  player.velocityY=9;
  player.debug = true
    //player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
  // player.setcollider("rectangle",0,0)
  player.setCollider("rectangle",0,0,300,470);
 
  // player.Setcollider("rectangle",0,0,300,300)

//creating zombie
zombie=createSprite(900,500,50,50)

//zombie.addImage(zombiedeathImage);
zombie.scale=0.2;
zombie.velocityX=-2;
zombie.debug =true;
zombie.setCollider("rectangle",0,0,200,800);
zombie.addImage(zombieimg);
bullet=createSprite(displayWidth-1350, displayHeight-250, 10, 10);
bullet.addImage(bulletImg);
graound = createSprite(200, 600, 2700, 10);
graound.visible=false;
bullet.scale=0.2;                   
bullet.visible=false;

}

function draw() {
  background(0); 

if(player.isTouching(graound)) {
  player.collide(graound);
}


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
  bullet.y = bullet.y-30
}
else if (keyWentDown("UP_ARROW")){
  player.velocityY=5;
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
 bullet.y = bullet.y+30 
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 //bullet.position=(displayWidth-1250, displayHeight-250, 10, 10);
  player.addImage(shooter_shooting)
  explosion.play();
  bullet.visible=true;
  bullet.velocityX=30;
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  //player.addImage( shooter_shooting )
 // player.addImage()
  player.addImage(shooterImg)
 //player.addImage(shooter_1.png)

}

if(player.isTouching(zombie)){

h2.visible=true;
h1.visible=false;
h3.visible=false;
}
 if (zombie.isTouching(bli)){
 player.addImage(playerdeathImage);
  h1.visible=true;
  h2.visible=false;
  zombie.velocityX=0;
  ulose.visible=true;
}


if(bullet.isTouching(zombie)){
 zombie.addImage(zombiedeathImage);
 zombie.velocityX=0;
 uwin.visible=true;
 }
 
drawSprites();

}
