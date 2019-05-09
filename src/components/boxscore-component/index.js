import React, { Component, Fragment } from 'react';
import axios from 'axios';
import League from '../league-component';

class Boxscore extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      dataMlb: {},
      dataNba: {}
    };
  }

  componentDidMount() {
    const game1 = axios.get(`http://localhost:3600/api/games`, { params: { league: 'nba' } });
    const game2 = axios.get(`http://localhost:3600/api/games`, { params: { league: 'mlb' } });

    Promise.all([game1, game2])
      .then(([res1, res2]) => {
        this.setState({
          loading: false,
          dataMlb: res1.data,
          dataNba: res2.data
        })
      })
      .catch(err => {
        this.setState({
          error: err,
          loading: false
        })
      })

  }

  render() {

    return (
      <div>
        {!this.state.loading ?
          <Fragment>
            <League gameData={this.state.dataMlb}></League>
          </ Fragment> : null
        }
      </div>
    );
  };
}

export default Boxscore;