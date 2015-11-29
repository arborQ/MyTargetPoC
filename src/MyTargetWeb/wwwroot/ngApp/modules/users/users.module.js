var angular = require('angular');
require('angular-resource');
var userList_1 = require('./controllers/userList');
var name = "arbor-users-module";
var app = angular.module(name, ['ui.router', 'ngResource']);
app.config(function ($stateProvider) {
    $stateProvider.state(name, {
        url: '/users',
        resolve: {
            userService: function ($resource) { return $resource('/api/users'); }
        },
        template: "\n      <div class=\"card\" style=\"max-width : 800px; margin : 0 auto; margin-top: 10px;\">\n          <div class=\"card-block btn-group\">\n            <button ui-sref=\".edit({ id : vm.selectedUser.Id })\" class=\"btn btn-success\" ng-disabled=\"!vm.isSelected\">Edit</button>\n            <button class=\"btn btn-default\" ng-disabled=\"!vm.isSelected\">Display</button>\n          </div>\n          <div class=\"card-block\" ui-view>\n          </div>\n          <div class=\"card-block\">\n            <table class=\"table table-hover\">\n              <thead>\n                <tr><th>Name</th><th>Is Active</th></tr>\n              </thead>\n              <tbody>\n                <tr ng-repeat=\"user in vm.model\" ng-click=\"vm.select(user)\" ng-class=\"{ 'table-active' : user.$selected }\">\n                  <td>{{user.Login}}</td>\n                  <td>{{user.IsActive}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n    ",
        controller: userList_1.default,
        controllerAs: 'vm'
    });
    $stateProvider.state(name + ".edit", { url: "/edit/:id", template: '<div>edit</div>' });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = name;
