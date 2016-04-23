var React = require('react');
var Reqwest = require('reqwest');
var LastStopView = require('../laststop/View.jsx');

module.exports = React.createClass({
  render: function () {
    getDefaultProps: function(){
      return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
    },
    readFromAPI: function(url, successFunction)
    Reqwest({
      url: url,
      type: 'json',
      method: 'get'
      ContentType: 'application/json',
      success: successFunction,
      error: function(error) {
        console.log(url, error['response']);
        location = "/"
      }
    });
  },
  render: function() {
    return (
      <div id="content">
        <LastStopView origin={this.props.origin} readFromAPI={this.readFromAPI} />
      </div>
    )
  }

});
