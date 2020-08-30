class Ground{

    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true})
        this.w = width;
        this.h = height;
        World.add(world,this.body);
            }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(220);
        rect(pos.x,pos.y,this.w,this.h);
            }












}