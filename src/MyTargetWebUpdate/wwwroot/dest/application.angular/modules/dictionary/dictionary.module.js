var angular = require('angular');
require('angular-messages');
var viewHelper_1 = require('../setup/viewHelper');
var dictionaryList_1 = require('./controllers/dictionaryList');
var name = "arbor-dictionary-module";
var app = angular.module(name, ['ui.router', 'ngMessages']);
app.config(function ($stateProvider) {
    $stateProvider.state(name, {
        url: '/dictionary',
        templateUrl: viewHelper_1.viewTemplateUrl('dictionary', 'dictionary'),
        controller: dictionaryList_1.default,
        controllerAs: 'vm',
        data: { title: 'Ustawienia' },
    });
    $stateProvider.state(name + ".group", { data: { isModal: true, title: 'Grupa ustawień' }, url: "/group/:id", controller: function () { }, controllerAs: 'vm', templateUrl: viewHelper_1.viewTemplateUrl('dictionary', 'dictionaryGroup') });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = name;
