// var React = require('react');
// var _ = require('lodash');
// var request = require('superagent');
// var Loading = require('../Loading.jsx');
//
// var Info = createClass({
//     getInitialState: function() {
//       return {
//
//       }
//     }
// });


// var React = require('react');
// var _ = require('lodash');
// var request = require('superagent');
// var Countdown = require('./TransitCountdown.jsx');
// var Loading = require('../Loading.jsx')
//
// var Agencies = React.createClass({
//
//   getInitialState: function() {
//     return {
//       agency: [],
//     }
//   },
//
//   closestStops: function(saveThis){
//     var position = navigator.geolocation.getCurrentPosition(function(position){
//       var lat = position.coords.latitude
//       var lon = position.coords.longitude
//     request
//       .get('https://last-stop.herokuapp.com/apis/stops')
//       .query({lat: lat, lon: lon})
//       .end(function(err, res){
//         var data = JSON.parse(res.text)
//         saveThis.setState({
//           agency: data,
//         })
//       })
//     })
//   },
//
//   componentDidMount: function(){
//     this.closestStops(this);
//   },
//
//   render: function() {
//     return(
//       <div className="row order-selector">
//       <Loading />
//         {
//           _.map(this.state.agency, function(key, val) {
//             return (
//              <div className="order-option col-lg-3 col-md-3 col-xs-4 clickable" key={key.agency_id}>
//               {key.agency_id}
//              </div>
//            )
//           })
//         }
//       </div>
//     )
//   }
// });
//
// module.exports = Agencies;
