export default class productCreate{
  model : any;
  constructor(_service: any, private $state : any){
    console.log('create');
    this.model = new _service();
  }
  saveToServer(){
    console.log(this.model);
    this.model.$save((id : number) => { console.log(id); this.$state.go(`^.edit({ id : ${id} })`);  });
  }
}
