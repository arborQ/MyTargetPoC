import 'reflect-metadata';
import { Component, View, bootstrap, provide, FORM_DIRECTIVES, COMMON_DIRECTIVES } from 'angular2/angular2';
import {
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  RouteConfig,
  Location,
  LocationStrategy,
  HashLocationStrategy
} from 'angular2/router';

import { LoginClass, loginRoutePath } from './components/login/loginPage';

@RouteConfig([
  { path: loginRoutePath, component : LoginClass }
])
@Component({
  selector : "my-app",
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, COMMON_DIRECTIVES],
  template : `
    <nav class="navbar navbar-light bg-faded">
      <a class="navbar-brand" href="#">MyTarget</a>
      <ul class="nav navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      </nav>
      <div class="container-fluid" style="padding-top : 10px;">
        <input type="text" [(ng-model)]="name" />
          {{name}}
      </div>
`
})
export class myComponent{
  name = 'myComponent name :)';
}
//<router-outlet></router-outlet>

bootstrap(myComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
