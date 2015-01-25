require 'httparty'
require 'pry'

module Geonames

	API_ROOT_URL = 'http://api.geonames.org/searchJSON?q='
	GEONAMES_USERNAME = ENV['GEONAMES_USERNAME']

	def self.search(term)
		query_string = [
			API_ROOT_URL,
			term,
			'&maxRows=50&orderby=relevance&username=',
			GEONAMES_USERNAME
		].join('')
		puts query_string

		query_string = URI.escape(query_string)
		return HTTParty.get(query_string)
	end

end

binding.pry