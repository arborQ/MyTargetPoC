var productDetails_1 = require('./productDetails');
var productCreate = (function (_super) {
    __extends(productCreate, _super);
    function productCreate($http, $state) {
        _super.call(this);
        this.$http = $http;
        this.$state = $state;
        this.model = {};
        this.model.Size = null;
    }
    productCreate.prototype.saveToServer = function (form, model) {
        var _this = this;
        this.$http.post("/api/products", model).then(function (id) {
            _this.$state.go('^.edit', { id: id.data });
        });
    };
    return productCreate;
})(productDetails_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productCreate;
