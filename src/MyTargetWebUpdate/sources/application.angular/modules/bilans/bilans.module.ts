import * as angular from 'angular';
import 'angular-resource';
import 'angular-messages';
import { viewTemplateUrl } from '../setup/viewHelper';
import controller from './controllers/bilansList';
import createController from './controllers/bilansCreate';
import displayComment from './controllers/bilansComment';
import filter from './controllers/bilansFilter';
import bilansFilterOptions from './enums/BilansFilterOptions';
var name = "arbor-bilans-module";
var app = angular.module(name, [ 'ui.router', 'ngResource', 'ngMessages']);

app.config(($stateProvider : ng.ui.IStateProvider) => {
  $stateProvider.state(name, {
    url : '/bilans/:dateFrom/:dateTo',
    templateUrl : viewTemplateUrl('bilans', 'bilansFilter'),
    controller : filter,
    controllerAs : 'vm'
  });

  $stateProvider.state(`${name}.results`, { data : { title : 'Bilans' },  url : "/results", controller : controller, controllerAs : 'vm', templateUrl : viewTemplateUrl('bilans', 'bilansList')});
  // $stateProvider.state(`${name}.change`, { url : "/change/:id", controller : createController, controllerAs : 'vm', templateUrl : viewTemplateUrl('bilans', 'bilansCreate')});
  $stateProvider.state(`${name}.results.comment`, { data : { isModal : true, title : 'Zmiana w magazynie' },  url : "/comment/:commentId", controller : displayComment, controllerAs : 'vm', templateUrl : viewTemplateUrl('bilans', 'bilansComment')});
});

app.filter('searchBilans', () => {
  return (bilansList : arbor.bilans.IBilans[], searchCriteria : arbor.bilans.IBilansFilter) => {
    console.log(searchCriteria);
    var searchText = (searchCriteria.FreeText || "").toLowerCase();
    var result = (bilansList || [])
    .filter((p : arbor.bilans.IBilans) => (searchText.length  === 0) || `${p.ProductName}`.toLowerCase().indexOf(searchText) !== -1)
    .filter((p : arbor.bilans.IBilans) => (!searchCriteria.Type) || searchCriteria.Type === bilansFilterOptions.All || p.StoredQuantity === 0 || (searchCriteria.Type === bilansFilterOptions.Buy && p.StoredQuantity > 0) || (searchCriteria.Type === bilansFilterOptions.Sell && p.StoredQuantity < 0))
    .filter((p : arbor.bilans.IBilans) => (!searchCriteria.Quantity.MinValue) || searchCriteria.Quantity.MinValue <= Math.abs(p.StoredQuantity))
    .filter((p : arbor.bilans.IBilans) => (!searchCriteria.Quantity.MaxValue) || searchCriteria.Quantity.MaxValue >= Math.abs(p.StoredQuantity))
    .filter((p : arbor.bilans.IBilans) => (!searchCriteria.NetPrice.MinValue) || searchCriteria.NetPrice.MinValue <= p.NetPrice)
    .filter((p : arbor.bilans.IBilans) => (!searchCriteria.NetPrice.MaxValue) || searchCriteria.NetPrice.MaxValue >= p.NetPrice);
    return result;
  };
});

export default name;
