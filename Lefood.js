class food {

constructor(){
this.x = -1;
this.y = -1;
//makes sure the food doesnt spawn on top of the snake or the body.
this.deploy=true;
}

display(){
if (this.deploy && victory==false){
this.x=round(random(0,row-1));
this.y=round(random(0,row-1));
}
for (let index = 0; index < snake.body.length; index+=2) {
if (snake.body[index]==this.x && snake.body[index+1]==this.y){
this.deploy=true;
    this.display();
console.log("ay");
}
}

if (this.x == snake.x && this.y==snake.y){
this.deploy=true;
this.display();
}


this.deploy=false;
colorChange(this.x,this.y,"food");

}


}