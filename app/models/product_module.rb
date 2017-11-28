class ProductModule < ApplicationRecord
  belongs_to :product
  has_many :lessons

  validates :name, presence: true
end
