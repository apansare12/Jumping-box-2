var canvas;
var music;
var rect1, rect2, rect3, rect4, rectmove;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
canvas = createCanvas(800,600);

    //create 4 different surfaces
rect1 = createSprite(80, 570, 180, 50);
rect1.shapeColor="green";

rect2 = createSprite(290, 570, 180, 50);
rect2.shapeColor="blue";

rect3 = createSprite(500, 570, 180, 50);
rect3.shapeColor="red";

rect4 = createSprite(710, 570, 180, 50);
rect4.shapeColor="orange";


rectmove = createSprite(710, 70, 50, 50);
rectmove.shapeColor="red";
rectmove.velocityX = 15;
rectmove.velocityY = 10;



}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    

    
  //balls bounce of the edges
    rectmove.bounceOff(edges)
  //rectmove.bounceOff("edges");
  if(rect1.isTouching(rectmove)&&rectmove.bounceOff(rect1)){
      rectmove.shapeColor = "green";
  }
  //rectmove.bounceOff("leftEdge");
  if(rect3.isTouching(rectmove)&&rectmove.bounceOff(rect3)){
    rectmove.shapeColor = "red";
}
  //rectmove.bounceOff("rightEdge");
  if(rect4.isTouching(rectmove)&&rectmove.bounceOff(rect4)){
    rectmove.shapeColor = "orange";
}
  
if(rect2.isTouching(rectmove)){
    rectmove.shapeColor = "blue";
    rectmove.velocityX = 0;
    rectmove.velocityY = 0;

}
//create box sprite and give velocity
    //add condition to check if box touching surface and make it box

    drawSprites();
}



