// @flow

import { handleActions } from 'redux-actions';

import * as UserActions from '../actions/user';

const defaultState = Object.freeze({
  signingUp: false,
  signingUpError: null,
  signingIn: false,
  signingInError: null,
  user: null,
});

export default handleActions({
  [UserActions.signingUpStarted]: () => ({ ...defaultState, signingUp: true }),
  [UserActions.signingUpSuccess]: (state, { payload }) => ({ ...defaultState, user: payload }),
  [UserActions.signingUpFailure]: (state, { payload }) => ({
    ...defaultState,
    signingUpError: payload,
  }),

  [UserActions.signingInStarted]: () => ({ ...defaultState, signingIn: true }),
  [UserActions.signingInSuccess]: (state, { payload }) => ({ ...defaultState, user: payload }),
  [UserActions.signingInFailure]: (state, { payload }) => ({
    ...defaultState,
    signingInError: payload,
  }),
}, defaultState);
