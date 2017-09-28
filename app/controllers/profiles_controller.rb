class ProfilesController < ApplicationController
  before_action :set_profile, only: [:show, :update]

  def show
  end

  def update
    if @profile.update(profile_params)
      render :show
    else
      render_error_messages(@profile)
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:name, :last_name)
  end

  def set_profile
    #Find by user id
    @profile = User.find(params[:id]).profile
  end
end