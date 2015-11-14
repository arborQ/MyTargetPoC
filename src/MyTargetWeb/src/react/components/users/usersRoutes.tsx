import * as React from 'react';
import { Route } from 'react-router'
import { UserList, UserEdit } from './usersEntry';
export default class UserRoute extends React.Component<any, any>{
  render() {
     return (
       <Route name="users" path="/users" handler={UserList}>
         <Route name="users.edit" path="edit" handler={UserEdit} />
       </Route>
     );
  }
}
