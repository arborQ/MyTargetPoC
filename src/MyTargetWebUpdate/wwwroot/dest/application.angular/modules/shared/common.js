require('angular-ui-router');
var angular_1 = require('angular');
require('angularjs-toaster');
var loadingBar = require("angular-loading-bar");
var controller_1 = require('../../modules/setup/controller');
var viewHelper_1 = require('../../modules/setup/viewHelper');
var registerDirectives = function (app) {
    app.directive('myApp', function () {
        return {
            restrict: 'E',
            controller: controller_1.default, resolve: {},
            controllerAs: 'vm',
            templateUrl: viewHelper_1.viewTemplateUrl("shared", "_master")
        };
    });
    app.directive('loadContent', function () {
        return {
            restrict: "C",
            transclude: true,
            scope: { 'ngModel': '=' },
            template: "\n        <div>\n          <div class=\"loading_placeholder\" ng-show=\"!ngModel\">\n            <div class=\"loading embeded\"></div>\n          </div>\n          <ng-transclude ng-show=\"ngModel\"></ng-transclude>\n        </div>\n      "
        };
    });
};
var registerFilters = function (app) {
    app.filter('danger', function () {
        return function (validation) {
            if (validation && validation.$invalid && validation.$dirty) {
                return "has-danger";
            }
            else {
                return "";
            }
        };
    });
};
var registerProviders = function (app) {
    app.factory('arborInterceptor', ['$q', 'toaster', function ($q, toaster) {
            return {
                'response': function (res) {
                    if (res.data._messageData && res.data._contentData) {
                        toaster.info("info", res.data._messageData);
                        res.data = res.data._contentData;
                    }
                    return res;
                }
            };
        }]);
};
function registerApplication(_a) {
    var pages = _a.pages, applicationConfig = _a.applicationConfig, itemDictionary = _a.itemDictionary;
    var pageCodes = pages.map(function (p) { return p.name; });
    pageCodes.push('ui.router');
    pageCodes.push('toaster');
    pageCodes.push(loadingBar);
    var app = angular_1.module("app", pageCodes);
    app.config(applicationConfig);
    app.config(['$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push('arborInterceptor');
        }]);
    var menuOptions = pages.filter(function (p) { return p.showNavigation; }).map(function (p) { return p.name; });
    app.constant('menuOptions', menuOptions);
    app.constant('itemDictionary', itemDictionary);
    registerDirectives(app);
    registerFilters(app);
    registerProviders(app);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerApplication;
