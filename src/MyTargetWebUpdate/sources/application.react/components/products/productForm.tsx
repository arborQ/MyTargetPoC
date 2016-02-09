import * as React  from 'react';
import { TextField } from 'material-ui';


export default class productForm extends React.Component<{ details : arbor.products.IProduct }, { details : arbor.products.IProduct }>{
  updateState(name : string, value : any){
    var oldState = this.state.details;
    oldState[name] = value;
    this.setState({ details : oldState });
  }

  componentWillReceiveProps(nextProps : { details : arbor.products.IProduct }, nextContext : any){
    this.setState({ details : nextProps.details })
  }
  render(){
    if(!this.props.details){
      return null;
    }
    return (
      <div>
        <TextField floatingLabelText="Kod" fullWidth={true} value={this.state.details.Code} onChange={(event) => { this.updateState("Code", event.target["value"]) }} />
        <TextField floatingLabelText="Nazwa" fullWidth={true} value={this.state.details.Name} onChange={(event) => { this.updateState("Name", event.target["value"]) }} />
      </div>
    );
  }
}
