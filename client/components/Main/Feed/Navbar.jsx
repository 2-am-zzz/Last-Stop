'use strict';
var React = require('react');
var _ = require('lodash');

var Agencies = React.createClass({
  getInitialState: function() {
    return {
      agency_id: 0
    };
  },

  triggering: function(event) {
    var current_agency_id = event.target.id
    if (current_agency_id == this.state.agency_id) {
      this.setState({agency_id: 0},this.props.agencyFilter);
    } else {
      this.setState({agency_id: current_agency_id},this.props.agencyFilter);
    }
  },

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
    var counter = 0;
    return (
      <div className="row order-selector">
        {_.map(this.AgencyOptions, function(val, key) {
          counter++;
          return <div id={counter} className="order-option col-lg-3 col-md-3 col-xs-3 clickable" onClick={this.triggering} key={val.field}><i className={val.icon}></i> {key}</div>
        }.bind(this))}
      </div>
    );
  }
});

module.exports = Agencies;
