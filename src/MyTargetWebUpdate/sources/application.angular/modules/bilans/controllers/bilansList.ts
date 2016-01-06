import { ModelController } from 'arbor.controllers';
import * as moment from 'moment';
export default class bilansList extends ModelController<Array<arbor.products.IProduct>> {
  constructor(private $http : ng.IHttpService, $stateParams : ng.ui.IStateParamsService, timeZoneDiff : number){
    super('/api/stockChange', $http, {
      dateFrom : moment(new Date(parseInt($stateParams["dateFrom"]))).add(timeZoneDiff, "minutes").toDate(),
      dateTo : moment(new Date(parseInt($stateParams["dateTo"]))).add(timeZoneDiff, "minutes").add(1, "day").toDate()
    });
  }
}
