
var vidCapture, ctracker, drawCanvas;

//https://p5js.org/reference/#/p5/createSlider
// let slider;

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

// color slider background
	// colorMode(HSB);
	// slider = createSlider(0, 360, 60, 40);
	// slider.position(10,10);
	// slider.style('width', '80px');


}

function draw() {

//color background slider
	// let val = slider.value();
	// background(val, 100, 100, 10);
	// background(255, 10);


	translate(vidCapture.width, 0);


	scale(-1, 1)
	

	var position = ctracker.getCurrentPosition();


	image(vidCapture, 0, 0);
	
	if(position){


	var invert= map(position[62][0], 100, 500);
	var gray= map(position[62][0],501, 800);

	if (position[62][0] < width/2) {

		console.log("yes");
	filter(INVERT, invert);

	} 
		else {
			console.log("no");
	filter(GRAY, gray);

	}	
		// ctracker.draw(drawCanvas);

		// print("x: " + position[62][0])
	// image(vidCapture, 0, 0);

	
	

}
	

}



// function windowResized() {
//   resizeCanvas(windowWidth/2, windowHeight/2);
// }