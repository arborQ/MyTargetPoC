export default class productEdit{
  model : any;
  constructor(_service: any, private $state : any, $stateParams : any){
    console.log('create');
    this.model = _service.get({ id : $stateParams.id });
  }
  saveToServer(){
    console.log(this.model);
    this.model.$save((id : number) => { console.log(id); this.$state.go('^');  });
  }
}
