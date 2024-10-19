/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/
trees_x;
treePos_y;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432;
	
	// treePos_x=width/2;
	treePos_y = floorPos_y;
	treePos_x = [100, 300, 500]

}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	fill(255);
	ellipse(400, 200, 200, 100)
	//... add your code here

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here

	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	//... add your code here
	
	noStroke();
	fill(255);
	text("tree", 800, 346);
	drawTrees();

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
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
  