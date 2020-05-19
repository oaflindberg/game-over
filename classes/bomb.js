class Bomb {
  constructor() {
    this.size = Math.floor(Math.random() * 25 + 5);
    this.x = Math.random() * 1680;
    this.y = Math.random() * 920;
  }

  show() {
    push();
    fill(255, 0, 0);
    circle(this.x, this.y, this.size);
    pop();
  }
}
