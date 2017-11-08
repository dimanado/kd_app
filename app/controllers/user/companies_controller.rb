class User::CompaniesController < ApplicationController
  def show
    @company = Company.find(params[:id])
    render "companies/show"
  end
end
