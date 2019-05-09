import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



class ScoresTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const nba = this.props.tableData;
    console.log('scores', nba);
    return (
      <Paper >
        <div>{this.props.awayTeamScore}</div>
        <Table  >
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              {/* {nba.map(cel => {
                return <TableCell>{cel.index}</TableCell>
              })} */}
              {/* <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat (g)</TableCell>
              <TableCell align="right">Carbs (g)</TableCell>
              <TableCell align="right">Protein (g)</TableCell> */}
            </TableRow>
          </TableHead>
          {/* <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
        </Table>
      </Paper>
    );
  }
}

// ScoresTable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default ScoresTable;