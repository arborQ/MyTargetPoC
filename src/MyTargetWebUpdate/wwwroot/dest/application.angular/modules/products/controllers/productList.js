var ProductList = (function () {
    function ProductList(_service) {
        this.search = { $showAdvanceSearch: false };
        this.model = _service.query();
    }
    return ProductList;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProductList;
