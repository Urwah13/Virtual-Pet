var dog, happyDog, database, foodS, foodStock

function preload()
{
  dogIMG=loadImage("dogImg.png");
  dogIMG=loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite();
  happyDog=createSprite();
  database=createSprite();
  foodS=createSprite();
  foodStock=createSprite();
  
}

function readStock(data) {
  foodS=data.val();
}

function writeStock(x) {
  
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref('/').update({
    Food:x
  })
}
    
function draw() {  
  background(46, 139, 87);
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  
  
  drawSprites();
}



