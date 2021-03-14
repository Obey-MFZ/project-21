var canvas;
var music;
var surface1
var surface2
var surface3
var surface4
var box
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
  //create 4 different surfaces
 
 surafce1 = createSprite(100,500,100,20)
 surface1.shapeColor = 'red'
   
 surface2 = createSprite(200,500,100,20)
 surface2.shapeColor = 'yellow'

 surface3 = createSprite(300,500,100,20)
 surface3.shapeColor = 'green'

 surface4 = createSprite(400,500,100,20)
 surface4.shapeColor = 'blue'
    //create box sprite and give velocity
box = createSprite(400,300,50,50) 
box.shapeColor = 'white';
box.VelocityY = 7;
box.VelocityX = 5;
}

function draw() {
    background(rgb(169,169,169));
   drawSprites();
    //create edgeSprite
 createEdgeSprites()
 box.bounceOff (Edges);


    //add condition to check if box touching surface and make it box
if (box.IsTouching(surface3)){
box.bounceOff(surface3);
box.shapeColor = 'green'}

if (box.IsTouching(surface1)){
    box.bounceOff(surface1);
    box.shapeColor = 'red'}

    if (box.IsTouching(surface4)){
        box.bounceOff(surface4);
        box.shapeColor = 'blue'}

        if (box.IsTouching(surface2)){
            box.bounceOff(surface2);
            box.shapeColor = 'yellow';
}

}
