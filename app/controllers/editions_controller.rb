class EditionsController < ApplicationController
  before_action :set_edition, only: [:show, :update, :destroy]

  def index
    @editions = policy_scope(Edition)
  end

  def create
    @edition = Edition.new(edition_params)

    authorize @edition

    if @edition.save
      render :show, status: :created, location: @edition
    else
      render json: @edition.errors, status: :unprocessable_entity
    end
  end

  def update
    if @edition.update(edition_params)
      render :show
    else
      render json: @edition.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @edition.destroy
  end

  private

  def set_edition
    @edition = Edition.find(params[:id])
    authorize @edition
  end

  def edition_params
    params.require(:edition).permit(:name, :description)
  end
end
