class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic:false,
          restitution:0.8,
          friction:1.0,
           density:0.4
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      
      if(this.body.speed<3){
        var pos =this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        strokeWeight(3)
        stroke("black")
        fill("blue");
        rect(0,0, this.width, this.height);
        pop();
  }
     else{
       World.remove(world,this.body)
       push()
       this.visibility=this.visibility-5
       tint(255,this.Visiblity);
       
       pop();
     }
     
    }
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        Score=Score+1;
      }}
  };