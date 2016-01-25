var arbor_controllers_1 = require('arbor.controllers');
var bilansCreate = (function (_super) {
    __extends(bilansCreate, _super);
    function bilansCreate($http, $stateParams, toaster, $state) {
        console.log('edit?');
        _super.call(this, '/api/stockChange', $http, toaster, { id: $stateParams["id"] });
        this.PageTitle = 'Dodaj bilans';
        this.onServerSaved = function () {
            $state.go('^', {}, { reload: true });
        };
    }
    return bilansCreate;
})(arbor_controllers_1.EditModelController);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bilansCreate;
