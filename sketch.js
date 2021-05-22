var balloon,balloonImage1,balloonImage2;
// create database and height variable here
var database,height;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  createCanvas(1500,700);
  database = firebase.database ();
  var balloonheight = database.ref("Balloon/height");
  balloonheight.on("value",readheight,showError);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
  
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  }
  else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x +10;
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y -10;
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=balloon.scale -0.01;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10;
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=balloon.scale +0.01;
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}



function readheight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.x = height.y;
}
function showError(){
  console.log("Error in writing to the database");
}