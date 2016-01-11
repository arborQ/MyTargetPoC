var angular_1 = require('angular');
function default_1($http, $q) {
    return {
        restrict: "A",
        require: 'ngModel',
        scope: { remoteValidation: "@", remoteName: '@', remoteParams: '=', ngModel: '=' },
        link: function (scope, elem, attr, ctrl) {
            ctrl.$asyncValidators[scope.remoteName] = function (modelValue, viewValue) {
                var defer = $q.defer();
                if (viewValue) {
                    var params = { value: viewValue };
                    angular_1.extend(params, scope.remoteParams);
                    $http.get(scope.remoteValidation, { params: params })
                        .success(function (data) {
                        if (data) {
                            defer.resolve(true);
                        }
                        else {
                            defer.reject();
                        }
                    });
                }
                return defer.promise;
            };
        }
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
;
