class LocationsController < ApplicationController
	before_action :set_location, only: [:update, :destroy]

	helper_method :current_user
	include Weather

	def index
		if session[:current_user]
			@current_user = User.find(session[:current_user]) if session[:current_user]
	    @locations = @current_user.locations
	    response = { current_user: @current_user, locations: @locations }
	    render json: response 
	  else
      @current_user = nil
      @location = Location.first
      response = { current_user: @current_user, locations: @location }
      render json: response
    end   
	end

	def create
		@location = Location.new(location_params)
		@current_user = User.find(session[:current_user]) if session[:current_user]
		if @location.save
			response = { current_user: @current_user, locations: @locations }
			@current_user.add_location(@location)
			render json: response
		else
			@current_user = nil
      @location = Location.first
      response = { current_user: @current_user, locations: @location }
      render json: response
    end  
	end

	def weather
		@search_results = Weather.search(params[:latitude], params[:longitude])
    render json: @search_results
	end	

	def destroy
		current_user = User.find(session[:current_user]) if session[:current_user]
		location  = Location.where(id: (params[:id]))
		current_user.locations.destroy(location) 
		@current_user = User.find(session[:current_user]) if session[:current_user]
	  @locations = @current_user.locations
	  response = { current_user: @current_user, locations: @locations }
		render json: response
	end

	private

	def set_location
		@location = Location.find(params[:id])
	end

	def current_user
  	User.find(session[:current_user]) if session[:current_user]
  end

	def location_params
		params.require(:location).permit(:latitude, :longitude, :name, :state, :country)
	end
end