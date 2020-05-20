class Player {
  constructor() {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocity = velocity;
    this.xspeed = 1;
    this.yspeed = 0;
    this.angle = (Math.floor(Math.random() * 8 + 1) * Math.PI) / 4;
  }

  show() {
    push();
    fill(23, 187, 233);
    circle(this.x, this.y, this.size, scl, scl);
    pop();
  }

  move() {
    this.x = lerp(this.x, mouseX, 0.003);
    this.y = lerp(this.y, mouseY, 0.003);
  }
}
