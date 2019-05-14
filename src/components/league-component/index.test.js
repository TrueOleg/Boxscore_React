import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import League from './index';

// jest.mock('axios');

describe('', () => {

  const initialState = {
    loading: true,
    error: null,
    game: {},
  };

  const wrapper = shallow(<League />);

  it('initialize with initial state', () => {
    wrapper.setState(initialState)
    expect(wrapper.state()).toEqual(initialState)
  })

  it('renders without crashing', () => {
    shallow(<League league='nba' />);
    shallow(<League league='mlb' />);
  });

  // it('should fetch a game data', async () => {
  //   const getSpy = jest.spyOn(axios, 'get');
  //   const res = getSpy();

  //   const data = await res;
  //   console.log('data', res);
  //   wrapper.setState({ game: data })


  //   // expect(getSpy).toBeCalled()
  //   // expect(wrapper.state().game).toEqual(expect.objectContaining({
  //   //   away_period_scores: expect.any(Array),
  //   //   home_period_scores: expect.any(Array),
  //   //   away_team: expect.any(Object),
  //   //   home_team: expect.any(Object)
  //   // }));
  // });

})