// @flow

import ActionTypes from '../actions/types';

const items = (state=[], action) => {
  switch(action.type) {
    case ActionTypes.SET_ITEMS:
      return action.payload;

    default:
      return state;
  }

};


export default items;
