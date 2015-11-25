import * as angular from 'angular';
var app = angular.module("app", [ ]);
app.directive('myApp', () => {
  return <ng.IDirective>{
    restrict : 'E',
    template : `
    <nav class="navbar navbar-light bg-faded">
      <a class="navbar-brand" href="#">MyTarget</a>
      <ul class="nav navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
      </ul>
      </nav>
    `
  };
});
