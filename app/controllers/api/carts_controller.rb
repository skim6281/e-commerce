class Api::CartsController < ApplicationController
  def show
    @cart = Cart.find(params[:cart_id])
  end

  def update

  end
end
