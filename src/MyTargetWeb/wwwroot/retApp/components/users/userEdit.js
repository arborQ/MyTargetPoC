var React = require('react');
var userDisplay_1 = require('./userDisplay');
var UsersEdit = (function (_super) {
    __extends(UsersEdit, _super);
    function UsersEdit() {
        _super.call(this);
    }
    UsersEdit.prototype.formActions = function () {
        var baseActions = _super.prototype.formActions.call(this);
        baseActions.unshift(React.createElement("button", {"className": "btn btn-success"}, "Save"));
        return baseActions;
    };
    UsersEdit.prototype.renderForm = function () {
        return (React.createElement("form", null, React.createElement("fieldset", {"className": "form-group"}, React.createElement("label", {"htmlFor": "login"}, "Login"), React.createElement("input", {"type": "text", "className": "form-control", "id": "login", "value": this.state.model.Login}))));
    };
    return UsersEdit;
})(userDisplay_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UsersEdit;
