class Box{

    constructor(x,y,width,height){
        //initialize your properties
        var options = {
           restitiution: 0.8
        };
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.h = height;
        World.add(world,this.body);
        console.log(this.body);
       }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        //objects to topple
        //save previous settings
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.w,this.h);
        //revert it back to the previous settings
        pop();
    }







}