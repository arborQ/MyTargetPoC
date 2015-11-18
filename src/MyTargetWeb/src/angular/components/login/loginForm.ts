import { Component } from 'angular2/angular2';
@Component({
    selector : "login-form",
    template : `
    <div><button (click)="onClickMe()">on click</button></div>
`
})
export class LoginForm{
  text = 'test';
  onClickMe = () => {
    alert(this.text);
  }
}
