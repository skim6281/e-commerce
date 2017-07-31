class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render 'api/products/index'
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render 'api/products/show'
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def destroy
    @product = product.find(params[:id])
    @product.destroy
  end

  private

  def product_params
    params.require(:product).permit(:name, :brand, :model, :sku, :price, :desc)
  end
end
