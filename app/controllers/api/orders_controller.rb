class Api::OrdersController < ApplicationController
  def create
    @order = Order.new(user_id: params[:user_id])
    if @order.save
      @order.user.cart.cart_items.each do |cart_item|
        @order_item = OrderItem.new(
                        order_id: @order.id,
                        product_id: cart_item.product_id,
                        quantity: cart_item.quantity)

        if !@order_item.save
          render json: @order_item.errors.full_messages, status: 422
        end
      end
      @order.user.cart.cart_items.destroy_all
      render 'api/orders/show'
    else
      render json: @order.errors.full_messages, status: 422
    end
  end
end
