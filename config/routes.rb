Rails.application.routes.draw do
  devise_for :users, path: :auth

  resources :profiles, only: [:show, :update]
end
