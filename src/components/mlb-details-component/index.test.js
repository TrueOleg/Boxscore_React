import React from 'react';
import { shallow } from 'enzyme';
import MlbDetails from './index';

describe('', () => {
  const props1 = {
    data: {
      away_team: {
        last_name: 'name1'
      },
      home_team: {
        last_name: 'name2'
      },
      event_information: {
        status: 'completed'
      },
      home_batter_totals: {
        hits: 15,
        at_bats: 17
      },
      away_batter_totals: {
        hits: 12,
        at_bats: 11
      }
    }
  }

  const props2 = {
    data: {
      away_team: {
        last_name: 'name1'
      },
      home_team: {
        last_name: 'name2'
      },
      event_information: {
        status: 'inprocess'
      },
      home_batter_totals: {
        hits: 15,
        at_bats: 17
      },
      away_batter_totals: {
        hits: 12,
        at_bats: 11
      }
    }
  }
  it('renders without crashing', () => {
    shallow(<MlbDetails {...props1} />);
    shallow(<MlbDetails {...props2} />);
  });
})