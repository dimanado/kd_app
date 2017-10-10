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
  has_one :ownership_type
  has_one :company_type
  has_many: :users, through: :company_representatives

  validate :check_user, on: [:create, :update, :destroy]

  def check_user
    self.users.any? { |user| user.id == current_user.id }
  end
end
