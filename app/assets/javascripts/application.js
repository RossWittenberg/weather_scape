// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require_self
//= require_tree .

var currentSeason, currentTimeOfDay;

$(function() {	
	init();
});

function init(){
	initModals()
	getRandomDefaultLocation();
	window.addEventListener('resize', onWindowResize, false);
};

function onWindowResize(){
	if (currentTimeOfDay === "dawn"){
		dawn();
	} else if (currentTimeOfDay === "day"){
		day();
	} else if (currentTimeOfDay === "dusk"){
		dusk();
	} else if (currentTimeOfDay === "night"){
		night();
	} else if (currentTimeOfDay === "stormDay"){
		stormDay();
	} else if (currentTimeOfDay === "stormNight"){
		stormNight()	
	};	
	if (currentSeason === "spring"){
		spring();
	} else if (currentSeason === "summer"){
		summer();
	} else if (currentSeason === "fall"){
		fall();
	} else if (currentSeason === "winter"){
		winter();
	} else if (currentSeason === "artic"){
		artic();
	}	else if (currentSeason === "tropical"){
		tropical();
	};	
	console.log('window has been resized')
}

function getRandomDefaultLocation(){
	$.get( '/random_locations' ).done(function(data){
		var randomLocation = data[Math.floor(Math.random()*data.length)];
		var latitudeOfRandomLocation = randomLocation.latitude;
		var longitudeOfRandomLocation = randomLocation.longitude;
		var nameOfRandomLocation = randomLocation.name;
		$.ajax({ 
		    type: "GET",
		    url: '/weather_search',
		    data: { latitude: latitudeOfRandomLocation, longitude: longitudeOfRandomLocation, name: nameOfRandomLocation},
		    success: function (data) {
		      renderInfoForLocation(data)
		    }
		});
	});
}


