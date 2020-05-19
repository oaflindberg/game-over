class Balls {
  constructor() {
    this.size = Math.floor(Math.random() * 15 + 5);
    this.x = Math.random() * 1680;
    this.y = Math.random() * 920;
  }

  show() {
    push();
    fill(55, 251, 55);
    circle(this.x, this.y, this.size);
    pop();
  }
}
