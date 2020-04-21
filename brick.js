class Brick{
    constructor(x,y,w,h){
       var options={
        'restitution':0.5,
        'friction':0.7,
        'density':1.3
        }
        this.body=Bodies.rectangle(x,y,w,h);
        this.w=w;
        this.h=h;
        World.add(world,this.body)
    } 
    display(){
        push();
        var pos=this.body.position;
        fill(207,207,207);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
   }
}