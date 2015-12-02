import * as angular from 'angular';
import 'angular-resource';
import { viewTemplateUrl } from '../setup/viewHelper';
import controller from './controllers/productList';

var name = "arbor-products-module";
var app = angular.module(name, [ 'ui.router', 'ngResource']);

app.config(($stateProvider : ng.ui.IStateProvider) => {
  $stateProvider.state(name, {
    url : '/products',
    resolve : {
      _service : ($resource : ng.resource.IResourceService) => $resource<string>('/api/products')
    },
    templateUrl : viewTemplateUrl('products', 'productList'),
    controller : controller,
    controllerAs : 'vm'
  });

  $stateProvider.state(`${name}.add`, { url : "/add", templateUrl : viewTemplateUrl('products', 'productDetails')});
  $stateProvider.state(`${name}.edit`, { url : "/edit/:id", templateUrl : viewTemplateUrl('products', 'productDetails')});
});

export default name;
