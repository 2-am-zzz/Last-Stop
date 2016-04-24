require('./assets/app.css');
require('./assets/menu.css');
require('./assets/laststop.css');

var React = require('react');
var App = require('./components/layout/App.jsx');

React.render(<App />, document.getElementById('app'));
