import * as React  from 'react';
import { get } from 'jquery';

import { Dialog, RaisedButton  } from 'material-ui';
import ProductForm from './productForm';

export default class productDetails extends React.Component<any, { details : arbor.products.IProduct }>{
  constructor(){
    super();
    this.state = { details : null };
  }
  componentDidMount(){
    get(`/api/products`, { id : this.props.params.id }, (data : arbor.products.IProduct) => {
      this.setState({ details : data });
    });
  }


  render(){

      var buttons = [
        <RaisedButton label="Zapisz" key="save"
        secondary={false} />,
        <RaisedButton label="Anuluj" key="cancel"
        secondary={true} />
      ];
      return (
        <Dialog contentStyle={ { maxWidth: '400px' } }
          title={`Edytuj produkt`} autoScrollBodyContent={true}
          modal={true}
          open={true}
          actions={buttons}>
          <ProductForm details={this.state.details} />
        </Dialog>
      );

  }
}
