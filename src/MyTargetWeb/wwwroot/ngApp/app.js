import 'angular-ui-router';
import { module } from 'angular';
import pages from './setup.pages';
class menuController {
    constructor(menuOptions) {
        this.$inject = ['menuOptions'];
        this.menuItems = menuOptions;
    }
}
var pageCodes = pages.map((p) => p.name);
pageCodes.push('ui.router');
// alert(uiRouter);
var app = module("app", pageCodes);
app.constant('menuOptions', pages.filter((p) => p.showNavigation).map((p) => p.name));
app.config(() => { });
app.directive('myApp', () => {
    return {
        restrict: 'E',
        controller: menuController,
        controllerAs: 'vm',
        template: `
    <div>
      <nav class="navbar navbar-light bg-faded">
        <a class="navbar-brand" href="#">MyTarget</a>
        <ul class="nav navbar-nav">
          <li class="nav-item active" ng-repeat="item in vm.menuItems">
            <a class="nav-link" ui-sref="{{item}}">{{item}}</a>
          </li>
        </ul>
        </nav>
        <ui-view></ui-view>
      </div>
    `
    };
});
