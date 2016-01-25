var angular = require('angular');
require('angular-resource');
require('angular-messages');
require('angular-storage');
require('angular-jwt');
require('auth0-angular');
var viewHelper_1 = require('../setup/viewHelper');
var loginPage_1 = require('./controllers/loginPage');
var name = "arbor-login";
var app = angular.module(name, ['ui.router', 'ngResource', 'ngMessages', 'auth0', 'angular-storage', 'angular-jwt']);
app.config(function ($stateProvider, authProvider) {
    authProvider.init({
        domain: 'YOUR_NAMESPACE',
        clientID: 'YOUR_CLIENT_ID'
    });
    $stateProvider.state(name, {
        url: '/login',
        templateUrl: viewHelper_1.viewTemplateUrl('login', 'loginForm'),
        controller: loginPage_1.default,
        controllerAs: 'vm'
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = name;
