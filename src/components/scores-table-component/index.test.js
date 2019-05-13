import React from 'react';
import { shallow } from 'enzyme';
import ScoresTable from './index';

describe('Render score table', () => {
  const props = {
    tableData: {
      away_period_scores: [0, 1, 2, 3, 4, 5, 6],
      home_period_scores: [9, 8, 7, 6, 5, 4, 3],
      home_team: {
        abbreviation: 'name1'
      },
      away_team: {
        abbreviation: 'name2'
      }
    }
  }
  it('renders without crashing', () => {
    shallow(<ScoresTable {...props} />);
  });
})

