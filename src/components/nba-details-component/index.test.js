import React from 'react';
import { shallow } from 'enzyme';
import NbaDetails from './index';

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
      }
    }
  }
  it('renders without crashing', () => {
    shallow(<NbaDetails {...props1} />);
    shallow(<NbaDetails {...props2} />);
  });
})