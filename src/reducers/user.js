// @flow

import { ActionTypes } from '../actions/user';

const defaultState = Object.freeze({
  signingUp: false,
  signingIn: false,
  user: null,
  error: null,
});

const user = (state=defaultState, action) => {
  switch(action.type) {
    case ActionTypes.SIGNING_UP_STARTED:
      return Object.assign({}, defaultState, { signingUp: true });

    case ActionTypes.SIGNING_UP_SUCCESS:
      return Object.assign({}, defaultState, { user: action.payload });

    case ActionTypes.SIGNING_UP_FAILURE:
      return Object.assign({}, defaultState, { error: action.payload });

    case ActionTypes.SIGNING_IN_STARTED:
      return Object.assign({}, defaultState, { signingIn: true });

    case ActionTypes.SIGNING_IN_SUCCESS:
      return Object.assign({}, defaultState, { user: action.payload });

    case ActionTypes.SIGNING_IN_FAILURE:
      return Object.assign({}, defaultState, { error: action.payload });

    default:
      return state;
  }
};

export default user;
