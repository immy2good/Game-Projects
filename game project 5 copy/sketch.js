/*

The Game Project

Week 8

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
var collectable;
var sun_x;
var sun_y;
var isFound;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	isFalling = false;
	isLeft = false;
	isRight =false;
	isPlummeting =false;
	canyonPos_x = width/10;
	canyonPos_y = floorPos_y;
	sun_x = 100;
	sun_y = 100;
	collectable = {x_pos : 100, y_pos: floorPos_y, size: 40, isFound: false}
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue
	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
		var centerX = width /2; 
	var centerY = height /2; 
	// Draw The Sun
	fill('gold');
	ellipse(sun_x+centerX, sun_y, 100, 100)
	//draw the canyon
	fill('black');
 	rect(canyonPos_x, canyonPos_y, 100, 150)

	// Mountain 

	triangle(width/2, height/2, 400, floorPos_y, 600, floorPos_y );
	fill('100')
	triangle(width/2, height/2, 500, floorPos_y-50, 600, floorPos_y );
	fill(100)
	triangle(width/3, height/3, centerX-300, floorPos_y, centerX, floorPos_y );
	fill(255);
	triangle(width/3, height/3, centerX-200, floorPos_y-100, centerX, floorPos_y );

	// Collectable
	if (dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) < 20)
	{
		collectable.isFound = true; 
	}
	if (collectable.isFound == false)
	{
	noFill();
	strokeWeight(6);
	stroke(220, 185, 0);
	ellipse(collectable.x_pos, collectable.y_pos-20, 
		collectable.size, collectable.size);
	fill(255,0,255);
	stroke(255);
	strokeWeight(1);
	quad (
		collectable.x_pos-5, 
		collectable.y_pos - collectable.size, 
		collectable.x_pos-10, collectable.y_pos-(collectable.size+15),
		collectable.x_pos +10,
		collectable.y_pos - 
		(collectable.size+15),
		collectable.x_pos+ 5, collectable.y_pos -
		collectable.size
	);
}



	//the game character

	// Draw the Game Character
	
	// Character Facing Front
	
	// // if (!isLeft && !isRight) {
	// fill(255, 0, 0);
	// rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
	// fill(255, 150, 150);
	// ellipse(gameChar_x, gameChar_y - 55, 40, 40);
	// fill('blue');
	// //left eye
	// ellipse(gameChar_x-8, gameChar_y -55, 5,5)
	// //right eye
	// ellipse(gameChar_x+8, gameChar_y -55, 5,5)

	// //Legs
	// fill(0);
	// //left 
	// rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
	// //Right
	// rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
	// // // Arms
	// // fill('maroon')
	// // //Left arm
	// // rect(gameChar_x - 25, gameChar_y - 35, 10, 20);
	// // // Right Arm 
	// // rect(gameChar_x + 15, gameChar_y - 35, 10, 20);
	

	// // End Facing Front

	


	noStroke(); 

	if (isLeft && isFalling)
	{
		// add your jumping-left code
		gameChar_x -=2;
		
		//Character Facing Left

		fill(255, 0, 0);
		// rotate(20);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
		fill(255, 150, 150);
		ellipse(gameChar_x, gameChar_y - 55, 40, 40);
		fill('blue');
			//left eye
		ellipse(gameChar_x-8, gameChar_y -55, 5,5)
		fill('brown');
		//Nose
		ellipse(gameChar_x-20, gameChar_y -55, 10,10)
		//right eye
		// ellipse(gameChar_x+8, gameChar_y -55, 5,5)

		//Legs
		fill(0);
		//left leg
		//left leg
		rect(gameChar_x - 20, gameChar_y - 10, 10, 10);
		//Right leg
		rect(gameChar_x + 10, gameChar_y - 10, 10, 10);
		// Arms
		// fill('maroon')
		// //Left arm
		// // rotate(QUARTER_PI);
		// rect(gameChar_x-5 , gameChar_y - 35, 10, 20);
		
		// Right Arm 
		// rect(gameChar_x + 15, gameChar_y - 35, 10, 20);

		//End Facing Left


	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		gameChar_x +=2;
		//Character Facing Right

		fill(255, 0, 0);
		// rotate(20);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
		fill(255, 150, 150);
		ellipse(gameChar_x, gameChar_y - 55, 40, 40);
		fill('blue');
			//left eye
		// ellipse(gameChar_x-8, gameChar_y -55, 5,5)
		//right eye
		ellipse(gameChar_x+8, gameChar_y -55, 5,5)
		fill('brown');
		//Nose
		ellipse(gameChar_x+20, gameChar_y -55, 10,10)

		//Legs
		fill(0);
		//left leg
		rect(gameChar_x - 20, gameChar_y - 10, 10, 10);
		//Right leg
		rect(gameChar_x + 10, gameChar_y - 10, 10, 10);
		// // Arms
		// fill('maroon')
		// //Left arm
		// // rotate(QUARTER_PI);
		// rect(gameChar_x-5 , gameChar_y - 35, 10, 20);
		


		//End Facing Right

	}
	else if(isLeft)
	{
			// add your walking left code
			gameChar_x -=2;
		
		//Character Facing Left

		fill(255, 0, 0);
		// rotate(20);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
		fill(255, 150, 150);
		ellipse(gameChar_x, gameChar_y - 55, 40, 40);
		fill('blue');
			//left eye
		ellipse(gameChar_x-8, gameChar_y -55, 5,5)
		fill('brown');
		//Nose
		ellipse(gameChar_x-20, gameChar_y -55, 10,10)
		//right eye
		// ellipse(gameChar_x+8, gameChar_y -55, 5,5)

		//Legs
		fill(0);
		//left leg
		rect(gameChar_x - 20, gameChar_y - 10, 10, 10);
		//Right leg
		rect(gameChar_x + 2, gameChar_y - 10, 10, 10);
		// Arms
		// fill('maroon')
		//Left arm
		// rotate(QUARTER_PI);
		// rect(gameChar_x-5 , gameChar_y - 35, 10, 20);
		
		// Right Arm 
		// rect(gameChar_x + 15, gameChar_y - 35, 10, 20);

		//End Facing Left

	}
	else if(isRight)
	{
		// add your walking right code
		gameChar_x += 2;
		
		//Character Facing Right

		fill(255, 0, 0);
		// rotate(20);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
		fill(255, 150, 150);
		ellipse(gameChar_x, gameChar_y - 55, 40, 40);
		fill('blue');
			//left eye
		// ellipse(gameChar_x-8, gameChar_y -55, 5,5)
		//right eye
		ellipse(gameChar_x+8, gameChar_y -55, 5,5)
		fill('brown');
		//Nose
		ellipse(gameChar_x+20, gameChar_y -55, 10,10)

		//Legs
		fill(0);
		//left leg
		rect(gameChar_x - 10, gameChar_y - 10, 10, 10);
		//Right leg
		rect(gameChar_x + 10, gameChar_y - 10, 10, 10);
		// Arms
		// fill('maroon')
		// //Left arm
		// // rotate(QUARTER_PI);
		// rect(gameChar_x-5 , gameChar_y - 35, 10, 20);
		


		//End Facing Right
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
			// Character Facing Front - jumping
	if (!isLeft && !isRight) {
		fill(255, 0, 0);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
		fill(255, 150, 150);
		ellipse(gameChar_x, gameChar_y - 55, 40, 40);
		fill('blue');
		//left eye
		ellipse(gameChar_x-8, gameChar_y -55, 5,5)
		//right eye
		ellipse(gameChar_x+8, gameChar_y -55, 5,5)
	
		//Legs
		fill(0);
		//left 
		rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
		//Right
		rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
		// Arms
		// fill('maroon')
		// //Left arm
		// rect(gameChar_x - 25, gameChar_y - 35, 10, 10);
		// // Right Arm 
		// rect(gameChar_x + 15, gameChar_y - 35, 10, 10);
		}

	}
	else
	{
		// add your standing front facing code
			// Character Facing Front
	if (!isLeft && !isRight) {
		fill(255, 0, 0);
		rect(gameChar_x - 15, gameChar_y - 55, 30, 50);
		fill(255, 150, 150);
		ellipse(gameChar_x, gameChar_y - 55, 40, 40);
		fill('blue');
		//left eye
		ellipse(gameChar_x-8, gameChar_y -55, 5,5)
		//right eye
		ellipse(gameChar_x+8, gameChar_y -55, 5,5)
	
		//Legs
		fill(0);
		//left 
		rect(gameChar_x - 16, gameChar_y - 10, 10, 10);
		//Right
		rect(gameChar_x + 6, gameChar_y - 10, 10, 10);
		// // Arms
		// fill('maroon')
		// //Left arm
		// rect(gameChar_x - 25, gameChar_y - 35, 10, 20);
		// // Right Arm 
		// rect(gameChar_x + 15, gameChar_y - 35, 10, 20);
		}

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	if (gameChar_y < floorPos_y && isFalling) {
		gameChar_y += 1;
		isFalling = true;
	}
	else 
	{isFalling=false};



}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);

	// set status of isLeft and right to true
	 if (keyCode == 65)
	 {
		isLeft = true;
	 }
	 if (keyCode == 68)
	 {
		isRight = true;
		// console.log("D Key is Pressed");
	
	 }

	if (keyCode == 87 && !isFalling)
		{
		gameChar_y = gameChar_y - 100;
		isFalling =true;

		 	
		
		// console.log("key W is released");
		}

	}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

		if (keyCode == 65)
			{
			isLeft = false;
			console.log("A key released");
			}
		if (keyCode == 68)
			{
			isRight = false;
			console.log("D key released");
		
			}
		if (keyCode == 87)
			{
			isFalling = true;
			console.log("key W is released");
			}
		 if (keyCode == 83)
			{
			isFalling = true;
			isLeft = false;
			isRight = false;
		 	console.log(" key S is released");
		
		 	}

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}




// let charPosition_x = 200;
// let charPosition_y = 300;
// let initialPosition_y = 300;
// let velocityY = 0;
// let gravity = 0.5;
// let isJumping = false;

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
  
//   // Update character position
//   if (isJumping) {
//     charPosition_y += velocityY; // Move up when jumping
//     velocityY += gravity; // Apply gravity while jumping
    
//     // Check if character has fallen below the initial position
//     if (charPosition_y >= initialPosition_y) {
//       charPosition_y = initialPosition_y; // Stop falling at the initial position
//       isJumping = false; // Stop the jump
//       velocityY = 0; // Reset the velocity
//     }
//   }

//   // Draw the character (represented as a circle here)
//   ellipse(charPosition_x, charPosition_y, 50, 50);
// }

// function keyPressed() {
//   if (key === 'w' || key === 'W') {
//     if (!isJumping) {
//       velocityY = -10; // Set initial velocity for jump
//       isJumping = true; // Start jumping
//     }
//   }
// }

// function setup() {
// 	createCanvas(100, 100);
  
// 	background(200);
  
// 	// Set the coordinates.
// 	let x1 = 10;
// 	let y1 = 50;
// 	let x2 = 90;
// 	let y2 = 50;
  
// 	// Draw the points and a line connecting them.
// 	line(x1, y1, x2, y2);
// 	strokeWeight(5);
// 	point(x1, y1);
// 	point(x2, y2);
  
// 	// Calculate the distance.
// 	let d = dist(x1, y1, x2, y2);
  
// 	// Style the text.
// 	textAlign(CENTER);
// 	textSize(16);
  
// 	// Display the distance.
// 	text(d, 43, 40);
  
// 	describe('Two dots connected by a horizontal line. The number 80 is written above the center of the line.');
//   }