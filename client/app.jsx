require('./assets/app.css');
require('./assets/main.css');

var React = window.React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./routes.jsx');

var mountNode = document.getElementById("app");

ReactDOM.render(Routes, mountNode);
