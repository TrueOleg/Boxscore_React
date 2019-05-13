import React from 'react';
import { shallow } from 'enzyme';
import MlbTable from './index';

describe('', () => {
  const props = {
    data: {
      away_batter_totals: {
        runs: 1,
        hits: 4
      },
      home_batter_totals: {
        runs: 2,
        hits: 3
      },
      home_errors: 5,
      away_errors: 6
    }
  }
  it('renders without crashing', () => {
    shallow(<MlbTable {...props} />);
  });
})