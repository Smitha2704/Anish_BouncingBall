// Physics engine: create engine, create world, create objects

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  ground= Bodies.rectangle(200, 350, 400, 30, options);
  World.add(world, ground);

  var ball_options={
    restitution:0.9
  }
  ball = Bodies.circle(300, 50, 30, ball_options);
  World.add(world, ball);
 
}

function draw() {
  background(0); 
  Engine.update(engine) ;

  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y, 400, 50);

  ellipseMode(RADIUS);
  fill("orange");
  ellipse(ball.position.x, ball.position.y, 30, 30)
}