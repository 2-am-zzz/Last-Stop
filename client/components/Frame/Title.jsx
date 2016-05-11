var React = require('react');

var Title = React.createClass({
  render: function() {
    return (
      <div className="nav">
        <a href="#/main">
          <i className="nav-icon fa fa-bus pull-left"></i>
        </a>
        <a href="#/main">
          <span>Last Stop</span>
        </a>
      </div>

    );
  }
});

module.exports = Title;
