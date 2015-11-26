var React = require('react');
var react_router_1 = require('react-router');
var userDisplay_1 = require('./components/users/controllers/userDisplay');
var userList_1 = require('./components/users/controllers/userList');
var homePage_1 = require('./components/homePage');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (React.createElement(react_router_1.Route, {"name": "app", "path": "/", "handler": homePage_1.default}, React.createElement(react_router_1.Route, {"name": "userList", "path": "/users", "handler": userList_1.default}), React.createElement(react_router_1.Route, {"name": "userDisplay", "path": "/users/display/:id", "handler": userDisplay_1.default})));
