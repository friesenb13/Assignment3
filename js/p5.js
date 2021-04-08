
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

	//testing
	drawCanvas = document.getElementById('defaultCanvas0');

}

function draw() {

	background(255, 10);
	translate(vidCapture.width, 0)
	scale(-1, 1)
	
	//show your face video or not 
	// image(vidCapture, 0, 0);

	var positions = ctracker.getCurrentPosition();

	// print(positions)
	if(positions){

		// all the fun with positions in here

		// ctracker.draw(drawCanvas);

		//ellipse needs a x, y, diameter
		fill(0);

		//draw a point for every part of your face
		positions.forEach(function(pos){
			ellipse(pos[0],pos[1],2)

		})
		// ellipse(positions[62][0],positions[62][1],10)

		line(positions[23][0],positions[23][1], positions[23][0]-30,positions[23][1]-30);
		line(positions[28][0],positions[28][1], positions[28][0]+30,positions[28][1]-30);

		print("x:" + positions[62][0])
		print("y:" + positions[62][1])

		var r= map(positions[62][0], 250, 300, 0,255, true)
		var b= map(positions[62][1], 150, 200, 0,255, true)


		background(r, 255,b);
		tint(255, 126);
		image(vidCapture,0,0);
}
	

}

// function windowResized() {
//   resizeCanvas(windowWidth/2, windowHeight/2);
// }