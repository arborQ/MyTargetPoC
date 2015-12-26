import baseApplication from './modules/shared/common';
import loginController from './modules/login/login.module'
var pages = [ { name : loginController, display : "Login", showNavigation : true  } ];
var applicationConfig = ($urlRouterProvider : ng.ui.IUrlRouterProvider) => {
  $urlRouterProvider.otherwise('/login');
};
baseApplication({ pages, applicationConfig, itemDictionary : { 'arbor-login' : "Login" }});
