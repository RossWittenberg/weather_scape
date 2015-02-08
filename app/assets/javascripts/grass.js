function drawGrass(color1, color2, currentSeason){
	if ($('#flowers')){
		$('#flowers').remove();
	}
	var grassCanvas = document.getElementById("grass");
	var grassContext = grassCanvas.getContext("2d");
	// debugger;
	grassCanvas.width = window.innerWidth
	grassCanvas.height = (window.innerHeight)/4

	var width = grassCanvas.width
	var height = grassCanvas.height
	var bottom = height;
	var oneThirdHeight = (bottom*(2/3));
	var halfHeight = bottom/2;
	var twoThirdsHeight = bottom/3

	grassContext.beginPath();
	grassContext.moveTo(0, bottom)
	grassContext.quadraticCurveTo(width/3, twoThirdsHeight, width*(2/3), bottom);
	grassContext.fillStyle = color1;
	grassContext.fill();

	grassContext.beginPath();
	grassContext.moveTo(width/2, bottom)
	grassContext.quadraticCurveTo(width*(2/3), 0, width*1.5, bottom);
	grassContext.fillStyle = color2;
	grassContext.fill(); 
 	
 	if ( currentSeason === 'spring' ){
 		var flowers = $('<img>');
 		flowers.empty();
 		flowers.attr({id: 'flowers', 
 									src: 'assets/flowers-cded70527bbcf70d5155c693c87cbdf0.png'});
		flowers.appendTo($(document.body));	
 	}
};