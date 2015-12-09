import * as React from 'react';
import ListView from './views/productListView';
import SearchForm  from './views/productSearchView';
import { get } from 'jquery';

export default class productList extends React.Component<any, {products? : arbor.products.IProduct[], search? : string}>{

  componentWillMount(){
    this.setState({ search : "" })
    get("/api/products").then((products : arbor.products.IProduct[]) => {
      this.setState({ products });
    })
  }
  onSearchChange(search : string){
      this.setState({ search : search })
  }
  render(){
    var products = (this.state.products || []).filter((p : arbor.products.IProduct) => p.Name.indexOf(this.state.search) !== -1);
    return (
      <div>
      <div>{this.props.children}</div>
      <SearchForm onChange={this.onSearchChange.bind(this)} search={this.state.search} />
      <ListView products={products} />
      </div>
      )
  };
}
