import { module } from 'angular';
import  pages  from './appSettup';
import appControllerClass from './appController';
var appName = 'app';

var app = module(appName, pages.map((m) => m.name));

app.controller('appCtr', appControllerClass);

app.directive('myApp', ()=> {
  return {
    scope : { myNavigations : '=' },
    restrict : 'E',
    template : `
    <div>
      <nav class="navbar navbar-light bg-faded">
        <a class="navbar-brand" href="#">MyTarget</a>
        <ul class="nav navbar-nav">
          <li class="nav-item" ng-repeat="nav in myNavigations">
            <a class="nav-link" href="#/{{nav}}">{{nav}}</a>
          </li>
        </ul>
      </nav>
      <div ui-view></div>
    </div>
    `
  };
});
