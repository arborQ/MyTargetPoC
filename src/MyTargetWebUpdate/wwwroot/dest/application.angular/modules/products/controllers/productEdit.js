var productDetails_1 = require('./productDetails');
var productEdit = (function (_super) {
    __extends(productEdit, _super);
    function productEdit(_service, $state, $stateParams) {
        _super.call(this);
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.model = _service.get({ id: $stateParams["id"] });
    }
    productEdit.prototype.saveToServer = function () {
        var _this = this;
        this.model.$update({ id: this.$stateParams["id"] }, function (id) { console.log(id); _this.$state.go('^'); });
    };
    return productEdit;
})(productDetails_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productEdit;
