import React from 'react';
import { shallow } from 'enzyme';
import League from './index';

describe('', () => {
  const props1 = {
    gameData: {
      league: 'NBA',
      away_team: {},
      home_team: {},
      away_period_scores: [1, 2, 3],
      home_period_scores: [1, 2, 3]
    }
  }

  const props2 = {
    gameData: {
      league: 'MLB',
      away_team: {},
      home_team: {},
      away_period_scores: [1, 2, 3],
      home_period_scores: [1, 2, 3]
    }
  }
  it('renders without crashing', () => {
    shallow(<League {...props1} />);
    shallow(<League {...props2} />);
  });
})