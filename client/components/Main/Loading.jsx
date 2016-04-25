var React = require('react');

var Loading = React.createClass({
  render: function() {
    return(
      <div className="text-center loading"><img src="../client/assets/images/loading.gif"></img></div>
    );
  }
});

module.exports = Loading;
