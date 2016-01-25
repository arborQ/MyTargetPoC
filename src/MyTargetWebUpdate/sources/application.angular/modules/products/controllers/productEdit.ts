import { EditModelController } from "arbor.controllers";

export default class productEdit extends EditModelController<arbor.products.IProduct> implements arbor.ui.IDialogPage {
  model : any;
  sizes : any;
  constructor(
    $http : ng.IHttpService,
    $state : ng.ui.IStateService,
    $stateParams : ng.ui.IStateService,
    toaster : ngtoaster.IToasterService,
    productSizes : any) {
    super('/api/products', $http, toaster, { id : $stateParams["id"] });
    this.PageTitle = "Edytuj produkt";
    this.sizes = productSizes;
    this.onServerSaved = ()=>{
      $state.go('^', {}, { reload : true });
    }
  }


}
