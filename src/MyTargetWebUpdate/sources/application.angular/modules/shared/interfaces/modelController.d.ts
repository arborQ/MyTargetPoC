declare namespace __arborApp{
  export class modelController<T> {
    model : T;
    params : {};
    constructor(serviceUrl : string, $http : ng.IHttpService, toaster : ngtoaster.IToasterService, params? : {});
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

  export class sortModelController<T>  extends modelController<T>{
    sortOptions : string[];
    sortDirection : boolean;

    sortFields : arbor.sortFilter.ISortKeyValue[];
  }
}
declare module "arbor.controllers" {
  export import ModelController = __arborApp.modelController;
  export import EditModelController = __arborApp.editModelController;
  export import CreateModelController = __arborApp.createModelController;
  export import SortModelController = __arborApp.sortModelController;
}
