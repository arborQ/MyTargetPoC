import detailsBase from './productDetails'
export default class productEdit extends detailsBase{
  model : any;
  constructor(_service: any, private $state : any, private $stateParams : ng.ui.IStateService){
    super();
    this.model = _service.get({ id : $stateParams["id"] });
  }
  saveToServer(){
    this.model.$update({id : this.$stateParams["id"]}, (id : number) => { console.log(id); this.$state.go('^');  });
  }
}
