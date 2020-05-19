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

  update() {
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  dir(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  move() {
    this.x = lerp(this.x, mouseX, this.velocity);
    this.y = lerp(this.y, mouseY, this.velocity);
  }
}
