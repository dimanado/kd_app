class Article < ApplicationRecord
  belongs_to :edition
  has_and_belongs_to_many :authors

  validates :name, presence: true
end
