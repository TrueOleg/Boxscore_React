import React from 'react';
import { shallow } from 'enzyme';
import Boxscore from './index';

it('renders without crashing', () => {
  shallow(<Boxscore />);
});