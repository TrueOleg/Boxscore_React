import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './style.css'

class NbaTable extends Component {

  render() {
    const mlb = this.props;
    console.log('mlb', mlb);
    return (
      <Table className="mlbTable">
        <TableHead>
          <TableRow className="tableHead">
            <TableCell className="cell">P</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className="teamScore">
            <TableCell className="cell">{this.props.data.away_totals.points}</TableCell>
          </TableRow>
          <TableRow className="teamScore">
            <TableCell className="cell">{this.props.data.home_totals.points}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}


export default NbaTable;