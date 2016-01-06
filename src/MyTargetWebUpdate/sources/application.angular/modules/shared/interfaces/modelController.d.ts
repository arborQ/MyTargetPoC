declare namespace __arborApp{
  export class modelController<T> {
    model : T;
    params : {};
    constructor(serviceUrl : string, $http : ng.IHttpService, params? : {});
    loadData() : void;
    defaultModel() : T;
    dataLoaded(data : T) : void;
    $isLoading : boolean;
    PageTitle : string;
  }

  export class editModelController<T> extends modelController<T>{
    saveToServer(form : ng.IFormController , model : T) : void;
    onServerSaved(data : ng.IHttpPromiseCallbackArg<T>) : void;
  }

  export class createModelController<T> extends editModelController<T>{
  }
}
declare module "arbor.controllers" {
  export import ModelController = __arborApp.modelController;
  export import EditModelController = __arborApp.editModelController;
  export import CreateModelController = __arborApp.createModelController;
}
