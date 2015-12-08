import * as React from 'react';
import { render } from 'react-dom';
import { Route, Router } from 'react-router';

import App from './components/shared/_master';
import Products from './components/products/productList'
render((
  <Router>
    <Route path="/" component={App} >
      <Route path="products" component={Products} />
    </Route>
  </Router>
), document.getElementById('app'));
