import 'angular-ui-router';
import { module } from 'angular';

import pages from './modules/setup/pages';
import applicationConfig from './modules/setup/config';
import applicationController from './modules/setup/controller';
import { viewTemplateUrl } from './modules/setup/viewHelper';

var pageCodes = pages.map((p) => p.name);
pageCodes.push('ui.router');
var app = module("app", pageCodes);

app.constant('menuOptions', pages.filter((p) => p.showNavigation).map((p) => p.name));

app.config(applicationConfig);

app.directive('myApp', () => {
  return <ng.IDirective>{
    restrict : 'E',
    controller : applicationController, resole : {},
    controllerAs : 'vm',
    templateUrl : viewTemplateUrl("shared", "_master")
  };
});

app.directive('loadContent', () => {
  return {
    restrict : "C",
    transclude : true,
    scope : { 'ngModel' : '='},
    template : `
      <div>
        <div class="loading_placeholder" ng-show="!ngModel">
          <div class="loading embeded"></div>
        </div>
        <ng-transclude ng-show="ngModel"></ng-transclude>
      </div>
    `
  };
});
