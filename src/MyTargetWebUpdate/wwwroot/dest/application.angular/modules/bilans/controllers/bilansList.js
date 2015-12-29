var bilansList = (function () {
    function bilansList($http) {
        var _this = this;
        this.$http = $http;
        this.model = [];
        $http.get('/api/stockChange').then(function (data) {
            _this.model = data.data;
        });
    }
    return bilansList;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bilansList;
