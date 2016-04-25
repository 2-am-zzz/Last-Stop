'use strict';

var _ = require('lodash'),
    Poll = require('./Poll'),
    Loading = require('../Loading'),
    OrderSelector = require('./OrderSelector');

var Feed = React.createClass({
  getInitialState: function() {
    return {
    };
  },

  changeOrderBy: function(filter) {
    this.setState({

    });
  },

  render: function() {
    return (
      <div>
        <OrderSelector />
    </div>;
  )}
});

module.exports = Feed;
