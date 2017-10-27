class StaticPagesController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_static_page, only: [:show, :update]

  def index
    @static_pages = StaticPage.all
  end

  def show
  end

  def create
    @static_page = StaticPage.new(profile_params)
    if @static_page.save
      render :show
    else
      render_error_messages(@static_page)
    end
  end

  def update
    if @static_page.update(profile_params)
      render :show
    else
      render_error_messages(@static_page)
    end
  end

  private

  def profile_params
    params.require(:static_page).permit(:slug, :body)
  end

  def set_static_page
    @static_page = StaticPage.find(params[:id])
  end
end