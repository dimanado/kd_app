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

  validates :ownership_type, presence: true
  validates :company_type, presence: true
end


class CompanyRepresentative < ApplicationRecord
  belongs_to :user
  belongs_to :company
  validates :company, uniqueness: { scope: :user,
    message: "Represntative already exists" }

  validates :status, presence: true
end
