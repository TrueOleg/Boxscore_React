import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './style.css'

class MlbTable extends Component {

  render() {
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

MlbTable.propTypes = {
  data: PropTypes.shape({
    home_batter_totals: PropTypes.shape({
      hits: PropTypes.number,
      runs: PropTypes.number
    }),
    home_errors: PropTypes.number,
    away_batter_totals: PropTypes.shape({
      hits: PropTypes.number,
      runs: PropTypes.number
    }),
    away_errors: PropTypes.number,
  })
};

export default MlbTable;