var React = require('react');
var productListView_1 = require('./views/productListView');
var productSearchView_1 = require('./views/productSearchView');
var query_1 = require('../crud/query');
var react_router_1 = require('react-router');
var productList = (function (_super) {
    __extends(productList, _super);
    function productList() {
        _super.apply(this, arguments);
    }
    productList.prototype.componentWillMount = function () {
        this.setState({ search: "" });
    };
    productList.prototype.onSearchChange = function (search) {
        this.setState({ search: search });
    };
    productList.prototype.dataLoaded = function (products) {
        this.setState({ products: products });
    };
    productList.prototype.rowSelected = function (_a) {
        var data = _a[0];
        React.createElement(react_router_1.Redirect, {"to": "/products/details"});
    };
    productList.prototype.render = function () {
        var _this = this;
        var products = (this.state.products || []).filter(function (p) { return (p.Name + " " + p.Code).indexOf(_this.state.search) !== -1; });
        return (React.createElement("div", null, React.createElement("div", null, this.props.children), React.createElement(productSearchView_1.default, {"onChange": this.onSearchChange.bind(this), "search": this.state.search}), React.createElement(query_1.default, {"apiUrl": "/api/products", "onDataLoaded": this.dataLoaded.bind(this)}, React.createElement(productListView_1.default, {"products": products, "onRowClick": this.rowSelected.bind(this)}))));
    };
    ;
    return productList;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productList;
