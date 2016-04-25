var React = require('react');
var _ = require('lodash');
var AgencySelector = require('./AgencySelector.jsx');

var Feed = React.createClass({
  render: function() {
    return (
      <div>
        <AgencySelector />
    </div>
  )}
});

module.exports = Feed;
