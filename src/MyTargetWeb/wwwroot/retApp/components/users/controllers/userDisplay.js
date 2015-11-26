var React = require('react');
var react_router_1 = require('react-router');
var jquery_1 = require('jquery');
var UsersDisplay = (function (_super) {
    __extends(UsersDisplay, _super);
    function UsersDisplay() {
        _super.call(this);
        this.state = { model: null };
    }
    UsersDisplay.prototype.componentDidMount = function () {
        var _this = this;
        jquery_1.get("/api/users/" + this.props.params.id, function (user) {
            _this.setState({ model: user });
        });
    };
    UsersDisplay.prototype.render = function () {
        if (!this.state.model) {
            return React.createElement("div", null, "Loading user data...");
        }
        return (React.createElement("div", {"className": "card"}, React.createElement("div", {"className": "card-block"}, React.createElement("h3", {"className": "card-title"}, "User '", this.state.model.Login, "' data"), React.createElement("div", {"className": "card-text"}, React.createElement("label", null, "Login: ", this.state.model.Login)), React.createElement("div", {"className": "card-block"}, React.createElement(react_router_1.Link, {"to": "userList", "className": "btn btn-default"}, "Return")))));
    };
    return UsersDisplay;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UsersDisplay;
