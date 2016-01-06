export default class modelController<T>{
  model : T;
  $isLoading : boolean;
  public PageTitle : string;
  constructor(public serviceUrl : string, public $http : ng.IHttpService, public params? : {}){
    this.model = this.defaultModel();
    this.loadData();
  }

  loadData(){
    this.$isLoading = true;
    this.$http.get<T>(this.serviceUrl, { params : this.params })
      .then((result) => {
        this.model = result.data;
        this.dataLoaded(result.data);
      }).finally(() => {
        this.$isLoading = false;
      });
  }
  dataLoaded(data : T) : void{ }
  defaultModel() : T {
    return <T>{ };
  }
}
