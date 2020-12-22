const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var drops=[];
var maxDrops=150;
var umbrella,batman,batmanAni;

function preload(){
    batmanAni=loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png",);
    thunder1=loadImage("1.png");
    thunder2=loadImage("2.png");
    thunder3=loadImage("3.png");
    thunder4=loadImage("4.png");
}

function setup(){
  createCanvas(300,600);
  engine=Engine.create();
  world=engine.world;

  batman=createSprite(150,465,0,0);
  batman.addAnimation("walking",batmanAni);
  batman.scale=0.4;

  for(var i=0;i<maxDrops;i++)    drops.push(new Drop(random(0,400),random(0,200)));

  umbrella=new Umbrella(160,419,80);

}

function draw(){
    background(0);
    Engine.update(engine);

    drawSprites();

    for(var i in drops){
        drops[i].display();
        drops[i].update();
    }
    
    //umbrella.display();

    if(frameCount%60>=0 && frameCount%60<=1){
        r=Math.round(random(1,4));
        switch (r) {
            case 1:
                image(thunder1,random(-100,300),0,200,200);              
                break;
            case 2:
                image(thunder2,random(-100,300),0,200,200);              
                break;
            case 3:
                image(thunder3,random(-100,300),0,200,200);              
                break;
            case 4:
                image(thunder4,random(-100,300),0,200,200);              
                break;
            default:
                break;
        }
    }
}   

