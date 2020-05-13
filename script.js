// let x = 0;
// let y = 0;
let x = window.innerWidth / 2;
let y = window.innerHeight / 2;
let size = 10;
let velocity = 0.15;
let balls = [];
let bombs = [];
let score = 0;
let particles = [];
let operator = [true, false, true, false, true, false, true, false];

class Player {
  constructor() {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocity = velocity;
  }

  show() {
    push();
    fill(23, 187, 233);
    circle(this.x, this.y, this.size);
    pop();
  }

  move() {
    this.x = lerp(this.x, mouseX, this.velocity);
    this.y = lerp(this.y, mouseY, this.velocity);
  }
}

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

function drawParticles() {
  for (let i = 0; i < 10; i++) {
    particle = new Particles();
    particles.push(particle);
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
  drawParticles();
}

function drawBombs() {
  for (let i = 0; i < 1; i++) {
    bomb = new Bomb();
    if (bombs.length <= 9) {
      bombs.push(bomb);
    }
  }
}

setInterval(drawBombs, Math.random() * 10000 + 1000);
clearInterval(drawBombs);

function draw() {
  background(51, 51, 50);
  ambientLight(200);

  translate(-width / 2, -height / 2, 0);
  for (let i = 0; i < balls.length; i++) {
    push();
    balls[i].show();
    pop();
  }
  for (let i = 0; i < bombs.length; i++) {
    push();
    bombs[i].show();
    pop();
  }
  player.show();
  player.move();
  cursor("none");
  bombHit();
  ballHit();
  console.log(score);
}

function bombHit() {
  for (let i = 0; i < bombs.length; i++) {
    let distance = dist(bombs[i].x, bombs[i].y, player.x, player.y);
    if (distance - size / 2 < bombs[i].size / 2) {
      score = score - 5;

      for (let i = 0; i < particles.length; i++) {
        particles[i].show();
        particles[i].x = particles[i].velocity * particles[i].random();
        particles[i].y = particles[i].velocity * particles[i].random();
      }

      if (size >= 5) {
        size = player.size /= 2;
      }
      let hitBomb = bombs.indexOf(bombs[i]);
      if (hitBomb > -1) {
        bombs.splice(hitBomb, 1);
      }
    }
  }
}

function ballHit() {
  for (let i = 0; i < balls.length; i++) {
    let distance = dist(balls[i].x, balls[i].y, player.x, player.y);
    if (distance - size / 2 < balls[i].size / 2) {
      size = player.size += 1;
      score = score + 1;
      if (velocity > 0.03) {
        velocity = player.velocity -= 0.0002;
      }
      let hitBall = balls.indexOf(balls[i]);
      if (hitBall > -1) {
        balls.splice(hitBall, 1);
      }
      if (balls.length < 50) {
        for (let i = 0; i < 1; i++) {
          ball = new Balls();
          balls.push(ball);
        }
      }
    }
  }
}
