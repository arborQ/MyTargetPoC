import * as angular from 'angular';
import 'angular-resource';
import { viewTemplateUrl } from '../setup/viewHelper';
import controller from './controllers/productList';
import createController from './controllers/productCreate';
import editController from './controllers/productEdit';

var name = "arbor-products-module";
var app = angular.module(name, [ 'ui.router', 'ngResource']);

app.config(($stateProvider : ng.ui.IStateProvider) => {
  $stateProvider.state(name, {
    url : '/products',
    resolve : {
      _service : ($resource : ng.resource.IResourceService, $stateParams : ng.ui.IStateService) => $resource<string>('/api/products', null, { 'update': { method:'PUT' }})
    },
    templateUrl : viewTemplateUrl('products', 'productList'),
    controller : controller,
    controllerAs : 'vm'
  });

  $stateProvider.state(`${name}.add`, { url : "/add", controller : createController, controllerAs : 'vm', templateUrl : viewTemplateUrl('products', 'productDetails')});
  $stateProvider.state(`${name}.edit`, { url : "/edit/:id", controller : editController, controllerAs : 'vm', templateUrl : viewTemplateUrl('products', 'productDetails')});
});

export default name;
