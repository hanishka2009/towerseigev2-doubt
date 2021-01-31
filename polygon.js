class polygon {
    constructor(x,y,r) {
      var options = {
          isStatic:false,
          friction:1,
           density:0.4
      }
      this.r=50
      this.body = Bodies.circle(50,200,this.r,options);
     
      this.image=loadImage("polygon.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    
      push()
      translate(pos.x,pos.y);
      imageMode(CENTER);
     
      image(this.image,0,0, 50,50);
      pop();
    }
  };