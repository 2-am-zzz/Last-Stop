require('./assets/app.css');
require('./assets/menu.css');
require('./assets/laststop.css');
require('./assets/main.css');
require('./assets/bootstrap-social.css');

var React = window.React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./routes.jsx');

var mountNode = document.getElementById("app");

ReactDOM.render(Routes, mountNode);
