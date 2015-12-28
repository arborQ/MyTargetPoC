import * as angular from 'angular';
import 'angular-resource';
import 'angular-messages';
import { viewTemplateUrl } from '../setup/viewHelper';
import controller from './controllers/bilansList';
import createController from './controllers/bilansCreate';

var name = "arbor-bilans-module";
var app = angular.module(name, [ 'ui.router', 'ngResource', 'ngMessages']);

app.config(($stateProvider : ng.ui.IStateProvider) => {
  $stateProvider.state(name, {
    url : '/bilans/:id',
    resolve : {
      _serviceUrl : () => 'api/StockChange'
    },
    templateUrl : viewTemplateUrl('bilans', 'bilansList'),
    controller : controller,
    controllerAs : 'vm'
  });
  
  $stateProvider.state(`${name}.change`, { url : "/change/:id", controller : createController, controllerAs : 'vm', templateUrl : viewTemplateUrl('bilans', 'bilansCreate')});
});

export default name;