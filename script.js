let x = 0;
let y = 0;
let balls = [];

class Player {
  constructor() {
    this.x = x;
    this.y = y;
  }

  show() {
    circle(this.x, this.y, 25);
    fill(23, 187, 233);
  }

  // CURRENTLY NOT WORKING AS INTENDED

  move() {
    this.x = lerp(this.x, mouseX, 0.07);
    this.y = lerp(this.y, mouseY, 0.07);
  }
}

class Balls {
  constructor() {
    this.size = Math.floor(Math.random() * 15 + 5);
    this.x = Math.random() * 666;
    this.y = Math.random() * 666;
  }

  // CURRENTLY NOT WORKING AS INTENDED

  show() {
    circle(this.x, this.y, this.size);
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  noStroke();

  player = new Player();
  for (let i = 0; i < 50; i++) {
    ball = new Balls();
    balls.push(ball);
  }
}

function draw() {
  background(0);
  player.show();
  player.move();
  for (let i = 0; i < balls.length; i++) {
    balls[i].show();
  }
}
