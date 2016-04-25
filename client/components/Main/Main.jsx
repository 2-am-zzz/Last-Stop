var React = require('react');
var Feed = require("./Feed/Feed.jsx");
var AgencySelector = require('./Feed/AgencySelector.jsx');
var Stops = require('./Feed/Feed.jsx');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main">
        <AgencySelector />
        <Stops />
      </div>
    )
  }
});

module.exports = Main;
