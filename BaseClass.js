class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.9,
            'friction':0.25,
            'density':1.0,
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("box.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,70,70);
        pop();
      }
}