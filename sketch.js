
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boxPosition=width/2+130;
	boxY=280;

	boxLeftSprite=createSprite(boxPosition,boxY,20,100);
	boxLeftSprite.shapeColor="red";

	boxLeftBody=Bodies.rectangle(boxPosition,boxY,20,100);
	World.add(world,boxLeftBody);

	boxBaseSprite=createSprite(boxPosition+100,boxY+40,200,20);
	boxBaseSprite.shapeColor="red";

	boxBaseBody=Bodies.rectangle(boxPosition+100,boxY+40,200,20);
	World.add(world,boxBaseBody);

	boxRightSprite=createSprite(boxPosition+200,boxY,20,100);
	boxRightSprite.shapeColor="red";

	boxRightBody=Bodies.rectangle(boxPosition+200,boxY,20,100)
	World.add(world,boxRightBody);

	groundSprite=createSprite(width/2, height-50, width,30);
	groundSprite.shapeColor="yellow"

	ground = Bodies.rectangle(width/2, height-50, width, 30 , {isStatic:true} );
	 World.add(world, ground);

	 var options={
		 isStatic:false,
		 restitution:0.3,
		 density:1.2,
		 friction:0.5,
	 }

    object=Bodies.circle(170,320,10,options);
	World.add(world,object);
	
}



function draw(){

	background(0);
	
	Engine.update(engine);
	
   ellipseMode(RADIUS);

   rectMode(CENTER);

   ellipse(object.position.x,object.position.y,15);

   drawSprites();
   
}

function keyPressed() {
	if(keyCode===UP_ARROW) {

		Matter.Body.applyForce(object,object.position, {x:15,y:-15});

	}
   }	