class SessionsController < ApplicationController

  helper_method :current_user
  helper_method :authenticate

  def create
    @user = User.find_by( username: params[:username])
    response = { current_user: @user }
    if @user.authenticate(params[:password])
      session[:current_user] = @user.id  
      render json: response
    else
      current_user = nil
    end  
  end

  def destroy
    session[:current_user] = nil
    current_user = nil
    @current_user = User.find(session[:current_user]) if session[:current_user]
    render json: { current_user: @current_user } 
  end

end