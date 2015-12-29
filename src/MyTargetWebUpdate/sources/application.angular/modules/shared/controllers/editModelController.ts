import modelController from './modelController'
export default class editModelController<T> extends modelController<T> {
  saveToServer(form : ng.IFormController , model : arbor.products.IProduct){
    this.$http.put<T>(this.serviceUrl, model, { params : this.params }).then(this.onServerSaved);
  }

  onServerSaved(data : ng.IHttpPromiseCallbackArg<T>){};
}
