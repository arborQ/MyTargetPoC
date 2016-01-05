import { ModelController } from 'arbor.controllers';

export default class bilansComment extends ModelController<any>{
  constructor($http : ng.IHttpService, $stateParams : ng.ui.IStateService){
    super('/api/stockChangeComment', $http, { id : $stateParams["commentId"] });
    this.PageTitle = 'Komentarz';
  }
}
