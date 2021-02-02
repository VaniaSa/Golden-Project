const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var javelin, person;
var personimg

var gameState = "onSling";

var score=0;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    //getbgimage();
    personimg = loadImage('sprites/person.png')
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    javelin = new Javelin(145,330,5,75);
    person = new Person(javelin.body,{x:138, y:329});
}

function draw(){
    //if(backgroundimg)
    background(255,255,255);
    Engine.update(engine);
    //noStroke();
    //textSize(39);
    fill("black");
    text("Score: " + score,width-300,50);
    //strokeWeight(4);
    //text("x:"+ mouseX,50,50);
    //text("y:"+ mouseY,50,60);
    image(personimg,100,300,70,100);
    if(javelin.body.position.x>500 && javelin.body.position.x<1200)
    {
        score++
    }
    person.display();
    javelin.display();
    ground.display();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(javelin.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    person.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}