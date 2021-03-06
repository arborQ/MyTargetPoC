import { SortModelController } from 'arbor.controllers';
import * as moment from 'moment';
import options from '../enums/BilansFilterOptions';
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
  search : arbor.bilans.IBilansFilter;
  constructor(private $http : ng.IHttpService, $stateParams : ng.ui.IStateParamsService, toaster : ngtoaster.IToasterService, timeZoneDiff : number){
    super('/api/stockChange', $http, toaster, {
      dateFrom : new Date(parseInt($stateParams["dateFrom"])).toISOString(),
      dateTo : new Date(parseInt($stateParams["dateTo"])).toISOString()
    });

    this.search = { Type : options.All, NetPrice : {}, Quantity : {}  };
  }
}
