let x = 0;
let y = 0;
let size = 10;
let balls = [];

class Player {
  constructor() {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  show() {
    circle(this.x, this.y, size);
    fill(23, 187, 233);
  }

  move() {
    this.x = lerp(this.x, mouseX, 0.25);
    this.y = lerp(this.y, mouseY, 0.25);
  }
}

class Balls {
  constructor() {
    this.size = Math.floor(Math.random() * 15 + 5);
    this.x = Math.random() * 1200;
    this.y = Math.random() * 920;
  }

  show() {
    circle(this.x, this.y, this.size);
    fill(233, 187, 23);
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
  translate(-width / 2, -height / 2, 0);
  player.show();
  player.move();
  for (let i = 0; i < balls.length; i++) {
    balls[i].show();
  }
  ballHit();
}

// ! FUNCTION TO CHECK IF A BALL HAS BEEN HIT AND IF HIT REMOVE IT AND MAKE PLAYER BIGGER, NOT WORKING PROPERLY YET.
function ballHit() {
  balls.forEach((ball) => {
    let distance = dist(ball.x, ball.y, player.x, player.y);
    if (distance < ball.size / 2) {
      console.log("wow");
      size = player.size++;
      balls.splice(ball, 1);
    }
  });
}
