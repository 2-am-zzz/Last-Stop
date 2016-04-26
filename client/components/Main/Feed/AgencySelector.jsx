'use strict';
var React = require('react');
var _ = require('lodash');

var Agencies = React.createClass({
  AgencyOptions: {
    "AC Transit": {
      "field": "ACT",
      "icon": "fa fa-bus"
    },
    "Bart": {
      "field": "Bart",
      "icon": "fa fa-subway"
    },
    "Muni": {
      "field": "Muni",
      "icon": "fa fa-bus"
    },
    "Cal Train": {
      "field": "CAT",
      "icon": "fa fa-train"
    }
  },

  render: function() {
    return (
      <div className="row order-selector">
        {_.map(this.AgencyOptions, function(val, key) {
          return <div className="order-option col-lg-3 col-md-3 col-xs-3 clickable" key={val.field}><i className={val.icon}></i> {key}</div>
        }.bind(this))}
      </div>
    );
  }
});

module.exports = Agencies;
