class MagazinesController < ApplicationController
  before_action :set_magazine, only: [:show, :update, :destroy]

  def index
    @magazines = policy_scope(Magazine)
  end

  def create
    @magazine = Magazine.new(magazine_params)

    authorize @magazine

    if @magazine.save
      render :show, status: :created, location: @magazine
    else
      render json: @magazine.errors, status: :unprocessable_entity
    end
  end

  def update
    if @magazine.update(magazine_params)
      render :show
    else
      render json: @magazine.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @magazine.destroy
  end

  private

  def set_magazine
    @magazine = Magazine.find(params[:id])
    authorize @magazine
  end

  def magazine_params
    params.require(:magazine).permit(:name, :description)
  end
end
