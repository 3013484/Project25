class Ground{ 
    constructor(x, y, width, height) {
        var options={
            isStatic : false,
            restitution : 0.3,
            frictiom : 0.5,
            density : 1.2
        }

    Matter.Bodies.rectangle(10,10,5, options, maxSides);
  this.width = width;
  this.height = height;
  
  World.add(world, this.body);
}

}