import * as React from 'react';
import { Link, Router } from 'react-router';
import { get } from 'jquery';

export default class UsersList extends React.Component<any, {model : arbor.users.IUser[]}> {
  constructor(){
    super();
    this.state = { model : [] };
  }

  select(user : arbor.ui.ISelectable){

    var stateModel = this.state.model;

    stateModel.forEach((item : arbor.ui.ISelectable) => {
      if(item !== user){
        item.$selected = false;
      }else{
        item.$selected = !item.$selected;
      }
    });

    this.setState({ model : stateModel });
  };

  get selectedUser() : arbor.users.IUser { return this.state.model.filter((u) => u.$selected)[0]; }
  get isSelected() : boolean  { return !!this.selectedUser; }

  componentDidMount() {
    get("/api/users", (users : arbor.users.IUser[]) => {
      this.setState({ model : users });
    });
  }

  render(){
    var rows = this.state.model
    .map((user : arbor.users.IUser) => (
      <tr onClick={this.select.bind(this, user)} className={user.$selected ? "table-active" : "" } key={user.Id}>
        <td>{user.Login}</td>
        <td>{user.IsActive ? "True" : "False"}</td>
      </tr>
    ));

    var actions = this.isSelected ? [
      (<Link to="userDisplay" params={{ id : this.selectedUser.Id }} className="btn btn-success" disabled={!this.isSelected}>Display</Link>),
      (<Link to="userEdit" params={{ id : this.selectedUser.Id }} className="btn btn-default" disabled={!this.isSelected}>Edit</Link>)
    ] : [
      (<button className="btn btn-success" disabled={true}>Display</button>),
      (<button className="btn btn-default" disabled={true}>Edit</button>)
    ];

    return (
      <div className="card" style={{'maxWidth' :' 800px', 'margin' : '0 auto', 'marginTop': '10px'}}>
          <div className="card-block btn-group">
            {actions}
          </div>
          <div className="card-block" ui-view>
          </div>
          <div className="card-block">
            <table className="table table-hover">
              <thead>
                <tr><th>Name</th><th>Is Active</th></tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </table>
          </div>
        </div>);
  }
}
