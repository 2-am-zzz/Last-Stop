class StopsController < ApplicationController
  
  def index
    #@stops = Stop.near(params[:location])
    @stops = Stop.near([37.464763, -122.197985])
    render json: @stops
  end

end
