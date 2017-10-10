class CompanyRepresentative < ApplicationRecord
  belongs_to :user
  belongs_to :company
  validates :company, uniqueness: { scope: :user,
    message: "Represntative already exists" }
end
