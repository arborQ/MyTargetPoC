var arbor_controllers_1 = require('arbor.controllers');
var bilansCreate = (function (_super) {
    __extends(bilansCreate, _super);
    function bilansCreate($http, $stateParams, $state) {
        var _this = this;
        _super.call(this, '/api/stockChange', $http, { ProductId: $stateParams["id"] });
        this.$state = $state;
        this.PageTitle = 'Dodaj bilans';
        this.onServerSaved = function () {
            _this.$state.go('^', {}, { reload: true });
        };
    }
    bilansCreate.prototype.defaultModel = function () {
        return { AddProducts: true, Quantity: 1, ProductId: this.params["ProductId"] };
    };
    return bilansCreate;
})(arbor_controllers_1.CreateModelController);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bilansCreate;
