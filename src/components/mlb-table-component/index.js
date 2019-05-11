import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './style.css'

class MlbTable extends Component {

  render() {
    const mlb = this.props;
    console.log('mlb', mlb);
    return (
      <Table className="mlbTable">
        <TableHead>
          <TableRow className="tableHead">
            <TableCell className="cell">R</TableCell>
            <TableCell className="cell">H</TableCell>
            <TableCell className="cell">E</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className="teamScore">
            <TableCell className="cell">{this.props.data.away_batter_totals.runs}</TableCell>
            <TableCell className="cell">{this.props.data.away_batter_totals.hits}</TableCell>
            <TableCell className="cell">{this.props.data.away_errors}</TableCell>
          </TableRow>
          <TableRow className="teamScore">
            <TableCell className="cell">{this.props.data.home_batter_totals.runs}</TableCell>
            <TableCell className="cell">{this.props.data.home_batter_totals.hits}</TableCell>
            <TableCell className="cell">{this.props.data.home_errors}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}


export default MlbTable;