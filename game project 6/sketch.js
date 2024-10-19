/*

The Game Project 6


Game interaction

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var canyon;
var collectables;
var isFound;
var treePos_y;
var treePos_X;
var clouds;
var game_score;
var flagpole;
var lives;
var cameraPosX;

function setup() {
  createCanvas(1500, 576);
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;
  isFalling = false;
  isLeft = false;
  isRight = false;
  cameraPosX = 0; 

  lives = 3;

  sun_x = 100;
  sun_y = height / 4;
  // numTrees = 3;
  canyon = { x_pos: 10, y_pos: floorPos_y, size_x: 100, size_y: 150 };
  
  // collectables 
  // collectableTimer = null; // Initialize the timer as null
  collectables = [
    {
      x_pos: random(width),
      y_pos: floorPos_y - random(50, 100),
      size: 40,
      isFound: false,
      reappearTime: 5000,
    },
    {
      x_pos: random(width),
      y_pos: floorPos_y - random(0, 50),
      size: 40,
      isFound: false,
      reappearTime: 5000,
    },
    {
      x_pos: random(width),
      y_pos: floorPos_y,
      size: 40,
      isFound: false,
      reappearTime: 5000,
    },
  ];

  // treeX = random(width)
  treePos_X = [0, 150,  450, 700, 1000, 1200, 1400, 1600];
  treePos_y = floorPos_y+5;
  clouds = [
    { x_pos: 200, y_pos: 100 },
    { x_pos: 400, y_pos: 100 },
    { x_pos: 800, y_pos: 100 },
    { x_pos: 900, y_pos: 200 },
    { x_pos: 1200, y_pos: 100 }
  ];

  game_score = 0;
  flagpole = { isReached: false, x_pos: 1200 };
}
// checkFlagpole();


function draw() {

  ///////////DRAWING CODE//////////
background(100, 155, 255); //fill the sky blue
noStroke();
// Ground  
fill(0, 155, 0);
rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
checkFlagpole();

checkPlummetting(canyon);
// Score
push()  
fill(255);
  textSize(40);
  text(game_score, 50, 50);
  text(lives, 50, 100);
  pop()

  
push();
translate(cameraPosX,0);
  

  drawSun();
  drawClouds();
  // drawClouds ();

  drawMountains();
  drawCanyon(canyon);
  drawTree();
  // drawCollectable(collectables[i]);
  // In the draw() function
  //DRAW COLLECTABLES
  drawFlag();
  drawMultipleCollectables(collectables);
  
  pop()

  checkFlagpole();
   if (isRight) {
     cameraPosX -= 5;
  } else if (isLeft) {
     cameraPosX += 5;
   }

  // noStroke();

  if (isLeft && isFalling) {
    // add your jumping-left code

    //Character Facing Left

    //Jumping, turned left
    var skinColor = color(245,222,179);//Wheat
    var shirtColor = color(135,206,250) // LightSkyBlue
    var trouserColor = color(0,0,128) // Navy
    var shoesColor = color(169,169,169) // DarkGray
    //head
    fill(skinColor)
    rect(gameChar_x-15, gameChar_y-80+2, 30, 28);
    fill(128,0,0)//maroon
    rect(gameChar_x-15, gameChar_y-80+2, 30, 7); // hair
      //eyes whites
      fill(255);
      ellipse(gameChar_x-7, gameChar_y-65, 6,4); // left
      // ellipse(gameChar_x+7, gameChar_y-65, 6,4); // right
      //eyes pupil
      fill (0);
      ellipse(gameChar_x-7, gameChar_y-65, 3,3); // left
      // ellipse(gameChar_x+7, gameChar_y-65, 3,3);// right
      //Legs
      fill(trouserColor); // Navy
      rect(gameChar_x, gameChar_y-28, 13, 40); // right side, left leg straight while jumping left
      rect(gameChar_x-20, gameChar_y-20, 20, 13); // left side , right left bent while jumping left
    //body
    fill(shirtColor); // LightSkyBlue
    rect(gameChar_x-15, gameChar_y-50, 30, 30);
    //arms 
    fill(skinColor) // PeachPuff	
    // rect(gameChar_x-20, gameChar_y-42, 10, 25); // left

    rect(gameChar_x-25, gameChar_y-42, 30, 10); // right
    //feet
    fill(shoesColor) // DarkGray
    rect(gameChar_x, gameChar_y, 13, 13); // right side, right foot/shoe while jumping
    rect(gameChar_x-25, gameChar_y-20, 8, 13); // left side, right foot/shoe bent while jumping 

  } else if (isRight && isFalling) {
    // add your jumping-right code
    // gameChar_x +=2;
    // treePos_X+=2
    //Character Facing Right

    // Jumping Turned Right
	var skinColor = color(245,222,179);//Wheat
	var shirtColor = color(135,206,250) // LightSkyBlue
	var trouserColor = color(0,0,128) // Navy
	var shoesColor = color(169,169,169) // DarkGray
	//head
	fill(skinColor)
	rect(gameChar_x-15, gameChar_y-80+2, 30, 28);
	fill(128,0,0)//maroon
	rect(gameChar_x-15, gameChar_y-80+2, 30, 7); // hair
		//eyes whites
		fill(255);
		// ellipse(gameChar_x-7, gameChar_y-65, 6,4); // left
		ellipse(gameChar_x+7, gameChar_y-65, 6,4); // right
		//eyes pupil
		fill (0);
		// ellipse(gameChar_x-7, gameChar_y-65, 3,3); // left
		ellipse(gameChar_x+7, gameChar_y-65, 3,3);// right
		//Legs
		fill(trouserColor); // Navy
		rect(gameChar_x-13, gameChar_y-28, 13, 40); // left side , right leg straight while jumping right
		rect(gameChar_x, gameChar_y-20, 22, 13); // right side , left leg up while jumping right
	//body
	fill(shirtColor); // LightSkyBlue
	rect(gameChar_x-15, gameChar_y-50, 30, 30);
	//arms 
	fill(skinColor) // PeachPuff	
	// rect(gameChar_x-20, gameChar_y-42, 10, 25); // left
	// rect(gameChar_x-5, gameChar_y-42, 10, 25); // right
	rect(gameChar_x-5, gameChar_y-42, 30, 10); // Right arm pointing right

	//feet
	fill(shoesColor) // DarkGray
	rect(gameChar_x-13, gameChar_y, 13, 12); // left side, right foot/shoe while jumping
	rect(gameChar_x+17, gameChar_y-20, 8, 13); // right side, left left foot/shoe while jumping 


    //End Facing Right
  } else if (isLeft) {
    // add your walking left code
    // gameChar_x -=2;

    //Character Facing Left

    //Walking, turned left
	var skinColor = color(245,222,179);//Wheat
	var shirtColor = color(135,206,250) // LightSkyBlue
	var trouserColor = color(0,0,128) // Navy
	var shoesColor = color(169,169,169) // DarkGray
	//head
	fill(skinColor)
	rect(gameChar_x-15, gameChar_y-80+2, 30, 28);
	fill(128,0,0)//maroon
	rect(gameChar_x-15, gameChar_y-80+2, 30, 7); // hair
		//eyes whites
		fill(255);
		ellipse(gameChar_x-7, gameChar_y-65, 6,4); // left
		// ellipse(gameChar_x+7, gameChar_y-65, 6,4); // right
		//eyes pupil
		fill (0);
		ellipse(gameChar_x-7, gameChar_y-65, 3,3); // left
		// ellipse(gameChar_x+7, gameChar_y-65, 3,3);// right
  //Legs
		fill(trouserColor); // Navy
		rect(gameChar_x-13, gameChar_y-28, 26, 40);
	//body
	fill(shirtColor); // LightSkyBlue
	rect(gameChar_x-15, gameChar_y-50, 30, 30);
	//arms 
	fill(skinColor) // PeachPuff	
	// rect(gameChar_x-20, gameChar_y-42, 10, 25); // left side - right arm
	rect(gameChar_x-25, gameChar_y-42, 30, 10); // right side - left arm pointing left

	// rect(gameChar_x-5, gameChar_y-42, 10, 25); // right side - left arm pointing down
	//feet
	fill(shoesColor) // DarkGray
	rect(gameChar_x-13, gameChar_y, 26, 12);

  } else if (isRight) {
    // add your walking right code
    // gameChar_x += 2;

    //Character Facing Right

    	
// Walking Turned Right
  var skinColor = color(245,222,179);//Wheat
	var shirtColor = color(135,206,250) // LightSkyBlue
	var trouserColor = color(0,0,128) // Navy
	var shoesColor = color(169,169,169) // DarkGray

	//head
	fill(skinColor)
	rect(gameChar_x-15, gameChar_y-80+2, 30, 28);
	fill(128,0,0)//maroon
	rect(gameChar_x-15, gameChar_y-80+2, 30, 7); // hair
		//eyes whites
		fill(255);
		// ellipse(gameChar_x-7, gameChar_y-65, 6,4); // left
		ellipse(gameChar_x+7, gameChar_y-65, 6,4); // right
		//eyes pupil
		fill (0);
		// ellipse(gameChar_x-7, gameChar_y-65, 3,3); // left
		ellipse(gameChar_x+7, gameChar_y-65, 3,3);// right
		
		//Legs
		fill(trouserColor); // Navy
		rect(gameChar_x-13, gameChar_y-28, 26, 40);
	//body
	fill(shirtColor); // LightSkyBlue
	rect(gameChar_x-15, gameChar_y-50, 30, 30);
	//arms 
	fill(skinColor) // PeachPuff	
	// rect(gameChar_x-20, gameChar_y-42, 10, 25); // left
	// rect(gameChar_x-5, gameChar_y-42, 10, 25); // right
	// rect(gameChar_x-25, gameChar_y-42, 30, 10); // right side - left arm point left
	rect(gameChar_x-5, gameChar_y-42, 30, 10); // Right arm pointing right

	//feet
	fill(shoesColor) // DarkGray
	rect(gameChar_x-13, gameChar_y, 26, 12);



    //End Facing Right
  } else if (isFalling || isPlummeting) {
    // add your jumping facing forwards code
    // Character Facing Front - jumping
    if (!isLeft && !isRight) {
      //Standing, facing frontwards
  var skinColor = color(245,222,179);//Wheat
	var shirtColor = color(135,206,250) // LightSkyBlue
	var trouserColor = color(0,0,128) // Navy
	var shoesColor = color(169,169,169) // DarkGray
	//head
	fill(skinColor)
	rect(gameChar_x-15, gameChar_y-80+2, 30, 28);
	fill(128,0,0)//maroon
	rect(gameChar_x-15, gameChar_y-80+2, 30, 7); // hair
		//eyes whites
		fill(255);
		ellipse(gameChar_x-7, gameChar_y-65, 6,4);
		ellipse(gameChar_x+7, gameChar_y-65, 6,4);
		//eyes pupil
		fill (0);
		ellipse(gameChar_x-7, gameChar_y-65, 3,3);
		ellipse(gameChar_x+7, gameChar_y-65, 3,3);
    //arms 
    fill(skinColor) // PeachPuff
    // rect(gameChar_x-20, gameChar_y-42, 10, 25); // left hands down 
    rect(gameChar_x-30, gameChar_y-50, 15, 13); // left arm out jumping
    // rect(gameChar_x+10, gameChar_y-42, 10, 25); // right
    rect(gameChar_x+15, gameChar_y-50, 15, 13); // Right arm pointing right
	//body
	fill(shirtColor); // LightSkyBlue
	rect(gameChar_x-15, gameChar_y-50, 30, 30); // body while jumping / shirt
  rect(gameChar_x+15, gameChar_y-50, 5, 13); // Left arm sleeve jumping
  rect(gameChar_x-20, gameChar_y-50, 5, 13); // Right arm sleeve jumping

	//Legs
	fill(trouserColor); // Navy
	rect(gameChar_x-15, gameChar_y-28, 30, 40);

	//feet
	fill(shoesColor) // DarkGray
	rect(gameChar_x-15, gameChar_y, 30, 12);
    }
  } else {
    // add your standing front facing code
    // Character Facing Front
    if (!isLeft && !isRight) {

  //Standing, facing frontwards
  var skinColor = color(245,222,179);//Wheat
	var shirtColor = color(135,206,250) // LightSkyBlue
	var trouserColor = color(0,0,128) // Navy
	var shoesColor = color(169,169,169) // DarkGray
	//head
	fill(skinColor)
	rect(gameChar_x-15, gameChar_y-80+2, 30, 28);
	fill(128,0,0)//maroon
	rect(gameChar_x-15, gameChar_y-80+2, 30, 7); // hair
		//eyes whites
		fill(255);
		ellipse(gameChar_x-7, gameChar_y-65, 6,4);
		ellipse(gameChar_x+7, gameChar_y-65, 6,4);
		//eyes pupil
		fill (0);
		ellipse(gameChar_x-7, gameChar_y-65, 3,3);
		ellipse(gameChar_x+7, gameChar_y-65, 3,3);
	//body
	fill(shirtColor); // LightSkyBlue
	rect(gameChar_x-20, gameChar_y-50, 40, 30);
	//Legs
	fill(trouserColor); // Navy
	rect(gameChar_x-15, gameChar_y-28, 30, 40);
	//arms 
	fill(skinColor) // PeachPuff
	rect(gameChar_x-20, gameChar_y-42, 10, 25); // left hands down 
	// rect(gameChar_x-30, gameChar_y-50, 15, 13); // left arm out jumping
	rect(gameChar_x+10, gameChar_y-42, 10, 25); // right
	// rect(gameChar_x+15, gameChar_y-50, 15, 13); // Right arm pointing right

	//feet
	fill(shoesColor) // DarkGray
	rect(gameChar_x-15, gameChar_y, 30, 12);

    }
  }

  mouseCoord ();
  ///////////INTERACTION CODE//////////
  //Put conditional statements to move the game character below here
  if (gameChar_y < floorPos_y) {
    gameChar_y += 2;
    // isFalling = true;
  } 
  // else {
  //   isFalling = false;
  // }

  
}

function keyPressed() {
  // if statements to control the animation of the character when
  // keys are pressed.

    // set status of isLeft and right to true
  if (keyCode == 65 || keyCode == 37) {
    isLeft = true;
  } 
  if (keyCode == 68 || keyCode == 39) {
    isRight = true;
  }

  // Jump
  if (
    (keyCode == 87 || keyCode == 38)  // &&(!isFalling || !isPlummeting)  // && gameChar_y <= floorPos_y
  ) {
    // w jUMP
    gameChar_y = gameChar_y - 100;
    // isFalling = true;
  }
}


function keyReleased() {
  // if statements to control the animation of the character when
  // keys are released.

  if (keyCode == 65 || keyCode == 37) {
    // if (keyCode == 65)
    isLeft = false;
  } else if (keyCode == 68 || keyCode == 39) {
    // if (keyCode == 68)
    isRight = false;
  } else if (keyCode == 87 || keyCode == 38) {
    isFalling = true;
  }

}

//////////////////////////////////
/////// DRAWING FUNCTIONS ////////
//////////////////////////////////


function drawMountains() {
  // Mountain

  let mountainHeight = 15;
  let baseWidth = 50;
  let startX = 50;
  let startY = floorPos_y;

  for (var i = 0; i < 3; i++) {
    let y = startY;
    let x1 = startX + (mountainHeight - i) * baseWidth;
    let x2 =
      startX +  ((mountainHeight + i - 1) * baseWidth) / 4;

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
    rect(treePos_X[i] - 16 , treePos_y - 100, 30, 100);

    // Draw the tree top using 3 ellipses
    
    // Bottom ellipse
    fill(34, 160, 100); // Green color
    ellipse(treePos_X[i] , treePos_y - 70, 150, 60);
    // Middle ellipse
    ellipse(treePos_X[i] , treePos_y - 110, random(120,125), 70);
    // Top ellipse
    ellipse(treePos_X[i] , treePos_y - 140, 80, random(60,65));

  }

}

function drawClouds() {
  for (var i = 0; i < clouds.length; i++) {
    fill(random(245,255));
    ellipse(clouds[i].x_pos +25, clouds[i].y_pos, 55, 55);
    ellipse(clouds[i].x_pos , clouds[i].y_pos, 70, 75);
    ellipse(clouds[i].x_pos -25, clouds[i].y_pos, 55, 55);
  }
}

function drawSun() {
  // Draw The Sun

  // frameRate(5)
  fill(255,random(215,235),0); // gold
  ellipse(sun_x, sun_y, 100, 100);
  // frameRate(60);
}

function drawCanyon(t_canyon) {
  //draw the canyon
  fill(100, 155, 255);
  rect(
    t_canyon.x_pos ,
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
      t_collectable.x_pos ,
      t_collectable.y_pos - 20,
      t_collectable.size,
      t_collectable.size
    );
    fill(255, 0, 255);
    stroke(255);
    strokeWeight(1);
    quad(
      t_collectable.x_pos - 5 ,
      t_collectable.y_pos - t_collectable.size,
      t_collectable.x_pos - 10 ,
      t_collectable.y_pos - (t_collectable.size + 15),
      t_collectable.x_pos + 10 ,
      t_collectable.y_pos - (t_collectable.size + 15),
      t_collectable.x_pos + 5 ,
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
      t_collectable.x_pos ,
      t_collectable.y_pos
    ) <100
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

// function drawMultipleCollectables() {
//   for (var i = 0; i < collectables.length; i++) {
//     drawCollectable(collectables[i]);
//     // checkCollectable(collectables[i]); // Call only once
//   }
// }

// Draw multiple collectables
function drawMultipleCollectables() {
  for (var i = 0; i < collectables.length; i++) {
    drawCollectable(collectables[i]);
    checkCollectable(collectables[i]); // Call only once
  }
}

function checkPlummetting() {
  if (
    gameChar_x > canyon.x_pos  &&
    gameChar_x < canyon.x_pos  + canyon.size_x
  ) {
    isPlummeting = true;
  } else {
    isPlummeting = false;
  }
}



function drawFlag() {
  // strokeWeight(5);
  stroke(255);
  strokeWeight(5);
  
  line( flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y-150);
  // rect(100,100,100,100)//
  if (flagpole.isReached) {
    noStroke();
    fill(255, 0, 0);
    rect(flagpole.x_pos , floorPos_y - 150, 40, 30);
  } else {
    noStroke();
    fill(255, 0, 0);
    rect(flagpole.x_pos , floorPos_y - 30, 40, 30);
  }
}

// function checkFlagpole() {
//   // var d = gameChar_x == flagpole.x_pos ;
//   if (gameChar_x == flagpole.x_pos ) {
//     flagpole.isReached = true;
//     level += 1; 
//   } 
//   else flagpole.isReached = false;
// }

function checkFlagpole() {
  // Check if character is within 10 pixels of the flagpole
  if (abs(gameChar_x - flagpole.x_pos) < 20) {
    flagpole.isReached = true;
  }
}

	 // a helpful mouse coordinate pointer
   function mouseCoord () {
    push()
	 fill(255,0,0);
	 noStroke();
	 text(`${mouseX},${mouseY}`,mouseX, mouseY);
   pop();
   }