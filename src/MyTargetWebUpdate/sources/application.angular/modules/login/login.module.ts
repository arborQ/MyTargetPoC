import * as angular from 'angular';
import 'angular-resource';
import 'angular-messages';
import 'angular-storage';
import 'angular-jwt';
import 'auth0-angular';
import { viewTemplateUrl } from '../setup/viewHelper';
import loginController from './controllers/loginPage';
var name = "arbor-login";
var app = angular.module(name, [ 'ui.router', 'ngResource', 'ngMessages', 'auth0', 'angular-storage', 'angular-jwt']);

app.config(($stateProvider : ng.ui.IStateProvider, authProvider : any) => {

  authProvider.init({
    domain: 'YOUR_NAMESPACE',
    clientID: 'YOUR_CLIENT_ID'
  });

  $stateProvider.state(name, {
    url : '/login',
    templateUrl : viewTemplateUrl('login', 'loginForm'),
    controller : loginController,
    controllerAs : 'vm'
  });
});


export default name;
