export default class modelController<T>{
  model : T;
  $isLoading : boolean;
  constructor(public serviceUrl : string, public $http : ng.IHttpService, public params? : {}){
    this.model = this.defaultModel();
    this.loadData();
  }

  loadData(){
    this.$isLoading = true;
    this.$http.get<T>(this.serviceUrl, { params : this.params })
      .then((result) => {
        this.model = result.data;
      }).finally(() => {
        this.$isLoading = false;
      });
  }

  defaultModel() : T {
    return <T>{ };
  }
}
