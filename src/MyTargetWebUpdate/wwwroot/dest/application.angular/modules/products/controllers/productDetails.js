var productDetails = (function () {
    function productDetails() {
        this.sizes = new Array();
        this.sizes = [
            { id: 'S', name: "S" },
            { id: 'M', name: "M" },
            { id: 'L', name: "L" },
            { id: 'XL', name: "XL" },
            { id: 'XXL', name: "XXL" },
        ];
    }
    return productDetails;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productDetails;
