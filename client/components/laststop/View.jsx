// var React = require('react');
// var ReactDOM = require('react-dom');
// var request = require('superagent');
//
//   module.exports = React.createClass({
//
//     componentWillUnmount: function() {
//       request
//         .get('http://localhost:3000/apis/stops')
//         .set({Accept: 'application/json' })
//         .end(function(err, res) {
//           this.setState({
//             data:[{
//               agency: res.text
//             }]
//           });
//       });
//     },
//     render: function() {
//       return (
//         <div>
//         </div>
//       );
//     }
//   });
//
//   // request
//   //   .get('http://localhost:3000/apis/stops')
//   //   .type( 'json' )
//   //   .end(function(err, res) {
//   //     dataStore.results = JSON.parse(res.text);
//   //     console.log(dataStore.results.toString());
//   // });
