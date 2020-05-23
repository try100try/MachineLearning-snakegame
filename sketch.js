var row = 20;
var column = 20;

let backgroundGrid=[];

var score;
var tempScore;
var distScoreX=0;
var distScoreY=0;

function setup(){

    createCanvas(500,500);
//makes the squares focuspoint in the middle.
rectMode(CENTER);
strokeWeight(1);
//initialisation of sneko
snake = new snake();

NAMNAM = new food();

}


var shouldRun;

function draw(){


//abs makes the number positive if it's negative
//round takes the number and rounds it up or down depending on the digits

distScoreX = abs(abs((snake.x-NAMNAM.x)/row)-1);
distScoreY = abs(abs((snake.y-NAMNAM.y)/column)-1);
tempScore = distScoreX*2.5+distScoreY*2.5;
//console.log("X:"+distScoreX+"  Y:"+distScoreY+"  tempScore:"+tempScore);


//make column
for (let downie = 0; downie < column; downie++) {
//fill the rest of the spots with columns
for (let rightie = 0; rightie < row; rightie++) {
//so we only push the amount of grid fields there are.
    if (backgroundGrid.length==row*column){
    break;}
    backgroundGrid.push(new grid(downie,rightie,rightie*width/row+(width/row)/2,downie*height/column+(height/column)/2,width/row,height/column))


}

}

//initializes and shows food
NAMNAM.display();
//shows the snake as a green color
snake.display();
//sadly makes the sneko able to die :(
    snake.leDeath();
//allows movement for the snake but with a set delay
snake.movement();

//downie,rightie,rightie*width/row+(width/row)/2,downie*height/column+(height/column)/2,width/row,height/column

//scans for collision between snake and food
if(snake.intersects(NAMNAM)){
NAMNAM= new food();
snake.fed();
}

}
var shouldThisRun=true;

//function to vibe the coords to specific colors.
function colorChange(x,y,situation){
    for (let index = 0; index < backgroundGrid.length; index++) {
if (shouldThisRun){
    backgroundGrid[index].display();
    console.log(backgroundGrid.length,index);
    if (index==backgroundGrid.length-1){
    shouldThisRun=false;
    }
}

if (situation=="food"){
        if (backgroundGrid[index].posy==y && backgroundGrid[index].posx==x){
        backgroundGrid[index].changeColour(255,0,0);
        }}
        if (situation=="body"){
            if (backgroundGrid[index].posy==y && backgroundGrid[index].posx==x){
                backgroundGrid[index].changeColour(0,155,0);
                }}
    if (situation=="snake"){
        if (backgroundGrid[index].posy==y && backgroundGrid[index].posx==x){
        backgroundGrid[index].changeColour(0,255,0);
        }}

    
        if (situation=="background"){
        if (backgroundGrid[index].posy==y && backgroundGrid[index].posx==x){
        backgroundGrid[index].changeColour(200,200,200);
        }}
        
        if (situation=="blue"){
            if (backgroundGrid[index].posy==y && backgroundGrid[index].posx==x){
                backgroundGrid[index].changeColour(0,0,255);
                }}



        }
}
//keyPressed is a p5 function that calls whenever a key is pressed
function keyPressed(){
//and the keyCode is a reader that reads which key is pressed
//and the numbers are given by keycode.info
if (keyCode == LEFT_ARROW || keyCode == 65){
snake.movement("left");
}

if (keyCode == DOWN_ARROW || keyCode == 83){
    snake.movement("down");
    }

    if (keyCode == RIGHT_ARROW || keyCode == 68){
        snake.movement("right");
        }

        if (keyCode == UP_ARROW || keyCode == 87){
            snake.movement("up");
            }
            
            if (keyCode == 32){
            snake.movement('stop');
            }
}



/*Til viderarbejde:
Jeg laver et ai program der spiller snake for mig, simpel as that.
https://github.com/Nat-Ale-Oli/Beat-The-Carrot <- olivers eksempel
https://github.com/tortellinispisere/Plushie-i-kurv/blob/JohnMogensen/sketch.js#L66 <- min gamle kode man kan yoinke dele af


*/

// rect(index*width/row+(width/row)/2,index*height/column+(height/column)/2,width/row,height/column);
/*
push();
rect(rightie*width/row+(width/row)/2,downie*height/column+(height/column)/2,width/row,height/column);
pop();
*/