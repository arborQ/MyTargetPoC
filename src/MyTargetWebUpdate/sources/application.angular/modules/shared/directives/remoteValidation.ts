import { extend } from 'angular';
export default function($http : ng.IHttpService, $q : ng.IQService) {
  return <ng.IDirective>{
    restrict : "A",
    require : 'ngModel',
    scope : { remoteValidation : "@", remoteName : '@', remoteParams : '=', ngModel : '=' },
    link : (scope : any, elem : any, attr : any, ctrl : ng.INgModelController) => {
      ctrl.$asyncValidators[scope.remoteName] = (modelValue: string, viewValue: string) => {
        var defer = $q.defer();

          if(viewValue){
            ctrl.$setValidity("remoteValidationInProgress", false);
            var params = { value : viewValue };
            extend(params, scope.remoteParams);
            $http.get(scope.remoteValidation, { params })
            .success((data : boolean) => {
                if(data){
                  defer.resolve(true);
                }else{
                  defer.reject();
                }
            }).finally(() => {
              ctrl.$setValidity("remoteValidationInProgress", true);
            });
          }

        return defer.promise;
      };
    }
  };
};
