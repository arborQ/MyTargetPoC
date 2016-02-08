import * as React  from 'react';
import { Router, Route, browserHistory } from 'react-router';

import ProductsList from '../products/productsList';
import ProductsDetails from '../products/productDetails';
class cc extends React.Component<any, any>{
  render(){
    return <div>{this.props.children}</div>;
  }
}
export default class routingMap extends React.Component<any, any>{
  render(){
    return (
      <Router history={browserHistory}>
        <Route path="/" component={cc}>
          <Route path="products" component={ProductsList} >
            <Route path="details/:id" component={ProductsDetails}> </Route>
          </Route>
        </Route>
      </Router>
    );
  }
};
