Rails.application.routes.draw do
  scope :api do
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :profiles, only: [:show, :update]

    resources :companies, expect: [:edit]

    post '/profiles/:id/create_company', to: 'profiles#create_company'

    namespace :user do
      resources :companies, only: [:show, :update]
    end
  end
end
