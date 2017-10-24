class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_one :profile, dependent: :destroy

  has_many :company_representative
  has_many :companies, through: :company_representative

  after_create :create_profile

  private

  def create_profile
    Profile.create(user_id: id)
  end
end
