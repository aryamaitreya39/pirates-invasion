var countDistanceX = 0;
function preload()
{}

function setup() {
  createCanvas(9000, 668);
  //platform1=new Platform(100);
  //platform2=new Platform(500);
  for(var i + 0; 1<6; i++){
Platform = new Platform (countDistanceX);
countDistanceX = countDistanceX+Plateform.rw;

}

function draw() {
  background('skyblue'); 
 drawSprites();
}

