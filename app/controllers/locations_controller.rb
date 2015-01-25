class LocationsController < ApplicationController
	before_action :set_location, only: [:update, :destroy]

	helper_method :current_user

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
		render json: Location.create(location_params)
	end

	def destroy
		render json: Location.destroy(params[:id])
	end

	private

	def set_location
		@location = Location.find(params[:id])
	end

	def current_user
  	User.find(session[:current_user]) if session[:current_user]
  end

	def location_params
		params.require(:location).permit(:latitude, :longitude, :name, :city, :state, :country)
	end
end