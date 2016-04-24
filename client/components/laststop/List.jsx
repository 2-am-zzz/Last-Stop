var React = require('react');
var request = require('superagent');

  var List = React.createClass({
    getInitialState: function() {
      return {
        // data: ({
        //
        // })
      };
    },
    componentWillMount: function() {
      request
        .get('https://last-stop.herokuapp.com/apis/stops')
        .end(function(err, res) {
          var data = JSON.parse(res.text);
      });
    },
  });

  var Agency = React.createClass({
    render: function(){
      debugger;
    }
  });
  //  render: function() {
  //     return (
  //       <div>
  //         {this.state.agency}
  //         <ul>
  //           <li>{this.state.departure_time}</li>
  //           <li>{this.state.direction_id}</li>
  //           <li>{this.state.stop_lat}</li>
  //           <li>{this.state.stop_lon}</li>
  //           <li>{this.state.stop_name}</li>
  //         </ul>
  //       </div>
  //     );
  //   };

module.exports = List;
