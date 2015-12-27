import detailsBase from './productDetails'
export default class productCreate extends detailsBase{
  model : arbor.products.IProduct;
  constructor(private $http : ng.IHttpService, private $state : ng.ui.IStateService){
    super();
    this.model = <arbor.products.IProduct>{};
    this.model.Size = null;
  }
  saveToServer(form : ng.IFormController , model : arbor.products.IProduct){
      this.$http.post<number>("/api/products", model).then((id) => {
          this.$state.go('^.edit', { id : id.data });
      });
  }
}
