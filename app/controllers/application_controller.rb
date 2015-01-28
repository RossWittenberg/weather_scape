require 'pry'

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user
  helper_method :authenticate

  include Geonames
  include Weather

  def index
   if session[:current_user]
      @current_user = User.find(session[:current_user])
      @locations = @current_user.locations
      response = { current_user: @current_user, locations: @locations }
        respond_to do |format|      
          format.json { render json: response } 
          format.html { render layout: 'application', text: '' }
        end  
    else
      @current_user = nil
      @locations = Location.first
      response = { current_user: @current_user, locations: @locations }
        respond_to do |format|      
          format.json { render json: response } 
          format.html { render layout: 'application', text: '' }
        end 
    end   
  end

 def get_current_user
    if session[:current_user]
      @current_user = User.find(session[:current_user])
      @locations = @current_user.locations
      response = { current_user: @current_user, locations: @locations }
      render json: response 
    else
      @current_user = nil
      @locations = Location.first
      response = { current_user: @current_user, locations: @locations }
      render json: response 
    end  
  end   

  def location_search
    if session[:current_user]  
      @current_user = User.find(session[:current_user])
      @search_results = Geonames.search(params[:query])
      response = { current_user: @current_user, search_results: @search_results }
      render json: response
    else  
      @search_results = Geonames.search(params[:query])
      response = { current_user: 'null', search_results: @search_results  }
      render json: response
    end  
  end

  def authenticate
    redirect_to root_path unless current_user
  end

  def current_user
  	User.find(session[:current_user]) if session[:current_user]
  end

  def weather_search
    @search_results = Geonames.search(params[:lat, :lng])
    render json: @search_results
  end  

 private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end 
end
