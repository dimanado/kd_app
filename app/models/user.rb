class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_one :profile, dependent: :destroy
  has_and_belongs_to_many :companies

  after_create :create_profile

  def create_company_and_profile(params)
    if params[:user][:owner]
      Company.create(title: params[:company][:title])
      prof
    end
  end

  private

  def create_profile
    Profile.create(user_id: id)
  end
end
