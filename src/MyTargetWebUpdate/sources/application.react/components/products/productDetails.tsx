import * as React from 'react';
import { Dialog, Card, CardText, CardActions, RaisedButton, TextField, SelectField } from 'material-ui';
import { Link } from 'react-router';
import { post } from 'jquery';
export default class productDetails extends React.Component<any, { product? : arbor.products.IProduct }>{

  save(){
    post('/api/products', this.state)
    .then(() => {})
    .fail(() => alert('fail'));
  }
  render() {
    var size = 3;
    return (
      <Dialog open={true}
        title="Dodaj nowy produkt">
        <Card>
          <CardText>
            <TextField hintText="Kod produktu" fullWidth={true} />
            <TextField hintText="Nazwa produktu" fullWidth={true} />
            <SelectField menuItems={[ {id : 1, name : 'S'},{id : 2, name : 'M'},{id : 3, name : 'L'} ]} value={size} valueMember="id" displayMember="name" fullWidth={true} />
            <TextField hintText="Cena" fullWidth={true} type="number" />
          </CardText>
          <CardActions>
            <RaisedButton label="Zapisz" secondary={true} onClick={this.save.bind(this)} />
            <Link to="/products" ><RaisedButton label="Anuluj" /></Link>
          </CardActions>
        </Card>
      </Dialog>
    );
  }
}
