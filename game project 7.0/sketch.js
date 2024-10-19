/*
The Game Project 7
*/
/* Global Variables */ 
var gameChar_x;
var gameChar_y;
var gameChar_world_x;
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
var scrollPos;
var clouds;
var collectableTimer;
var game_score;
var flagpole;
var lives;
// var alive;
var platforms;

/* Teh Setup Function */
function setup() {
  createCanvas(1500, 576);
  startGame();

  function startGame () {

  
  floorPos_y = height *  3/ 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;
  
  scrollPos = 0; // Initialize scroll position
  
  
  isFalling = false;
  isLeft = false;
  isRight = false;
  isPlummeting = false;
  

  sun_x = 100;
  sun_y = height / 4;
  
  lives -= 1;


/* TODO: Notes to Self: The following can be converted into a constructor object futrue TODO */
  canyon = { x_pos: 800   , y_pos: floorPos_y, size_x: 100, size_y: 150 };

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

  isPlummeting = false; // 

  /* TODO: The Trees Constructor Object will be a great next improvement */
  treePos_X = [random(80,150), random(250, 450),random(600,850),random(1000, 1200), random(1300,1500)];
  treePos_y = floorPos_y;
  // scrollPos = constrain(scrollPos, 250, 0);
  // origin_x = gameChar_x;

  clouds = [
    { x_pos: 200, y_pos: random(50,200) },
    { x_pos: 400, y_pos: random(50,200) },
    { x_pos: 800, y_pos: random(50,300) },
  ];

  platforms = [];
  platforms.push(createPlatforms(300, floorPos_y-50, 200),);
  
  game_score = 0;
  
  flagpole = { isReached: false, x_pos: 2000 };

  // lives -=1

}


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
  
  push();
  
  translate(scrollPos, 0)
  
  /* Calling Various Functions */
  drawSun(); 
  drawClouds();
  drawMountains();
  drawTree();
  
  drawMultipleCollectables();
  
  drawFlag();
  checkFlagpole();
  
  // Create Platforms
  for(var i = 0 ; i < platforms.length; i++) {
    platforms[i].draw();
    
  }
  drawCanyon(canyon);
  
  // a helpful mouse coordinate pointer
  fill(255,0,0);
  noStroke();
  text(`${mouseX},${mouseY}`,mouseX, mouseY);
  pop();
  

  drawGameChar();
  // lives(); // TODO refine this , lots of thinking requried 
  // alive();
  
  // if (lives < 0) {
  //   text("Game Over - Press Space to Continue...",
  //   width/2 - 100, height/2);
  //   return;
  // }
  // else if(flagpole.isReached) {
  //   text("Level Complete - Press Space to Continue...", 
  //     width/2 - 100, height/2
  //   );
  //   return;

    
  // }
// if (gameChar_y > height) 
//     {
//       if (lives > 0) startGame();
//     }

  ///////////INTERACTION CODE//////////
  //Put conditional statements to move the game character below here

  if (isRight) {
    if (gameChar_x < width * 0.4) {
      gameChar_x += 5; // Move the character to the right
    } else {
      scrollPos -= 5; // Scroll the world when reaching screen edge
    }
  }
  
  if (isLeft) {
    if (gameChar_x > width * 0.4) {
      gameChar_x -= 5; // Move the character to the left
    } else {
      scrollPos += 5; // Scroll the world when reaching screen edge
    }
  }
  
   

  if (gameChar_y < floorPos_y) {
    // check if game character is above platform
    var isContact = false;
    for (var i = 0; i < platforms.length; i ++)
      {
       if(
         platforms[i].checkContact(gameChar_world_x, gameChar_y)
        );
      }
      gameChar_y += 2;
      isFalling = true;
    
  } else {
    isFalling = false;
  }


  // if (isLeft && !isPlummeting) {
  //   scrollPos += 5;
  // } else if (isRight && !isPlummeting) {
  //   scrollPos -= 5;
  // }

  
  // if (gameChar_y > floorPos_y) {
  //   isPlummeting = true
  // }

  if (isPlummeting) {
    
      gameChar_y += 10;
      
  }

  //variable to store the real position of the gameChar becasue scroll pos and translate changes it and I can't do collision detection
  gameChar_world_x = gameChar_x - scrollPos;

  // if (gameChar_y > height) {
  //   // get the character back to floor
  //   // startGame();
  //   gameChar_y = floorPos_y-250;
  //   gameChar_x = 600;
  //   isFalling = true
    
  // }

  // // Making sure character does not jump back up
  // if ((gameChar_y > floorPos_y)) {
  //   // gameChar_y += 2;
  //   isFalling = true;
  //   gameChar_x = 500;
  //   lives -=1
  //   // startGame();
  // }
  // else {
  //   isFalling = false; 
  // }


}

/// END OF DRAW Function ////// 

//############################//
// Keys Functions             //
//############################//

function keyPressed() {
  // if statements to control the animation of the character when
  // keys are pressed.

  // if(flagpole.isReached && key == ' ') 
  // {
  //   nextLevel();
  // }
  // else if (lives == 0 && key == ' ') {
  //   returnToStart();
  // }

  //Move Left or Right
  if (keyCode == 65 || keyCode == 37) {
    isLeft = true;
  } 
  
  if (keyCode == 68 || keyCode == 39) {
    isRight = true;
  }
  // Jump 
  if (
    (keyCode == 87 || keyCode == 38 || key == ' ') && (gameChar_y == floorPos_y)) {
    gameChar_y = gameChar_y - 100;
    isFalling = true;
  }
}

// console.log("key pressed code is : " + key);

function keyReleased() {
  // if statements to control the animation of the character when
  // keys are released.
  if (keyCode == 65 || keyCode == 37)  // Key A or arrow left released
    {
    isLeft = false;

  } 
  
  if (keyCode == 68 || keyCode == 39)  // Key D or Arrow Right Released
    {
    isRight = false;
  } 
  

}

function drawGameChar() {
  noStroke();

  if (isLeft && isFalling) {
    // add your jumping-left code
    // gameChar_y+=2;
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

  } 
  
  if (isRight && isFalling) {
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
  } 
  
  if (isLeft) {
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

  } 
  if (isRight) {
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
  } 
  
  if (isFalling || isPlummeting) {
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
  } 
  else 
  {
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
}

function drawMountains() {
  // Mountain

  let mountainHeight = 15;
  let baseWidth = 50;
  let startX = width/4;
  let startY = floorPos_y;

  for (var i = 0; i < 3; i++) {
    let y = startY;
    let x1 = startX + scrollPos / 10 + (mountainHeight - i) * baseWidth;
    let x2 =
      startX + scrollPos / 6 + ((mountainHeight + i -10) * baseWidth) / 4;

    //first tri
    fill(240);
    triangle(x1, y, x2, y, (x1 + x2) / 2, y - 350);
    fill(100);
    // 2nd tri
    triangle(x1 + 20, y, x2, y, (x1 + x2) / 2, y - 300);
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
  ellipse(150, floorPos_y -300, 75, 75);
}

function drawCanyon(t_canyon) {
  //draw the canyon
  fill(0);
  rect(
    t_canyon.x_pos + scrollPos,
    t_canyon.y_pos,
    t_canyon.size_x,
    t_canyon.size_y
    
  );
  checkPlummetting(canyon);
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
      gameChar_world_x,
      gameChar_y,
      t_collectable.x_pos ,
      t_collectable.y_pos
    ) < 50
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



function drawMultipleCollectables() {
  for (var i = 0; i < collectables.length; i++) {
    drawCollectable(collectables[i]);
    // drawCollectable(collectables[i]);
    checkCollectable(collectables[i]);
    
  }
  
}

function checkPlummetting() {
  if (
    gameChar_world_x > canyon.x_pos &&
    gameChar_world_x < canyon.x_pos + canyon.size_x &&
    gameChar_y >= floorPos_y
  ) {
    isPlummeting = true;
  }
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
  var d = gameChar_world_x >= flagpole.x_pos + scrollPos;
  if (gameChar_world_x + 30 >= flagpole.x_pos + scrollPos ) {
    flagpole.isReached = true;
  }

}

function createPlatforms(x, y, length) {
  var p = { 
    x: x,
    y: y,
    length: length,
    draw: function() {
        fill(255, 0, 255);
        rect(this.x + scrollPos, this.y, this.length, 20); 
    },
    checkContact: function (gc_x, gc_y) {
      if(gc_x > this.x  && gc_x < this.x + this.length) {
        console.log("in range");
        d = this.y - gc_y;
        if (d>= 0 && d <5 ){
          return true;
          console.log("inline with platform");        
        }

      }
        return false;
    }
  }
  return p;
 
}



