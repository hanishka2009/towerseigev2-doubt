const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world,ground,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,ball,b21,b22,b23,b24
var Rope,ground2,Score=0
function setup(){
    createCanvas(1000,700)
   engine=Engine.create();
   world=engine.world
   ground=new Ground(400,660,300,20)
   ground2=new Ground(740,500,250,20)
   b1=new Box(297,640,50,50)
   b2=new Box(349,640,50,50)
   b3=new Box(402,640,50,50)
   b4=new Box(450,640,50,50)
   b5=new Box(500,640,50,50)
  
   b6=new Box(320,610,50,50)
   b7=new Box(372,600,50,50)
   b8=new Box(422,600,50,50)
   b9=new Box(472,600,50,50)
   b10=new Box(350,530,50,50)

   b11=new Box(400,530,50,50)
   b12=new Box(450,530,50,50)
   b13=new Box(374,470,50,50)
   b14=new Box(424,470,50,50)
   b15=new Box(400,410,50,50)
  
   b16=new Box(670,480,50,50)
   b17=new Box(720,480,50,50)
   b18=new Box(770,480,50,50)
   b19=new Box(820,480,50,50)
   b20=new Box(720,430,50,50)
   b21=new Box(770,430,50,50)
   b22= new Box (745,370,50,50)
   ball= new polygon(100,300,50)
   Rope=new SlingShot(ball.body,{x:100,y:300})
}
function draw (){
background(50,50,50)
Engine.update(engine)
ground.display();
ground2.display();
b1.display();
b2.display();
b3.display();
b4.display()
b5.display();
b10.display();
b6.display();
b7.display();
b8.display()
b9.display();
b11.display();
b12.display();
b13.display();
b14.display()
b15.display();
b20.display();
b16.display();
b17.display();
b18.display()
b19.display();
b21.display();
b22.display();

b1.score();
b2.score();
b3.score();
b4.score()
b5.score();
b10.score();
b6.score();
b7.score();
b8.score()
b9.score();
b11.score();
b12.score();
b13.score();
b14.score()
b15.score();
b20.score();
b16.score();
b17.score();
b18.score()
b19.score();
b21.score();
b22.score();

ball.display();
Rope.display();
textSize(40)
text("score: "+Score,500,60)
console.log(Score)
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})  
}

function mouseReleased(){
   Rope.fly();

}
function keyPressed(){
   if(keyCode===32){
      Rope.attach(ball.body)
    console.log("hi")
   }
}