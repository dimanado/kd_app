Rails.application.routes.draw do
  scope :api do
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :profiles, only: [:show, :update]
    resources :static_pages, only: [:index, :show, :create, :update]
  end
end
