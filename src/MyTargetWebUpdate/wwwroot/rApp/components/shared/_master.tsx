import * as React from 'react';
import { Paper, Avatar } from 'material-ui';
export default class reactApplication extends React.Component<any, any>{
  private style = { width : '100%', height : '56px', backgroundColor : '#f7f7f9', position : 'fixed', top : 0, fontSize : '1.25rem' };
  render(){
    return (
      <div>
        <Paper style={this.style}>
          <Avatar src="/images/logo_54.png" /> Just Move
        </Paper>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
