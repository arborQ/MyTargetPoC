var angular = require('angular');
require('angular-resource');
var viewHelper_1 = require('../setup/viewHelper');
var productList_1 = require('./controllers/productList');
var name = "arbor-products-module";
var app = angular.module(name, ['ui.router', 'ngResource']);
app.config(function ($stateProvider) {
    $stateProvider.state(name, {
        url: '/products',
        resolve: {
            userService: function ($resource) { return $resource('/api/products'); }
        },
        templateUrl: viewHelper_1.viewTemplateUrl('products', 'productList'),
        controller: productList_1.default,
        controllerAs: 'vm'
    });
    $stateProvider.state(name + ".add", { url: "/add", templateUrl: viewHelper_1.viewTemplateUrl('products', 'productDetails') });
    $stateProvider.state(name + ".edit", { url: "/edit/:id", templateUrl: viewHelper_1.viewTemplateUrl('products', 'productDetails') });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = name;
