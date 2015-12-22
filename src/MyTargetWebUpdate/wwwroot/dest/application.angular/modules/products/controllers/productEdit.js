var productEdit = (function () {
    function productEdit(_service, $state, $stateParams) {
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.model = _service.get({ id: $stateParams["id"] });
        console.log(this.model);
    }
    productEdit.prototype.saveToServer = function () {
        var _this = this;
        console.log(this.model.$update);
        this.model.$update({ id: this.$stateParams["id"] }, function (id) { console.log(id); _this.$state.go('^'); });
    };
    return productEdit;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productEdit;
