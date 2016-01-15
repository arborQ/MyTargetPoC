var locationController_1 = require('../controllers/locationController');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function () {
    return {
        restrict: 'E',
        require: 'ngModel',
        scope: 'ngModel',
        template: '<input type="text" class="form-control" ng-model="ngModel" uib-typeahead="location for location in vm.getLocation($viewValue)" />',
        controller: locationController_1.default,
        controllerAs: 'vm'
    };
};
