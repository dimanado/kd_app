Rails.application.routes.draw do
  scope :api do
    mount_devise_token_auth_for 'User', at: 'auth'

    resources :profiles, only: [:show, :update] do
      post :create_company
    end

    resources :companies, except: [:edit]

    resources :authors
    resources :lessons
    resources :product_modules
    resources :products
  end
end
