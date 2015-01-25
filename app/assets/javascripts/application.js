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

$(function() {	
	init();
	var currentTime;
	var currentSeason;
});

function init(){
	night();
	winter();
	modals();
	drawClouds(25);
	window.addEventListener('resize', onWindowResize, false);
};

function dawn(){
	currentTime = 'dawn';
	drawSky("peachpuff", "palevioletred", "blueviolet" );
	drawGrass("rgba(78, 128, 59, 1)", "rgba(143, 253, 100, 1)");
	drawOrb();
	console.log(currentTime)
};

function day(){
	currentTime = 'day';
	drawSky("royalblue", "cornflowerblue", "lightskyblue");
	drawGrass("rgba(78, 128, 59, 1)", "rgba(143, 253, 100, 1)");
	drawOrb("gold", "yellow", "yellow");
	console.log(currentTime)
};

function dusk(){
	currentTime = 'dusk';
	drawSky("blueviolet", "palevioletred", "peachpuff");
	drawGrass("rgba(143, 253, 100, 1)", "rgba(78, 128, 59, 1)");
	drawOrb();
	console.log(currentTime)
};

function night(){
	currentTime = 'night';
	drawSky("black", "midnightblue", "darkblue");
	drawGrass("rgba(143, 253, 100, 1)", "rgba(78, 128, 59, 1)");
	drawOrb("white", "gainsboro", "darkgray");
	console.log(currentTime)
};

function winter(){
	currentSeason = 'winter';
	drawLeaves();
	console.log(currentSeason)
};
function spring(){
	currentSeason = 'spring';
	drawLeaves("forestgreen", "yellowgreen", "darkolivegreen", "greenyellow");
	console.log(currentSeason)
};
function summer(){
	currentSeason = 'summer';
	drawLeaves("forestgreen", "yellowgreen", "darkolivegreen", "greenyellow");
	console.log(currentSeason)
};
function fall(){
	currentSeason = 'fall';
	drawLeaves("firebrick", "saddlebrown", "goldenrod", "darkorange");
	console.log(currentSeason)
};

function onWindowResize(){
	if (currentTime === "dawn"){
		dawn();
	} else if (currentTime === "day"){
		day();
	} else if (currentTime === "dusk"){
		dusk();
	} else if (currentTime === "night"){
		night();
	};
	console.log('window has been resized')
}


