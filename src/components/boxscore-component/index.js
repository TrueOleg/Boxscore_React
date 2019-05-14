import React, { Component, Fragment } from 'react';
import League from '../league-component';


class Boxscore extends Component {

  render() {
    return (
      <div>
        <Fragment>
          <League league="nba"></League>
          <League league="mlb"></League>
        </ Fragment>
      </div>
    );
  };
}

export default Boxscore;