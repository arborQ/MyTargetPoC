declare namespace __arborApp{
  export class modelController<T> {
    constructor(serviceUrl : string, $http : ng.IHttpService, params? : {});
    loadData() : void;
    defaultModel() : T;
  }

  export class editModelController<T> extends modelController<T>{
    saveToServer(form : ng.IFormController , model : T) : void;
    onServerSaved(data : ng.IHttpPromiseCallbackArg<T>) : void;
  }
}
declare module "arbor.controllers" {
  export import ModelController = __arborApp.modelController;
  export import EditModelController = __arborApp.editModelController;
}
