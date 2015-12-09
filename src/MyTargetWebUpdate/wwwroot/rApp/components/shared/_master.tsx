import * as React from 'react';
import { Paper, Avatar, FlatButton } from 'material-ui';
import { Link } from 'react-router';
export default class reactApplication extends React.Component<any, any>{
  private style = { zIndex : 10, width : '100%', height : '56px', backgroundColor : '#f7f7f9', position : 'fixed', top : 0, fontSize : '1.25rem' };
  render(){
    return (
      <div>
        <Paper style={this.style}>
          <Link to="/">
            <Avatar src="/images/logo_54.png" />
            <span>Just Move</span>
          </Link>
          <Link to="/products">Produkty</Link>
        </Paper>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
