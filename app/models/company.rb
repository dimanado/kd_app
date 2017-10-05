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
  has_and_belongs_to_many :users
end
