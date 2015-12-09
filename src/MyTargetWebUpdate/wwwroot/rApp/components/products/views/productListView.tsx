import * as React from 'react';

import {Table,
 TableBody ,
 TableFooter ,
 TableHeader ,
 TableHeaderColumn ,
 TableRow ,
 TableRowColumn,
 Card,
 FloatingActionButton,
 Avatar } from 'material-ui';
import { Link } from 'react-router';

export default class productListView extends React.Component<{ products : arbor.products.IProduct[] }, { products : arbor.products.IProduct[] }>{
  render(){
    if(!this.props || !this.props.products){
      return (<div>nope</div>);
    }
    var productList = this.props.products.map((p) => {
      return (
        <TableRow key={p.Id}>
          <TableRowColumn>{p.Name}</TableRowColumn>
          <TableRowColumn>{p.StoredQuantity}sz</TableRowColumn>
        </TableRow>
      );
    });

    return (
      <div>
        <Link to="/products/details" style={{ position : 'fixed', bottom : "10px", right: "10px"}} >
          <FloatingActionButton secondary={false}>
            +
          </FloatingActionButton>
        </Link>
        <Card style={{ maxWidth : '800px', margin : '0 auto', marginTop: '20px'}}>
          <Table>
            <TableHeader displaySelectAll={false}>>
              <TableRow>
                <TableHeaderColumn tooltip='Nazwa produktu'>
                  Nazwa
                </TableHeaderColumn>
                <TableHeaderColumn tooltip='Dostępne?'>
                  Ile?
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {productList}
            </TableBody>
          </Table>
        </Card>
      </div>);
  }
}
