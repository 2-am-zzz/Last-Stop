var React = require('react');
var LastStopList = require('./List.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.readLastStopFromAPI();
  },
  readLastStopFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/apis', function(laststop) {
      this.setState({data: laststop});
    }.bind(this));
  },
  render: function() {
    return (
      <div className="laststop-view">
        <LastStopList data={this.state.data} />
      </div>
    );
  }
});
