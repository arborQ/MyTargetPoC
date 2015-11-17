import { Component, bootstrap } from 'angular2/angular2';

@Component({
  selector : "my-app",
  template : `
    <div>
      <span>{{name}}</span>
    </div>
  `
})
export class myComponent{
  name = 'myComponent name :)';
}

bootstrap(myComponent);
