import * as angular from 'angular';

var name = "arbor-users-module";
var app = angular.module(name, [ 'ui.router' ]);
app.config(($stateProvider : ng.ui.IStateProvider) => {
  $stateProvider.state(name, { url : '/users', template : `<div>users?</div>` })
});

export default name;
