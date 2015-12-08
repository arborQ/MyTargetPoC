var React = require('react');
var productListView_1 = require('./views/productListView');
var productList = (function (_super) {
    __extends(productList, _super);
    function productList() {
        _super.apply(this, arguments);
    }
    productList.prototype.componentWillMount = function () {
        var _this = this;
        this.setState({ products: [] });
        setTimeout(function () {
            var p = [{ Id: 1, Code: '432', Name: '432', StoredQuantity: 10 }, { Id: 2, Code: 'test_C', Name: 'test', StoredQuantity: 110 }];
            _this.setState({ products: p });
        }, 2000);
    };
    productList.prototype.render = function () {
        return (React.createElement(productListView_1.default, {"products": this.state.products}));
    };
    ;
    return productList;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productList;
