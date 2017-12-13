class Author < ApplicationRecord
  has_and_belongs_to_many :articles

  validates :first_name, presence: true
  validates :last_name, presence: true
end
