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
  # Important for the location to work.
  index({loc: "2d"})

  def add_loc
    self.update_attributes(loc: [self.stop_lat, self.stop_lon])
  end

  # The main method to determine closest stops.
  def self.near(location)

    # Determine the current time.
    day = Time.now.wday
    current_hr = Time.now.hour

    # If the day is Sunday...
    if day == 0
      # If there is spillover, use the previous timetable for Saturday.
      # This is due to timetables not conforming to a 24 hour cycle that is aligned with the days.
      if (0..3).include?(current_hr)
        service_id = 2
      # Else use the current timetable for Sunday.
      else
        service_id = 3
      end
    elsif day == 6
      if (0..3).include?(current_hr)
        service_id = 1
      else
      service_id = 2
      end
    else
      if (0..3).include?(current_hr)
        service_id = 3
      else
        service_id = 1
      end
    end

    # A basic mongoid query meant to get the correct timetables for today.
    # stops = Stop.where(service_id: service_id)
    # Returns stops nearby.
    # s = stops.geo_near(location).max_distance(0.015).to_a
    # s = stops.geo_near([37.784658, -122.397335]).max_distance(0.015).to_a
    s = Stop.where(:loc => { "$within" => { "$center" => [location, 0.015 ]}}, :service_id => service_id)
  end

end
