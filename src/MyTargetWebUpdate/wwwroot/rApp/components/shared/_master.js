var React = require('react');
var material_ui_1 = require('material-ui');
var react_router_1 = require('react-router');
var reactApplication = (function (_super) {
    __extends(reactApplication, _super);
    function reactApplication() {
        _super.apply(this, arguments);
        this.style = { zIndex: 10, width: '100%', height: '56px', backgroundColor: '#f7f7f9', position: 'fixed', top: 0, fontSize: '1.25rem' };
    }
    reactApplication.prototype.render = function () {
        return (React.createElement("div", null, React.createElement(material_ui_1.Paper, {"style": this.style}, React.createElement(react_router_1.Link, {"to": "/"}, React.createElement(material_ui_1.Avatar, {"src": "/images/logo_54.png"}), React.createElement("span", null, "Just Move")), React.createElement(react_router_1.Link, {"to": "/products"}, "Produkty")), React.createElement("div", null, this.props.children)));
    };
    return reactApplication;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reactApplication;
