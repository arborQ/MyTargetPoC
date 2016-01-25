var arbor_controllers_1 = require("arbor.controllers");
var ProductList = (function (_super) {
    __extends(ProductList, _super);
    function ProductList($http, toaster, productSizes) {
        _super.call(this, "/api/products", $http, toaster);
        this.productSizes = productSizes;
        this.sortFields = [
            { key: "Code", name: "Kod" },
            { key: "Name", name: "Nazwa" },
            { key: "Supplier", name: "Dostawca" },
            { key: "NetPrice", name: "Cena" },
            { key: "StoredQuantity", name: "Ilość" },
            { key: "Size", name: "Rozmiar" },
            { key: "Location", name: "Lokacja" },
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
            Quantity: {}
        };
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
})(arbor_controllers_1.SortModelController);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductList;
