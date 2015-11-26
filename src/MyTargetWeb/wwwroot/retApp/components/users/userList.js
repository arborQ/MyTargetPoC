var React = require('react');
var react_router_1 = require('react-router');
var jquery_1 = require('jquery');
var UsersList = (function (_super) {
    __extends(UsersList, _super);
    function UsersList() {
        _super.call(this);
        this.state = { model: [] };
    }
    UsersList.prototype.select = function (user) {
        var stateModel = this.state.model;
        stateModel.forEach(function (item) {
            if (item !== user) {
                item.$selected = false;
            }
            else {
                item.$selected = !item.$selected;
            }
        });
        this.setState({ model: stateModel });
    };
    ;
    Object.defineProperty(UsersList.prototype, "selectedUser", {
        get: function () { return this.state.model.filter(function (u) { return u.$selected; })[0]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersList.prototype, "isSelected", {
        get: function () { return !!this.selectedUser; },
        enumerable: true,
        configurable: true
    });
    UsersList.prototype.componentDidMount = function () {
        var _this = this;
        jquery_1.get("/api/users", function (users) {
            _this.setState({ model: users });
        });
    };
    UsersList.prototype.render = function () {
        var _this = this;
        var rows = this.state.model
            .map(function (user) { return (React.createElement("tr", {"onClick": _this.select.bind(_this, user), "className": user.$selected ? "table-active" : "", "key": user.Id}, React.createElement("td", null, user.Login), React.createElement("td", null, user.IsActive ? "True" : "False"))); });
        var actions = this.isSelected ? [
            (React.createElement(react_router_1.Link, {"to": "userDisplay", "params": { id: this.selectedUser.Id }, "className": "btn btn-success", "disabled": !this.isSelected}, "Display")),
            (React.createElement(react_router_1.Link, {"to": "userEdit", "params": { id: this.selectedUser.Id }, "className": "btn btn-default", "disabled": !this.isSelected}, "Edit"))
        ] : [
            (React.createElement("button", {"className": "btn btn-success", "disabled": true}, "Display")),
            (React.createElement("button", {"className": "btn btn-default", "disabled": true}, "Edit"))
        ];
        return (React.createElement("div", {"className": "card", "style": { 'maxWidth': ' 800px', 'margin': '0 auto', 'marginTop': '10px' }}, React.createElement("div", {"className": "card-block btn-group"}, actions), React.createElement("div", {"className": "card-block", "ui-view": true}), React.createElement("div", {"className": "card-block"}, React.createElement("table", {"className": "table table-hover"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Name"), React.createElement("th", null, "Is Active"))), React.createElement("tbody", null, rows)))));
    };
    return UsersList;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UsersList;
