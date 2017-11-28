class ProductModulesController < ApplicationController
  before_action :set_product_module, only: [:show, :update, :destroy]

  def index
    @product_modules = policy_scope(ProductModule)
  end

  def create
    @product_module = ProductModule.new(product_module_params)

    authorize @product_module

    if @product_module.save
      render :show, status: :created, location: @product_module
    else
      render json: @product_module.errors, status: :unprocessable_entity
    end
  end

  def update
    if @product_module.update(product_module_params)
      render :show
    else
      render json: @product_module.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @product_module.destroy
  end

  private

  def set_product_module
    @product_module = ProductModule.find(params[:id])
    authorize @product_module
  end

  def product_module_params
    params.require(:product_module).permit(:name, :description)
  end
end
