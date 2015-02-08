require 'httparty'
require 'pry'

module Weather

	API_ROOT_URL = 'https://api.forecast.io/forecast/'
	WEATHER_API_KEY = ENV['WEATHER_API_KEY']

	def self.search(lat, lon)
		query_string = [
			API_ROOT_URL,
			WEATHER_API_KEY,
			'/',
			lat,
			',',
			lon
		].join('')
		query_string = URI.escape(query_string)
		return HTTParty.get(query_string)
	end

end