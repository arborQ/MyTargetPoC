var React = require('react');
var material_ui_1 = require('material-ui');
var react_router_1 = require('react-router');
var jquery_1 = require('jquery');
var productDetails = (function (_super) {
    __extends(productDetails, _super);
    function productDetails() {
        _super.apply(this, arguments);
    }
    productDetails.prototype.save = function () {
        jquery_1.post('/api/products', this.state)
            .then(function () { })
            .fail(function () { return alert('fail'); });
    };
    productDetails.prototype.render = function () {
        var size = 3;
        return (React.createElement(material_ui_1.Dialog, {"open": true, "title": "Dodaj nowy produkt"}, React.createElement(material_ui_1.Card, null, React.createElement(material_ui_1.CardText, null, React.createElement(material_ui_1.TextField, {"hintText": "Kod produktu", "fullWidth": true}), React.createElement(material_ui_1.TextField, {"hintText": "Nazwa produktu", "fullWidth": true}), React.createElement(material_ui_1.SelectField, {"menuItems": [{ id: 1, name: 'S' }, { id: 2, name: 'M' }, { id: 3, name: 'L' }], "value": size, "valueMember": "id", "displayMember": "name", "fullWidth": true}), React.createElement(material_ui_1.TextField, {"hintText": "Cena", "fullWidth": true, "type": "number"})), React.createElement(material_ui_1.CardActions, null, React.createElement(material_ui_1.RaisedButton, {"label": "Zapisz", "secondary": true, "onClick": this.save.bind(this)}), React.createElement(react_router_1.Link, {"to": "/products"}, React.createElement(material_ui_1.RaisedButton, {"label": "Anuluj"}))))));
    };
    return productDetails;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productDetails;
