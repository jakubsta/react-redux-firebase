// @flow

import { handleActions } from 'redux-actions';

import * as UserActions from '../actions/user';

const defaultState = Object.freeze({
  signingUp: false,
  signingIn: false,
  user: null,
  error: null,
});

export default handleActions({
  [UserActions.signingUpStarted]: () => ({ ...defaultState, signingUp: true }),
  [UserActions.signingUpFailure]: (state, { payload }) => ({ ...defaultState, error: payload }),
  [UserActions.signingUpSuccess]: (state, { payload }) => ({ ...defaultState, user: payload }),

  [UserActions.signingInStarted]: () => ({ ...defaultState, signingIn: true }),
  [UserActions.signingInFailure]: (state, { payload }) => ({ ...defaultState, error: payload }),
  [UserActions.signingInSuccess]: (state, { payload }) => ({ ...defaultState, user: payload }),
}, defaultState);
