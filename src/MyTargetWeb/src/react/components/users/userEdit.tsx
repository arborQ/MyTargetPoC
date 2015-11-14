import * as React from 'react';
import { TextField, RaisedButton, Toggle } from 'material-ui';
import { Dialog, Card, CardHeader, CardActions, CardText, Avatar } from 'material-ui';

export default class UserEdit extends React.Component<any, any>{
  handleChange : (event : any) => void;
  constructor(){
    super();
    this.state = { firstName : 'Lukasz', lastName : 'Wojcik', isActive : "true" };
    this.handleChange = (event : React.FormEvent) => {
      var targetId = event.target["id"];
      if(targetId){
        var state = this.state;
        state[targetId] = event.target["value"];
        this.setState(state);
      }
    };

    this.render = () => {
      var user = this.state;

      return (
        <Card>
          <CardHeader
            title="Edit user"
            subtitle={`Edit ${user.firstName} user`}
            avatar={<Avatar>E</Avatar>}/>
          <CardText>
            <TextField id="firstName" value={user.firstName} onChange={this.handleChange} floatingLabelText="First name" fullWidth={true} />
            <TextField id="lastName" value={user.lastName} onChange={this.handleChange} floatingLabelText="Last name" fullWidth={true} />
            <Toggle value={user.isActive} label="Is active?"/>
          </CardText>
          <CardActions>
            <RaisedButton label="Save" secondary={true} />
            <RaisedButton label="Cancel" secondary={false} />
          </CardActions>
        </Card>
      );
    }
  }

}
