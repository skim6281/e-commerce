class Api::ProductsController < ApplicationController
  def index
    @products = Product.all.order(created_at: :desc)
    render 'api/products/index'
  end

  def create
    if params[:products]
      params[:products].each do |product|
        @product = Product.new(name: product[:name],
                               brand: product[:brand],
                               model: product[:model],
                               sku: product[:sku],
                               price: product[:price],
                               desc: product[:desc])
        if !@product.save
          render json: @product.errors.full_messages, status: 422
        end
      end
      render 'api/products/index'
    else
      @product = Product.new(product_params)
      if @product.save
        render 'api/products/show'
      else
        render json: @product.errors.full_messages, status: 422
      end
    end
  end

  def show
    @product = Product.find(params[:id])
    if @product
      render 'api/products/show'
    else
      render json: ["Product not found"], status: 422
    end
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(price: params[:price])
      render 'api/products/show'
    else
      render json: ["Product not found"], status: 422
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy
  end

  private

  def product_params
    params.require(:product).permit(:name, :brand, :model, :sku, :price, :desc)
  end
end
