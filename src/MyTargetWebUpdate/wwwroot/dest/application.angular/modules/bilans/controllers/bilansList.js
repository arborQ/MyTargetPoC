var arbor_controllers_1 = require('arbor.controllers');
var bilansList = (function (_super) {
    __extends(bilansList, _super);
    function bilansList($http, $stateParams, timeZoneDiff) {
        _super.call(this, '/api/stockChange', $http, {
            dateFrom: new Date(parseInt($stateParams["dateFrom"])).toISOString(),
            dateTo: new Date(parseInt($stateParams["dateTo"])).toISOString()
        });
        this.$http = $http;
        this.sortFields = [
            { key: "Created", name: "Data" },
            { key: "StoredQuantity < 0", name: "Rodzaj" },
            { key: "Code", name: "Kod" },
            { key: "ProductName", name: "Nazwa" },
            { key: "NetPrice", name: "Cena" },
            { key: "StoredQuantity", name: "Ilość" },
            { key: "NetPrice*StoredQuantity", name: "Wartość" }
        ];
    }
    return bilansList;
})(arbor_controllers_1.SortModelController);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bilansList;
