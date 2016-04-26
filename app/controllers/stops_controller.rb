class StopsController < ApplicationController

  def index
    @stops = Stop.near([params[:lat].to_f,params[:lon].to_f])
    # @stops = Stop.near([37.464763, -122.197985])
    render json: @stops
  end

  def letsencrypt
    # use your code here, not mine
    render text: "Uxl2x_f4qyn2JB75Mq4X4FapZ-ko7ya2ZdAuFxp82kU.02kUenbQ-XCk5uAvXAgeYKso_2iocaSC027DGe1VxJo"
  end
end
