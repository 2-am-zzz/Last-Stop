var React = require('react');
var LastStopList = require('./List.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.setState({data: [{id: 2, content: 'and another fake blab'}, {id: 1, content: 'this is a fake blab'}]});
  },
  render: function() {
    return (
      <div className="laststop-view">
        <LastStopList data={this.state.data} />
      </div>
    );
  }
});
