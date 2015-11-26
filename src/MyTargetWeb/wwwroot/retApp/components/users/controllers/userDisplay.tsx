import * as React from 'react';
import { Link } from 'react-router';
import { get } from 'jquery';
export default class UsersDisplay extends React.Component<{ params : { id : number } }, {model : arbor.users.IUser }> {
  constructor(){
    super();
    this.state = { model : null };
  }
  componentDidMount(){
    get(`/api/users/${this.props.params.id}`, (user : arbor.users.IUser) => {
      this.setState({ model : user })
    });
  }
  render(){
    if(!this.state.model){
      return <div>Loading user data...</div>
    }
    return (
      <div className="card">
        <div className="card-block">
          <h3 className="card-title">User '{this.state.model.Login}' data</h3>
          <div className="card-text">
            <label>Login: {this.state.model.Login}</label>
          </div>
          <div className="card-block">
            <Link to="userList" className="btn btn-default">Return</Link>
          </div>
        </div>
      </div>
    );
  }
}
