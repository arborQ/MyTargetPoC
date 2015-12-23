require('angular-ui-router');
var angular_1 = require('angular');
var pages_1 = require('./modules/setup/pages');
var config_1 = require('./modules/setup/config');
var controller_1 = require('./modules/setup/controller');
var viewHelper_1 = require('./modules/setup/viewHelper');
var pageCodes = pages_1.default.map(function (p) { return p.name; });
pageCodes.push('ui.router');
var app = angular_1.module("app", pageCodes);
app.constant('menuOptions', pages_1.default.filter(function (p) { return p.showNavigation; }).map(function (p) { return p.name; }));
app.config(config_1.default);
app.directive('myApp', function () {
    return {
        restrict: 'E',
        controller: controller_1.default, resole: {},
        controllerAs: 'vm',
        templateUrl: viewHelper_1.viewTemplateUrl("shared", "_master")
    };
});
app.directive('loadContent', function () {
    return {
        restrict: "C",
        transclude: true,
        scope: { 'ngModel': '=' },
        template: "\n      <div>\n        <div class=\"loading_placeholder\" ng-show=\"!ngModel\">\n          <div class=\"loading embeded\"></div>\n        </div>\n        <ng-transclude ng-show=\"ngModel\"></ng-transclude>\n      </div>\n    "
    };
});
app.filter('danger', function () {
    return function (validation) {
        if (validation.$invalid && validation.$dirty) {
            return "has-danger";
        }
        else {
            return "";
        }
    };
});
