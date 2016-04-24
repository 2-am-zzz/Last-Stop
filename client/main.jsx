require('./assets/app.css');
require('./assets/menu.css');
require('./assets/laststop.css');

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/layout/App.jsx');

ReactDOM.render(<App/>, document.getElementById('app'));
