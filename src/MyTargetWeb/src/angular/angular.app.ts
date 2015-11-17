import 'reflect-metadata';
import { Component, bootstrap } from 'angular2/angular2';

@Component({
  selector : "my-app",
  template : `
    <div class="container-fluid">
      <button class="btn btn-primary">{{name}}</button>
    </div>
  `
})
export class myComponent{
  name = 'myComponent name :)';
}

bootstrap(myComponent);
