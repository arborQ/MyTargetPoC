var productEdit_1 = require('./productEdit');
var productCreate = (function (_super) {
    __extends(productCreate, _super);
    function productCreate($http, $state, $stateParams, productSizes) {
        this.onServerSaved = function (data) {
            $state.go('^.edit', { id: data.data.Id });
        };
        _super.call(this, $http, $state, $stateParams, productSizes);
    }
    productCreate.prototype.loadData = function () { };
    return productCreate;
})(productEdit_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productCreate;
