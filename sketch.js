
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	roof1 = new roof(200,150,1600,10);
	
	bob1 = new bob(300,450,35);
	bob2 = new bob(350,450,35);
	bob3 = new bob(400,450,35);
	bob4 = new bob(450,450,35);
	bob5 = new bob(500,450,35);

	chain1 = new Chain(200,300,30,20)
	



	//Create the Bodies Here.


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof1.display();

  chain1.display();
  

  
  drawSprites();
 
}



