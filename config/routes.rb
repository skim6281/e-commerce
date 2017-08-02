Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users
    resources :products, only: [:index, :create, :show]
    resources :carts do
      resources :cart_items
    end
    resources :orders, only: [:create]
  end
end
