export default class productEdit{
  model : any;
  constructor(_service: any, private $state : any, private $stateParams : ng.ui.IStateService){
    this.model = _service.get({ id : $stateParams["id"] });
  }
  saveToServer(){
    console.log(this.model.$update);
    this.model.$update({id : this.$stateParams["id"]}, (id : number) => { console.log(id); this.$state.go('^');  });
  }
}
