'use strict';
var React = require("react");
var Navbar = require("./Navbar");

var Frame = React.createClass({
  render: function() {
    return (
      <div className="container col-sm-12 col-md-12 col-lg-12">
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <div className="content col-sm-12 col-md-12 col-lg-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  },
});

module.exports = Frame;
