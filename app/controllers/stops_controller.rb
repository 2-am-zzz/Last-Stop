class StopsController < ApplicationController
  def index
    #@stops = Stop.near(params[:location])

    p "* " * 90
    @stops = Stop.near([37.464763, -122.197985])
    p @stops
    p "* " * 90
    render json: @stops
  end

end



