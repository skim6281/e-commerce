class Api::CartItemsController < ApplicationController
  def index
    @cart_items = CartItem.where(cart_id: params[:cart_id])
    render 'api/cart_items/index'
  end

  def create
    @cart_item = CartItem.new(cart_item_params)
    if @cart_item.save
      render 'api/cart_items/show'
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def show
  end

  def update
  end

  def destroy
  end

  private

  def cart_item_params
    params.require(:cart_item).permit(:cart_id, :product_id)
  end
end
