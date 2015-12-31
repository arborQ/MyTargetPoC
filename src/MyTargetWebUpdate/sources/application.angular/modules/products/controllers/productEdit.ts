import { EditModelController } from "arbor.controllers";

export default class productEdit extends EditModelController<arbor.products.IProduct> implements arbor.ui.IDialogPage {
  model : any;
  PageTitle : string;
  sizes : any;
  constructor(
    $http : ng.IHttpService,
    $state : ng.ui.IStateService,
    $stateParams : ng.ui.IStateService,
    productSizes : any) {
    super('/api/products', $http, { id : $stateParams["id"] });
    this.sizes = productSizes;

    this.onServerSaved = () => { $state.go('^', {}, { reload: true }); };
  }
}
