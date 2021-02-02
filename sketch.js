
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	//boyIm_age = loadImage("Plucking mangoes_images/boy.png")
}

function setup() {
	createCanvas(800, 700);

	 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(700,600,1600,20);

	mangotree = new tree(550,450,300,PI/2)

	mango1 = new mango(500,450,30)
	mango2 = new mango(580,450,30)
	mango3 = new mango(510,390,30)
	mango4 = new mango(550,410,30)
	mango5 = new mango(600,410,30)
	mango6 = new mango(600,360,30)
	mango7 = new mango(560,360,30)

	Johan = new boy(100,550,180)

	rock = new stone(70,500,50)
	
	Shot = new SlingShot(rock.body,{x:70,y:500});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(28,5,243);
  
  drawSprites();

  ground1.display()

  mangotree.display()

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()

  Johan.display()

  rock.display()
  Shot.display()
}

function mouseDragged(){
    
Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
    
    
}


function mouseReleased(){
    slingshot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(rock.body);
    }
}


