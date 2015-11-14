import * as React from 'react';
import { Link, RouteHandler } from 'react-router';
import { RaisedButton } from 'material-ui';
import { Card, CardActions } from 'material-ui';
import { Table, TableBody, TableRow, TableHeader, TableHeaderColumn, TableRowColumn, TableFooter } from 'material-ui';
export default class UsersList extends React.Component<any, { List : Array<any> }>{
  render () {

    var state = {
  fixedHeader: true,
  fixedFooter: true,
  stripedRows: false,
  showRowHover: false,
  selectable: true,
  multiSelectable: false,
  enableSelectAll: false,
  deselectOnClickaway: true,
  height: '300px',
};

    return (
      <Card>
        <CardActions>
          <RaisedButton label="Add?" secondary={false} />
          <RaisedButton label="Edit?" secondary={true} />
          <RaisedButton label="Delete?" secondary={true} />
        </CardActions>
        <Table
          fixedHeader={state.fixedHeader}
          fixedFooter={state.fixedFooter}
          selectable={state.selectable}
          multiSelectable={state.multiSelectable}>
          <TableHeader enableSelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            deselectOnClickaway={state.deselectOnClickaway}
            showRowHover={state.showRowHover}
            stripedRows={state.stripedRows}>
            <TableRow selected={true}>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Randal White</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            <TableRow selected={true}>
              <TableRowColumn>Stephanie Sanders</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Steve Brown</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Joyce Whitten</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Samuel Roberts</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Adam Moore</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <RouteHandler/>
      </Card>
    );
  };
}
