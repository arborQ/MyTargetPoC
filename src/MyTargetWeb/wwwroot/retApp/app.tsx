import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as Router from 'react-router';

import routeList from './app.routes';

Router.run(routeList, function (Handler) {
  ReactDom.render(<Handler/>, document.getElementById('arbor-app'));
});
