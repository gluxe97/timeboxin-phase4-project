Rails.application.routes.draw do
  resources :projects, only: [:index, :show, :create, :update, :destroy]
  resources :members, only: [:index, :show, :create, :update, :destroy]
  resources :teams, only: [:index, :show, :create, :update, :destroy]

  get "signup", to: "members#new"
  get "login", to: "sessions#new"
  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"
  resources :members, except:[:new]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
