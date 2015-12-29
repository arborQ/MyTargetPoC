var modelController_1 = require('./modelController');
var editModelController = (function (_super) {
    __extends(editModelController, _super);
    function editModelController() {
        _super.apply(this, arguments);
    }
    editModelController.prototype.saveToServer = function (form, model) {
        this.$http.put(this.serviceUrl, model, { params: this.params }).then(this.onServerSaved);
    };
    editModelController.prototype.onServerSaved = function (data) { };
    ;
    return editModelController;
})(modelController_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = editModelController;
