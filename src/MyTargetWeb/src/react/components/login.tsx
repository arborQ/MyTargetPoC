import * as React from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { Card, CardHeader, CardActions, CardText, Avatar } from 'material-ui';
// import ArTextBox from './ui/textbox';
interface ILoginState{
  value : string;
};

export default class LoginClass extends React.Component<any, ILoginState>{
  handleChange : (event : any) => void;
  constructor(){
    super();
    this.handleChange = (event : any) => {
      this.setState({ value : event.target["value"] });
    };

    this.state = {value : 'test'};
    this.render = () => {
      var value = this.state.value;
      return (
        <form>
          <Card>
          <CardHeader
            title="Logi in"
            subtitle="Enter login and password"
            avatar={<Avatar>L</Avatar>}/>
            <CardText>
              <TextField value={value} onChange={this.handleChange} floatingLabelText="Login" fullWidth={true} />
              <TextField value={value} onChange={this.handleChange} floatingLabelText="Password" type="password" fullWidth={true} />
            </CardText>
            <CardActions>
              <RaisedButton label="Login" secondary={true} />
            </CardActions>
          </Card>
        </form>
      );
    }
  }

}
