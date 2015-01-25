function drawOrb(color1, color2, color3){
	var orbCanvas = document.getElementById("orb");
	var orbContext = orbCanvas.getContext("2d");
	orbCanvas.width = (window.innerWidth)/16;
	orbCanvas.height = (window.innerWidth)/16;
	
	var height = orbCanvas.height;
	var width = orbCanvas.width;

	var centerX = width/2;
  var centerY = height/2;
	var radius = height/2;



	if (! color1 ){
		orbContext.clearRect ( 0 , 0 , orbCanvas.width, orbCanvas.height )	
	} else {
	// set vars
	// draw 
	orbContext.beginPath();
	orbContext.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	gradient = orbContext.createRadialGradient(centerX,centerY, radius, centerX,centerY,0);
	gradient.addColorStop(0, color1);
	gradient.addColorStop(.4, color2);
	gradient.addColorStop(1, color3);
	orbContext.fillStyle = gradient;
  orbContext.fill();
}
}