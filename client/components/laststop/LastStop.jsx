var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li className="laststop">
        <span className="laststop-text">{this.props.content}</span>
      </li>
    );
  }
});
