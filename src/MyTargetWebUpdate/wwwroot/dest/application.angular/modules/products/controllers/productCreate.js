var productDetails_1 = require('./productDetails');
var productCreate = (function (_super) {
    __extends(productCreate, _super);
    function productCreate(_service, $state) {
        _super.call(this);
        this.$state = $state;
        this.model = new _service();
        this.model.$resolved = true;
        this.model["Size"] = null;
    }
    productCreate.prototype.saveToServer = function () {
        var _this = this;
        var id = this.model.$save(function () { _this.$state.go('^', null, { reload: true }); });
    };
    return productCreate;
})(productDetails_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productCreate;
