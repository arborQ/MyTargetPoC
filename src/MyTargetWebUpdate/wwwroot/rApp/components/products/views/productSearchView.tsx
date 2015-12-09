import * as React from 'react';
import { Card, CardText, CardActions, RaisedButton, TextField } from 'material-ui';
import { Link } from 'react-router';
export default class productSearchView extends React.Component<{ onChange : (search : string) => void, search: string }, { }>{
  onSearchChange(event : any){
    this.props.onChange(event.target.value);
  }
  render(){
      return (
        <Card style={{ maxWidth : '800px', margin : '0 auto', marginTop: '20px'}}>
          <CardText>
            <TextField hintText="Szukaj..." fullWidth={true} value={this.props.search} onChange={this.onSearchChange.bind(this)} />
          </CardText>
          <CardActions>
            <RaisedButton disabled={true} label="Zaawansowany filtr" />
            <Link to="/products/details" ><RaisedButton label="Dodaj nowy produkt" /></Link>
          </CardActions>
        </Card>
      );
  }
}
