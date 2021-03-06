class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render 'api/users/index'
  end

  def create
    @user = User.new(user_params)
    if @user.save
      @cart = Cart.new(user_id: @user.id)
      @cart.save
      login(@user)
      UserMailer.welcome_email(@user).deliver_now
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
