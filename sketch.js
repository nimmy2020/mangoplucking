
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground;
var elastic;
function preload()
{
	//boy=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(900,350);

	mango1=new Mango(700,350);
	mango2=new Mango(750,300);
	mango3=new Mango(800,250);
	mango4=new Mango(825,275);
	mango5=new Mango(900,350);
	mango6=new Mango(1000,350);
	mango7=new Mango(975,250);
	mango8=new Mango(1000,350);

	stone=new Stone(20,350);

	boy=new Boy(200,400);
	elastic=new Elastic(stone.body,{x:100,y:350});
	ground=new Ground(600,600,1200,10);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stone.display();
  elastic.display();
  ground.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	elastic.fly();
}
function detectCollision(fstone,fmango){
	
	mbp=fmango.body.position;
	sbp=fstone.body.position;
	//console.log(sbp);
	
	var distance=dist(sbp.x,sbp.y,mbp.x,mbp.y);
	//console.log(distance);
	console.log(fmango.r)
	if(distance<=fmango.r+fstone.r){
		console.log("inside")
		Matter.Body.setStatic(fmango.body,false);
	}
}



