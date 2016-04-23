Rails.application.routes.draw do
  scope '/apis' do
    resources :stops, except: [:new, :edit]
  end
end
