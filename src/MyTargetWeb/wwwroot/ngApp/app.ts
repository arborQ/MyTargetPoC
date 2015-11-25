import 'angular-ui-router';
import { module } from 'angular';

import pages from './modules/setup/pages';
import applicationConfig from './modules/setup/config';
import applicationController from './modules/setup/controller';

var pageCodes = pages.map((p) => p.name);
pageCodes.push('ui.router');
var app = module("app", pageCodes);

app.constant('menuOptions', pages.filter((p) => p.showNavigation).map((p) => p.name));

app.config(applicationConfig);

app.directive('myApp', () => {
  return <ng.IDirective>{
    restrict : 'E',
    controller : applicationController,
    controllerAs : 'vm',
    template : `
    <div>
      <nav class="navbar navbar-light bg-faded">
        <a class="navbar-brand" href="#">MyTarget</a>
        <ul class="nav navbar-nav">
          <li class="nav-item" ui-sref-active="active" ng-repeat="item in vm.menuItems">
            <a class="nav-link" ui-sref="{{item}}">{{item}}</a>
          </li>
        </ul>
        </nav>
        <ui-view></ui-view>
      </div>
    `
  };
});
