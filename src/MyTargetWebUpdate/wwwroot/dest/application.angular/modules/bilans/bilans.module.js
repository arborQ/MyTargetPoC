var angular = require('angular');
require('angular-resource');
require('angular-messages');
var viewHelper_1 = require('../setup/viewHelper');
var bilansList_1 = require('./controllers/bilansList');
var bilansCreate_1 = require('./controllers/bilansCreate');
var bilansComment_1 = require('./controllers/bilansComment');
var name = "arbor-bilans-module";
var app = angular.module(name, ['ui.router', 'ngResource', 'ngMessages']);
app.config(function ($stateProvider) {
    $stateProvider.state(name, {
        url: '/bilans/:id',
        resolve: {
            _serviceUrl: function () { return 'api/StockChange'; }
        },
        templateUrl: viewHelper_1.viewTemplateUrl('bilans', 'bilansList'),
        controller: bilansList_1.default,
        controllerAs: 'vm'
    });
    $stateProvider.state(name + ".change", { url: "/change/:id", controller: bilansCreate_1.default, controllerAs: 'vm', templateUrl: viewHelper_1.viewTemplateUrl('bilans', 'bilansCreate') });
    $stateProvider.state(name + ".comment", { url: "/comment/:commentId", controller: bilansComment_1.default, controllerAs: 'vm', templateUrl: viewHelper_1.viewTemplateUrl('bilans', 'bilansComment') });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = name;
