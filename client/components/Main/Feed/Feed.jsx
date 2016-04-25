var React = require("react");
var request = require("superagent");
var AppStops = require("../stops.jsx");

function getStops(){
  return{ stops: AppStops.getStops() };
}

var Stops = React.createClass({
  getInitialState: function() {
    console.log(AppStops.getStops());
    return getStops()
  },

  render:function(){
    console.log(this.state.stops)
    this.state.stops.map(function(stop){
      return (
        <tr>
          <td>{stop.location}</td>
          <td>{stop.departure_time}</td>
          <td>{stop.destination}</td>
          <td>{stop.stop_name}</td>
        </tr>
      );
    });
    return (
      <table className="table table-hover">
        {stops}
      </table>
    );
  }
});

module.exports = Stops
