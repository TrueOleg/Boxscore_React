import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './style.css';


class ScoresTable extends Component {

  render() {
    const league = this.props.tableData;
    return (
      <Table className="table">
        <TableHead>
          <TableRow className="tableHead">
            <TableCell className="firstColumn"></TableCell>
            {league.away_period_scores.map((cel, index) => {
              return <TableCell className="period cell" key={index}>{index + 1}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className="teamScore">
            <TableCell className="firstColumn">{league.home_team.abbreviation}</TableCell>
            {league.away_period_scores.map((cel, index) => {
              return <TableCell className="score cell" key={index}>{cel}</TableCell>
            })}
          </TableRow>
          <TableRow className="teamScore">
            <TableCell className="firstColumn">{league.away_team.abbreviation}</TableCell>
            {league.home_period_scores.map((cel, index) => {
              return <TableCell className="score cell" key={index}>{cel}</TableCell>
            })}
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}


export default ScoresTable;