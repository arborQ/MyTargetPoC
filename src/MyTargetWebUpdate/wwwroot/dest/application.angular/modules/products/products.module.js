var angular = require('angular');
require('angular-resource');
require('angular-messages');
var viewHelper_1 = require('../setup/viewHelper');
var productList_1 = require('./controllers/productList');
var productCreate_1 = require('./controllers/productCreate');
var productEdit_1 = require('./controllers/productEdit');
var bilansCreate_1 = require('../bilans/controllers/bilansCreate');
var name = "arbor-products-module";
var app = angular.module(name, ['ui.router', 'ngResource', 'ngMessages']);
app.constant('productSizes', [
    { id: 'S', name: "S" },
    { id: 'M', name: "M" },
    { id: 'L', name: "L" },
    { id: 'XL', name: "XL" },
    { id: 'XXL', name: "XXL" },
]);
app.config(function ($stateProvider) {
    $stateProvider.state(name, {
        url: '/products',
        resolve: {
            _service: function ($resource, $stateParams) { return $resource('/api/products', null, { 'update': { method: 'PUT' } }); }
        },
        templateUrl: viewHelper_1.viewTemplateUrl('products', 'productList'),
        controller: productList_1.default,
        controllerAs: 'vm'
    });
    $stateProvider.state(name + ".add", { url: "/add", controller: productCreate_1.default, controllerAs: 'vm', templateUrl: viewHelper_1.viewTemplateUrl('products', 'productCreate') });
    $stateProvider.state(name + ".edit", { url: "/edit/:id", controller: productEdit_1.default, controllerAs: 'vm', templateUrl: viewHelper_1.viewTemplateUrl('products', 'productEdit') });
    $stateProvider.state(name + ".change", { url: "/change/:id", controller: bilansCreate_1.default, controllerAs: 'vm', templateUrl: viewHelper_1.viewTemplateUrl('products', 'bilansChange') });
});
app.filter('searchProducts', function () {
    return function (products, searchCriteria) {
        return (products || [])
            .filter(function (p) { return (!searchCriteria.FreeText || searchCriteria.FreeText.length === 0) || (p.Code + " " + p.Name).indexOf(searchCriteria.FreeText) !== -1; });
    };
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = name;
