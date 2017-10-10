class CompaniesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_company, only: [:show, :update, :destroy]
  before_action :set_company_representative, only: [:update]
  before_action :check_user, only: [:update, :destroy]

  def index
    @companies = Company.all
  end

  def create
    @company = Company.create(company_params)
    CompanyRepresentative.create(user_id: current_user.id, company_id: @company.id, status: params[:status])
  end

  def update
    @company.update(company_params)
    @company_representative.update(status: params[:status])
  end

  def destroy
    @company.destroy
  end

  private

  def set_company_representative
    @company_representative = CompanyRepresentative.find_by(user_id: current_user.id, company_id: @company.id)
  end

  def set_company
    @company = Company.find(params[:id])
  end

  def check_user
    @company.users.any? { |user| user.id == current_user.id }
  end

  def company_params
    params.require(:company).permit(:title, :comp_type, :ownership_type_id, :company_type_id)
  end
end
