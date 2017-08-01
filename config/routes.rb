Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users do
      resources :carts do
        resources :cart_items
      end
    end
    resource :session, only: [:create, :destroy, :show]
    resources :products, only: [:index, :create, :show]
  end
end
