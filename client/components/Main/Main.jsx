var React = require('react');
var StopsContainer = require("./Feed/StopsContainer.jsx");
var Navbar = require('./Feed/Navbar.jsx');

var Main = React.createClass({
  agencyFilter: function() {
    this.refs.stop.updateStops(this.refs.agency.state.agency_id);
  },
  render: function() {
    return (
      <div className="main">
        <Navbar agencyFilter={this.agencyFilter.bind(this)} ref="agency" />
        <StopsContainer ref="stop" />
      </div>
    )
  }
});

module.exports = Main;
