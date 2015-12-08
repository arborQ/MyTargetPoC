import * as React from 'react';
import ListView from './views/productListView';

export default class productList extends React.Component<any, {products : arbor.products.IProduct[]}>{

  componentWillMount(){
    this.setState({ products : [  ] })
    setTimeout(() => {
      console.log('timeout');
      var p = [ {  Code : '432', Name : '432', StoredQuantity : 10 } ]
      this.setState({ products : p })
    }, 2000);
  }
  render(){
    return ( <ListView products={this.state.products} />)
  };
}
