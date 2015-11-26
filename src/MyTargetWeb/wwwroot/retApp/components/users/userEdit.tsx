import * as React from 'react';
import { Link } from 'react-router';
import userDisplay from './userDisplay';

export default class UsersEdit extends userDisplay {
  constructor(){
    super();
  }
  formActions(){
    var baseActions = super.formActions();
    baseActions.unshift(<button className="btn btn-success">Save</button>);
    return baseActions;
  }
  renderForm(){
    return (
      <form>
        <fieldset className="form-group">
          <label htmlFor="login">Login</label>
          <input type="text" className="form-control" id="login" value={this.state.model.Login} />
        </fieldset>
      </form>
    );
  }
}
