var modelController_1 = require('./modelController');
var editModelController = (function (_super) {
    __extends(editModelController, _super);
    function editModelController(serviceUrl, $http, toaster, params) {
        _super.call(this, serviceUrl, $http, toaster, params);
        this.serviceUrl = serviceUrl;
        this.$http = $http;
        this.params = params;
    }
    editModelController.prototype.saveToServer = function (form, model) {
        var _this = this;
        if (form.$valid) {
            this.$isLoading = true;
            this.$http.put(this.serviceUrl, model, { params: this.params })
                .then(this.onServerSaved)
                .finally(function () {
                _this.$isLoading = false;
            });
        }
        else {
            this.toaster.warning("Czekaj!", "Formularz nie został zwalidowany.");
        }
    };
    editModelController.prototype.onServerSaved = function (data) { };
    ;
    return editModelController;
})(modelController_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = editModelController;
