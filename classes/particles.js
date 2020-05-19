class Particles {
  constructor() {
    this.x = player.x;
    this.y = player.y;
    this.size = Math.floor(Math.random() * 10 + 1);
    this.velocity = Math.floor(Math.random() * 15 + 5);
  }

  show() {
    push();
    fill(23, 187, 233);
    circle(this.x, this.y, this.size);
    pop();
  }

  random() {
    let bool = operator[Math.floor(Math.random() * 7)];

    if (bool) {
      console.log("positive");
      return 1;
    } else {
      console.log("negative");
      return -1;
    }
  }
}
