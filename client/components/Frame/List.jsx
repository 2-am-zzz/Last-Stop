// var React = require('react');
// var ReactDOM = require('react-dom');
// var request = require('superagent');
//
//   var List = React.createClass({
//     getInitialState: function() {
//       return {
//         stop: []
//       };
//     },
//     componentWillMount: function() {
//       request
//         .get('https://last-stop.herokuapp.com/apis/stops')
//         .end(function(err, res) {
//           var data = JSON.parse(res.text)
//           this.setState({
//
//           });
//       }.bind(this));
//     },
//     render: function() {
//       return (
//         <div>
//           {this.state.agency}
//           <ul>
//             <li>{this.state.departure_time}</li>
//             <li>{this.state.direction_id}</li>
//             <li>{this.state.stop_lat}</li>
//             <li>{this.state.stop_lon}</li>
//             <li>{this.state.stop_name}</li>
//           </ul>
//         </div>
//       );
//     }
//   });
//
// module.exports = List;
