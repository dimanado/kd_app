class CompanyType < ApplicationRecord
  has_many :companies

  validates :name, uniqueness: true
end
