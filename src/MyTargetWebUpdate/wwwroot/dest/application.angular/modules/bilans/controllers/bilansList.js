var arbor_controllers_1 = require('arbor.controllers');
var bilansList = (function (_super) {
    __extends(bilansList, _super);
    function bilansList($http) {
        _super.call(this, '/api/stockChange', $http);
        this.$http = $http;
    }
    return bilansList;
})(arbor_controllers_1.ModelController);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bilansList;
