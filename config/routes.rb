Rails.application.routes.draw do
  root 'application#index'
  get '/get_current_user' => 'application#get_current_user'
 
  get '/location_search' => 'application#location_search'
  
  resources :locations, except: [:show, :edit, :new, :update]
  get '/weather_search' => 'locations#weather'

  post '/new_user' => 'users#create'
  
  post '/sessions' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

end