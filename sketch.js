//Create variables here
var dog, dogimg,database,foodS,foodStock,happyDog
function preload()
{
happyDog=loadImage("dogImg.png")
dogimg=loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  foodStock=database.ref("food")
  foodStock.on("value",readStock)
  foodStock.set(20)
  dog=createSprite(250,300,18,60)
  dog.addImage(happyDog)
  dog.scale=0.2
}


function draw() {  
 
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(dogimg)
}
if(keyWentUp(UP_ARROW)){
  dog.addImage(happyDog)
  }
  drawSprites();
  //add styles here
  fill(0);
  textSize(20)
text("food Remaining: "+foodS,150,150)
text("note: press the up arrow key to feed DRAGO milk",20,40)
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
x=0
  }
  else{
    x=x-1
  }
database.ref('/').update({
  food:x
})
}

