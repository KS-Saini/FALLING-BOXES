// this is array 
//saini = [1,2,3,4,5,6,7,8,9,10];
/*
THIS LOOP RUN WHEN IT IS NOT REACH 10 AND IT IS RUNING 
CONTINOUSLY
THIS RUNING UNTIL THEN 10 IS LESS THAN 10 
*/

//for(var i = 0; i < saini.length;i++){
   /*
   THIS IF CONDITION USE FOR BRAKE AND CONTINUE ARRAY 
if(i==5){
   //break;
   continue;
}
*/
 //  console.log(saini[i]);
//}


//I AM READ ABOUT DOCUMENT.GET ELEMENT BY ID AND CLASS AND MORE ALSO

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var boxes=[];
var ground;

function setup(){
createCanvas(windowWidth,windowHeight);
engine = Engine.create();
world = engine.world;
Engine.run(engine);

ground=Bodies.rectangle(800,600,400,20,{isStatic:true});
World.add(world,ground);
}

function mouseDragged(){
   boxes.push(
         
     new Box(mouseX,mouseY,70,70,)
          
     )
 }

function draw(){
background(189)
Engine.update(engine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,800,10);
for(var i=0;i<boxes.length;i++) {
   boxes[i].show();
  }
}





