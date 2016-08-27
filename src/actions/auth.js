// @flow

import { createAction } from 'redux-actions';

export const signUp = createAction('SIGN_UP', (email, password) => ({ email, password }));
export const signingUpStarted = createAction('SIGNING_UP_STARTED');
export const signingUpFailure = createAction('SIGNING_UP_FAILURE');
export const signingUpSuccess = createAction('SIGNING_UP_SUCCESS');

export const signIn = createAction('SIGN_IN', (email, password) => ({ email, password }));
export const signingInStarted = createAction('SIGNING_IN_STARTED');
export const signingInFailure = createAction('SIGNING_IN_FAILURE');
export const signingInSuccess = createAction('SIGNING_IN_SUCCESS');

export const logout = createAction('LOGOUT');
