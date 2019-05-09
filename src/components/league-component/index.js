import React, { Component, Fragment } from 'react';
import ScoresTable from '../scores-table-component';

class League extends Component {


  render() {
    console.log('props', this.props.gameData);

    const scoresTableData = {
      away_period_scores: this.props.gameData.away_period_scores,
      home_period_scores: this.props.gameData.home_period_scores
    }
    console.log('sdfsdf');
    return (
      <Fragment>
        {scoresTableData
          ? <ScoresTable tableData={this.props.gameData.away_period_scores}></ScoresTable>
          : null
        }
      </Fragment>
    );

  };
}

export default League;