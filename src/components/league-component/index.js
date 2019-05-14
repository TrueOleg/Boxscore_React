import React, { Component, Fragment } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ScoresTable from '../scores-table-component';
import MlbTable from '../mlb-table-component';
import NbaTable from '../nba-table-component';
import MlbDetails from '../mlb-details-component';
import NbaDetails from '../nba-details-component';
import Grid from '@material-ui/core/Grid';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient(`http://localhost:3600`);

class League extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      game: {},
    };

  }

  componentDidMount() {
    axios.get(`http://localhost:3600/api/games`, { params: { league: this.props.league } }).then((res) => {
      this.setState({
        loading: false,
        game: res.data,
      })
    })
      .catch(err => {
        this.setState({
          error: err,
          loading: false
        })
      })

    socket.on(`${this.props.league}`, (res) => {
      this.setState({
        game: res.data,
      })
    })
  }

  getLeagueTable = (league) => {
    const LEAGUE = {
      MLB: <MlbTable data={this.state.game} />,
      NBA: <NbaTable data={this.state.game} />
    }
    return LEAGUE[league]
  }

  getGameDetails = (league) => {
    const LEAGUE = {
      MLB: <MlbDetails data={this.state.game} />,
      NBA: <NbaDetails data={this.state.game} />
    }
    return LEAGUE[league]
  }

  render() {

    const leagueTable = this.getLeagueTable(this.state.game.league);
    const gameDetails = this.getGameDetails(this.state.game.league);

    const scoresTableData = {
      away_team: this.state.game.away_team,
      home_team: this.state.game.home_team,
      away_period_scores: this.state.game.away_period_scores,
      home_period_scores: this.state.game.home_period_scores
    }

    return (
      <div>
        {!this.state.loading ?
          <Fragment>
            <h1>{this.state.game.league}</h1>
            <Grid container wrap="nowrap">
              <Grid item xs={9}>
                <ScoresTable tableData={scoresTableData}></ScoresTable>
              </Grid>
              <Grid item xs={3}>
                {leagueTable}
              </Grid>
            </Grid>
            {gameDetails}
          </Fragment> : null}
      </div>
    );

  };
}

League.propTypes = {
  data: PropTypes.string
};

export default League;