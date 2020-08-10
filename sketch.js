var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

var	border1,border2,border3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	//ground = new Ground(width/2, 670, width, 100 , {isStatic:true} );
	//border1=new Ground(width/2,590,150,30 , {isStatic:true});
	fill("red");
	ground = new Ground(width/2, 590, width, 10 , {isStatic:true} );
	 //World.add(world, ground);
	 boxBase=Bodies.rectangle(width/2, 570, 150, 10 , {isStatic:true} );
	 World.add(world, boxBase);
 	//boxBase.shapeColor=color(255,0,0);
	border2=new Bucket(300,525,30,150);
	border3=new Bucket(500,525,30,150);
	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  ground.display();
 // border1.display();
   border2.display();
   border3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    //matter.Body.restitution(0);
  }
  if(packageSprite.y>450){
	Matter.Body.setStatic(packageBody,true);
  }
}



