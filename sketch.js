const World = Matter.World,
    Engine = Matter.Engine,
    Bodies = Matter.Bodies;

var body;
var engine, world;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    body = new Box(200,200,50,20);
}
function draw(){
    background(51);
    Engine.update(engine);
    console.log(body.body);
    body.display();
}