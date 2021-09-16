var dog, dog_happy;
var database;
var food_stock, foodS;

var dog_image;

function preload(){
  dog_image = loadImage("image/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage(dog_image);
  
}


function draw() {  

  drawSprites();

}



