var moment = require('moment');
var bilansFilter = (function () {
    function bilansFilter($stateParams, $state, dateFormat) {
        this.$state = $state;
        this.dateFormat = dateFormat;
        var from = $stateParams["dateFrom"] ? new Date(parseInt($stateParams["dateFrom"])) : moment().add(-1, "day").toDate();
        var to = $stateParams["dateTo"] ? new Date(parseInt($stateParams["dateTo"])) : moment().toDate();
        this.model = {
            dateFrom: from,
            dateTo: to,
            type: { Add: true }
        };
    }
    bilansFilter.prototype.navigateToResults = function (form) {
        if (form.$valid) {
            this.$state.go('arbor-bilans-module.results', {
                dateFrom: Date.parse(this.model.dateFrom.toString()),
                dateTo: Date.parse(this.model.dateTo.toString())
            }, { reload: true });
        }
    };
    return bilansFilter;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bilansFilter;
