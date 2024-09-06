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
var treePos_y;
var treePos_X;
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

/* Teh Setup Function */
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


/* TODO: Notes to Self: The following can be converted into a constructor object futrue TODO */
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

  collectableTimer = null; // Initialize the timer as null
  isScrollingLeft = false; // Scrolling left bool
  isScrollingRight = false; // Scrolling Right bool
  isPlummeting = false; // 

  /* TODO: The Trees Constructor Object will be a great next improvement */
  treePos_X = [150, 450, 700, 1000, 1200, 1400, 1600, 1900, 2200, 2500];
  treePos_y = floorPos_y;
  scrollPos = 0; // Initialize scroll position
  scrollPos = constrain(scrollPos, -500, 0);
  origin_x = gameChar_x;
  cloudPos_x = [250, 300, 350];
  cloudHeight = [50, 70, 50];
  cloudPos_y = height / 3;
  clouds = [
    { x_pos: 200, y_pos: 100 },
    { x_pos: 400, y_pos: 100 },
    { x_pos: 800, y_pos: 100 },
  ];

  game_score = 0;
  flagpole = { isReached: false, x_pos: 1500 };
}

function draw() {
  background(100, 155, 255); //fill the sky blue
  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
  fill(255);
  textSize(40); // Score
  text(game_score, 50, 50);
  text(lives, 50, height - 50)
  /* Calling Various Functions */
  drawSun(); 
  drawClouds();
  drawMountains();
  drawTree();
  drawCanyon(canyon);
  checkPlummetting(canyon);
  drawMultipleCollectables();
  drawFlag();
  checkFlagpole();
  drawGameChar();
  isDead();
  died();
  // lives(); // TODO refine this , lots of thinking requried 
  alive();



  ///////////INTERACTION CODE//////////
  //Put conditional statements to move the game character below here

  if (isRight) {
    scrollPos -= 5;
  } else if (isLeft) {
    scrollPos += 5;
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

  if (isLeft && !isPlummeting) {
    scrollPos += 5;
  } else if (isRight && !isPlummeting) {
    scrollPos -= 5;
  }

  
  if (gameChar_y > floorPos_y) {
    isPlummeting = true
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


  //A helpful mouse pointer
  // push();
  // fill(255, 0, 0);
  // noStroke(2);
  // text(mouseX + "," + mouseY, mouseX, mouseY);
  // pop();
}

/// END OF DRAW Function ////// 

//############################//
// Keys Functions             //
//############################//

function keyPressed() {
  // if statements to control the animation of the character when
  // keys are pressed.
  //Move Left or Right
  if (keyCode == 65 || keyCode == 37) {
    isLeft = true;
    scrollPos += 5;
  } else if (keyCode == 68 || keyCode == 39) {
    isRight = true;
    scrollPos -= 5;
  }
  // Jump 
  if (
    (keyCode == 87 || keyCode == 38) && (gameChar_y == floorPos_y)) {
    gameChar_y = gameChar_y - 100;
    isFalling = true;
  }
}

console.log("key pressed code is : " + key);

function keyReleased() {
  // if statements to control the animation of the character when
  // keys are released.

  if (keyCode == 65 || keyCode == 37) {
    // if (keyCode == 65)
    isLeft = false;
    console.log(key);
  } else if (keyCode == 68 || keyCode == 39) {
    // if (keyCode == 68)
    isRight = false;
    // console.log("D key released");
  } else if (keyCode == 87 || keyCode == 38) {
    isFalling = true;
    // console.log("key W is released");
  }
  if (keyCode == 83 || keyCode == 40) {
    isFalling = true;
    isLeft = false;
    isRight = false;
    // console.log(" key S is released");
  }
}

function drawGameChar() {
  noStroke();

  if (isLeft && isFalling) {
    // add your jumping-left code

    //Character Facing Left

    // gameChar_x -=2;
    fill(255, 0, 0);
    rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
    fill(255, 150, 150);
    ellipse(gameChar_x, gameChar_y - 55, 40, 40);
    fill("blue");
    //left eye
    ellipse(gameChar_x - 8, gameChar_y - 55, 5, 5);
    fill("brown");
    //Nose
    ellipse(gameChar_x - 20, gameChar_y - 55, 10, 10);
    //right eye
    // ellipse(gameChar_x+8, gameChar_y -55, 5,5)

    //Legs
    fill(0);
    //left leg
    rect(gameChar_x - 20, gameChar_y - 10, 10, 10);
    //Right leg
    rect(gameChar_x + 10, gameChar_y - 10, 10, 10);
    // Arms
    rect(gameChar_x - 25, gameChar_y - 40, 10, 10); // left



  } else if (isRight && isFalling) {
    // add your jumping-right code
    // gameChar_x +=2;
    // treePos_X+=2
    //Character Facing Right

    fill(255, 0, 0);
    // rotate(20);
    rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
    fill(255, 150, 150);
    ellipse(gameChar_x, gameChar_y - 55, 40, 40);
    fill("blue");
    //left eye
    // ellipse(gameChar_x-8, gameChar_y -55, 5,5)
    //right eye
    ellipse(gameChar_x + 8, gameChar_y - 55, 5, 5);
    fill("brown");
    //Nose
    ellipse(gameChar_x + 20, gameChar_y - 55, 10, 10);

    //Legs
    fill(0);
    //left leg
    rect(gameChar_x - 20, gameChar_y - 10, 10, 10);
    //Right leg
    rect(gameChar_x + 10, gameChar_y - 10, 10, 10);
    rect(gameChar_x + 15, gameChar_y - 40, 10, 10); // right

    //End Facing Right

  } else if (isLeft) {
    // add your walking left code
    // gameChar_x -=2;

    //Character Facing Left

    //torso
    fill(255, 0, 0);
    rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
    fill(255, 150, 150);
    ellipse(gameChar_x, gameChar_y - 55, 40, 40);
    fill("blue");
    //left eye
    ellipse(gameChar_x - 8, gameChar_y - 55, 5, 5);
    fill("brown");
    //Nose
    ellipse(gameChar_x - 20, gameChar_y - 55, 10, 10);
    //right eye
    // ellipse(gameChar_x+8, gameChar_y -55, 5,5)

    //Legs
    fill(0);
    //left leg
    rect(gameChar_x - 20, gameChar_y - 10, 10, 10);
    //Right leg
    rect(gameChar_x + 2, gameChar_y - 10, 10, 10);
    //arms
    // left arm
    rect(gameChar_x - 25, gameChar_y - 40, 10, 10); // left

  } else if (isRight) {
    // add your walking right code
    // gameChar_x += 2;

    //Character Facing Right

    fill(255, 0, 0);
    rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
    fill(255, 150, 150);
    ellipse(gameChar_x, gameChar_y - 55, 40, 40);
    fill("blue");
    //left eye
    // ellipse(gameChar_x-8, gameChar_y -55, 5,5)
    //right eye
    ellipse(gameChar_x + 8, gameChar_y - 55, 5, 5);
    fill("brown");
    //Nose
    ellipse(gameChar_x + 20, gameChar_y - 55, 10, 10);

    //Legs
    fill(0);
    //left leg
    rect(gameChar_x - 10, gameChar_y - 10, 10, 10);
    //Right leg
    rect(gameChar_x + 10, gameChar_y - 10, 10, 10);
    // Arms
    rect(gameChar_x + 15, gameChar_y - 40, 10, 10); // right


    //End Facing Right
  }
  else if (isFalling) {
    // add your jumping facing forwards code
    // Character Facing Front - jumping
    if (!isLeft && !isRight) {
      fill(255, 0, 0);
      rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
      fill(255, 100, 150);
      ellipse(gameChar_x, gameChar_y - 55, 40, 40);
      fill("blue");
      //left eye
      ellipse(gameChar_x - 10, gameChar_y - 55, 6, 5);
      //right eye
      ellipse(gameChar_x + 10, gameChar_y - 55, 6, 5);

      //Legs
      fill(0);
      //left
      rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
      //Right
      rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
      //arms
      rect(gameChar_x - 30, gameChar_y - 40, 15, 10); // left
      rect(gameChar_x + 15, gameChar_y - 40, 15, 10); // right
    }
  }

  else if (isPlummeting) {
    // add your jumping facing forwards code
    // Character Facing Front - jumping
    if (!isLeft && !isRight) {
      fill(255, 0, 0);
      rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
      fill(0);
      ellipse(gameChar_x, gameChar_y - 55, 40, 40);
      fill("red");
      //left eye
      ellipse(gameChar_x - 10, gameChar_y - 55, 6, 5);
      //right eye
      ellipse(gameChar_x + 10, gameChar_y - 55, 6, 5);

      //Legs
      fill('yellow');
      //left
      rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
      //Right
      rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
      //arms
      rect(gameChar_x - 30, gameChar_y - 40, 15, 10); // left
      rect(gameChar_x + 15, gameChar_y - 40, 15, 10); // right
    }
  }




  else {
    // add your standing front facing code
    // Character Facing Front
    if (!isLeft && !isRight) {
      fill(255, 0, 0);
      rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
      fill(255, 150, 150);
      ellipse(gameChar_x, gameChar_y - 55, 40, 40);
      fill("blue");
      //left eye
      ellipse(gameChar_x - 8, gameChar_y - 55, 5, 5);
      //right eye
      ellipse(gameChar_x + 8, gameChar_y - 55, 5, 5);

      //Legs
      fill(0);
      //left
      rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
      //Right
      rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
    }
  }
}

function drawMountains() {
  // Mountain

  let mountainHeight = 15;
  let baseWidth = 50;
  let startX = 50;
  let startY = floorPos_y;

  for (var i = 0; i < 3; i++) {
    let y = startY;
    let x1 = startX + scrollPos / 10 + (mountainHeight - i) * baseWidth;
    let x2 =
      startX + scrollPos / 10 + ((mountainHeight + i - 1) * baseWidth) / 4;

    //first tri
    fill("white");
    triangle(x1, y, x2, y, (x1 + x2) / 2, y - 200);
    fill(150);
    // 2nd tri
    triangle(x1 + 20, y, x2, y, (x1 + x2) / 2, y - 150);
  }
}

function drawTree() {
  // Tree
  // noLoop()
  for (var i = 0; i < treePos_X.length; i++) {
    // console.log("trees loop" + i);
    // Draw the trunk
    fill(120, 100, 19); // Brown color
    rect(treePos_X[i] - 16 + scrollPos, treePos_y - 100, 30, 100);

    // Draw the tree top using 3 ellipses
    fill(34, 139, 34); // Green color

    // Bottom ellipse
    ellipse(treePos_X[i] + scrollPos, treePos_y - 70, 150, 60);
    // treePos_y[i] -=10;

    // Middle ellipse
    ellipse(treePos_X[i] + scrollPos, treePos_y - 110, 120, 70);

    // Top ellipse
    ellipse(treePos_X[i] + scrollPos, treePos_y - 140, 80, 50);
  }
}

function drawClouds() {
  for (var i = 0; i < clouds.length; i++) {
    fill(255);
    ellipse(clouds[i].x_pos + scrollPos / 20, clouds[i].y_pos, 55, 55);
    ellipse(clouds[i].x_pos + 25 + scrollPos / 20, clouds[i].y_pos, 55, 75);
    ellipse(clouds[i].x_pos + 45 + scrollPos / 20, clouds[i].y_pos, 55, 55);
  }
}

function drawSun() {
  // Draw The Sun
  fill("gold");
  ellipse(sun_x, sun_y, 100, 100);
}

function drawCanyon(t_canyon) {
  //draw the canyon
  fill("black");
  rect(
    t_canyon.x_pos + scrollPos,
    t_canyon.y_pos,
    t_canyon.size_x,
    t_canyon.size_y
  );
}

function drawCollectable(t_collectable) {
  if (!t_collectable.isFound) {
    noFill();
    strokeWeight(6);
    stroke(220, 185, 0);
    ellipse(
      t_collectable.x_pos + scrollPos,
      t_collectable.y_pos - 20,
      t_collectable.size,
      t_collectable.size
    );
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
  if (
    !t_collectable.isFound &&
    dist(
      gameChar_x,
      gameChar_y,
      t_collectable.x_pos + scrollPos,
      t_collectable.y_pos
    ) < 20
  ) {
    t_collectable.isFound = true;
    // isPlummeting = true // DELETE THIS
    game_score += 1;
    t_collectable.collectableTimer = millis(); // Start timer when collected
  }

  // Reappear logic
  if (
    t_collectable.isFound &&
    millis() - t_collectable.collectableTimer >= t_collectable.reappearTime
  ) {
    t_collectable.isFound = false; // Make collectable reappear after 5 seconds
    t_collectable.collectableTimer = null; // Reset timer
  }
}

function checkPlummetting() {
  // if (gameChar_x + scrollPos > canyon.x_pos)
  if (
    gameChar_x > canyon.x_pos + scrollPos &&
    gameChar_x < canyon.x_pos + scrollPos + canyon.size_x
  ) {
    isPlummeting = true;
  } else {
    isPlummeting = false;
  }
}


function drawMultipleCollectables() {
  for (var i = 0; i < collectables.length; i++) {
    drawCollectable(collectables[i]);
    checkCollectable(collectables[i]);
    checkCollectable(collectables[i]);
  }
  // checkCollectable(collectables);
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
    // score -5;
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
  // strokeWeight(5);

  stroke(255, 255, 0);
  strokeWeight(3);
  line(
    flagpole.x_pos + scrollPos,
    floorPos_y - 150,
    flagpole.x_pos + scrollPos,
    floorPos_y
  );
  if (flagpole.isReached) {
    noStroke();
    fill(255, 0, 0);
    rect(flagpole.x_pos + scrollPos, floorPos_y - 150, 40, 30);
  } else {
    noStroke();
    fill(255, 0, 0);
    rect(flagpole.x_pos + scrollPos, floorPos_y - 30, 40, 30);
  }
}

function checkFlagpole() {
  var d = gameChar_x >= flagpole.x_pos + scrollPos;
  if (gameChar_x + 30 >= flagpole.x_pos + scrollPos) {
    flagpole.isReached = true;
  }

}



