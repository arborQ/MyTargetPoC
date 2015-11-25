import * as angular from 'angular';
import 'angular-resource';
import controller from './controllers/userList';
var name = "arbor-users-module";
var app = angular.module(name, ['ui.router', 'ngResource']);
app.config(($stateProvider) => {
    $stateProvider.state(name, {
        url: '/users',
        resolve: {
            userService: ($resource) => $resource('/api/users')
        },
        template: `
      <div class="card" style="max-width : 800px; margin : 0 auto; margin-top: 10px;">
          <div class="card-block btn-group">
            <button ui-sref=".edit({ id : vm.selectedUser.Id })" class="btn btn-success" ng-disabled="!vm.isSelected">Edit</button>
            <button class="btn btn-default" ng-disabled="!vm.isSelected">Display</button>
          </div>
          <div class="card-block" ui-view>
          </div>
          <div class="card-block">
            <table class="table table-hover">
              <thead>
                <tr><th>Name</th><th>Is Active</th></tr>
              </thead>
              <tbody>
                <tr ng-repeat="user in vm.model" ng-click="vm.select(user)" ng-class="{ 'table-active' : user.$selected }">
                  <td>{{user.Login}}</td>
                  <td>{{user.IsActive}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,
        controller: controller,
        controllerAs: 'vm'
    });
    $stateProvider.state(`${name}.edit`, { url: "/edit/:id", template: '<div>edit</div>' });
});
export default name;
