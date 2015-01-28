var lightningInterval, lightningDiv;

function getInfoForLocation(){
	var longitude = $(this).attr('longitude')
	var latitude = $(this).attr('latitude')
	var name = $(this).attr('name');
	$.ajax({ 
		    type: "GET",
		    url: '/weather_search',
		    data: { latitude: latitude, longitude: longitude, name: name},
		    success: function (data) {
		      renderInfoForLocation(data)
		    }
		});
	console.log(longitude)
	console.log(latitude)
}

function renderInfoForLocation(data){
	console.log('rendering info for location' + data )

	var locationName = data.name;
	var description = data.search_results.currently.icon;
	var temp = data.search_results.currently.temperature;
	var stormDistance = data.search_results.currently.nearestStormDistance;
	var month = (new Date(data.search_results.currently.time*1000).getUTCMonth()) + 1;
	var latitude = data.search_results.latitude;
	var cloudCover = data.search_results.currently.cloudCover;
	var timeOfDayAtLocation = data.search_results.currently.time*1000;
	var offset = data.search_results.offset;
	var sunsetTime = data.search_results.daily.data[0].sunsetTime*1000;
	var sunriseTime = data.search_results.daily.data[0].sunriseTime*1000;
	determineTimeOfDay(timeOfDayAtLocation, offset, sunsetTime, sunriseTime);
	renderTempDisplay( locationName, temp, description );
	determineSeason(month, latitude, temp);
	determineWeather(description, stormDistance, cloudCover );
}

function renderTempDisplay( locationName, temp, description ){
	var tempDisplay = $('.tempDisplay');
	tempDisplay.empty();
	var locationName = $('<h2>').text(locationName);
	var temp = $('<h1>').html( Math.round(temp) + '&#176;');
	var description = $('<p>').text(description);
	tempDisplay.append(locationName)
						 .append(temp)
						 .append(description)
}

//RAIN 
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function rain(drops) {
	var rainDiv = $('.rain');
	for( i=1;i<drops;i++) {
		var dropLeft = randRange(0,1600);
		var dropTop = randRange(-1000,1400);
		$('<div>').addClass('rainDrop')
							.attr('id', 'rainDrop'+i)
							.appendTo(rainDiv);
		$('#rainDrop'+i).css('left',dropLeft);
		$('#rainDrop'+i).css('top',dropTop);
	}
}

// weather conditions

function determineWeather( description, stormDistance, cloudCover ){
	var rainDiv = $('.rain');
	rainDiv.empty();
	var blizzardDiv = $('.blizzard');
	blizzardDiv.hide();
	var snowDiv = $('.snow');
	snowDiv.hide();
	var clouds = cloudCover * 85;
	var fogDiv = $('.fog');
	fogDiv.hide();
	lightningDiv = $('.lightning');
	clearInterval(lightningInterval)

	if ( stormDistance < 1 ){
		storm(description);
		return;
	} else if ( ( description === 'clear-day' ) || ( description === 'clear-night' ) ){
		clearSkies(clouds);
	} else if ( description === 'rain' ) {
		rainShowers(clouds);
	} else if ( description === 'snow' ) {
		snow(clouds);
	} else if ( description === 'sleet' ) {
		rain(800);
		snow(clouds);
	} else if ( description === 'wind' ) {
		windy(clouds);
	} else if ( description === 'fog' ) {
		fog(clouds);
	} else if ( description === 'cloudly' ) {
		cloudy(clouds);
	} else if ( description === 'sleet' ) {
		rain(800);
		snow(clouds);
	} else if ( ( description === 'partly-cloudy-day' ) || ( description === 'partly-cloudy-night' ) ){
		partlyCloudly();
	}      
};

function storm(description){
	if ( description === 'rain' ){
		heavyRain(.7)
	} else if ( description === 'snow' ){
		heavySnow(.7);
	}
	lightningInterval = setInterval(function(){
		lightning()}, 3000);
};

function lightning(){
	lightningDiv = $('.lightning');
	lightningDiv.show();
	lightningDiv.css('z-index', '6');
	setTimeout(function()
		{ lightningDiv.css('z-index', '-6')},100)
}

function clearSkies(clouds){
	drawClouds(clouds, 'whitesmoke', .3)
}

function mostlySunny(clouds){
	if (clouds){
	drawClouds(clouds, 'whitesmoke', .3)
	} else { 
	drawClouds( 10, 'whitesmoke', .3)
	};
}

function partlyCloudly(clouds){
	if (clouds){
	drawClouds(clouds, 'whitesmoke', .3)
	} else { 
	drawClouds( 50, 'whitesmoke', .3)
	};
}

function cloudly(clouds){
	if (clouds){
	drawClouds(clouds, 'whitesmoke', .3)
	} else { 
	drawClouds( 100, 'whitesmoke', .3)
	};
}

function overcast(clouds){
	if (clouds){
	drawClouds(clouds, 'whitesmoke', .3)
	} else { 
	drawClouds( 150, 'whitesmoke', .3)
	};
}


function snow(clouds){
	drawClouds(clouds, 'whitesmoke', .4)
	var snowDiv = $('.snow')
	snowDiv.show()
}

function heavySnow(clouds){
	if (clouds){
	drawClouds(clouds, 'whitesmoke', .3)
	} else { 
	drawClouds( 75, 'whitesmoke', .3)
	};
	var blizzardDiv = $('.blizzard')
	blizzardDiv.show()
}

function blizzard(clouds){
	if (clouds){
	drawClouds(clouds, 'whitesmoke', .3)
	} else { 
	drawClouds( 75, 'whitesmoke', .3)
	};
	var blizzardDiv = $('.blizzard')
	blizzardDiv.show()
	storm('snow');

	drawGrass('aliceblue', 'white');
}


function rainShowers(clouds){
	if (clouds){
	drawClouds(clouds, 'whitesmoke', .3)
	} else { 
	drawClouds( 75, 'whitesmoke', .3)
	};
	rain(600);
}

function heavyRain(clouds){
	if (clouds){
	drawClouds(clouds, 'whitesmoke', .3)
	} else { 
	drawClouds( 80, 'whitesmoke', .3)
	};
	rain(1500);
}

function fog(clouds){
	if (clouds){
	drawClouds(clouds, 'whitesmoke', .3)
	} else { 
	drawClouds( 25, 'whitesmoke', .3)
	};
	var fogDiv = $('.fog');
	fogDiv.show();
}

function windy(clouds){
	console.log('Ross!! make windy fxn')
}








