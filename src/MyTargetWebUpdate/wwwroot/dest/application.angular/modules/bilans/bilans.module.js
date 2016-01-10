var angular = require('angular');
require('angular-resource');
require('angular-messages');
var viewHelper_1 = require('../setup/viewHelper');
var bilansList_1 = require('./controllers/bilansList');
var bilansComment_1 = require('./controllers/bilansComment');
var bilansFilter_1 = require('./controllers/bilansFilter');
var BilansFilterOptions_1 = require('./enums/BilansFilterOptions');
var name = "arbor-bilans-module";
var app = angular.module(name, ['ui.router', 'ngResource', 'ngMessages']);
app.config(function ($stateProvider) {
    $stateProvider.state(name, {
        url: '/bilans/:dateFrom/:dateTo',
        templateUrl: viewHelper_1.viewTemplateUrl('bilans', 'bilansFilter'),
        controller: bilansFilter_1.default,
        controllerAs: 'vm'
    });
    $stateProvider.state(name + ".results", { data: { title: 'Bilans' }, url: "/results", controller: bilansList_1.default, controllerAs: 'vm', templateUrl: viewHelper_1.viewTemplateUrl('bilans', 'bilansList') });
    $stateProvider.state(name + ".results.comment", { data: { isModal: true, title: 'Zmiana w magazynie' }, url: "/comment/:commentId", controller: bilansComment_1.default, controllerAs: 'vm', templateUrl: viewHelper_1.viewTemplateUrl('bilans', 'bilansComment') });
});
app.filter('searchBilans', function () {
    return function (bilansList, searchCriteria) {
        console.log(searchCriteria);
        var searchText = (searchCriteria.FreeText || "").toLowerCase();
        var result = (bilansList || [])
            .filter(function (p) { return (searchText.length === 0) || ("" + p.ProductName).toLowerCase().indexOf(searchText) !== -1; })
            .filter(function (p) { return (!searchCriteria.Type) || searchCriteria.Type === BilansFilterOptions_1.default.All || p.StoredQuantity === 0 || (searchCriteria.Type === BilansFilterOptions_1.default.Buy && p.StoredQuantity > 0) || (searchCriteria.Type === BilansFilterOptions_1.default.Sell && p.StoredQuantity < 0); })
            .filter(function (p) { return (!searchCriteria.Quantity.MinValue) || searchCriteria.Quantity.MinValue <= Math.abs(p.StoredQuantity); })
            .filter(function (p) { return (!searchCriteria.Quantity.MaxValue) || searchCriteria.Quantity.MaxValue >= Math.abs(p.StoredQuantity); })
            .filter(function (p) { return (!searchCriteria.NetPrice.MinValue) || searchCriteria.NetPrice.MinValue <= p.NetPrice; })
            .filter(function (p) { return (!searchCriteria.NetPrice.MaxValue) || searchCriteria.NetPrice.MaxValue >= p.NetPrice; });
        return result;
    };
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = name;
