import * as React from 'react';
import { Link } from 'react-router';
import { get } from 'jquery';
export default class UsersDisplay extends React.Component<{ params : { id : number } }, {model : arbor.users.IUser }> {
  constructor(){
    super();
    this.state = { model : null };
  }

  renderForm(){
    return (
      <div className="card-text">
        <label>Login: {this.state.model.Login}</label>
      </div>
    );
  }

  formActions(){
    return [
      (<Link to="userList" className="btn btn-default">Return</Link>)
    ];
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
      <div className="card" style={{'maxWidth' :' 800px', 'margin' : '0 auto', 'marginTop': '10px'}}>
        <div className="card-block">
          <h3 className="card-title">User '{this.state.model.Login}' data</h3>
          {this.renderForm()}
          <div className="card-block">
            {this.formActions()}
          </div>
        </div>
      </div>
    );
  }
}
