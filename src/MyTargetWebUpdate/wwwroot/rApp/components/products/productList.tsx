import * as React from 'react';
import ListView from './views/productListView';
import SearchForm  from './views/productSearchView';
import Crud from '../crud/query';
import { Redirect } from 'react-router';

export default class productList extends React.Component<any, {products? : arbor.products.IProduct[], search? : string}>{

  componentWillMount(){
    this.setState({ search : "" })
  }
  onSearchChange(search : string){
      this.setState({ search : search })
  }
  dataLoaded(products : arbor.products.IProduct[]){
    this.setState({ products });
  }
  rowSelected([data]){
    <Redirect to="/products/details" />
  }
  render(){
    var products = (this.state.products || []).filter((p : arbor.products.IProduct) => `${p.Name} ${p.Code}`.indexOf(this.state.search) !== -1);
    return (
      <div>
      <div>{this.props.children}</div>
      <SearchForm onChange={this.onSearchChange.bind(this)} search={this.state.search} />
      <Crud apiUrl="/api/products" onDataLoaded={this.dataLoaded.bind(this)} >
        <ListView products={products} onRowClick={this.rowSelected.bind(this)} />
      </Crud>
      </div>
      )
  };
}
