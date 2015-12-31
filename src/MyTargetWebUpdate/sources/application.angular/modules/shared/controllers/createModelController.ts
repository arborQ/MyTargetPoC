import modelController from './modelController'
export default class createModelController<T> extends modelController<T> {
  saveToServer(form : ng.IFormController , model : arbor.products.IProduct){
    this.$isLoading = true;
    this.$http.post<T>(this.serviceUrl, model, { params : this.params })
      .then(this.onServerSaved)
      .finally(() => {
        this.$isLoading = false;
      });
  }
  loadData(){ }
  onServerSaved(data : ng.IHttpPromiseCallbackArg<T>){};
}
