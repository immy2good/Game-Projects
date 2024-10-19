/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. Around 10-20 lines of code should work for each state of your game character.

*/

var gameChar_x = 0;
var gameChar_y = 0;
var skinColor, shirtColor, trouserColor, shoesColor; // colours 


function setup()
{
	createCanvas(400, 600);
	var skinColor = color(245,222,179);//Wheat
	var shirtColor = color(135,206,250) // LightSkyBlue
	var trouserColor = color(0,0,128) // Navy
	var shoesColor = color(169,169,169) // DarkGray
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...

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
	rect(gameChar_x-20, gameChar_y-42, 10, 25); // left
	rect(gameChar_x+10, gameChar_y-42, 10, 25); // right
	//feet
	fill(shoesColor) // DarkGray
	rect(gameChar_x-15, gameChar_y, 30, 12);



	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
		//Jumping facing forwards
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
		rect(gameChar_x-20, gameChar_y-42, 10, 25); // left
		rect(gameChar_x+10, gameChar_y-42, 10, 25); // right
		//feet
		fill(shoesColor) // DarkGray
		rect(gameChar_x-15, gameChar_y, 30, 12);



	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...
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


	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	var skinColor = color(245,222,179);//Wheat
	var shirtColor = color(135,206,250) // LightSkyBlue
	var trouserColor = color(0,0,128) // Navy
	var shoesColor = color(169,169,169) // DarkGray

	// Walking Turned Right
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

//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...
// Jumping Turned Right
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


	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...

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
 
	 // a helpful mouse coordinate pointer
	 push()
	 fill(0,0,0);
	 textSize(40)
	 noStroke();
	 text(`${mouseX},${mouseY}`,mouseX, mouseY);
	 pop()

}

