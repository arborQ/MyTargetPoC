import 'angular-ui-router';
import { module } from 'angular';
import 'angularjs-toaster';
import * as loadingBar from "angular-loading-bar";
import applicationController from '../../modules/setup/controller';
import { viewTemplateUrl } from '../../modules/setup/viewHelper';

var registerDirectives = (app : ng.IModule) => {
  app.directive('myApp', () => {
    return <ng.IDirective>{
      restrict : 'E',
      controller : applicationController, resolve : {},
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
}
var registerFilters = (app : ng.IModule) => {
  app.filter('danger', () => {
    return (validation : angular.IFormController) : string => {
      if(validation && validation.$invalid && validation.$dirty){
        return "has-danger";
      }else{
        return "";
      }
    };
  });
};

var registerProviders = (app : ng.IModule) => {
  app.factory('arborInterceptor', ['$q','toaster', ($q : ng.IQService, toaster : ngtoaster.IToasterService) => {
    return {
      'response': function(res : any) {
      if(res.data._messageData && res.data._contentData){
        toaster.info("info", res.data._messageData);
        res.data = res.data._contentData;
      }
      return res;
    }
    };
  }]);
};
export default function registerApplication({ pages, applicationConfig, itemDictionary }){
  var pageCodes = pages.map((p : any) => p.name);
  pageCodes.push('ui.router');
  pageCodes.push('toaster');
  pageCodes.push(loadingBar);
  var app = module("app", pageCodes);
  app.config(applicationConfig);
  app.config(['$httpProvider', ($httpProvider : ng.IHttpProvider) => {
    $httpProvider.interceptors.push('arborInterceptor');
  }]);
  var menuOptions = pages.filter((p : any) => p.showNavigation).map((p : any) => p.name);
  app.constant('menuOptions', menuOptions);
  app.constant('itemDictionary', itemDictionary);

  registerDirectives(app);
  registerFilters(app);
  registerProviders(app);
}
