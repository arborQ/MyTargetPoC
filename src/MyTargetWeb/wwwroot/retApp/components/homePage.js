var React = require('react');
var react_router_1 = require('react-router');
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        _super.apply(this, arguments);
    }
    HomePage.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("nav", {"className": "navbar navbar-light bg-faded"}, React.createElement("a", {"className": "navbar-brand", "href": "#"}, "MyTarget"), React.createElement("ul", {"className": "nav navbar-nav"}, React.createElement("li", {"className": "nav-item", "ui-sref-active": "active"}, React.createElement(react_router_1.Link, {"to": "userList", "className": "nav-link"}, "Users")))), React.createElement(react_router_1.RouteHandler, null)));
    };
    return HomePage;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomePage;
