import { ModelController } from "arbor.controllers";

export default class ProductList extends ModelController<arbor.products.IProduct[]>{
  search : arbor.products.ISearchCriteria;

  constructor($http : ng.IHttpService) {
      super("/api/products", $http)
      this.search = <arbor.products.ISearchCriteria>{ $showAdvanceSearch : false };
  }
  defaultModel(){
    return new Array<arbor.products.IProduct>();
  }
}
