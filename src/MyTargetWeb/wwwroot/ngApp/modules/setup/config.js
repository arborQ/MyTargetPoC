var applicationConfig = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', { url: '/', template: '<div>home</div>' });
};
export default applicationConfig;
