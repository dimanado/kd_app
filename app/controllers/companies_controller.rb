class CompaniesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_company, only: [:show, :update, :destroy]
  before_action :set_company_representative, only: [:update]
  before_action :check_user, only: [:update, :destroy]

  def index
    @companies = Company.all
  end

  def show
    @company = Company.find(params[:id])
  end
end
