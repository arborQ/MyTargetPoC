"use strict";
var React = require('react');
var material_ui_1 = require('material-ui');
var material_ui_2 = require('material-ui');
var productForm = (function (_super) {
    __extends(productForm, _super);
    function productForm() {
        _super.apply(this, arguments);
    }
    productForm.prototype.updateState = function (name, value) {
        var oldState = this.state.details;
        oldState[name] = value;
        this.setState({ details: oldState });
    };
    productForm.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        this.setState({ details: nextProps.details });
    };
    productForm.prototype.render = function () {
        var _this = this;
        if (!this.props.details) {
            return null;
        }
        var dataSource = ['S', 'M', 'L'];
        var codeValidationMessage = this.state.details.Name.length === 0 ? "Nazwa jest wymagana" : null;
        return (React.createElement("div", null, React.createElement(material_ui_2.Tabs, null, React.createElement(material_ui_2.Tab, {label: "Wymagane"}, React.createElement(material_ui_1.TextField, {key: "code", floatingLabelText: "Kod", fullWidth: true, value: this.state.details.Code, onChange: function (event) { _this.updateState("Code", event.target["value"]); }}), React.createElement(material_ui_1.TextField, {key: "name", floatingLabelText: "Nazwa", errorText: codeValidationMessage, fullWidth: true, value: this.state.details.Name, onChange: function (event) { _this.updateState("Name", event.target["value"]); }}), React.createElement(material_ui_1.TextField, {key: "price", floatingLabelText: "Cena", fullWidth: true, value: this.state.details.NetPrice, onChange: function (event) { _this.updateState("NetPrice", event.target["value"]); }}), React.createElement(material_ui_1.TextField, {key: "supplier", floatingLabelText: "Dostawca", fullWidth: true, value: this.state.details.Supplier, onChange: function (event) { _this.updateState("Supplier", event.target["value"]); }}), React.createElement(material_ui_1.TextField, {key: "local", floatingLabelText: "Lokalizacja", fullWidth: true, value: this.state.details.Location, onChange: function (event) { _this.updateState("Location", event.target["value"]); }})), React.createElement(material_ui_2.Tab, {label: "Nie wymagane"}, React.createElement(material_ui_1.TextField, {key: "name", floatingLabelText: "Nazwa", errorText: codeValidationMessage, fullWidth: true, value: this.state.details.Name, onChange: function (event) { _this.updateState("Name", event.target["value"]); }})))));
    };
    return productForm;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productForm;
