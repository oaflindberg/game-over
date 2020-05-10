let x = 0;
let y = 0;
let size = 10;
let velocity = 0.15;
let balls = [];

class Player {
  constructor() {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocity = velocity;
  }

  show() {
    circle(this.x, this.y, size);
    fill(23, 187, 233);
  }

  move() {
    this.x = lerp(this.x, mouseX, this.velocity);
    this.y = lerp(this.y, mouseY, this.velocity);
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
  cursor("none");
  ballHit();
}

// ! FUNCTION TO CHECK IF A BALL HAS BEEN HIT AND IF HIT REMOVE IT AND MAKE PLAYER BIGGER, NOT WORKING PROPERLY YET.
function ballHit() {
  for (let i = 0; i < balls.length; i++) {
    let distance = dist(balls[i].x, balls[i].y, player.x, player.y);
    if (distance - player.size / 2 < balls[i].size / 4) {
      let hitBall = balls.indexOf(balls[i]);
      if (hitBall > -1) {
        size = player.size += 1;
        if (velocity > 0.03) {
          velocity = player.velocity -= 0.0002;
        }
        balls.splice(hitBall, 1);
      }
    }
  }
}
