Devise.setup do |config|
  config.jwt do |jwt|
    jwt.secret = Rails.application.secrets.devise_jwt_secret_key
  end

  config.warden do |manager|
    manager.failure_app = CustomAuthFailure
  end

  config.navigational_formats = [:json]

  config.mailer_sender = 'please-change-me-at-config-initializers-devise@example.com'

  require 'devise/orm/active_record'

  config.case_insensitive_keys = [:email]

  config.strip_whitespace_keys = [:email]

  config.skip_session_storage = [:http_auth]

  config.stretches = Rails.env.test? ? 1 : 11

  config.reconfirmable = true

  config.expire_all_remember_me_on_sign_out = true

  config.password_length = 6..128

  config.email_regexp = /\A[^@\s]+@[^@\s]+\z/

  config.reset_password_within = 6.hours

  config.sign_out_via = :delete
end
