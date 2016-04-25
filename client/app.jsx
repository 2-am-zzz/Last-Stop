require('./assets/app.css');
require('./assets/menu.css');
require('./assets/laststop.css');
require('./assets/main.css');
require('./assets/bootstrap-social.css');

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/layout/App.jsx');
var Main = require('./components/Main/Main.jsx');

ReactDOM.render(<App/>, document.getElementById('app'));
ReactDOM.render(<Main/>, document.getElementById('transitSelector'));
