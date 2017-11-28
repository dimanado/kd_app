class AuthorsController < ApplicationController
  before_action :set_author, only: [:show, :update, :destroy]

  def index
    @authors = policy_scope(Author)
  end

  def create
    @author = Author.new(author_params)

    authorize @author

    if @author.save
      render :show, status: :created, location: @author
    else
      render json: @author.errors, status: :unprocessable_entity
    end
  end

  def update
    if @author.update(author_params)
      render :show
    else
      render json: @author.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @author.destroy
  end

  private

  def set_author
    @author = Author.find(params[:id])
    authorize @author
  end

  def author_params
    params.require(:author).permit(:first_name, :last_name, :description)
  end
end
