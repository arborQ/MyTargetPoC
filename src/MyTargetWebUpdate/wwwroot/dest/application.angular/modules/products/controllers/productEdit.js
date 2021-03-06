var arbor_controllers_1 = require("arbor.controllers");
var productEdit = (function (_super) {
    __extends(productEdit, _super);
    function productEdit($http, $state, $stateParams, toaster, productSizes) {
        _super.call(this, '/api/products', $http, toaster, { id: $stateParams["id"] });
        this.PageTitle = "Edytuj produkt";
        this.sizes = productSizes;
        this.onServerSaved = function () {
            $state.go('^', {}, { reload: true });
        };
    }
    return productEdit;
})(arbor_controllers_1.EditModelController);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productEdit;
