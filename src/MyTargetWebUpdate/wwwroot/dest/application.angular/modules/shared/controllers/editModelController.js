var modelController_1 = require('./modelController');
var editModelController = (function (_super) {
    __extends(editModelController, _super);
    function editModelController() {
        _super.apply(this, arguments);
    }
    editModelController.prototype.saveToServer = function (form, model) {
        var _this = this;
        this.$isLoading = true;
        this.$http.put(this.serviceUrl, model, { params: this.params })
            .then(this.onServerSaved)
            .finally(function () {
            _this.$isLoading = false;
        });
    };
    editModelController.prototype.onServerSaved = function (data) { };
    ;
    return editModelController;
})(modelController_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = editModelController;
