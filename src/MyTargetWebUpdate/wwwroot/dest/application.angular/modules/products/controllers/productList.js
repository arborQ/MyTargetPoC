var arbor_controllers_1 = require("arbor.controllers");
var ProductList = (function (_super) {
    __extends(ProductList, _super);
    function ProductList($http, productSizes) {
        _super.call(this, "/api/products", $http);
        this.productSizes = productSizes;
        this.sortFields = [
            { key: "Code", name: "Kod" },
            { key: "Name", name: "Nazwa" },
            { key: "NetPrice", name: "Cena" },
            { key: "StoredQuantity", name: "Ilość" },
            { key: "Size", name: "Rozmiar" },
            { key: "NetPrice*StoredQuantity", name: "Wartość" }
        ];
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
    ProductList.prototype.calculate = function (func) {
        console.log(this.model);
        if (!this.model) {
            return null;
        }
        var sum = 0;
        for (var i = 0; i < this.model.length; i++) {
            sum += func(this.model[i]);
        }
        return sum;
    };
    Object.defineProperty(ProductList.prototype, "TotalStoredQuantity", {
        get: function () {
            return (function (c) { return c.StoredQuantity; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductList.prototype, "TotalNetPrice", {
        get: function () {
            return (function (c) { return c.StoredQuantity * c.NetPrice; });
        },
        enumerable: true,
        configurable: true
    });
    return ProductList;
})(arbor_controllers_1.SortModelController);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductList;
