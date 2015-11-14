import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/app';
import Login from './components/login';
import { UserList, UserEdit } from './components/users/usersEntry';

import * as Router from 'react-router';
import { Route, Link } from 'react-router'

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={Login}/>
    <Route name="users" path="/users" handler={UserList} />
    <Route name="users.edit" path="/users/edit" handler={UserEdit} />
  </Route>
);

Router.run(routes, function (Handler) {
  ReactDOM.render(<Handler/>, document.getElementById('wrapper'));
});
