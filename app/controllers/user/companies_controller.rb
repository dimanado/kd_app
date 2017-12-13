class User::CompaniesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_company, only: [:show, :update]

  def show
    render "companies/show"
  end

  def update
    company = @company.update_with_representative(company_params, current_user, params[:company][:user_status])
    if company
      render "companies/show"
    else
      render_error_messages(@company)
    end
  end

  private

  def set_company
    @company = Company.find(params[:id])
  end

  def company_params
    params.require(:company).permit(:title, :ownership_type_id,
                                    :company_type_id, :status, :is_sole)
  end
end
