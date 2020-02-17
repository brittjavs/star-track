Rails.application.routes.draw do
  resources :constellations
  resources :observations
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
