Rails.application.routes.draw do
  root "home#home"

  scope :api do
    get "/resources", to: "resources#index"
    get "/resources/:id", to: "resources#show"
    post "/resources", to: 'resources#create'
  end
end
