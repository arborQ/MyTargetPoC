var angular = require('angular');
require('angular-messages');
var viewHelper_1 = require('../setup/viewHelper');
var productList_1 = require('./controllers/productList');
var productCreate_1 = require('./controllers/productCreate');
var productEdit_1 = require('./controllers/productEdit');
var bilansCreate_1 = require('../bilans/controllers/bilansCreate');
var locationDIrective_1 = require('./directives/locationDIrective');
var name = "arbor-products-module";
var app = angular.module(name, ['ui.router', 'ngMessages']);
app.constant('productSizes', ["XS", "S", "M", "L", "XL", "XXL"]);
app.config(function ($stateProvider) {
    $stateProvider.state(name, {
        url: '/products',
        resolve: {
            _service: function ($resource, $stateParams) { return $resource('/api/products', null, { 'update': { method: 'PUT' } }); }
        },
        templateUrl: viewHelper_1.viewTemplateUrl('products', 'productList'),
        controller: productList_1.default,
        controllerAs: 'vm',
        data: { title: 'Produkty' },
    });
    $stateProvider.state(name + ".add", { data: { isModal: true, title: 'Dodaj produkt' }, url: "/add", controller: productCreate_1.default, controllerAs: 'vm', templateUrl: viewHelper_1.viewTemplateUrl('products', 'productCreate') });
    $stateProvider.state(name + ".edit", { data: { isModal: true, title: 'Edytuj produkt' }, url: "/edit/:id", controller: productEdit_1.default, controllerAs: 'vm', templateUrl: viewHelper_1.viewTemplateUrl('products', 'productEdit') });
    $stateProvider.state(name + ".change", { data: { isModal: true, title: 'Zmień stan magazynu' }, url: "/change/:id", controller: bilansCreate_1.default, controllerAs: 'vm', templateUrl: viewHelper_1.viewTemplateUrl('products', 'bilansChange') });
});
app.filter('searchProducts', function () {
    return function (products, searchCriteria) {
        var searchText = (searchCriteria.FreeText || "").toLowerCase();
        var result = (products || [])
            .filter(function (p) { return (!searchCriteria.FreeText || searchCriteria.FreeText.length === 0) || (p.Code + " " + p.Name + " " + p.Supplier + " " + p.Location).toLowerCase().indexOf(searchText) !== -1; })
            .filter(function (p) { return (!searchCriteria.Size || searchCriteria.Size.length === 0) || searchCriteria.Size.indexOf(p.Size) !== -1; })
            .filter(function (p) { return (!searchCriteria.Quantity.MinValue) || searchCriteria.Quantity.MinValue <= p.StoredQuantity; })
            .filter(function (p) { return (!searchCriteria.Quantity.MaxValue) || searchCriteria.Quantity.MaxValue >= p.StoredQuantity; })
            .filter(function (p) { return (!searchCriteria.NetPrice.MinValue) || searchCriteria.NetPrice.MinValue <= p.NetPrice; })
            .filter(function (p) { return (!searchCriteria.NetPrice.MaxValue) || searchCriteria.NetPrice.MaxValue >= p.NetPrice; });
        return result;
    };
});
app.filter('productCostSummary', function () {
    return function (p) { return (p.StoredQuantity + " szt. * " + p.NetPrice + " PLN = " + (p.StoredQuantity * p.NetPrice).toFixed(2) + " PLN"); };
});
app.filter('totalProductCost', function () {
    return function (products) {
        if (!products || products.length === 0) {
            return "0";
        }
        var result = 0;
        for (var i = 0; i < products.length; i++) {
            result += products[i].NetPrice * products[i].StoredQuantity;
        }
        var realValue = result.toString();
        var fixedValue = result.toFixed(2);
        return fixedValue;
    };
});
app.filter('sizeSelected', function () {
    return function (sizes, size) {
        if (!sizes || !size) {
            return false;
        }
        return sizes.indexOf(size) !== -1;
    };
});
app.directive('loadLocations', locationDIrective_1.default);
app.directive('productRangeFilter', function () {
    return {
        restrict: 'E',
        scope: { from: '=', to: '=', name: '@' },
        templateUrl: viewHelper_1.viewTemplateUrl("products", 'range')
    };
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = name;
