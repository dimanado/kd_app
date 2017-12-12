Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope :api do
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :profiles, only: [:show, :update]

    resources :companies, expect: [:edit]

    post '/profiles/:id/create_company', to: 'profiles#create_company'
  end
end
