var applicationController = (function () {
    function applicationController(menuOptions, itemDictionary) {
        this.menuItems = menuOptions.map(function (p) { return { name: p, display: (itemDictionary[p] || p) }; });
    }
    return applicationController;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = applicationController;
