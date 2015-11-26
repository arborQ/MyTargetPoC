import * as React from 'react';
import { Navigation, Router } from 'react-router';
import { get } from 'jquery';

export default class UsersList extends React.Component<any, {model : arbor.users.IUser[]}> {
  mixins: [Navigation]
  constructor(){
    super();
    this.state = { model : [] };
  }
  showDetails(){
    Navigation.transitionTo("userDisplay", { id : this.selectedUser.Id });
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

    return (
      <div className="card" style={{'maxWidth' :' 800px', 'margin' : '0 auto', 'marginTop': '10px'}}>
          <div className="card-block btn-group">
            <button className="btn btn-success" onClick={this.showDetails.bind(this)} disabled={!this.isSelected}>Edit</button>
            <button className="btn btn-default" disabled={!this.isSelected}>Display</button>
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
