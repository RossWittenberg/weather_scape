require 'HTTParty'
require 'pry'

module Weather

	API_ROOT_URL = 'http://api.openweathermap.org/data/2.5/weather?lat='
	API_KEY = ENV['WEATHER_KEY']

	def self.search(lat, lon)
		query_string = [
			API_ROOT_URL,
			lat,
			'&lon=',
			lon,
			'&units=imperial',
			'&APPID=',
			API_KEY
		].join('')
		puts query_string

		query_string = URI.escape(query_string)
		return HTTParty.get(query_string)
	end

end