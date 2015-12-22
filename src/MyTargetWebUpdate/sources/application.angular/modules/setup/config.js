var applicationConfig = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', { url: '/', template: '<div>home</div>' });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = applicationConfig;
