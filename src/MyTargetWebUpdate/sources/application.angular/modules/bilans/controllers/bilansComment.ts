import { ModelController } from 'arbor.controllers';

export default class bilansComment extends ModelController<any>{
  constructor($http : ng.IHttpService, $stateParams : ng.ui.IStateService, private arborDateFilter : any){
    super('/api/stockChangeComment', $http, { id : $stateParams["commentId"] });
    this.PageTitle = 'Komentarz';
  }

  dataLoaded(data : any) : void {
console.log(this.arborDateFilter(data.Created));
    this.PageTitle = `Zmiana dla ${data.ProductName} ( ${this.arborDateFilter(data.Created)} )`;
  }
}
