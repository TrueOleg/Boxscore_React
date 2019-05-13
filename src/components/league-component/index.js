import React, { Component, Fragment } from 'react';
import ScoresTable from '../scores-table-component';
import MlbTable from '../mlb-table-component';
import NbaTable from '../nba-table-component';
import MlbDetails from '../mlb-details-component';
import NbaDetails from '../nba-details-component';
import Grid from '@material-ui/core/Grid';

class League extends Component {

  getLeagueTable = (league) => {
    const LEAGUE = {
      MLB: <MlbTable data={this.props.gameData} />,
      NBA: <NbaTable data={this.props.gameData} />
    }
    return LEAGUE[league]
  }

  getGameDetails = (league) => {
    const LEAGUE = {
      MLB: <MlbDetails data={this.props.gameData} />,
      NBA: <NbaDetails data={this.props.gameData} />
    }
    return LEAGUE[league]
  }

  render() {
    const leagueTable = this.getLeagueTable(this.props.gameData.league);
    const gameDetails = this.getGameDetails(this.props.gameData.league);

    const scoresTableData = {
      away_team: this.props.gameData.away_team,
      home_team: this.props.gameData.home_team,
      away_period_scores: this.props.gameData.away_period_scores,
      home_period_scores: this.props.gameData.home_period_scores
    }

    return (
      <Fragment>
        <h1>{this.props.gameData.league}</h1>
        <Grid container wrap="nowrap">
          <Grid item xs={9}>
            <ScoresTable tableData={scoresTableData}></ScoresTable>
          </Grid>
          <Grid item xs={3}>
            {leagueTable}
          </Grid>
        </Grid>
        {gameDetails}
      </Fragment>
    );

  };
}

export default League;