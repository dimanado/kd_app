class CompaniesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_company, only: [:show, :update, :destroy]
  
  def index
    @companies = Company.all
  end

  def create
    @company = Company.create(company_params)
  end

  def update
    @company.update(company_params)
  end

  def destroy
    @company.destroy
  end

  private

  def set_company
    @company = Company.find(params[:id])
  end

  def company_params
    params.require(:company).permit(:title, :type, :ownership_type_id, :company_type_id)
  end
end
