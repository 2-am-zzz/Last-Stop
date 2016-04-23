class StopsController < ApplicationController
  def index
    @stops = Stop.all
    render json: @stops
  end

end



