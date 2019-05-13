import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './style.css';


class ScoresTable extends Component {

  render() {
    return (
      <Table className="table">
        <TableHead>
          <TableRow className="tableHead">
            <TableCell className="firstColumn"></TableCell>
            {this.props.tableData.away_period_scores.map((cel, index) => {
              return <TableCell className="period cell" key={index}>{index + 1}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className="teamScore">
            <TableCell className="firstColumn">{this.props.tableData.home_team.abbreviation}</TableCell>
            {this.props.tableData.away_period_scores.map((cel, index) => {
              return <TableCell className="score cell" key={index}>{cel}</TableCell>
            })}
          </TableRow>
          <TableRow className="teamScore">
            <TableCell className="firstColumn">{this.props.tableData.away_team.abbreviation}</TableCell>
            {this.props.tableData.home_period_scores.map((cel, index) => {
              return <TableCell className="score cell" key={index}>{cel}</TableCell>
            })}
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

ScoresTable.propTypes = {
  tableData: PropTypes.shape({
    home_team: PropTypes.shape({
      abbreviation: PropTypes.string
    }),
    away_team: PropTypes.shape({
      abbreviation: PropTypes.string
    }),
    home_period_scores: PropTypes.arrayOf(PropTypes.number),
    away_period_scores: PropTypes.arrayOf(PropTypes.number),
  })
};

export default ScoresTable;