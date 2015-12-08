import * as React from 'react';

import {Table,
 TableBody ,
 TableFooter ,
 TableHeader ,
 TableHeaderColumn ,
 TableRow ,
 TableRowColumn, Card } from 'material-ui';

export default class productListView extends React.Component<{ products : arbor.products.IProduct[] }, { products : arbor.products.IProduct[] }>{
  componentWillMount(){
    this.setState({ products : this.props.products })
  }
  render(){
    if(!this.state || !this.state.products){
      return (<div>nope</div>);
    }
    var productList = this.state.products.map((p) => {
      return (
        <TableRow>
          <TableRowColumn>{p.Name}</TableRowColumn>
          <TableRowColumn>{p.StoredQuantity}sz</TableRowColumn>
        </TableRow>
      );
    });

    return (
      <Card style={{width : '800px', margin : '0 auto', marginTop: '20px'}}>
        <Table>
          <TableHeader>
          <TableRow>
            <TableHeaderColumn tooltip='Nazwa produktu'>
              Nazwa
            </TableHeaderColumn>
            <TableHeaderColumn tooltip='Dostępne?'>
              Ile?
            </TableHeaderColumn>
          </TableRow>
          </TableHeader>
          <TableBody>
            {productList}
          </TableBody>
        </Table>
      </Card>);
  }
}
