export default class modelController<T>{
  model : T;
  constructor(public serviceUrl : string, public $http : ng.IHttpService, public params? : {}){
    this.model = this.defaultModel();
    this.loadData();
  }

  loadData(){
    return this.$http.get<T>(this.serviceUrl, { params : this.params })
      .then((result) => {
        this.model = result.data;
        return result;
      });
  }

  defaultModel() : T {
    return <T>{ };
  }
}
