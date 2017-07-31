class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render 'api/products/index'
  end

  def show

  end

  private

  def product_params
    params.require(:product).permit(:name, :brand, :model, :sku, :price, :desc)
  end
end
