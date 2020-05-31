var row = 20;
var column = 20;

let backgroundGrid=[];

var victory=false;

var fitness;
var distanceForFitness;
var distScoreX=0;
var distScoreY=0;
//victoryscreen with flashing random colours;
var randomColour;

//neural netværk kode.
let savedSneks=[];

const population=1;



function setup(){

    createCanvas(500,500);
UI();
//makes the squares focuspoint in the middle.
rectMode(CENTER);
strokeWeight(1);
//initialisation of sneko
snake = new snake();

NAMNAM = new food();



}


function draw(){

UIConstant();
//abs makes the number positive if it's negative
//round takes the number and rounds it up or down depending on the digits

distScoreX = abs(abs((snake.x-NAMNAM.x)/row)-1);
distScoreY = abs(abs((snake.y-NAMNAM.y)/column)-1);
distanceForFitness = distScoreX*2.5+distScoreY*2.5;
if (snake.amountOfChomps==row*column){
fitness=125;
} else {
fitness = (snake.amountOfChomps/(row*column)*100)+distanceForFitness;
}

//console.log(fitness);

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

snake.think(NAMNAM.x,NAMNAM.y);

if (snake.amountOfChomps >= row*column){
youWon();
}



}
var shouldThisRun=true;

//function to vibe the coords to specific colors.
function colorChange(x,y,situation){
    for (let index = 0; index < backgroundGrid.length; index++) {
if (shouldThisRun){
    backgroundGrid[index].display();
    if (index==backgroundGrid.length-1){
    shouldThisRun=false;
    }
}
if (victory==false){
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
        if (situation=="victory"){
            if (backgroundGrid[index].posy==y && backgroundGrid[index].posx==x){
                
                randomColour=floor(random(0,5));
                if (randomColour==0){
                backgroundGrid[index].changeColour(255,0,0);}

                if (randomColour==1){
                backgroundGrid[index].changeColour(0,255,0);}
                
                if (randomColour==2){
                    backgroundGrid[index].changeColour(0,0,255);}

                if (randomColour==3){
                backgroundGrid[index].changeColour(255,255,255);}

                if (randomColour==4){
                backgroundGrid[index].changeColour(0,0,0);}
                }}
        



        }
}
//keyPressed is a p5 function that calls whenever a key is pressed
function keyPressed(){
//and the keyCode is a reader that reads which key is pressed
//and the numbers are given by keycode.info
//also disables movement at victory
if (victory==false){
if (keyCode == LEFT_ARROW || keyCode == 65 || snake.left){
snake.movement("left");
}

if (keyCode == DOWN_ARROW || keyCode == 83 || snake.down){
    snake.movement("down");
    }

    if (keyCode == RIGHT_ARROW || keyCode == 68 || snake.right){
        snake.movement("right");
        }

        if (keyCode == UP_ARROW || keyCode == 87 || snake.up){
            snake.movement("up");
            }
            
            if (keyCode == 32){
            snake.movement('stop');
            }}
}

function youWon(){
victory=true;

colorChange(floor(random(0,row)),floor(random(0,column)),"victory");

}

function nextGeneration() {
snake.fitness = fitness;



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