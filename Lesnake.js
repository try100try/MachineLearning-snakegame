class snake {

    constructor(brain) {
this.x = round(row/2)-1;
this.y = round(column/2)-1;
this.constantDirection;
this.timer=0;
this.timeLimit=25;

this.amded=false;

this.body=[];

this.amountOfChomps=0;

this.beforeChompCheck=[this.x,this.y];

this.directionTemp;

        // position and size of bird
        this.fitness = 0;

        // lav et neuralt netværk med navn "brain" med 4 inputs 6 hidden layers og 4 outputs

        if (brain) {
            this.brain = brain.copy();
        } else {
            this.brain = new NeuralNetwork(2, 4, 4);
        }
        this.up = false;
        this.down = false;
        this.right = false;
        this.left = false;
        this.health;
        if (this.health==undefined){
        if (row>=column){
        this.health=row
        } else {
        this.health=column
        }
        }
        this.dif = 7;

    }

display(){
    if (this.body.length>0){
        for (let index = 0; index < this.body.length; index+=2) {
        colorChange(this.body[index],this.body[index+1],"body");
        
        }
        }
colorChange(this.x,this.y,"snake");
if (this.amountOfChomps<=1){
if (this.beforeChompCheck[0]==this.x && this.beforeChompCheck[1]==this.y){
} else {
colorChange(this.beforeChompCheck[0],this.beforeChompCheck[1],"background");
this.beforeChompCheck[0]=this.x;
this.beforeChompCheck[1]=this.y;
}

}


}
//i used to have a switch case but that didn't do the job
//so i changed it for a simple first grade if statement kek

movement(direction){
//changes a variable into the given string, so it can continue to update
if (direction!=undefined){
this.directionTemp=direction;
}
//times the whole event so it doesnt do it every frame
if (this.timer>=this.timeLimit){
    if (this.directionTemp!=undefined){
        if (this.constantDirection==undefined ||
        this.constantDirection=="left" && this.directionTemp!="right" || 
        this.constantDirection=="right" && this.directionTemp!="left"||
        this.constantDirection=="up" && this.directionTemp!="down" ||
        this.constantDirection=="down" && this.directionTemp!="up" ||
        this.constantDirection=="stop"){
        this.constantDirection=this.directionTemp;}
        }
//this adds the body to the snake.
if (this.amountOfChomps==this.body.length/2){
colorChange(this.body[0], this.body[1],"background");
    this.body.shift();
    this.body.shift();
    }
    if (this.amountOfChomps>this.body.length/2){
    this.body.push(this.x,this.y);
} 



if (this.constantDirection=="left"){
    this.x--;
}
if (this.constantDirection=="up"){
this.y--;
}
if (this.constantDirection=="down"){
this.y++;
}
if (this.constantDirection=="right"){
this.x++;
}
if (this.health>=0)
console.log(this.health);

this.health--;

this.timer=0;
}else {
this.timer++;
}
//makes out of bounds rules
if (this.x<0){
this.x=row-1;
}
if (this.y<0){
this.y=column-1;
}
if (this.y>column-1){
this.y=0;
}
if (this.x>row-1){
this.x=0;
}
}


intersects = function(other) {
    // needs to return either true or false
    // var d = dist(circ1.x, circ1.y, circ2.x, circ2.y);
    if (this.x==other.x && this.y==other.y) {
    	return true;
    } else {
      return false;
    }
  }

fed(){
this.amountOfChomps++;
}


leDeath(){
for (let index = 0; index < this.body.length; index+=2) {
if (this.x==this.body[index] && this.y==this.body[index+1]){
//input code here for when you die by contact
this.amded=true;
}
}
if (this.health<=0){
//input code here for when you die by time.
this.amded=true;
}

if (this.amded){
savedSneks.push(snake)[0];
console.log("next gen please");
nextGeneration();
}

}

mutate(){
this.brain.mutate(0.1);
}

think(foodx,foody){

    let inputs = [];

    inputs[0] = foodx;

    inputs[1] = foody;



    let output = this.brain.predict(inputs);
    if (output[0] > output[1]) {
        this.left = false;
        this.right=false;
        this.up=true;
        this.down=false;
    } else {
        this.left = false;
        this.right=false;
        this.up=false;
        this.down=true;
    }

    if (output[2] > output[3]) {
        this.left = true;
        this.right=false;
        this.up=false;
        this.down=false;
    } else {
        this.left = false;
        this.right=true;
        this.up=false;
        this.down=false;
    }

}


}




