class Api::CartsController < ApplicationController
  def show
    @cart = Cart.includes(:cart_item).find_by(user_id: params[:user_id])
    if @cart
      render 'api/carts/show'
    else
      render json: ["Cart not found"], status: 422
    end
  end
end
