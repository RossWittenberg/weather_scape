function drawSky(color1, color2, color3){
	var skyCanvas = document.getElementById("sky");
	var skyContext = skyCanvas.getContext("2d");
	skyCanvas.width = window.innerWidth;
	skyCanvas.height = window.innerHeight;
	var height = skyCanvas.height;
	var width = skyCanvas.width;
	var gradient = skyContext.createLinearGradient(0,0,0,width);
	gradient.addColorStop(0, color1);
	gradient.addColorStop(.3, color2);
	gradient.addColorStop(1, color3);
	skyContext.fillStyle = gradient;
	skyContext.fillRect(0,0,width,height);
	if (currentTimeOfDay === 'night' || currentTimeOfDay === 'dusk' || currentTimeOfDay === 'stormNight' ){
		console.log('adding stars')
		for (var i = 0; i < 100; i++) {
			var centerX = Math.random() * width;
  		var centerY = Math.random() * (height/2);
			var radius = .5;
			skyContext.beginPath();
			skyContext.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
			skyContext.fillStyle = "white";
			skyContext.fill();
		};
		for (var i = 0; i < 15; i++) {
			var centerX = Math.random() * width;
  		var centerY = Math.random() * (height/2);
			var radius = 1.5;
			skyContext.beginPath();
			skyContext.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
			skyContext.fillStyle = "white";
			skyContext.fill();
		};
	}
}




	// var height = orbCanvas.height;
	// var width = orbCanvas.width;
	// var centerX = width/2;
 //  var centerY = height/2;
	// var radius = height/2;

	// if (! color1 ){
	// 	orbContext.clearRect ( 0 , 0 , orbCanvas.width, orbCanvas.height )	
	// } else {
	// // set vars
	// // draw 
	// orbContext.beginPath();
	// orbContext.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	// gradient = orbContext.createRadialGradient(centerX,centerY, radius, centerX,centerY,0);
	// gradient.addColorStop(0, color1);
	// gradient.addColorStop(.4, color2);
	// gradient.addColorStop(1, color3);
	// orbContext.fillStyle = gradient;
 //  orbContext.fill();