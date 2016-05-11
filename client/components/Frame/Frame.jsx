'use strict';
var React = require("react");
var Title = require("./Title");

var Frame = React.createClass({
  render: function() {
    return (
      <div className="container col-sm-12 col-md-12 col-lg-12">
        <div className="row">
          <Title />
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
