import detailsBase from './productDetails'
export default class productEdit extends detailsBase implements arbor.ui.IDialogPage {
  model : any;
  PageTitle : string;
  constructor(private $http : ng.IHttpService, private $state : any, private $stateParams : ng.ui.IStateService){
    super();
    $http.get<arbor.products.IProduct>(`/api/products`, { params : { id : $stateParams["id"] } })
      .then((result) => {
        this.PageTitle = `Edytuj produkt "${result.data.Name}"`;
        this.model = result.data;
      });
  }
  saveToServer(form : ng.IFormController , model : arbor.products.IProduct){
    this.$http.put('/api/products', model, { params : { id : this.$stateParams["id"] } })
    .then(() => {
      this.$state.go('^', {}, { reload: true });
    });
  }
}
