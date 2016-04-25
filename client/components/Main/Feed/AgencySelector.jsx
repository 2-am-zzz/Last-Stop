var React = require('react');
var _ = require('lodash');

var Agencies = React.createClass({
  AgencyOptions: {
    "CalTrain": {
      "field": "created_at",
      "icon": "fa fa-train"
    },
    "Bart": {
      "field": "votes",
      "icon": "fa fa-subway"
    },
    "Muni": {
      "field": "freshness",
      "icon": "fa fa-bus"
    }
  },

  render: function() {
    return (
      <div className="row order-selector">
        {
          _.map(this.AgencyOptions, function(val, key) {
          return(
             <div className="order-option col-lg-4 col-md-4 col-xs-4 clickable" key={val.field}><i className={val.icon}></i> {key}</div>
           )
        }.bind(this))
      }
      </div>
    );
  }
});

module.exports = Agencies;
