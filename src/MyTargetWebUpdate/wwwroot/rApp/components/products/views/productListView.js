var React = require('react');
var material_ui_1 = require('material-ui');
var react_router_1 = require('react-router');
var productListView = (function (_super) {
    __extends(productListView, _super);
    function productListView() {
        _super.apply(this, arguments);
    }
    productListView.prototype.render = function () {
        if (!this.props || !this.props.products) {
            return (React.createElement("div", null, "nope"));
        }
        var productList = this.props.products.map(function (p) {
            return (React.createElement(material_ui_1.TableRow, {"key": p.Id}, React.createElement(material_ui_1.TableRowColumn, null, p.Name), React.createElement(material_ui_1.TableRowColumn, null, p.StoredQuantity, "sz")));
        });
        return (React.createElement("div", null, React.createElement(react_router_1.Link, {"to": "/products/details", "style": { position: 'fixed', bottom: "10px", right: "10px" }}, React.createElement(material_ui_1.FloatingActionButton, {"secondary": false}, "+")), React.createElement(material_ui_1.Card, {"style": { maxWidth: '800px', margin: '0 auto', marginTop: '20px' }}, React.createElement(material_ui_1.Table, null, React.createElement(material_ui_1.TableHeader, {"displaySelectAll": false}, ">", React.createElement(material_ui_1.TableRow, null, React.createElement(material_ui_1.TableHeaderColumn, {"tooltip": 'Nazwa produktu'}, "Nazwa"), React.createElement(material_ui_1.TableHeaderColumn, {"tooltip": 'Dostępne?'}, "Ile?"))), React.createElement(material_ui_1.TableBody, {"displayRowCheckbox": false}, productList)))));
    };
    return productListView;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productListView;
