require 'pry'

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user
  helper_method :authenticate

  def index
    @user = User.new(params[:user_params])
    response = { locations: @locations }
    respond_to do |format|      
      format.json { render json: response } 
      format.html { render layout: 'application', text: '' }
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

  def search
    @search_results = Geonames.search(params[:search])
    render json: @search_results
  end

  def authenticate
    redirect_to root_path unless current_user
  end

  def current_user
  	User.find(session[:current_user]) if session[:current_user]
  end

 private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end 
end
