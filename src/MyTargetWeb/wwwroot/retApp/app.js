var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router');
var app_routes_1 = require('./app.routes');
Router.run(app_routes_1.default, function (Handler) {
    ReactDom.render(React.createElement(Handler, null), document.getElementById('arbor-app'));
});
