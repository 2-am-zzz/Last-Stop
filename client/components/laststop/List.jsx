var React = require('react');
var LastStop = require('./LastStop.jsx');

module.exports = React.createClass({
  render: function() {
    var laststop = this.props.data.map(function(laststop) {
      return (
        <LastStop key={laststop.id} content={laststop.content} />
      );
    });

    return (
      <ul className="laststop-list">
        {laststop}
      </ul>
    );
  }
});
