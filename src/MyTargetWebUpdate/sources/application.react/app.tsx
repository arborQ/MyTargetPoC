import * as React  from 'react';
import * as ReactDOM from 'react-dom';

import NavigationMenu from './components/master/navigation'
import RouterMap from './components/master/routing';
ReactDOM.render(
  (
    <div>
      <NavigationMenu />
      <div style={{maxWidth : '800px', margin : '10px auto 0'}}>
        <RouterMap />
      </div>
    </div>
    )
,
  document.getElementById('react-app')
);
