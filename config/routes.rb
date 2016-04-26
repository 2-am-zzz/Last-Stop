Rails.application.routes.draw do
  match "*all", to: 'stop#index', via: [:options]
  scope '/apis' do
    resources :stops, except: [:new, :edit]
  end
end
