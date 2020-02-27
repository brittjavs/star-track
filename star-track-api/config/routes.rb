Rails.application.routes.draw do
  resources :constellations, only: [:index]
  resources :observations, only: [:index, :create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
