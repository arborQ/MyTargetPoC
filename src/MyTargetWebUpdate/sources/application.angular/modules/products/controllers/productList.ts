export default class ProductList{
  model : ng.resource.IResourceArray<any>;
  search : arbor.products.ISearchCriteria;

    constructor(_service: any) {
        this.search = <arbor.products.ISearchCriteria>{ $showAdvanceSearch : false };
        this.model = _service.query();
    }

}
