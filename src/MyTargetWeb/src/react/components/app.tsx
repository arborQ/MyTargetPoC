import * as React from 'react';
import { Link, RouteHandler } from 'react-router';
import { Avatar, Menu, MenuItem, LeftNav, Paper, Tabs, Tab } from 'material-ui';
import { Colors } from 'material-ui/lib/styles/';
import arborTheme from './arborTheme';

import { ThemeManager, ThemeDecorator } from 'material-ui/lib/styles/';

@ThemeDecorator(ThemeManager.getMuiTheme(arborTheme))
class AppClass extends React.Component<any, any>{

  render () {
    var menuItems = [
      { route: 'login', text: 'Login' },
      { route: 'users', text: 'Users' },
    ];
    return (
      <div>
        <Paper zDepth={0} style={{ "padding" : '5px', "backgroundColor" : arborTheme.palette.primary1Color, "height" : 64 }}>
          <Link to="app">
            <Avatar src="images/logo.png" size={64-10} />
          </Link>
          <Tabs style={{"width" : "400px", "float" : "right" }}>
            <Tab label="Login" route="login"></Tab>
            <Tab label="Users" route="users" />
          </Tabs>
        </Paper>
        <LeftNav ref="leftNav" menuItems={menuItems} docked={false}>
        </LeftNav>
        <div style={{maxWidth : '800px', margin : '0 auto', paddingTop : '10px'}}>
          <RouteHandler/>
        </div>
      </div>
    );
  };
}

export default AppClass;
