class Author < ApplicationRecord
  has_and_belongs_to_many :lessons

  validates :first_name, presence: true
  validates :last_name, presence: true
end
