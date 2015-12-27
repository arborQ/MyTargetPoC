var applicationConfig = ($stateProvider : ng.ui.IStateProvider, $urlRouterProvider : ng.ui.IUrlRouterProvider) => {
    $urlRouterProvider.otherwise('/products');
}
export default applicationConfig;
