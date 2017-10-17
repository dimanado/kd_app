class ProfilesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_profile, only: [:show, :update]

  def show
    authorize @profile
  end

  def update
    authorize @profile
    if @profile.update(profile_params)
      render :show
    else
      render_error_messages(@profile)
    end
  end

  def create_company
    @company = Company.new(company_params)
    if @company.valid?
      @company.save!
      @company_representative = CompanyRepresentative.new(user: current_user, company: @company, status: params.require(:company)[:status])
      if @company_representative.valid?
        @company_representative.save!
      else
        render_error_messages(@company_representative)
      end
    else
      render_error_messages(@company)
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:first_name, :last_name)
  end

  def company_params
    params.require(:company).permit(:title, :ownership_type_id, :company_type_id, :comp_type)
  end

  def set_profile
    @profile = current_user.profile
  end
end
