import controller from '../controllers/locationController'
export default () =>{
  return <ng.IDirective>{
    restrict : 'E',
    require : 'ngModel',
    scope : 'ngModel',
    template : '<input type="text" class="form-control" ng-model="ngModel" uib-typeahead="location for location in vm.getLocation($viewValue)" />',
    controller : controller,
    controllerAs : 'vm'
  };
}
