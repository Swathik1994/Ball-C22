// name spacing 

const Engine = Matter.Engine;  //Engine-> universe
const World= Matter.World;  // World-> Globe
const Bodies = Matter.Bodies; //Bodies-> objects

var engine, world;
var object, ground,ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var options ={
        isStatic: true
    }

  ground= Bodies.rectangle(200,390,400,20,options);
    World.add(world,ground);

   //ground=createSprite(200,200,50,50);


   var ball_options ={
    isStatic: true
}

    ball=Bodies.circle(200,220,35,ball_options);
    World.add(world,ball);


    console.log(ball);
}

function draw(){
    background(0);
    Engine.update(engine);

    rectMode (CENTER);
    fill ("white");
  rect (200,100,50,50);

   // rectMode(CENTER);
   fill ("brown");
    rect(  ground.position.x, ground.position.y,400,50);

    fill("red");
    ellipse(ball.position.x,ball.position.y,35,35)
   
}