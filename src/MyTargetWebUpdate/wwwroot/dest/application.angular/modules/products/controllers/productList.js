var arbor_controllers_1 = require("arbor.controllers");
var ProductList = (function (_super) {
    __extends(ProductList, _super);
    function ProductList($http) {
        _super.call(this, "/api/products", $http);
        this.search = { $showAdvanceSearch: false };
    }
    ProductList.prototype.defaultModel = function () {
        return new Array();
    };
    return ProductList;
})(arbor_controllers_1.ModelController);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductList;
