import detailsBase from './productDetails'
export default class productCreate extends detailsBase{
  model : ng.resource.IResource<any>;
  constructor(_service: ng.resource.IResourceClass<ng.resource.IResource<any>>, private $state : ng.ui.IStateService){
    super();
    this.model = new _service();
    this.model.$resolved = true;
    this.model["Size"] = null;
  }
  saveToServer(){
    var id = this.model.$save(() => { this.$state.go('^', null , { reload : true});  });
  }
}
