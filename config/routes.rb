Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resources :websites
    resource :session, only: [:create, :destroy]
    get 'website/top' => 'websites#top', :as => :top_websites

  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
