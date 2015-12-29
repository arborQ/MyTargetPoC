import productEdit from './productEdit'
export default class productCreate extends productEdit{
  constructor(
    $http : ng.IHttpService,
    $state : ng.ui.IStateService,
    $stateParams : ng.ui.IStateService,
    productSizes : any) {

    this.onServerSaved = (data : ng.IHttpPromiseCallbackArg<arbor.products.IProduct>) => {
      $state.go('^.edit', { id : data.data.Id})
    };
    super($http, $state, $stateParams, productSizes);
  }

  loadData(){ }
}
