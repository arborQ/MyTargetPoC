import { EditModelController } from 'arbor.controllers';
export default class bilansCreate extends EditModelController<any> implements arbor.ui.IDialogPage {
  PageTitle : string;
  constructor($http : ng.IHttpService, $stateParams : ng.ui.IStateService, $state : ng.ui.IStateService){
    console.log('edit?');
    super('/api/stockChange', $http, { id : $stateParams["id"] });
    this.PageTitle = 'Dodaj bilans';

    this.onServerSaved = () => {
      $state.go('^', {}, { reload : true });
    };
  }
}
