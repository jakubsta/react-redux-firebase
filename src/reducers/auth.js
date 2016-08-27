// @flow

import { handleActions } from 'redux-actions';

import * as AuthActions from '../actions/auth';

const defaultState = Object.freeze({
  signingUp: false,
  signingUpError: null,
  signingIn: false,
  signingInError: null,
  user: null,
});

export default handleActions({
  [AuthActions.signingUpStarted]: () => ({ ...defaultState, signingUp: true }),
  [AuthActions.signingUpSuccess]: (state, { payload }) => ({ ...defaultState, user: payload }),
  [AuthActions.signingUpFailure]: (state, { payload }) => ({
    ...defaultState,
    signingUpError: payload,
  }),

  [AuthActions.signingInStarted]: () => ({ ...defaultState, signingIn: true }),
  [AuthActions.signingInSuccess]: (state, { payload }) => ({ ...defaultState, user: payload }),
  [AuthActions.signingInFailure]: (state, { payload }) => ({
    ...defaultState,
    signingInError: payload,
  }),
}, defaultState);
