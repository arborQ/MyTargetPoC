var modelController_1 = require('./modelController');
var sortModelController = (function (_super) {
    __extends(sortModelController, _super);
    function sortModelController(serviceUrl, $http, toaster, params) {
        _super.call(this, serviceUrl, $http, toaster, params);
        this.serviceUrl = serviceUrl;
        this.$http = $http;
        this.params = params;
        this.sortDirection = false;
        this.sortOptions = [];
        this.sortFields = [{ key: 'Id', name: 'Domyślny' }];
    }
    return sortModelController;
})(modelController_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sortModelController;
