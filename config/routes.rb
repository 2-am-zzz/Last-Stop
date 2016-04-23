Rails.application.routes.draw do
  match "*all", to: 'application#preflight', via: [:options]
  scope '/apis' do
    resources :stops, except: [:new, :edit]
  end
end
