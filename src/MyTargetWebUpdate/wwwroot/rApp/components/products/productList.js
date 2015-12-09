var React = require('react');
var productListView_1 = require('./views/productListView');
var productSearchView_1 = require('./views/productSearchView');
var jquery_1 = require('jquery');
var productList = (function (_super) {
    __extends(productList, _super);
    function productList() {
        _super.apply(this, arguments);
    }
    productList.prototype.componentWillMount = function () {
        var _this = this;
        this.setState({ search: "" });
        jquery_1.get("/api/products").then(function (products) {
            _this.setState({ products: products });
        });
    };
    productList.prototype.onSearchChange = function (search) {
        this.setState({ search: search });
    };
    productList.prototype.render = function () {
        var _this = this;
        var products = (this.state.products || []).filter(function (p) { return (p.Name + " " + p.Code).indexOf(_this.state.search) !== -1; });
        return (React.createElement("div", null, React.createElement("div", null, this.props.children), React.createElement(productSearchView_1.default, {"onChange": this.onSearchChange.bind(this), "search": this.state.search}), React.createElement(productListView_1.default, {"products": products})));
    };
    ;
    return productList;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productList;
