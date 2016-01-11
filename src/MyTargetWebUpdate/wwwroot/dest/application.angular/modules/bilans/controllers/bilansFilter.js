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
        };
    }
    bilansFilter.prototype.navigateToResults = function (form) {
        if (form.$valid) {
            var from = moment(this.model.dateFrom).startOf("day").toDate().toISOString();
            var to = moment(this.model.dateTo).endOf("day").toDate().toISOString();
            this.$state.go('arbor-bilans-module.results', {
                dateFrom: Date.parse(from),
                dateTo: Date.parse(to)
            }, { reload: true });
        }
    };
    return bilansFilter;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bilansFilter;
