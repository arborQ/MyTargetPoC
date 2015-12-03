export default class productCreate{
  model : ng.resource.IResource<any>;
  constructor(_service: ng.resource.IResourceClass<ng.resource.IResource<any>>, private $state : ng.ui.IStateService){
    this.model = new _service();
  }
  saveToServer(){
    var id = this.model.$save(() => { this.$state.go('^', null , { reload : true});  });
  }
}
