
var vidCapture, ctracker, drawCanvas;

//https://p5js.org/reference/#/p5/createSlider
// let slider;
let level=0;

function setup(){
	var cnv = createCanvas(windowWidth, windowHeight);
	cnv.parent("p5canvas");

	//p5 method for creating a video stream
	vidCapture = createCapture(VIDEO);
	vidCapture.size(vidCapture.width*3, vidCapture.height*3.4)
	vidCapture.hide();
	//start the tracker
	ctracker = new clm.tracker();
	ctracker.init();
	ctracker.start(vidCapture.elt)


	drawCanvas = document.getElementById('defaultCanvas0');

	// colorMode(HSB);
	// slider = createSlider(0, 360, 60, 40);
	// slider.position(10,10);
	// slider.style('width', '80px');

	valueSlider = createSlider(0,3,0, 1);
	valueSlider.position(10,10);
	valueSlider.input(changeLevel);

}

function draw() {

	// let val = slider.value();
	// background(val, 100, 100, 10);
	// background(255, 10);


	translate(vidCapture.width, 0);


	scale(-1, 1)
	
	

	//show your face video or not 
	image(vidCapture, 0, 0);

	var position = ctracker.getCurrentPosition();

	// filter(INVERT, level);

	if(position){

		// all the fun with positions in here

		ctracker.draw(drawCanvas);

		// ellipse needs a x, y, diameter
		// fill(0);

		// draw a point for every part of your face
		// positions.forEach(function(pos){
		// 	ellipse(pos[0],pos[1],2)

		// })
		// var r= map(position[62][0], 250, 300, 0,255, true)
		// var b= map(position[62][1], 150, 200, 0,255, true)


		// fill(r, 255,b);

		// ellipse(position[62][0],position[62][1],100)

		// line(positions[23][0],positions[23][1], positions[23][0]-30,positions[23][1]-30);
		// line(positions[28][0],positions[28][1], positions[28][0]+30,positions[28][1]-30);

		// print("x:" + position[62][0])
		// print("y:" + position[62][1])

		
		// tint(255, 126);
		// image(vidCapture,0,0);
}
	

}

function changeLevel(){
	level=valueSlider.value();
}

// function windowResized() {
//   resizeCanvas(windowWidth/2, windowHeight/2);
// }