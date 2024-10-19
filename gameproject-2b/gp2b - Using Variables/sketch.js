/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
}

function draw()
{
	background(100, 155, 255); //fill the sky blue
	gameCharacter()

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
	// //Standing, facing frontwards
	// var skinColor = color(245,222,179);//Wheat
	// var shirtColor = color(135,206,250) // LightSkyBlue
	// var trouserColor = color(0,0,128) // Navy
	// var shoesColor = color(169,169,169) // DarkGray
	// //head
	// fill(skinColor)
	// rect(gameChar_x-15, gameChar_y-80+2, 30, 28);
	// fill(128,0,0)//maroon
	// rect(gameChar_x-15, gameChar_y-80+2, 30, 7); // hair
	// 	//eyes whites
	// 	fill(255);
	// 	ellipse(gameChar_x-7, gameChar_y-65, 6,4);
	// 	ellipse(gameChar_x+7, gameChar_y-65, 6,4);
	// 	//eyes pupil
	// 	fill (0);
	// 	ellipse(gameChar_x-7, gameChar_y-65, 3,3);
	// 	ellipse(gameChar_x+7, gameChar_y-65, 3,3);
	// //body
	// fill(shirtColor); // LightSkyBlue
	// rect(gameChar_x-20, gameChar_y-50, 40, 30);
	// //Legs
	// fill(trouserColor); // Navy
	// rect(gameChar_x-15, gameChar_y-28, 30, 40);
	// //arms 
	// fill(skinColor) // PeachPuff
	// rect(gameChar_x-20, gameChar_y-42, 10, 25); // left
	// rect(gameChar_x+10, gameChar_y-42, 10, 25); // right
	// //feet
	// fill(shoesColor) // DarkGray
	// rect(gameChar_x-15, gameChar_y, 30, 12);

}

function mousePressed()
{

	gameChar_x = mouseX;
	gameChar_y = mouseY;

}


function gameCharacter()
{
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

}