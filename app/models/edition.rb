class Edition < ApplicationRecord
  belongs_to :magazine
  has_many :articles

  validates :name, presence: true
end
