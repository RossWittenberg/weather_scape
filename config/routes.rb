Rails.application.routes.draw do
  root 'application#index'
  get '/get_current_user' => 'application#get_current_user'
  post '/search' => 'application#search'
  
  resources :locations, except: [:show, :edit, :new, :update]

  post '/new_user' => 'users#create'
  
  post '/sessions' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

end