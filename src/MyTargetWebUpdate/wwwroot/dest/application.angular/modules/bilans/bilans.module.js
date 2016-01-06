var angular = require('angular');
require('angular-resource');
require('angular-messages');
var viewHelper_1 = require('../setup/viewHelper');
var bilansList_1 = require('./controllers/bilansList');
var bilansComment_1 = require('./controllers/bilansComment');
var bilansFilter_1 = require('./controllers/bilansFilter');
var name = "arbor-bilans-module";
var app = angular.module(name, ['ui.router', 'ngResource', 'ngMessages']);
app.config(function ($stateProvider) {
    $stateProvider.state(name, {
        url: '/bilans/:dateFrom/:dateTo',
        templateUrl: viewHelper_1.viewTemplateUrl('bilans', 'bilansFilter'),
        controller: bilansFilter_1.default,
        controllerAs: 'vm'
    });
    $stateProvider.state(name + ".results", { url: "/results", controller: bilansList_1.default, controllerAs: 'vm', templateUrl: viewHelper_1.viewTemplateUrl('bilans', 'bilansList') });
    $stateProvider.state(name + ".results.comment", { url: "/comment/:commentId", controller: bilansComment_1.default, controllerAs: 'vm', templateUrl: viewHelper_1.viewTemplateUrl('bilans', 'bilansComment') });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = name;
