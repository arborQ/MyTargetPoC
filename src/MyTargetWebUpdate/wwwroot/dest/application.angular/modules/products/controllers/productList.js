var arbor_controllers_1 = require("arbor.controllers");
var ProductList = (function (_super) {
    __extends(ProductList, _super);
    function ProductList($http, productSizes) {
        _super.call(this, "/api/products", $http);
        this.productSizes = productSizes;
        this.setDefaultFilerState();
    }
    ;
    ProductList.prototype.defaultModel = function () {
        return new Array();
    };
    ProductList.prototype.setDefaultFilerState = function () {
        this.search = {
            FreeText: "",
            $showAdvanceSearch: false,
            Size: [],
            NetPrice: {},
            Quantity: {} };
    };
    ProductList.prototype.toggleSizeFilter = function (size) {
        if (this.search.Size.indexOf(size) === -1) {
            this.search.Size.push(size);
        }
        else {
            this.search.Size = this.search.Size.filter(function (s) { return s !== size; });
        }
    };
    return ProductList;
})(arbor_controllers_1.ModelController);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductList;
