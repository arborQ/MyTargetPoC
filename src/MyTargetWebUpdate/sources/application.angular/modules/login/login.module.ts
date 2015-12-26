import * as angular from 'angular';
import 'angular-resource';
import 'angular-messages';
import { viewTemplateUrl } from '../setup/viewHelper';
import loginController from './controllers/loginPage';
var name = "arbor-login";
var app = angular.module(name, [ 'ui.router', 'ngResource', 'ngMessages']);

app.config(($stateProvider : ng.ui.IStateProvider) => {
  $stateProvider.state(name, {
    url : '/login',
    templateUrl : viewTemplateUrl('login', 'loginForm'),
    controller : loginController,
    controllerAs : 'vm'
  });
});


export default name;
