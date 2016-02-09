"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require('react-tap-event-plugin');
var navigation_1 = require('./components/master/navigation');
var routing_1 = require('./components/master/routing');
injectTapEventPlugin();
ReactDOM.render((React.createElement("div", null, React.createElement(navigation_1.default, null), React.createElement("div", {style: { maxWidth: '800px', margin: '10px auto 0' }}, React.createElement(routing_1.default, null)))), document.getElementById('react-app'));
