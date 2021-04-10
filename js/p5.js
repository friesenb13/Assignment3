
var vidCapture, ctracker, drawCanvas;


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

}

function draw() {


	translate(vidCapture.width, 0);


	scale(-1, 1)
	

	var position = ctracker.getCurrentPosition();


	image(vidCapture, 0, 0);

	if(position){

	// var post= map(position[62][1]);
	var invert= map(position[62][0]);
	var gray= map(position[62][0]);

	if (position[62][0] < width/2) {

		console.log("invert");
	filter(INVERT, invert);

	} 
		else {
			console.log("gray");
	filter(GRAY, gray);

	}	


		// ctracker.draw(drawCanvas);
	

}
	

}