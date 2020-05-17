class food {

constructor(){
this.x = round(random(0,row-1));
this.y = round(random(0,column-1));
}

display(){

colorChange(this.x,this.y,"food");
}


}