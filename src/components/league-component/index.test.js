import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import socketIOClient from 'socket.io-client';
import mockio, { serverSocket, cleanUp } from 'socket.io-client';
import League from './index';

jest.mock('axios');

describe('', () => {

  const initialState = {
    loading: true,
    error: null,
    game: { a: 1 },
  };


  it('initialize with initial state', () => {
    const wrapper = shallow(<League league='nba' />);
    wrapper.setState(initialState)
    expect(wrapper.state()).toEqual(initialState)
  })

  it('should fetch a game data', async () => {
    const wrapper = shallow(<League league='nba' />);
    const getSpy = jest.spyOn(axios, 'get');
    const data = getSpy();
    let game = await data;
    wrapper.setState({ game })

    expect(getSpy).toBeCalled()

    expect(wrapper.state().game).toEqual(expect.objectContaining({
      data: expect.objectContaining({
        away_period_scores: expect.any(Array),
        home_period_scores: expect.any(Array),
        away_team: expect.any(Object),
        home_team: expect.any(Object)
      })
    }));
  });



})