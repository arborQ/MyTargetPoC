var modelController = (function () {
    function modelController(serviceUrl, $http, toaster, params) {
        this.serviceUrl = serviceUrl;
        this.$http = $http;
        this.toaster = toaster;
        this.params = params;
        this.model = this.defaultModel();
        this.loadData();
    }
    modelController.prototype.loadData = function () {
        var _this = this;
        this.$isLoading = true;
        this.$http.get(this.serviceUrl, { params: this.params })
            .then(function (result) {
            _this.model = result.data;
            _this.dataLoaded(result.data);
        }).finally(function () {
            _this.$isLoading = false;
        });
    };
    modelController.prototype.dataLoaded = function (data) { };
    modelController.prototype.defaultModel = function () {
        return {};
    };
    return modelController;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = modelController;
