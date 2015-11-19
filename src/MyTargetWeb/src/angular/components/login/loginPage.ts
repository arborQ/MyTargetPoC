import * as angular from 'angular';
import 'angular-ui-router';

import * as PageCore from '../../../core/components/loginViewModel';


var app = angular.module(PageCore.default.Name, ['ui.router'])
                 .config(($stateProvider : ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
                   $stateProvider.state(PageCore.default.Name, {
                     url : PageCore.default.UrlPath,
                     controller : PageCore.default.ViewModel,
                     controllerAs : 'vm',
                     template : `
                      <div>login</div>
                     `
                   });
                 })

export default { name : PageCore.default.Name, isNavigation : PageCore.default.ShowNavigation };
