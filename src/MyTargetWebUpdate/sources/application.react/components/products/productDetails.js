"use strict";
var React = require('react');
var jquery_1 = require('jquery');
var material_ui_1 = require('material-ui');
var productForm_1 = require('./productForm');
var productDetails = (function (_super) {
    __extends(productDetails, _super);
    function productDetails() {
        _super.call(this);
        this.state = { details: null };
    }
    productDetails.prototype.componentDidMount = function () {
        var _this = this;
        jquery_1.get("/api/products", { id: this.props.params.id }, function (data) {
            _this.setState({ details: data });
        });
    };
    productDetails.prototype.render = function () {
        var buttons = [
            React.createElement(material_ui_1.RaisedButton, {label: "Zapisz", key: "save", secondary: false}),
            React.createElement(material_ui_1.RaisedButton, {label: "Anuluj", key: "cancel", secondary: true})
        ];
        return (React.createElement(material_ui_1.Dialog, {contentStyle: { maxWidth: '400px' }, title: "Edytuj produkt", autoScrollBodyContent: true, modal: true, open: true, actions: buttons}, React.createElement(productForm_1.default, {details: this.state.details})));
    };
    return productDetails;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productDetails;
