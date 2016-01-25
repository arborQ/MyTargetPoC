var angular_1 = require('angular');
require('angular-ui-router');
require('angular-ui');
require('angular-ui-templates');
var remoteValidation_1 = require('./directives/remoteValidation');
var sortDirective_1 = require('./directives/sortDirective');
var errorHandler_1 = require('./interceptors/errorHandler');
var moment = require('moment');
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
    app.directive('sortDirective', function () { return sortDirective_1.default; });
    app.directive('loadContent', function () {
        return {
            restrict: "C",
            transclude: true,
            scope: { 'ngModel': '=' },
            template: "\n        <div>\n          <div class=\"loading_placeholder\" ng-show=\"!ngModel\">\n            <div class=\"loading embeded\"></div>\n          </div>\n          <ng-transclude ng-show=\"ngModel\"></ng-transclude>\n        </div>\n      "
        };
    });
    app.directive('remoteValidation', remoteValidation_1.default);
    app.directive("validateInput", function () {
        return {
            restrict: 'E',
            scope: { 'error': '=' },
            templateUrl: viewHelper_1.viewTemplateUrl('shared', '_validate')
        };
    });
    app.directive('pageModal', function ($rootScope) {
        return {
            restrict: 'A',
            link: function (s, e) {
                var className = 'modal-open';
                $rootScope.$on('$stateChangeSuccess', function (evet, state) {
                    if (state.data && state.data.isModal) {
                        if (!e.hasClass(className)) {
                            e.addClass(className);
                        }
                    }
                    else {
                        e.removeClass(className);
                    }
                });
            }
        };
    });
    app.directive('pageTitle', function ($rootScope) {
        return {
            restrict: 'A',
            link: function (s, e) {
                $rootScope.$on('$stateChangeSuccess', function (evet, state) {
                    if (state.data && state.data.title) {
                        e.text(state.data.title);
                    }
                    else {
                        e.text('Just Move');
                    }
                });
            }
        };
    });
};
var registerFilters = function (app) {
    app.filter('arborDate', function (dateTimeFormat, timeZoneDiff) { return function (date) { return moment(date, dateTimeFormat).add(timeZoneDiff, "minutes").format(dateTimeFormat); }; });
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
    app.factory('arborErrorInerceptor', function (toaster) {
        return new errorHandler_1.default(toaster);
    });
    app.factory('arborInterceptor', ['$q', 'toaster', function ($q, toaster) {
            return {
                'response': function (res) {
                    if (res.data._messageData) {
                        toaster.info("info", res.data._messageData);
                        res.data = res.data._contentData;
                    }
                    return res;
                },
                'responseError': function (res) {
                    toaster.error(res.statusText);
                    return res;
                }
            };
        }]);
};
function registerApplication(_a) {
    var pages = _a.pages, applicationConfig = _a.applicationConfig, itemDictionary = _a.itemDictionary;
    var pageCodes = pages.map(function (p) { return p.name; });
    pageCodes.push('ui.bootstrap');
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
    app.constant('dateFormat', 'yyyy-MM-dd');
    app.constant('dateTimeFormat', 'YYYY-MM-DD HH:mm');
    app.constant('timeZoneDiff', -1 * (new Date().getTimezoneOffset()));
    registerDirectives(app);
    registerFilters(app);
    registerProviders(app);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerApplication;
