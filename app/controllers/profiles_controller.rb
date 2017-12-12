class ProfilesController < ApiController
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
    @company = Company.create_company(company_params, current_user, params[:company][:user_status])
    render_error_messages(@company) unless @company.valid?
  end

  private

  def profile_params
    params.require(:profile).permit(:first_name, :last_name, :age, :sex, :avatar)
  end

  def company_params
    params.require(:company).permit(:title, :ownership_type_id, :company_type_id, :status, :is_sole)
  end

  def set_profile
    @profile = current_user.profile
  end
end
