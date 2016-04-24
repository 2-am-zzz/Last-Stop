class StopsController < ApplicationController

  def index
    p "*"*50
    p params[:lat]
    p params[:lon]
    @stops = Stop.near([params[:lat],params[:lon]])
    # @stops = Stop.near([37.464763, -122.197985])
    render json: @stops
  end

end
