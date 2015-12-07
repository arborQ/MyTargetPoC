export default class ProductList{
  model : ng.resource.IResourceArray<any>;
  search : { $showAdvanceSearch : boolean }
    constructor(_service: any) {
        this.search = { $showAdvanceSearch : false };
        this.model = _service.query();
    }

}
