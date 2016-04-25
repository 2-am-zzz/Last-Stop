'use strict';
var React = require("react");
var Navbar = require("./Navbar");

var Frame = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <div className="content col-lg-10 col-lg-offset-1">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  },
});

module.exports = Frame;
