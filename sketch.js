var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var boundary;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	//fairyVoice = loadSound("sound/JoyMusic.mp3");
	

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	//fairy.velocityX=10;
    
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	boundary = createSprite(750,0,8,1900);
    boundary.shapeColor="white";
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
    
}


function draw() {
  background(bgImg);
  star.x= starBody.position.x 
  star.y= starBody.position.y
  if(star.y > 470 && starBody.position.y > 470 ){
	Matter.Body.setStatic(starBody,true);
  }
  boundary.visible=false;
  //fairyVoice.play();
  drawSprites();

}

function keyPressed() {
//when i press right arrow then fairy go right
	if (keyCode === RIGHT_ARROW) {
		//fairy.setAnimation("fairyImage1.png","fairyImage2.png");
		fairy.x=fairy.x+10;
}

    if(keyCode === LEFT_ARROW){
		//fairy.setAnimation("fairyImage1.png","fairyImage2.png");
		fairy.x=fairy.x-10;
	}
    if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
//fairyImg.collide(boundary);

}
