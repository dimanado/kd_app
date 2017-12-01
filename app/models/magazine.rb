class Magazine < ApplicationRecord
  has_many :editions

  validates :name, presence: true
end
