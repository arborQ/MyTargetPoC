import { Component } from 'angular2/angular2';
import { LoginForm } from './loginForm';
@Component({
    directives : [LoginForm],
    template : `<login-form></login-form>`
})
export class LoginClass{

}
export var loginRoutePath = "/login";
