import { SortModelController } from 'arbor.controllers';
import * as moment from 'moment';
export default class bilansList extends SortModelController<Array<arbor.products.IProduct>> {

  sortFields = [
    { key : "Created", name : "Data" },
    { key : "StoredQuantity < 0", name : "Rodzaj" },
    { key : "Code", name : "Kod" },
    { key : "ProductName", name : "Nazwa" },
    { key : "NetPrice", name : "Cena" },
    { key : "StoredQuantity", name : "Ilość" },
    { key : "NetPrice*StoredQuantity", name : "Wartość" }
  ];

  constructor(private $http : ng.IHttpService, $stateParams : ng.ui.IStateParamsService, timeZoneDiff : number){
    super('/api/stockChange', $http, {
      dateFrom : new Date(parseInt($stateParams["dateFrom"])).toISOString(),
      dateTo : new Date(parseInt($stateParams["dateTo"])).toISOString()
    });
  }
}
