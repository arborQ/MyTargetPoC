var applicationController = (function () {
    function applicationController(menuOptions) {
        var _this = this;
        this.itemDictionary = { 'arbor-products-module': 'Produkty' };
        this.menuItems = menuOptions.map(function (p) { return { name: p, display: (_this.itemDictionary[p] || p) }; });
    }
    return applicationController;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = applicationController;
