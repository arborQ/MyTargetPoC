import { CreateModelController } from 'arbor.controllers';
export default class productCreate extends CreateModelController<arbor.products.IProduct>{
  sizes : any;
  constructor(
    $http : ng.IHttpService,
    $state : ng.ui.IStateService,
    $stateParams : ng.ui.IStateService,
    productSizes : any) {
      this.PageTitle = "Dodaj produkt";
      this.sizes = productSizes;

      this.onServerSaved = (data : ng.IHttpPromiseCallbackArg<arbor.products.IProduct>) => {
        $state.go('^.edit', { id : data.data.Id})
      };
      super('/api/products', $http);
  }

  loadData(){ }
}
