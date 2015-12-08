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

app.directive('loadingPanel', () => {
  return {
    restrict : 'C',
    transclude : true,
    require : 'ngModel',
    scope : true,
    link : (s, e, attrs) => {
        s.$watch(attrs["ngModel"], (n : boolean) => {
            s["isLoading"] = !n;
        });
    },
    template : `
      <div>
        <div class="loading_placeholder" ng-show="isLoading">
          <div class="loading secondary"></div>
        </div>
        <ng-transclude ng-show="!isLoading"></ng-transclude>
      </div>
    `,
  };
})
