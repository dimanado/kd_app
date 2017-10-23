class AvatarUploader < CarrierWave::Uploader::Base
  storage :file

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def filename
    "avatar#{file.size}.#{file.extension}"
  end

  def default_url(*args)
    "/img/empty-avatar.png"
  end
end
