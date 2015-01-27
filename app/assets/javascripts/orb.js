function drawOrb(color){
	var orbCanvas = document.getElementById("orb");
	var orbContext = orbCanvas.getContext("2d");
	orbCanvas.width = (window.innerWidth)/12;
	orbCanvas.height = (window.innerWidth)/12;
	
	var height = orbCanvas.height;
	var width = orbCanvas.width;

	var centerX = width/2;
  var centerY = height/2;
	var radius = height/2;

	if (! color ){
		orbContext.clearRect ( 0 , 0 , orbCanvas.width, orbCanvas.height )	
	} else {
	orbContext.beginPath();
	orbContext.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	orbContext.fillStyle = color;
  orbContext.fill();
}
}