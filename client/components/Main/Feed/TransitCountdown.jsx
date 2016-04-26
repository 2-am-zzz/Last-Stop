// var React = require('react');
// var AgencySelector = require('./AgencySelector.jsx');
//
// var Countdown = React.createClass({
//     componentWillMount: function() {
//       this.setState({
//         targetDate: Date.parse(this.props.departure_time)
//       });
//       var dateNow = setInterval(this.tick, 1000);
//       var intiTimer = setTimeout(this.tick, 0);
//     },
//
//     tick: function() {
//       var timeRemaining = this.state.targetDate - Date.now();
//       var hours = Math.floor(timeRemaining / 3600000);
//       timeRemaining -= (hours * 3600000);
//       var minutes = Math.floor(timeRemaining / 60000);
//       timeRemaining -= (minutes * 60000);
//       this.setState({
//         days: days,
//         hours: hours,
//         minutes: minutes
//       });
//     },
//
//     render: function() {
//       var timerStyle = {
//         background: 'transparent',
//         fontSize: '5',
//         textAlign: 'right',
//         fontSize: '5'
//       }
//       return (
//         <div style={timerStyle} class='container-fluid'>
//         </div>
//       );
//     }
// });
