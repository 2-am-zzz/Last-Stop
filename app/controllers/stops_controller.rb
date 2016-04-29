class StopsController < ApplicationController

  def index
    @stops = Stop.near([params[:lat].to_f,params[:lon].to_f])
    render json: @stops
  end
end
