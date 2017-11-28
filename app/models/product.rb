class Product < ApplicationRecord
  has_many :product_modules

  validates :name, presence: true
end
