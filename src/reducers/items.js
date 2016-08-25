// @flow

import { ActionTypes } from '../actions/items';

const items = (state=[], action) => {
  switch(action.type) {
    case ActionTypes.SET_ITEMS:
      return action.payload;

    default:
      return state;
  }

};


export default items;
