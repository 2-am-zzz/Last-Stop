var React = require('react');
var StopsContainer = require("./Feed/StopsContainer.jsx");
var Navbar = require('./Feed/Navbar.jsx');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main">
        <Navbar />
        <StopsContainer />
      </div>
    )
  }
});

module.exports = Main;
