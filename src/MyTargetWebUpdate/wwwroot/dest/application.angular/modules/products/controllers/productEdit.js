var productDetails_1 = require('./productDetails');
var productEdit = (function (_super) {
    __extends(productEdit, _super);
    function productEdit($http, $state, $stateParams) {
        var _this = this;
        _super.call(this);
        this.$http = $http;
        this.$state = $state;
        this.$stateParams = $stateParams;
        $http.get("/api/products", { params: { id: $stateParams["id"] } })
            .then(function (result) {
            _this.PageTitle = "Edytuj produkt \"" + result.data.Name + "\"";
            _this.model = result.data;
        });
    }
    productEdit.prototype.saveToServer = function (form, model) {
        var _this = this;
        this.$http.put('/api/products', model, { params: { id: this.$stateParams["id"] } })
            .then(function () {
            _this.$state.go('^', {}, { reload: true });
        });
    };
    return productEdit;
})(productDetails_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productEdit;
