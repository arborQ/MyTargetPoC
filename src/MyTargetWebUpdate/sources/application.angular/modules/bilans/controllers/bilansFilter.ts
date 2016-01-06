import * as moment from 'moment';
export default class bilansFilter {
  model : arbor.bilans.IBilansFilter;
  constructor($stateParams : ng.ui.IStateParamsService, private $state : ng.ui.IStateService, public dateFormat : string){
    var from = $stateParams["dateFrom"] ? new Date(parseInt($stateParams["dateFrom"])) : moment().add(-1, "day").toDate();
    var to = $stateParams["dateTo"] ? new Date(parseInt($stateParams["dateTo"])) : moment().toDate();
    this.model = {
        dateFrom : from,
        dateTo : to,
       type : { Add : true }
    };
  }

  navigateToResults(form : ng.IFormController){
    if(form.$valid){
      var from = moment(this.model.dateFrom).startOf("day").toDate().toISOString();
      var to = moment(this.model.dateTo).endOf("day").toDate().toISOString();
      this.$state.go('arbor-bilans-module.results', {
        dateFrom : Date.parse(from),
        dateTo : Date.parse(to),
        search : this.model.search
      }, { reload : true });
    }
  }
}
