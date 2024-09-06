/*
The Game Project 7
*/
/* Global Variables */ 
var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var canyon;
var collectables;
var sun_x;
var sun_y;
var isFound;
var trees_x;
var treePos_y;
var numTrees;
var isScrollingLeft;
var isScrollingRight;
var scrollPos;
var origin_x;
var clouds;
var cloudHeight;
var collectableTimer;
var game_score;
var flagpole;
var lives;
var alive;
var mountains;  // New variable for mountains array
var cameraPosX; // Variable to control the camera position

/* The Setup Function */
function setup() {
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;
  isFalling = false;
  isLeft = false;
  isRight = false;

  lives = 3;

  sun_x = 100;
  sun_y = height / 4;
  numTrees = 3;

  canyon = { x_pos: 100, y_pos: floorPos_y, size_x: 100, size_y: 150 };
  collectables = [
    {
      x_pos: random(50, width - 50),
      y_pos: floorPos_y - random(0, 50),
      size: 40,
      isFound: false,
      reappearTime: 5000,
    },
    {
      x_pos: random(50, width - 50),
      y_pos: floorPos_y - random(0, 50),
      size: 40,
      isFound: false,
      reappearTime: 5000,
    },
    {
      x_pos: random(50, width - 50),
      y_pos: floorPos_y - random(0, 50),
      size: 40,
      isFound: false,
      reappearTime: 5000,
    },
  ];

  collectableTimer = null; 
  isScrollingLeft = false; 
  isScrollingRight = false; 
  isPlummeting = false; 

  trees_x = [150, 450, 700, 1000, 1200, 1400, 1600, 1900, 2200, 2500];
  treePos_y = floorPos_y;
  scrollPos = 0; 
  origin_x = gameChar_x;
  cloudHeight = [50, 70, 50];
  cloudPos_y = height / 3;
  clouds = [
    { x_pos: 200, y_pos: 100 },
    { x_pos: 400, y_pos: 100 },
    { x_pos: 800, y_pos: 100 },
  ];

  mountains = [
    { x_pos: 200, height: 100 },
    { x_pos: 400, height: 150 },
    { x_pos: 600, height: 200 },
    { x_pos: 800, height: 200 },

  ]; // Mountains array added

  game_score = 0;
  flagpole = { isReached: false, x_pos: 1500 };

  cameraPosX = 0; // Initialize camera position
}

function draw() {
  background(100, 155, 255); // Fill the sky blue
  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height - floorPos_y); // Draw some green ground
  
  // Draw Score
  fill(255);
  textSize(40);
  text("Score: " + game_score, 50, 50); // Score padded 50px from top-left

  // Draw Lives
  text("Lives: " + lives, 50, 100); // Lives displayed below the score

  // Scrolling the background based on character movement
  push();
  translate(-cameraPosX, 0); // Adjust the position of the camera
  
  // Draw the background elements
  drawSun();
  drawClouds();
  drawMountains();
  drawTrees();
  drawCanyon(canyon);
  checkPlummetting(canyon);
  drawMultipleCollectables();
  drawFlag();
  checkFlagpole();

  pop(); // Restore the original coordinate system

  // Draw the character in the foreground
  drawGameChar();
  isDead();
  died();
  alive();

  ///////////INTERACTION CODE//////////
  //Put conditional statements to move the game character below here

  if (isRight) {
    cameraPosX += 5;
  } else if (isLeft) {
    cameraPosX -= 5;
  }
  
  if (gameChar_y < floorPos_y) {
    gameChar_y += 2;
    isFalling = true;
  } else {
    isFalling = false;
  }

  if (gameChar_y > floorPos_y) {
    gameChar_y += 2;
  }

  if (isPlummeting) {
    if (gameChar_y <= floorPos_y) {
      gameChar_y += 2;
    } else if (gameChar_y > floorPos_y) {
      gameChar_y += 10;
    }
    else if (gameChar_y > height) {
      // get the character back to floor
    }
  }

  // Making sure character does not jump back up
  if ((gameChar_y > floorPos_y)) {
    gameChar_y += 3;
    isFalling = true;
  }
}

/// END OF DRAW Function ////// 

//############################//
// Keys Functions             //
//############################//

function keyPressed() {
  // Move Left or Right
  if (keyCode == 65 || keyCode == 37) {
    isLeft = true;
  } else if (keyCode == 68 || keyCode == 39) {
    isRight = true;
  }
  // Jump 
  if (
    (keyCode == 87 || keyCode == 38) && (gameChar_y == floorPos_y)) {
    gameChar_y = gameChar_y - 100;
    isFalling = true;
  }
}

function keyReleased() {
  // if statements to control the animation of the character when
  // keys are released.
  if (keyCode == 65 || keyCode == 37) {
    isLeft = false;
  } else if (keyCode == 68 || keyCode == 39) {
    isRight = false;
  } else if (keyCode == 87 || keyCode == 38) {
    isFalling = true;
  }
  if (keyCode == 83 || keyCode == 40) {
    isFalling = true;
    isLeft = false;
    isRight = false;
  }
}

// Drawing functions
function drawGameChar() {
  // Your character drawing code remains the same
  // (No changes needed in this section)
}

function drawMountains() {
  // Drawing Mountains using the mountains array
  for (var i = 0; i < mountains.length; i++) {
    fill(150);
    triangle(
      mountains[i].x_pos, floorPos_y,
      mountains[i].x_pos + 100, floorPos_y,
      mountains[i].x_pos + 50, floorPos_y - mountains[i].height
    );
  }
}

function drawTrees() {
  for (var i = 0; i < trees_x.length; i++) {
    // Draw the trunk
    fill(120, 100, 19); // Brown color
    rect(trees_x[i] - 16, treePos_y - 100, 30, 100);

    // Draw the tree top using 3 ellipses
    fill(34, 139, 34); // Green color

        // Bottom ellipse

    ellipse(trees_x[i], treePos_y - 70, 150, 60);
    // Middle ellipse
    ellipse(trees_x[i], treePos_y - 110, 120, 70);
    // Top ellipse
    ellipse(trees_x[i], treePos_y - 140, 80, 50);
  }
}

        
  


function drawClouds() {
  for (var i = 0; i < clouds.length; i++) {
    fill(255);
    ellipse(clouds[i].x_pos, clouds[i].y_pos, 55, 55);
    ellipse(clouds[i].x_pos + 25, clouds[i].y_pos, 55, 75);
    ellipse(clouds[i].x_pos + 45, clouds[i].y_pos, 55, 55);
  }
}

function drawSun() {
  // Draw The Sun
  fill("gold");
  ellipse(sun_x, sun_y, 100, 100);
}

function drawCanyon(t_canyon) {
  // Draw the canyon
  fill("black");
  rect(
    t_canyon.x_pos, t_canyon.y_pos,
    t_canyon.size_x, t_canyon.size_y
  );
}

function drawCollectable(t_collectable) {
  if (!t_collectable.isFound) {
    noFill();
    strokeWeight(6);
    stroke(220, 185, 0);
    ellipse(
      t_collectable.x_pos, t_collectable.y_pos - 20,
      t_collectable.size, t_collectable.size
    );
    fill(255, 0, 255);
    stroke(255);
    strokeWeight(1);
    quad(
      t_collectable.x_pos - 5,
      t_collectable.y_pos - t_collectable.size,
      t_collectable.x_pos - 10,
      t_collectable.y_pos - (t_collectable.size + 15),
      t_collectable.x_pos + 10,
      t_collectable.y_pos - (t_collectable.size + 15),
      t_collectable.x_pos + 5,
      t_collectable.y_pos - t_collectable.size
    );
  }
}

function checkCollectable(t_collectable) {
  if (
    !t_collectable.isFound &&
    dist(
      gameChar_x,
      gameChar_y,
      t_collectable.x_pos,
      t_collectable.y_pos
    ) < 20
  ) {
    t_collectable.isFound = true;
    game_score += 1;
  }
}

function checkPlummetting() {
  if (
    gameChar_x > canyon.x_pos &&
    gameChar_x < canyon.x_pos + canyon.size_x &&
    gameChar_y >= floorPos_y
  ) {
    isPlummeting = true;
  }

  if (isPlummeting) {
    gameChar_y += 10;
    if (gameChar_y > height) {
      lives -= 1;
      if (lives > 0) {
        gameChar_x = width / 2;
        gameChar_y = floorPos_y;
        isPlummeting = false;
      } else {
        // Handle game over or restart
        console.log("Game Over");
      }
    }
  }
}

function drawMultipleCollectables() {
  for (var i = 0; i < collectables.length; i++) {
    drawCollectable(collectables[i]);
    checkCollectable(collectables[i]);
  }
}

function died() {
  if (gameChar_y > height) {
    gameChar_y = floorPos_y - 100;
    gameChar_x = canyon.x_pos + 300;
    lives -= 1;
  }
}

function alive() {
  if (lives > 0 && lives < 4) {
    return true;
  }
  else
    return false;
}

function isDead() {
  if (lives <= 0) {
    lives = 0;
  }
  return true;
}

function drawFlag() {
  stroke(255, 255, 0);
  strokeWeight(3);
  line(
    flagpole.x_pos, floorPos_y - 150,
    flagpole.x_pos, floorPos_y
  );
  if (flagpole.isReached) {
    noStroke();
    fill(255, 0, 0);
    rect(flagpole.x_pos, floorPos_y - 150, 40, 30);
  } else {
    noStroke();
    fill(255, 0, 0);
    rect(flagpole.x_pos, floorPos_y - 30, 40, 30);
  }
}

function checkFlagpole() {
  var d = gameChar_x >= flagpole.x_pos;
  if (gameChar_x + 30 >= flagpole.x_pos) {
    flagpole.isReached = true;
  }
}
