var React = require("react");
var request = require("superagent");
// var AppStops = require("../stops.jsx");
var Loading = require('../Loading.jsx');

var Stops = React.createClass({
  getInitialState: function() {
    return {
      stops: [],
      loaded: false
    }
  },

  getInfo: function(that) {
    var position = navigator.geolocation.getCurrentPosition(function(position){
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      fetch("https://last-stop-backup.herokuapp.com/apis/stops?lat="+lat+"&lon="+lon)
      // fetch("https://last-stop-backup.herokuapp.com/apis/stops?lat=37.600377&lon=-122.3875")
        .then(function(res){
          res.json().then(function(data){
              that.setState({stops: data, loaded:true});
          })
        });
      });
    },

  componentWillMount: function () {
    this.getInfo(this);
  },

  render:function(){
    if (this.state.loaded !== false ) {
      var feedStyle = {
        textAlign:'right'
      }
      var stops = this.state.stops.map(function(stop){
        return (
          <div className="stop-container col-lg-12 col-md-12 col-sm-12">
            <div className=" transit-agency col-lg-2 col-md-2 col-sm-2">{stop.agency_id}</div>
            <div className=" stop-name col-lg-10 col-md-10 col-sm-10">{stop.stop_name}</div>
            <div>
              <div className="route-destination-block col-lg-4 col-md-4 col-sm-4">
                <span>{stop.route_short_name} </span>
                <span  className="fa fa-arrow-circle-right"> {stop.destination}</span>
              </div>
              <div className="time-block">{stop.departure_time}</div>
            </div>
          </div>
        );
      });
      return (
      <div className="col-lg-8 col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2 col-lg-offset-2">
        {stops}
      </div>
      );
    } else {
      return <div><Loading/></div>
    }
  }
});

module.exports = Stops
