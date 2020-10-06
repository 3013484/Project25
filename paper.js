class Paper {
    constructor(x, y, width, height) {
        var options={
            isStatic : true,
            restitution : 0.3,
            frictiom : 0.5,
            density : 1.2
        }

        Matter.Bodies.circle(10,10,5, options, maxSides);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("green");
      strokeWeight(4);
      stroke("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  