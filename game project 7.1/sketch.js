/*
The Game Project 7
Game interaction
*/

let gameChar_x, gameChar_y, floorPos_y, isLeft, isRight, isFalling, isPlummeting;
let canyon, collectables, sun_x, sun_y, treePos_y, treePos_X, numTrees;
let isScrollingLeft, isScrollingRight, scrollPos, origin_x, clouds, cloudHeight;
let collectableTimer, game_score, flagpole, lives;

function setup() {
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;
  lives = 3;

  sun_x = 100;
  sun_y = height / 4;
  numTrees = 3;

  canyon = { x_pos: 100, y_pos: floorPos_y, size_x: 100, size_y: 150 };
  collectables = Array(3).fill().map(() => ({
    x_pos: random(50, width - 50),
    y_pos: floorPos_y - random(0, 50),
    size: 40,
    isFound: false,
    reappearTime: 5000
  }));
  collectableTimer = null;

  isLeft = isRight = isFalling = isPlummeting = false;
  isScrollingLeft = isScrollingRight = false;
  scrollPos = 0;
  scrollPos = constrain(scrollPos, -500, 0);
  origin_x = gameChar_x;

  treePos_X = [150, 450, 700, 1000, 1200, 1400, 1600, 1900, 2200, 2500];
  treePos_y = floorPos_y;

  clouds = [
    { x_pos: 200, y_pos: 100 },
    { x_pos: 400, y_pos: 100 },
    { x_pos: 800, y_pos: 100 },
  ];

  game_score = 0;
  flagpole = { isReached: false, x_pos: 1500 };
}

function draw() {
  background(100, 155, 255);
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height - floorPos_y);

  fill(255);
  textSize(40);
  text(game_score, 50, 50);
  text(lives, 50, height - 50);

  drawSun();
  drawClouds();
  drawMountains();
  drawTrees();
  drawCanyon(canyon);
  checkPlummeting();
  drawCollectables();
  drawFlag();
  checkFlagpole();
  drawGameChar();
  checkIfDead();

  handleCharacterMovement();
  displayMouseCoordinates();
}

function handleCharacterMovement() {
  if (isRight) scrollPos -= 5;
  else if (isLeft) scrollPos += 5;

  if (gameChar_y < floorPos_y) {
    gameChar_y += 2;
    isFalling = true;
  } else {
    isFalling = false;
  }

  if (isLeft && !isPlummeting) scrollPos += 5;
  else if (isRight && !isPlummeting) scrollPos -= 5;

  if (gameChar_y > floorPos_y) isPlummeting = true;

  if (isPlummeting) {
    gameChar_y += gameChar_y <= floorPos_y ? 2 : 10;
  }

  if (gameChar_y > floorPos_y + 5 && !isPlummeting) {
    gameChar_y += 2;
  }
}

function displayMouseCoordinates() {
  push();
  fill(255, 0, 0);
  noStroke();
  text(`${mouseX},${mouseY}`, mouseX, mouseY);
  pop();
}

// Keys Functions
function keyPressed() {
  if (keyCode === 65 || keyCode === 37) isLeft = true;
  else if (keyCode === 68 || keyCode === 39) isRight = true;

  if (keyCode === 87 || keyCode === 38) {
    gameChar_y -= 100;
    isFalling = true;
  }
}

function keyReleased() {
  if (keyCode === 65 || keyCode === 37) isLeft = false;
  else if (keyCode === 68 || keyCode === 39) isRight = false;
  if (keyCode === 83 || keyCode === 40) {
    isFalling = true;
    isLeft = isRight = false;
  }
}

// Drawing Functions
function drawGameChar() {
  noStroke();
  if (isLeft && isFalling) drawCharacter(-1, -1);
  else if (isRight && isFalling) drawCharacter(1, -1);
  else if (isLeft) drawCharacter(-1, 0);
  else if (isRight) drawCharacter(1, 0);
  else if (isFalling) drawCharacter(0, -1);
  else if (isPlummeting) drawCharacter(0, 1);
  else drawCharacter(0, 0);
}

function drawCharacter(directionX, directionY) {
  fill(255, 0, 0);
  rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
  fill(255, 150, 150);
  ellipse(gameChar_x, gameChar_y - 55, 40, 40);
  
  fill("blue");
  if (directionX <= 0) ellipse(gameChar_x - 8, gameChar_y - 55, 5, 5); // left eye
  if (directionX >= 0) ellipse(gameChar_x + 8, gameChar_y - 55, 5, 5); // right eye
  

  fill("brown");
  ellipse(gameChar_x + directionX * 20, gameChar_y - 55, 10, 10); // nose
  
  fill(0);
  rect(gameChar_x - 20, gameChar_y - 10, 10, 10); // left leg
  rect(gameChar_x + 10, gameChar_y - 10, 10, 10); // right leg

  // rect(gameChar_x + directionX * 25, gameChar_y - 40, 10, 10); // arma
}

function drawMountains() {
  let mountainHeight = 15;
  let baseWidth = 50;
  let startX = 50;
  let startY = floorPos_y;

  for (let i = 0; i < 3; i++) {
    let x1 = startX + scrollPos / 10 + (mountainHeight - i) * baseWidth;
    let x2 = startX + scrollPos / 10 + ((mountainHeight + i - 1) * baseWidth) / 4;

    fill("white");
    triangle(x1, startY, x2, startY, (x1 + x2) / 2, startY - 200);
    fill(150);
    triangle(x1 + 20, startY, x2, startY, (x1 + x2) / 2, startY - 150);
  }
}

function drawTrees() {
  fill(120, 100, 19); // Brown color
  fill(34, 139, 34); // Green color

  treePos_X.forEach(pos => {
    rect(pos - 16 + scrollPos, treePos_y - 100, 30, 100);
    ellipse(pos + scrollPos, treePos_y - 70, 150, 60);
    ellipse(pos + scrollPos, treePos_y - 110, 120, 70);
    ellipse(pos + scrollPos, treePos_y - 140, 80, 50);
  });
}

function drawClouds() {
  fill(255);
  clouds.forEach(cloud => {
    ellipse(cloud.x_pos + scrollPos / 20, cloud.y_pos, 55, 55);
    ellipse(cloud.x_pos + 25 + scrollPos / 20, cloud.y_pos, 55, 75);
    ellipse(cloud.x_pos + 45 + scrollPos / 20, cloud.y_pos, 55, 55);
  });
}

function drawSun() {
  fill("gold");
  ellipse(sun_x, sun_y, 100, 100);
}

function drawCanyon(t_canyon) {
  fill("black");
  rect(t_canyon.x_pos + scrollPos, t_canyon.y_pos, t_canyon.size_x, t_canyon.size_y);
}

function drawCollectables() {
  collectables.forEach(collectable => {
    drawCollectable(collectable);
    checkCollectable(collectable);
  });
}

function drawCollectable(t_collectable) {
  if (!t_collectable.isFound) {
    noFill();
    strokeWeight(6);
    stroke(220, 185, 0);
    ellipse(t_collectable.x_pos + scrollPos, t_collectable.y_pos - 20, t_collectable.size, t_collectable.size);
    
    fill(255, 0, 255);
    stroke(255);
    strokeWeight(1);
    quad(
      t_collectable.x_pos - 5 + scrollPos,
      t_collectable.y_pos - t_collectable.size,
      t_collectable.x_pos - 10 + scrollPos,
      t_collectable.y_pos - (t_collectable.size + 15),
      t_collectable.x_pos + 10 + scrollPos,
      t_collectable.y_pos - (t_collectable.size + 15),
      t_collectable.x_pos + 5 + scrollPos,
      t_collectable.y_pos - t_collectable.size
    );
  }
}

function checkCollectable(t_collectable) {
  if (!t_collectable.isFound && dist(gameChar_x, gameChar_y, t_collectable.x_pos + scrollPos, t_collectable.y_pos) < 20) {
    t_collectable.isFound = true;
    game_score += 1;
    t_collectable.collectableTimer = millis(); // Start timer when collected
  }

  if (t_collectable.isFound && millis() - t_collectable.collectableTimer >= t_collectable.reappearTime) {
    t_collectable.isFound = false; // Make collectable reappear after 5 seconds
    t_collectable.collectableTimer = null; // Reset timer
  }
}

function checkPlummeting() {
  isPlummeting = gameChar_x > canyon.x_pos + scrollPos && gameChar_x < canyon.x_pos + scrollPos + canyon.size_x;
}

function checkIfDead() {
  if (gameChar_y > height) {
    gameChar_y = floorPos_y - 100;
    gameChar_x = canyon.x_pos + 200;
    lives -= 1;
  }
}

function drawFlag() {
  stroke(255, 255, 0);
  strokeWeight(3);
  line(flagpole.x_pos + scrollPos, floorPos_y - 150, flagpole.x_pos + scrollPos, floorPos_y);

  noStroke();
  fill(255, 0, 0);
  rect(flagpole.isReached ? flagpole.x_pos + scrollPos : flagpole.x_pos + scrollPos, flagpole.isReached ? floorPos_y - 150 : floorPos_y - 30, 40, 30);
}

function checkFlagpole() {
  if (gameChar_x + 30 >= flagpole.x_pos + scrollPos) {
    flagpole.isReached = true;
  }
}
