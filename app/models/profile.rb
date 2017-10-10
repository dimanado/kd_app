class Profile < ApplicationRecord
  belongs_to :user

  mount_base64_uploader :avatar, AvatarUploader
end