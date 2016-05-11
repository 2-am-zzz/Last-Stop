class StopsController < ApplicationController

  def index
    # The core of the API. Takes in two params, lat and lon, and calls the model method.
    @stops = Stop.near([params[:lat].to_f,params[:lon].to_f])
    render json: @stops
  end
end
