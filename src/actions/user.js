// @flow

export const ActionTypes = [
  'SIGN_UP', 
  'SIGN_IN',
  'LOGOUT'
].reduce((acc, action) => {
  acc[action] = action; 
  return acc;
}, {});

export function signUp (email, password) {
  return { type: ActionTypes.SIGN_UP, payload: { email, password }};
}

export function signIn (email, password) { 
  return { type: ActionTypes.SIGN_IN, payload: { email, password }};
};

export function logout (items) {
  return { type: ActionTypes.LOGOUT };
};

