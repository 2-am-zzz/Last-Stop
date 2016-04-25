// var EventEmitter = require('events').EventEmitter;
// var assign = require('object-assign');
// var request = require("superagent");
//
// var transitStop = [];
//
// var position = navigator.geolocation.getCurrentPosition(function(position){
//   var lat = position.coords.latitude;
//   var lon = position.coords.longitude;
//   $.ajax({
//     url: "https://last-stop-backup.herokuapp.com/apis/stops?lat="+lat+"&lon="+lon,
//     type: "GET",
//     async: false,
//     success: function(res){
//       for(var i = 0; i < res.length; i++ ) {
//         transitStop.push(res[i]);
//       };
//     }
//   });
// });
//
// console.log(transitStop);
//
// var AppStops = assign(EventEmitter.prototype, {
//   getStops: function() {
//     if (transitStop > 0) {
//       return transitStop;
//     }
//   }
// });
// module.exports = AppStops;
