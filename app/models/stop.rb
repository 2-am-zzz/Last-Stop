class Stop
  include Mongoid::Document

  field :route_id, type: Integer
  field :route_short, type: String
  field :route_long, type: String
  field :trip_id, type: Integer
  field :stop_id, type: Integer
  field :stop_name, type: String
  field :stop_lat, type: Float
  field :stop_lon, type: Float
  field :departure_time, type: String
  field :stop_sequence, type: Integer
  field :direction_id, type: Integer
  field :agency_id, type: String
  field :service_id, type: Integer
  field :loc, type: Array
  index({loc: "2d"})

  def add_loc
    self.update_attributes(loc: [self.stop_lat, self.stop_lon])
  end

  def self.near(location)
    Stop.geo_near(location).max_distance(0.01)
  end

end
