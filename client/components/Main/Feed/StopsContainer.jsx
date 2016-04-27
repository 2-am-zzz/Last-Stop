var React = require("react");
var request = require("superagent");
var Loading = require('../Loading.jsx');
var StopListItem = require('./StopListItem.jsx');

var StopsContainer = React.createClass({
  getInitialState: function() {
    return {
      stops: null
    };
  },


  getInfo: function(that) {
    var position = navigator.geolocation.getCurrentPosition(function(position){
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      fetch("https://last-stop-backup.herokuapp.com/apis/stops?lat="+lat+"&lon="+lon)
        .then(function(res){
          res.json().then(function(data){
            that.setState({stops: data});
          });
        })
      })
    },

  departureTime: function(){
    return this.props.departureTime
  },

  componentDidMount: function () {
    this.getInfo(this);
  },


  render: function() {
    if (this.state.stops != null) {
      var stops = this.state.stops.map(function(stop, index){
        return(
           <li><StopListItem key={index} stop={stop}/></li>
         )
      })
    } else {
      return <div><Loading/></div>
    }
    return(
      <div>
        <ul>
        {stops}
        </ul>
      </div>
    )
  }
});

module.exports = StopsContainer;
