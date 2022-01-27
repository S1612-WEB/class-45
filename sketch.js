
function preload(){ 
    backgroundImage = loadImage("classroom.jpg");
    playerImg = loadAnimation ("player1.png", "player2.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);

    player = createSprite(130, height-160)
    player.addAnimation("run" , playerImg)
    player.scale = 0.7
    player.frameDelay = 10
   

}

function draw(){
    background(backgroundImage);
  
    drawSprites()
}