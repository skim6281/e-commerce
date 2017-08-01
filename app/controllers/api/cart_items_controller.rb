class Api::CartItemsController < ApplicationController
  def index
  end

  def create
    @cart_item = Cart.new(cart_items_params)
    
  end

  def show
  end

  def update
  end

  def destroy
  end

  private

  def cart_item_params
    params.require(:cart_item).permit(:cart_item, :product_id)
  end
end
