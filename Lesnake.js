class snake {

    constructor() {
this.x = round(row/2)-1;
this.y = round(column/2)-1;
this.constantDirection;
this.timer=0;

this.body=[];

this.amountOfChomps=0;

this.beforeChompCheck=[this.x,this.y];
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
this.constantDirection=direction;
}
//times the whole event so it doesnt do it every frame
if (this.timer>10){

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
} else if (this.constantDirection=="up"){
this.y--;} else if (this.constantDirection=="down"){
this.y++;} else if (this.constantDirection=="right"){
this.x++;}
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


}




