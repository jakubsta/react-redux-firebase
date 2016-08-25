// @flow

export const ActionTypes = [
  'SIGN_UP', 
  'SIGNING_UP_STARTED',
  'SIGNING_UP_FAILURE',
  'SIGNING_UP_SUCCESS',
  'SIGN_IN',
  'SIGNING_IN_STARTED',
  'SIGNING_IN_FAILURE',
  'SIGNING_IN_SUCCESS',
  'LOGOUT',
].reduce((acc, action) => {
  acc[action] = action; 
  return acc;
}, {});

export function signUp (email, password) {
  return { type: ActionTypes.SIGN_UP, payload: { email, password }};
}

export function signingUpStarted () {
  return { type: ActionTypes.SIGNING_UP_STARTED };
}

export function signingUpFailure (reason) {
  return { type: ActionTypes.SIGNING_UP_FAILURE, payload: reason };
}

export function signingUpSuccess (user) {
  return { type: ActionTypes.SIGNING_UP_SUCCESS, payload: user };
}

export function signIn (email, password) { 
  return { type: ActionTypes.SIGN_IN, payload: { email, password }};
}

export function signingInStarted () {
  return { type: ActionTypes.SIGNING_IN_STARTED };
}

export function signingInFailure (reason) {
  return { type: ActionTypes.SIGNING_IN_FAILURE, payload: reason };
}

export function signingInSuccess (user) {
  return { type: ActionTypes.SIGNING_IN_SUCCESS, payload: user };
}

export function logout (items) {
  return { type: ActionTypes.LOGOUT };
};

