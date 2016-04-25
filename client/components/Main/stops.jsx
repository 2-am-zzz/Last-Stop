var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var request = require("superagent");

var _stops = [];

var position = navigator.geolocation.getCurrentPosition(function(position){
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
request
  .get('https://last-stop.herokuapp.com/apis/stops')
  .query({lat: lat, lon: lon})
  .end(function(err, res){
  var data = JSON.parse(res.text);
  console.log(data)
    for(var i=0; i < data.length; i++) {
      _stops.push(data[i]);
    }
  });
});

var AppStops = assign(EventEmitter.prototype, {
  getStops: function() {
    return _stops
    console.log(_stops);
  }
});
console.log("hello")
console.log(_stops)
module.exports = AppStops;
