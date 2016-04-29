class StopsController < ApplicationController

  def index
    @stops = Stop.near([params[:lat].to_f,params[:lon].to_f])
    # @stops = Stop.near([37.48542, -122.23191])
    render json: @stops
  end
end
