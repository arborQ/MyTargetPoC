export default class bilansCreate implements arbor.ui.IDialogPage {
  PageTitle : string;
  model : { AddProducts : boolean, Quantity : number, ProductId : number }
  constructor(private $http : ng.IHttpService, private $state : ng.ui.IStateService, $stateParams : ng.ui.IStateParamsService){
    this.model = { AddProducts : true, Quantity : 1, ProductId : $stateParams["id"] };
    this.PageTitle = 'Dodaj bilans';
  }
  
  saveToServer(form : ng.IFormController, data : any){
    console.log(form);
    console.log(data);
    if(form.$valid){
      this.$http.post('/api/stockChange', data).then(() => {
          this.$state.go('arbor-bilans-module', {}, { reload : true });
      });
    }
  }
}