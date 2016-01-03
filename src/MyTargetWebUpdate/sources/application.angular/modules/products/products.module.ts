import * as angular from 'angular';
import 'angular-resource';
import 'angular-messages';
import { viewTemplateUrl } from '../setup/viewHelper';
import controller from './controllers/productList';
import createController from './controllers/productCreate';
import editController from './controllers/productEdit';
import changeBilnasController from '../bilans/controllers/bilansCreate';

var name = "arbor-products-module";
var app = angular.module(name, [ 'ui.router', 'ngResource', 'ngMessages']);

app.constant('productSizes', [ "XS", "S", "M","L", "XL", "XXL" ]);

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

  $stateProvider.state(`${name}.add`, { url : "/add", controller : createController, controllerAs : 'vm', templateUrl : viewTemplateUrl('products', 'productCreate')});
  $stateProvider.state(`${name}.edit`, { url : "/edit/:id", controller : editController, controllerAs : 'vm', templateUrl : viewTemplateUrl('products', 'productEdit')});
  $stateProvider.state(`${name}.change`, { url : "/change/:id", controller : changeBilnasController, controllerAs : 'vm', templateUrl : viewTemplateUrl('products', 'bilansChange')});
});


app.filter('searchProducts', () => {
  return (products : arbor.products.IProduct[], searchCriteria : arbor.products.ISearchCriteria) => {
    return (products || [])
    .filter((p : arbor.products.IProduct) => (!searchCriteria.FreeText || searchCriteria.FreeText.length  === 0) || `${p.Code} ${p.Name}`.indexOf(searchCriteria.FreeText) !== -1)
    .filter((p : arbor.products.IProduct) => (!searchCriteria.Size || searchCriteria.Size.length === 0) || searchCriteria.Size.indexOf(p.Size) !== -1)
    .filter((p : arbor.products.IProduct) => (!searchCriteria.Quantity.MinValue) || searchCriteria.Quantity.MinValue <= p.StoredQuantity)
    .filter((p : arbor.products.IProduct) => (!searchCriteria.Quantity.MaxValue) || searchCriteria.Quantity.MaxValue >= p.StoredQuantity)
    .filter((p : arbor.products.IProduct) => (!searchCriteria.NetPrice.MinValue) || searchCriteria.NetPrice.MinValue <= p.NetPrice)
    .filter((p : arbor.products.IProduct) => (!searchCriteria.NetPrice.MaxValue) || searchCriteria.NetPrice.MaxValue >= p.NetPrice);
  }
});

app.filter('sizeSelected', () => {
  return (sizes : string[], size : string) => {
    if(!sizes || !size){
      return false;
    }
    return sizes.indexOf(size) !== -1;
  };
});

app.directive('productRangeFilter', () => {
  return {
    restrict : 'E',
    scope : { from : '=', to : '=', name : '@' },
    templateUrl : viewTemplateUrl("products" , 'range')
  };
});
export default name;
