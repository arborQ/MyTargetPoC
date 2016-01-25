var arbor_controllers_1 = require('arbor.controllers');
var productCreate = (function (_super) {
    __extends(productCreate, _super);
    function productCreate($http, $state, toaster, $stateParams, productSizes) {
        this.PageTitle = "Dodaj produkt";
        this.sizes = productSizes;
        this.onServerSaved = function (data) {
            $state.go('^.edit', { id: data.data.Id });
        };
        _super.call(this, '/api/products', $http, toaster);
    }
    productCreate.prototype.loadData = function () { };
    return productCreate;
})(arbor_controllers_1.CreateModelController);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productCreate;
