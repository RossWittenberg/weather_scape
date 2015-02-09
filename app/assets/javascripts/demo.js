function initDemo () {
	$('#demoModal').on('click', '#demo-spring', spring);
	$('#demoModal').on('click', '#demo-summer', summer);
	$('#demoModal').on('click', '#demo-fall', fall);
	$('#demoModal').on('click', '#demo-winter', winter);
	$('#demoModal').on('click', '#demo-tropical', tropical);
	$('#demoModal').on('click', '#demo-arctic', arctic);

	$('#demoModal').on('click', '#demo-day', day);
	$('#demoModal').on('click', '#demo-dusk', dusk);
	$('#demoModal').on('click', '#demo-night', night);
	$('#demoModal').on('click', '#demo-dawn', dawn);

	$('#demoModal').on('click', '#demo-clear', clearSkies);
	$('#demoModal').on('click', '#demo-partly-cloudy', partlyCloudy);
	$('#demoModal').on('click', '#demo-cloudy', cloudy);
	$('#demoModal').on('click', '#demo-overcast', overcast);
	$('#demoModal').on('click', '#demo-rain', rainShowers);
	$('#demoModal').on('click', '#demo-heavy-rain', heavyRain);
	$('#demoModal').on('click', '#demo-rain-storm', demoStorm);
	$('#demoModal').on('click', '#demo-sleet', sleet);
	$('#demoModal').on('click', '#demo-snow', snow);
	$('#demoModal').on('click', '#demo-blizzard', blizzard);
	$('#demoModal').on('click', '#demo-fog', fog);

}

function demoStorm(){
	reset();
	storm('rain');
}

