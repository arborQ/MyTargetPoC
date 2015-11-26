import * as React from 'react';
import { Route, Link, RouteHandler } from 'react-router'
import UserDisplay from './components/users/controllers/userDisplay';
import UserList from './components/users/controllers/userList';
import HomePage from './components/homePage';

export default (
  <Route name="app" path="/" handler={HomePage}>
    <Route name="userList" path="/users" handler={UserList} />
    <Route name="userDisplay" path="/users/display/:id" handler={UserDisplay} />
  </Route>
);
