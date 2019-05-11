import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import './style.css'

class NbaDetails extends Component {

  render() {
    const statusGeneral = this.props.data.event_information.status === 'completed' ? 'End' : 'In process'
    const statusPeriod = this.props.data.event_information.status === 'completed' ? '4TH' : 'another'
    return (
      <Fragment>
        <Grid container wrap="nowrap">
          <Grid className="homeTeamDetails" direction-xs-column="true" justify-xs-center="true" item xs={5}>
            <div className="teamName">
              {this.props.data.home_team.last_name}
            </div>
          </Grid>
          <Grid className="gameDetails" item xs={2}>
            <div>{statusGeneral}</div>
            <div>{statusPeriod}</div>
          </Grid>
          <Grid className="awayTeamDetails" align-items-xs-center="true" item xs={5}>
            <div className="teamName">
              {this.props.data.away_team.last_name}
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}


export default NbaDetails;