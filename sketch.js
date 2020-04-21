const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,brick;

function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;
    brick=new Brick(350,500,50,100);
    brick2=new Brick(300,500,50,100);
    ground=new Ground(0,600,1200,10);
    brick3=new Brick(400,500,150,100);
    brick4=new Brick(550,300,100,300);
    brick5=new Brick(250,500,50,100);
    brick6=new Brick(150,500,150,100);
    brick7=new Brick(50,300,100,300);
    brick8=new Brick(150,400,400,100);
}

function draw(){
    background(0,0,0);
    
    brick.display();
    brick2.display();
    ground.display();
    brick3.display();
    brick4.display();
    brick5.display();
    brick6.display();
    brick7.display();
    brick8.display();

    Engine.update(engine);
}
