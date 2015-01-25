function getWeatherForLocation(){
	var longitude = $(this).attr('longitude')
	var latitude = $(this).attr('latitude')
	$.ajax({ 
		    type: "GET",
		    url: '/weather_search',
		    data: { latitude: latitude, longitude: longitude},
		    success: function (data) {
		      renderWeatherForLocation(data)
		    }
		});
	console.log(longitude)
	console.log(latitude)
}

function renderWeatherForLocation(data){
	var weatherID = data.weather[0].id
	var temp = data.main.temp
	var sunrise = new Date(data.sys.sunrise*1000).toTimeString()
	var sunset = new Date(data.sys.sunset*1000).toTimeString()
	console.log(weatherID +"|"+ temp +"|"+ sunrise +"|"+ sunset)
	debugger;
}
