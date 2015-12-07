export default class ProductList{
    model : ng.resource.IResourceArray<any>;
    constructor(_service: any) {
        this.model = _service.query();
    }

}
