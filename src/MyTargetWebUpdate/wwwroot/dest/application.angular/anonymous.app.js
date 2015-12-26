var common_1 = require('./modules/shared/common');
var login_module_1 = require('./modules/login/login.module');
var pages = [{ name: login_module_1.default, display: "Login", showNavigation: true }];
var applicationConfig = function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
};
common_1.default({ pages: pages, applicationConfig: applicationConfig, itemDictionary: { 'arbor-login': "Login" } });
