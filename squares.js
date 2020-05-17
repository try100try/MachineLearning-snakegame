class grid {

    constructor(posy,posx,x,y,width,height){
this.x=x;
this.y=y;
this.width=width;
this.height=height;

this.posy=posy;
this.posx=posx;
    }
    
    display(){

        fill(200);
        rect(this.x,this.y,this.width,this.height);

    }
    
    changeColour(v1,v2,v3){
        push();
        fill(v1,v2,v3);
        rect(this.x,this.y,this.width,this.height);
    pop();
    }
    
    }

