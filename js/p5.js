
var vidCapture, ctracker, drawCanvas;


function setup(){


	var cnv = createCanvas(1000, 1000);
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

}

function draw() {

	background(0);

	translate(vidCapture.width, 0);


	scale(-1, 1)
	

	var position = ctracker.getCurrentPosition();


	image(vidCapture, 0, 0);

	if(position){

	// var opaque= map(position[62][0]);
	// var invert= map(position[62][0]);
	// var gray= map(position[62][0]);

	if (position[62][0] < 400) {

		console.log("invert");
	filter(INVERT);

	} 
		

	if (position[62][0] < 500) {
			console.log("gray");
	filter(GRAY);

	}	

	if (position[62][0] < 11000) {
			console.log("opaque");
	filter(OPAQUE);

	}

	// if (position[62][0] < 900) {
	// 		console.log("thresh");
	// filter(DILATE, thresh);

	// }

		// ctracker.draw(drawCanvas);
	

}
	

}