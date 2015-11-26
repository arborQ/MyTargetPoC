import * as React from 'react';
import { Route, Link, RouteHandler } from 'react-router'
import UserEdit from './components/users/userEdit';
import UserDisplay from './components/users/userDisplay';
import UserList from './components/users/userList';
import HomePage from './components/homePage';

export default (
  <Route name="app" path="/" handler={HomePage}>
    <Route name="userList" path="/users" handler={UserList} />
    <Route name="userDisplay" path="/users/display/:id" handler={UserDisplay} />
    <Route name="userEdit" path="/users/edit/:id" handler={UserEdit} />
  </Route>
);
