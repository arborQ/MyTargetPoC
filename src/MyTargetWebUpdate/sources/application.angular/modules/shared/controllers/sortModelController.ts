import modelController from './modelController'
export default class sortModelController<T> extends modelController<T>{
    sortOptions : string[];
    sortDirection : boolean;

    sortFields : arbor.sortFilter.ISortKeyValue[];
    constructor(public serviceUrl : string, public $http : ng.IHttpService, toaster : ngtoaster.IToasterService, public params? : {}){
      super(serviceUrl, $http, toaster, params);

      this.sortDirection = false;
      this.sortOptions = [ ];

      this.sortFields = [ { key : 'Id', name : 'Domyślny' } ]
    }
}
