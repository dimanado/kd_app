class ServiceKind < ApplicationRecord
  belongs_to :parent, class_name: 'ServiceKind', optional: true
  has_many :children, class_name: 'ServiceKind', foreign_key: 'parent_id'

  validates :name, :description, :image, presence: true
  validates :name, uniqueness: true

  def root?
    !parent.present?
  end

  def self.root
    self.find_by(parent: nil)
  end

  def has_children?
    children.present?
  end
end
