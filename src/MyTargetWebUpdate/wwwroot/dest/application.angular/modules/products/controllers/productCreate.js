var productCreate = (function () {
    function productCreate(_service, $state) {
        this.$state = $state;
        this.model = new _service();
    }
    productCreate.prototype.saveToServer = function () {
        var _this = this;
        var id = this.model.$save(function () { _this.$state.go('^', null, { reload: true }); });
    };
    return productCreate;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productCreate;
