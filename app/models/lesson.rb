class Lesson < ApplicationRecord
  belongs_to :product_module
  has_and_belongs_to_many :authors

  validates :name, presence: true
end
