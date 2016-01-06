import { ModelController } from 'arbor.controllers';
import * as moment from 'moment';
export default class bilansList extends ModelController<Array<arbor.products.IProduct>> {
  constructor(private $http : ng.IHttpService, $stateParams : ng.ui.IStateParamsService, timeZoneDiff : number){
    super('/api/stockChange', $http, {
      dateFrom : new Date(parseInt($stateParams["dateFrom"])).toISOString(),
      dateTo : new Date(parseInt($stateParams["dateTo"])).toISOString()
    });
  }
}
