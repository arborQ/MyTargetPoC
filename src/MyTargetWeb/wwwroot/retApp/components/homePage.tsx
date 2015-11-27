import * as React from 'react';
import { Route, Link, RouteHandler } from 'react-router'
export default class HomePage extends React.Component<any, any> {
  render(){
    return (
      <div>
        <nav id="navbar" className="navbar navbar-light bg-faded">
          <a className="navbar-brand" href="#">MyTarget</a>
          <ul className="nav navbar-nav">
            <li className="nav-item" ui-sref-active="active">
              <Link to="userList" className="nav-link">Users</Link>
            </li>
          </ul>
          </nav>
          <RouteHandler/>
        </div>
    );
  }
}
