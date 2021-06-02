
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wall;

//Needed to create the rotating fan
var wedge;
var angle=60;
var poly;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  /*We want our wedge to be static 
  at a certain position
  var ops={
    isStatic:true
  };
*/
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  /*Needed for the steady wall from 
  which the ball will bounce*/
  wall = Bodies.rectangle(300, 150, 70, 10, ground_options);
  World.add(world,wall);
  
  //Rotating Fan
  wedge = Bodies.rectangle(100,200,100,20,ground_options);
  World.add(world,wedge);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  /*We need Body.rotate so that we can 
  connect the wedge to the laws of physics 
  i.e. it will make the ball reflect while 
  being rotated. If this statement is not 
  provided the ball will bounce on the wedge 
  but not be reflected by its rotation. */
  Body.rotate(wedge,angle)
  /*Catures the recent changes that were made 
  in the frame due to the recent run of function 
  draw()*/
  push();
  
 /*Changes the axis of rotation to the center of the wedge*/
  translate(wedge.position.x,wedge.position.y);
 /*This rotates the rectangle drawn by the rect() function*/ 
  rotate(angle);
  /*This is the distance of the rectangle from the origin 
  which has now been changed to the wedges x and y position.
  Since we want the rectangle to be similar to the wedge
  hence the x and y position is 0,0*/
  rect(0,0,100,20);
  /*Removes the changes caught by the push() function*/
  pop();
  
  //Everytime changes the angle
  angle = angle + 0.1;

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 


  rect(wall.position.x,wall.position.y,70,20);
  

  
  
}

