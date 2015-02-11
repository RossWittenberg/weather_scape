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
	} else if ( color === "coral"){
		orbCanvas.width = (window.innerWidth)/6;
		orbCanvas.height = (window.innerWidth)/6;
		height = orbCanvas.height;
		width = orbCanvas.width;
		centerX = width/2;
  	centerY = height/2;
		radius = height/2;
		orbContext.beginPath();
		orbContext.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		orbContext.fillStyle = color;
	  orbContext.fill();		
		$(orbCanvas).css({
			top: '75%',
			left: '20%',
			animation: 0
		});
		if ( currentTimeOfDay === 'dusk'){
			$(orbCanvas).css({
			left: '80%'
		});
		}
	} else {
		orbContext.beginPath();
		orbContext.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		orbContext.fillStyle = color;
	  orbContext.fill();
	  $(orbCanvas).css({
			top: '40px',
			left: '70%'
		});
}
}