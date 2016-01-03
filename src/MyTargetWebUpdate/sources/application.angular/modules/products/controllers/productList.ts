import { ModelController } from "arbor.controllers";

export default class ProductList extends ModelController<arbor.products.IProduct[]>{
  search : arbor.products.ISearchCriteria;

  constructor($http : ng.IHttpService, public productSizes : any) {
      super("/api/products", $http)
      this.setDefaultFilerState();
  };
  
  defaultModel(){
    return new Array<arbor.products.IProduct>();
  }
  
  setDefaultFilerState(){
    this.search = <arbor.products.ISearchCriteria>{ 
        FreeText : "",
        $showAdvanceSearch : false, 
        Size : [], 
        NetPrice : <arbor.products.IRangeCriteria>{}, 
        Quantity : <arbor.products.IRangeCriteria>{} };
  }
  
  toggleSizeFilter(size : string){
    if(this.search.Size.indexOf(size) === -1){
      this.search.Size.push(size);
    }else{
      this.search.Size = this.search.Size.filter((s : string) =>  s !== size);
    }
  }
}
