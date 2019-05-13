import React from 'react';
import { shallow } from 'enzyme';
import NbaTable from './index';

describe('', () => {
  const props = {
    data: {
      away_totals: {
        points: 3
      },
      home_totals: {
        points: 4
      }
    }
  }
  it('renders without crashing', () => {
    shallow(<NbaTable {...props} />);
  });
})