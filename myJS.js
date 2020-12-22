class Drop{
    constructor(x,y){
        var options={
            friction:0.03
        }
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,3,options);
        World.add(world,this.body);
    }
    update(){
        if(this.body.position.y>height){
            Body.setPosition(this.body,{x:random(0,400),y:random(0,200)});
        }
    }
    display(){
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,6,6);
    }
}

class Umbrella{
    constructor(x,y,r){
        var options={
            isStatic:true,
            friction:0
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.r*2,this.r*2);
    }
}