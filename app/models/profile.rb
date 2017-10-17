class Profile < ApplicationRecord
  belongs_to :user

  before_save :default_values

  private

  def default_values
    self.first_name ||= ""
    self.last_name ||= ""
  end
end
