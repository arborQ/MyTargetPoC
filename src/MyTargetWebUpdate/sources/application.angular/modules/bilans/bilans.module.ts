import * as angular from 'angular';
import 'angular-resource';
import 'angular-messages';
import { viewTemplateUrl } from '../setup/viewHelper';
import controller from './controllers/bilansList';
import createController from './controllers/bilansCreate';
import displayComment from './controllers/bilansComment';
import filter from './controllers/bilansFilter';

var name = "arbor-bilans-module";
var app = angular.module(name, [ 'ui.router', 'ngResource', 'ngMessages']);

app.config(($stateProvider : ng.ui.IStateProvider) => {
  $stateProvider.state(name, {
    url : '/bilans/:dateFrom/:dateTo',
    templateUrl : viewTemplateUrl('bilans', 'bilansFilter'),
    controller : filter,
    controllerAs : 'vm'
  });

  $stateProvider.state(`${name}.results`, { url : "/results", controller : controller, controllerAs : 'vm', templateUrl : viewTemplateUrl('bilans', 'bilansList')});
  // $stateProvider.state(`${name}.change`, { url : "/change/:id", controller : createController, controllerAs : 'vm', templateUrl : viewTemplateUrl('bilans', 'bilansCreate')});
  $stateProvider.state(`${name}.results.comment`, { url : "/comment/:commentId", controller : displayComment, controllerAs : 'vm', templateUrl : viewTemplateUrl('bilans', 'bilansComment')});
});

export default name;
