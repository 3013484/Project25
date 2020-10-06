var paperObject,ground;
var bottomBox, leftBox, rightBox;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	bottomBox = createSprite(600,650,200,20);
	bottomBox.shapeColor = "red";
	leftBox = createSprite(500,610,20,100);
	leftBox.shapeColor = "red";
	rightBox = createSprite(700,610,20,100);
	rightBox.shapeColor = "red";

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObject.display();
  dustbinObj.display();
  paperObject.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
	}
}


