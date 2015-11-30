require('angular-ui-router');
var angular_1 = require('angular');
var pages_1 = require('./modules/setup/pages');
var config_1 = require('./modules/setup/config');
var controller_1 = require('./modules/setup/controller');
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
        template: "\n    <div>\n      <nav class=\"navbar navbar-light bg-faded\">\n        <a class=\"navbar-brand\" id=\"logo\" href=\"#\"><span>JustMove</span></a>\n        <ul class=\"nav navbar-nav\">\n          <li class=\"nav-item\" ui-sref-active=\"active\" ng-repeat=\"item in vm.menuItems\">\n            <a class=\"nav-link\" ui-sref=\"{{item}}\">{{item}}</a>\n          </li>\n        </ul>\n        </nav>\n        <ui-view></ui-view>\n      </div>\n    "
    };
});
