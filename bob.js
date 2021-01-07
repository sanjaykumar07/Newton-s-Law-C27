class bob {
  constructor(x, y, r) {
    var options = {
      isStatic: true,
      restitution: 0.3,
      friction: 0.5,
      density: 1.2,
    };
    this.body = Bodies.circle(x, y, 25, options);
    World.add(world, this.body);
   this.radius = r;
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);

    fill("white");
    ellipseMode(this.radius)
    ellipse(0,0, 50);




    pop();
  }
}
