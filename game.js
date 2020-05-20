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

  // ! THIS NEEDS TO BE SOLVED IN A BETTER WAY.
  if (player.size > 50) {
    player.size = player.size / 2;
    for (let i = 0; i < balls.length; i++) {
      if (balls[i].size > 15) {
        balls[i].size = balls[i].size / 2;
      }
    }
    for (let i = 0; i < bombs.length; i++) {
      if (bombs[i].size > 15) {
        bombs[i].size = bombs[i].size / 2;
      }
    }
  }

  player.show();
  cursor("default");
  if (menu.classList.contains("hidden")) {
    player.move();
    cursor("none");
  }
  //   player.move();
  //   cursor("none");
  bombHit();
  ballHit();
  scoreEl.innerText = score;
}
