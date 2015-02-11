class UsersController < ApplicationController
	
	helper_method :authenticate

	def create
		@user = User.new(user_params)
		if @user.save 
			session[:current_user] = @user.id
			render json: { current_user: @user }
		else
			current_user = nil
			# format.json { render :json => { render json: @user.errors }
		end 
	end
private
	def user_params
		params.require(:user).permit(:username, :password, :password_confirmation)
	end	
	
end