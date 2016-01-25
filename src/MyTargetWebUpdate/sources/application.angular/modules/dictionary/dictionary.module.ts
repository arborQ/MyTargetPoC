import * as angular from 'angular';
import 'angular-messages';
import { viewTemplateUrl } from '../setup/viewHelper';
import controller from './controllers/dictionaryList';

var name = "arbor-dictionary-module";
var app = angular.module(name, [ 'ui.router', 'ngMessages']);

app.config(($stateProvider : ng.ui.IStateProvider) => {
  $stateProvider.state(name, {
    url : '/dictionary',
    templateUrl : viewTemplateUrl('dictionary', 'dictionary'),
    controller : controller,
    controllerAs : 'vm',
    data : { title : 'Ustawienia' },
  });


  $stateProvider.state(`${name}.group`, { data : { isModal : true , title : 'Grupa ustawień'}, url : "/group/:id", controller : () => {}, controllerAs : 'vm', templateUrl : viewTemplateUrl('dictionary', 'dictionaryGroup')});

});


export default name;
