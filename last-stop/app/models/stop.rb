class Stop
  include Mongoid::Document
  field :route_id, type: Integer
  field :trip_id, type: Integer
  field :stop_id, type: Integer
  field :stop_name, type: String
  field :stop_lat, type: Float
  field :stop_lon, type: Float
  field :departure_time, type: String
  field :stop_sequence, type: Integer
  field :direction_id, type: Integer
  field :agency_id, type: String
end
