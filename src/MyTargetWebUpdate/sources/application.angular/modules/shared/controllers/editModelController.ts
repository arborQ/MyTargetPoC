import modelController from './modelController'
export default class editModelController<T> extends modelController<T> {
    constructor(public serviceUrl : string, public $http : ng.IHttpService, toaster : ngtoaster.IToasterService, public params? : {}){
      super(serviceUrl, $http, toaster, params);
    }
    saveToServer(form: ng.IFormController, model: arbor.products.IProduct) {
        if (form.$valid) {
            this.$isLoading = true;
            this.$http.put<T>(this.serviceUrl, model, { params: this.params })
                .then(this.onServerSaved)
                .finally(() => {
                    this.$isLoading = false;
                });
        } else {
            this.toaster.warning("Czekaj!", "Formularz nie został zwalidowany.");
        }
    }

    onServerSaved(data: ng.IHttpPromiseCallbackArg<T>) { };
}
