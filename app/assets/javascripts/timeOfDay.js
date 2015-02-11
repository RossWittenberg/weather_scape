function determineTimeOfDay(timeOfDayAtLocation, offset, sunsetTime, sunriseTime){
	var hourOfTheClock = timeOfDayAtLocation
	var sunset = sunsetTime
	var sunrise = sunriseTime
	
	if ( ( hourOfTheClock >= sunrise -1  ) && ( hourOfTheClock <= sunrise + 1  )  ) {
		dawn()
	} else if ( ( hourOfTheClock >= sunset -1  ) && ( hourOfTheClock <= sunset + 1  )  ){
		dusk();
	} else if ( (hourOfTheClock > sunrise + 1 ) && ( hourOfTheClock < sunset - 1 ) ){
		day(hourOfTheClock);
	} else {
		night();
	}
}

function dawn(hourOfTheClock){
	currentTimeOfDay = 'dawn';
	drawSky("indigo", "lightpink", "peachpuff" );
	drawOrb();
};

function day(){
	currentTimeOfDay = 'day';
	drawSky("royalblue", "cornflowerblue", "lightskyblue");
	drawOrb("gold");
	console.log(currentTimeOfDay)
};

function dusk(){
	currentTimeOfDay = 'dusk';
	drawSky("blueviolet", "palevioletred", "peachpuff");
	drawOrb();
	console.log(currentTimeOfDay)
};

function night(){
	currentTimeOfDay = 'night';
	drawSky("black", "midnightblue", "darkblue");
	drawOrb("gainsboro");
	console.log(currentTimeOfDay)
};

function stormDay(){
	var rainDiv = $('.rain');
	rainDiv.empty();
	rain(2000);
	currentTimeOfDay = 'stormDay';
	drawSky("dimgray", "steelblue", "lightsteelblue");
	drawClouds(100, 'darkgray', .5)
	drawOrb("gold");
	console.log(currentTimeOfDay)
}

function stormNight(){
	var rainDiv = $('.rain');
	rainDiv.empty();
	rain(2000);
	currentTimeOfDay = 'stormNight';
	drawSky("black", "dimgray", "midnightblue");
	drawClouds(100, 'lightgray', .5)
	drawOrb("gainsboro");
	console.log(currentTimeOfDay)
}