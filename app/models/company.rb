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
end
