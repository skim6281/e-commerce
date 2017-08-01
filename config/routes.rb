Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users
    resources :carts do
      resources :cart_items
    end
    resource :session, only: [:create, :destroy, :show]
    resources :products, only: [:index, :create, :show]
  end
end
