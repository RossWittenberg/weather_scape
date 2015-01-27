require 'HTTParty'
require 'pry'

module Weather

	API_ROOT_URL = 'https://api.forecast.io/forecast/'
	WEATHER_API_KEY = '4098995b9d3db933a0aecf1280951ad8'

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