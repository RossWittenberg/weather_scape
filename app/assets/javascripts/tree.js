function drawLeaves(color1, color2, color3, color4){
	var leavesCanvas = document.getElementById("leaves");
	var leavesContext = leavesCanvas.getContext("2d");
	leavesCanvas.width = window.innerWidth;
	leavesCanvas.height = window.innerHeight;
	var height = leavesCanvas.height;
	var width = leavesCanvas.width;
	var colors = [color1, color2, color3, color4];
	if (! color1 ){
		leavesContext.clearRect ( 0 , 0 , leavesCanvas.width, leavesCanvas.height )	
	} else {
	for (var i = 0; i < 500; i++) {
			var centerX = Math.random() * width;
  		var centerY = Math.random() * height;
			var radius = 25;
			var color = colors[Math.floor(Math.random()*colors.length)]
			leavesContext.beginPath();
			leavesContext.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
			leavesContext.fillStyle = color;
			leavesContext.fill();
		};
	}	
}