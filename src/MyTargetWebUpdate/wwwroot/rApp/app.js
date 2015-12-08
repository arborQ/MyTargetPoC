var React = require('react');
var react_dom_1 = require('react-dom');
var react_router_1 = require('react-router');
var _master_1 = require('./components/shared/_master');
var productList_1 = require('./components/products/productList');
react_dom_1.render((React.createElement(react_router_1.Router, null, React.createElement(react_router_1.Route, {"path": "/", "component": _master_1.default}, React.createElement(react_router_1.Route, {"path": "products", "component": productList_1.default})))), document.getElementById('app'));
