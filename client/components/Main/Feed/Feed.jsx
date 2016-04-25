var React = require("react");
var request = require("superagent");
// var AppStops = require("../stops.jsx");
var Loading = require('../Loading.jsx');

var Stops = React.createClass({
  getInitialState: function() {
    return {
      stops: [

      ],
      loaded: false
    }
  },

  getInfo: function(that) {
    var position = navigator.geolocation.getCurrentPosition(function(position){
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      // fetch("https://last-stop-backup.herokuapp.com/apis/stops?lat="+lat+"&lon="+lon)
      fetch("https://last-stop-backup.herokuapp.com/apis/stops?lat=37.600377&lon=-122.3875")
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
          <div className="stopContainer">
            <div>{stop.agency_id}</div>
            <div>{stop.stop_name}</div>
            <span>{stop.route_short_name} {stop.destination}</span>
            {/*<div>{stop.destination}</div>*/}
            <div>{stop.departure_time}</div>
          </div>
        );
      });
      return (
      <div>
        {stops}
      </div>
      );
    } else {
      return <div><Loading/></div>
    }
  }
});

module.exports = Stops
