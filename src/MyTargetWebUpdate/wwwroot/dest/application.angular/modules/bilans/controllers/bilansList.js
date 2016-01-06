var arbor_controllers_1 = require('arbor.controllers');
var moment = require('moment');
var bilansList = (function (_super) {
    __extends(bilansList, _super);
    function bilansList($http, $stateParams, timeZoneDiff) {
        _super.call(this, '/api/stockChange', $http, {
            dateFrom: moment(new Date(parseInt($stateParams["dateFrom"]))).add(timeZoneDiff, "minutes").toDate(),
            dateTo: moment(new Date(parseInt($stateParams["dateTo"]))).add(timeZoneDiff, "minutes").add(1, "day").toDate()
        });
        this.$http = $http;
    }
    return bilansList;
})(arbor_controllers_1.ModelController);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bilansList;
