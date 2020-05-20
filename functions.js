function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    player.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    player.dir(-1, 0);
  } else if (keyCode === UP_ARROW) {
    player.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    player.dir(0, 1);
  }
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

function bombHit() {
  for (let i = 0; i < bombs.length; i++) {
    let distance = dist(bombs[i].x, bombs[i].y, player.x, player.y);
    if (distance - size / 2 < bombs[i].size / 2) {
      score = score - 5;
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
