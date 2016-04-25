var React = require('react');
var Feed = require("./Feed/Feed");

var Main = React.createClass({

  render: function() {
    return (
      <div className="main">
        <Feed />
      </div>
    );
  }
});

module.exports = Main;
