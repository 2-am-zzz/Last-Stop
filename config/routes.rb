Rails.application.routes.draw do
  match "*all", to: 'stop#index', via: [:options]
  # We nest our single api within this namespace.
  scope '/apis' do
    resources :stops, except: [:new, :edit]
  end
end
