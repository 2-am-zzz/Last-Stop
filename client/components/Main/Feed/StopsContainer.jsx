var React = require("react");
var request = require("superagent");
var _ = require("lodash");
var Loading = require('../Loading.jsx');
var StopListItem = require('./StopListItem.jsx');

var StopsContainer = React.createClass({
  getInitialState: function() {
    return {
      stops: null,
      allStops: null,
      agencies: null
    };
  },

  updateStops: function(agency) {
    if (agency == 0) {
      this.setState({stops: this.state.allStops});
    } else if (agency == 1) {
      this.setState({stops: this.state.allStops.filter(function(stop) {
        return stop.agency_id == "AC TRANSIT"
      })})
    } else if (agency == 2) {
      this.setState({stops: this.state.allStops.filter(function(stop) {
        return stop.agency_id == "BART"
      })})
    } else if (agency == 3) {
      this.setState({stops: this.state.allStops.filter(function(stop) {
        return stop.agency_id == "SFMTA"
      })})
    } else if (agency == 4) {
      this.setState({stops: this.state.allStops.filter(function(stop) {
        return stop.agency_id == "CT"
      })})
    }
  },

  getInfo: function() {
    var position = navigator.geolocation.getCurrentPosition(function(position){
      window.lat = position.coords.latitude;
      window.lon = position.coords.longitude;
      fetch("https://last-stop-backup.herokuapp.com/apis/stops?lat="+window.lat+"&lon="+window.lon)
        .then(function(res){return res.json()}.bind(this))
          .then(function(data){
            var agencyList = this.sortData(data);
            this.setState({stops: data, allStops: data, agencies: agencyList});
          }.bind(this));
    }.bind(this))
  },

  componentDidMount: function () {
    this.getInfo()

  },
  sortData: function(data) {
    var agencyList = {};
    data.sort(function(a, b){
      if (a.stop_name < b.stop_name){
        return 1;
      } else if (a.stop_name > b.stop_name){
        return -1;
      }
      return 0;
    })
    for (var stop in data) {
      if (agencyList.hasOwnProperty(data[stop].stop_name)) {
        agencyList[data[stop].stop_name] += 1;
      } else {
        agencyList[data[stop].stop_name] = 1;
      }
    }
    return agencyList;
  },

  destinationViewer: function(key, counter){
    var destArr = [];
    var timerArr = [];
    for (var i=1;i<=this.state.agencies[key];i++){
      var rtDestBlock = React.createElement(
        "div",
        {className: "route-destination-block col-sm-4 col-md-4 col-lg-4"},
        React.createElement(
          "div",
          {className: "route-short col-sm-12 col-md-12 col-lg-12"},
          this.state.stops[counter].route_short_name
        ),
        React.createElement(
          "div",
          {className: "fa fa-arrow-circle-right stop-dest col-sm-12 col-md-12 col-lg-12"},
          this.state.stops[counter].destination
        )
      );
      var timer = <StopListItem key={counter} stop={this.state.stops[counter]} />

      destArr.push(rtDestBlock, timer)
      counter++;
      // var dateTime = formatTime(dataClone[counter]);
      // var time = timerSwap(dateTime[0], dateTime[1]);
      // timerArr.push(time);
    }
    return (
      <div className="info-block col-sm-12 col-md-12 col-lg-12">
        {destArr}
      </div>
    );
  },

  render: function() {
    var counter = 0;
    console.log("hello")
    console.log(window.lat, window.lon)
    var latlon = window.lat + "," + window.lon
    if (this.state.stops !== null && this.state.stops.length != 0) {
      var stops = Object.keys(this.state.agencies).map(function(stop){
      var stopLink = "http://www.google.com/maps/dir/" + latlon + "/" + stop + "/data=!4m2!4m1!3e2"
        return (
          <div className="stop-container col-sm-12 col-md-12 col-lg-12">
            <div className="header-block col-sm-12 col-md-12 col-lg-12">
              <div className="transit-agency col-sm-4 col-md-4 col-lg-4">{this.state.stops[counter].agency_id}</div>
              <div className="stop-name col-sm-8 col-md-8 col-lg-8"><a href={stopLink}>{stop}</a></div>
            </div>
            {this.destinationViewer(stop, counter)}
          </div>
        );
      }.bind(this))
    } else if (this.state.stops != null && this.state.stops.length == 0) {
      return (
        <div className="stop-container col-sm-12 col-md-12 col-lg-12">
          <div className="header-block col-sm-12 col-md-12 col-lg-12">
            <div className="stop-name col-sm-8 col-md-8 col-lg-8">No Closeby Stops</div>
          </div>
        </div>
        );
    } else {
      return <div><Loading/></div>
    }

    return(
      <div className="col-sm-12 col-md-10 col-lg-8 col-md-offset-1 col-lg-offset-2">
        {stops}
      </div>
    )
  }
});

module.exports = StopsContainer;
