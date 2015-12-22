var applicationConfig = ($stateProvider : ng.ui.IStateProvider, $urlRouterProvider : ng.ui.IUrlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', { url : '/', template : '<div>home</div>'})
}
export default applicationConfig;
