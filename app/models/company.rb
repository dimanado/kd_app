# == Schema Information
#
# Table name: companies
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Company < ApplicationRecord
  belongs_to :ownership_type
  belongs_to :company_type

  has_many :company_representatives, dependent: :destroy
  has_many :users, through: :company_representatives

  enum status: [ :active, :archived ]

  validates :title, uniqueness: true
  validates :title, :ownership_type, :company_type, :status, presence: true

  def self.create_company(company_params, current_user, status)
    company = nil
    transaction do
      company = create(company_params)
      CompanyRepresentative.create(status: status, user: current_user, company: company)
    end
    company
  end
end
