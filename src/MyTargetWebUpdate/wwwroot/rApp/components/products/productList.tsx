import * as React from 'react';
import ListView from './views/productListView';

export default class productList extends React.Component<any, {products : arbor.products.IProduct[]}>{

  componentWillMount(){
    this.setState({ products : [  ] })
    setTimeout(() => {
      var p = [ { Id : 1,  Code : '432', Name : '432', StoredQuantity : 10 },{ Id : 2,  Code : 'test_C', Name : 'test', StoredQuantity : 110 } ]
      this.setState({ products : p })
    }, 2000);
  }
  render(){
    return ( <ListView products={this.state.products} />)
  };
}
