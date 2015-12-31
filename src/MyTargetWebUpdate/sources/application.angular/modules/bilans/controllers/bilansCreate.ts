import { CreateModelController } from 'arbor.controllers';
export default class bilansCreate extends CreateModelController<any> implements arbor.ui.IDialogPage {
  PageTitle : string;
  constructor($http : ng.IHttpService, $stateParams : ng.ui.IStateService, private $state : ng.ui.IStateService){
    super('/api/stockChange', $http, { ProductId : $stateParams["id"] });
    this.PageTitle = 'Dodaj bilans';

    this.onServerSaved = () => {
      this.$state.go('^', {}, { reload : true });
    };
  }

  defaultModel() {
    return { AddProducts : true, Quantity : 1, ProductId : this.params["ProductId"] };
  }
}
