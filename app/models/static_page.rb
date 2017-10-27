class StaticPage < ApplicationRecord
  validates :slug, uniqueness: true
end