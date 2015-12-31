var modelController_1 = require('./modelController');
var createModelController = (function (_super) {
    __extends(createModelController, _super);
    function createModelController() {
        _super.apply(this, arguments);
    }
    createModelController.prototype.saveToServer = function (form, model) {
        var _this = this;
        this.$isLoading = true;
        this.$http.post(this.serviceUrl, model, { params: this.params })
            .then(this.onServerSaved)
            .finally(function () {
            _this.$isLoading = false;
        });
    };
    createModelController.prototype.loadData = function () { };
    createModelController.prototype.onServerSaved = function (data) { };
    ;
    return createModelController;
})(modelController_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createModelController;
