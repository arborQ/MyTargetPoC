import * as React from 'react';
import { Link, RouteHandler } from 'react-router';
import { AppBar, Menu, MenuItem, LeftNav, FlatButton } from 'material-ui';

export default class AppClass extends React.Component<any, any>{
  render () {
    var menuItems = [
      { route: 'login', text: 'Login' },
      { route: 'users', text: 'Users' },
    ];
    var leftToggle = () => {
      alert('x');
    };
    return (
      <div>
        <AppBar title="MyTarget" onRightIconButtonTouchTap={leftToggle} iconElementRight={<FlatButton label="Save" />} />
        <LeftNav ref="leftNav" menuItems={menuItems} docked={false}>
        </LeftNav>
        <div style={{maxWidth : '800px', margin : '0 auto', paddingTop : '10px'}}>
          <RouteHandler/>
        </div>
      </div>
    );
  };
}
