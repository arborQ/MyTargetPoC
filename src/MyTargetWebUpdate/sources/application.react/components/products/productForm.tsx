import * as React  from 'react';
import { TextField } from 'material-ui';
import { Tabs, Tab } from 'material-ui';


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

    const dataSource = ['S', 'M', 'L'];

    var codeValidationMessage =this.state.details.Name.length === 0 ? "Nazwa jest wymagana" : null;

    return (
      <div>
        <Tabs>
          <Tab label="Wymagane">
            <TextField key="code" floatingLabelText="Kod" fullWidth={true} value={this.state.details.Code} onChange={(event) => { this.updateState("Code", event.target["value"]) }} />
            <TextField key="name" floatingLabelText="Nazwa" errorText={codeValidationMessage} fullWidth={true} value={this.state.details.Name} onChange={(event) => { this.updateState("Name", event.target["value"]) }} />
            <TextField key="price" floatingLabelText="Cena" fullWidth={true} value={this.state.details.NetPrice.toString()} onChange={(event) => { this.updateState("NetPrice", event.target["value"]) }} />

            <TextField key="supplier" floatingLabelText="Dostawca" fullWidth={true} value={this.state.details.Supplier} onChange={(event) => { this.updateState("Supplier", event.target["value"]) }} />
            <TextField key="local" floatingLabelText="Lokalizacja" fullWidth={true} value={this.state.details.Location} onChange={(event) => { this.updateState("Location", event.target["value"]) }} />
          </Tab>
          <Tab label="Nie wymagane">
            <TextField key="name" floatingLabelText="Nazwa" errorText={codeValidationMessage} fullWidth={true} value={this.state.details.Name} onChange={(event) => { this.updateState("Name", event.target["value"]) }} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
