var React = require('react');
var ReactDOM = require('react-dom');
var request = require('superagent');

  var List = React.createClass({
    getInitialState: function() {
      return {
        agency: "",
        departure_time: "",
        direction_id: "",
        stop_lat: "",
        stop_lon: "",
        stop_name:"",
      };
    },
    componentWillMount: function() {
      request
        .get('http://last-stop.herokuapp.com/apis/stops')
        .end(function(err, res) {
          var data = JSON.parse(res.text)
          this.setState({
            agency: data.agency_id,
            departure_time: data.departure_time,
            direction_id: data.direction_id,
            stop_lat: data.stop_lat,
            stop_lon: data.stop_lon,
            stop_name:data.stop_name,
          });
      }.bind(this));
    },
    render: function() {
      return (
        <div>
          {this.state.agency}
          <ul>
            <li>{this.state.departure_time}</li>
            <li>{this.state.direction_id}</li>
            <li>{this.state.stop_lat}</li>
            <li>{this.state.stop_lon}</li>
            <li>{this.state.stop_name}</li>
          </ul>
        </div>
      );
    }
  });

module.exports = List;
