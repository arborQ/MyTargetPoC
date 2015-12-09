var React = require('react');
var material_ui_1 = require('material-ui');
var productSearchView = (function (_super) {
    __extends(productSearchView, _super);
    function productSearchView() {
        _super.apply(this, arguments);
    }
    productSearchView.prototype.onSearchChange = function (event) {
        this.props.onChange(event.target.value);
    };
    productSearchView.prototype.render = function () {
        return (React.createElement(material_ui_1.Card, {"style": { maxWidth: '800px', margin: '0 auto', marginTop: '20px' }}, React.createElement(material_ui_1.CardText, null, React.createElement(material_ui_1.TextField, {"hintText": "Szukaj...", "fullWidth": true, "value": this.props.search, "onChange": this.onSearchChange.bind(this)})), React.createElement(material_ui_1.CardActions, null, React.createElement(material_ui_1.RaisedButton, {"disabled": true, "label": "Zaawansowany filtr"}))));
    };
    return productSearchView;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productSearchView;
