var bilansCreate = (function () {
    function bilansCreate($http, $state, $stateParams) {
        this.$http = $http;
        this.$state = $state;
        this.model = { AddProducts: true, Quantity: 1, ProductId: $stateParams["id"] };
        this.PageTitle = 'Dodaj bilans';
    }
    bilansCreate.prototype.saveToServer = function (form, data) {
        var _this = this;
        console.log(form);
        console.log(data);
        if (form.$valid) {
            this.$http.post('/api/stockChange', data).then(function () {
                _this.$state.go('arbor-bilans-module', {}, { reload: true });
            });
        }
    };
    return bilansCreate;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bilansCreate;
